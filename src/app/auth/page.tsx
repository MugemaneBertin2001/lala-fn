"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface AuthUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  googleId: string;
  pictureUrl: string;
  authorities: Array<{ authority: string }>;
}

interface AuthResponse {
  token: string;
  message: string;
  user: AuthUser;
  newUser: boolean;
}

export default function AuthHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuthResponse = async () => {
      try {
        // Get response data from URL params
        const data = searchParams.get('data');
        if (data) {
          const authData: AuthResponse = JSON.parse(decodeURIComponent(data));
          
          // Store auth data in localStorage
          localStorage.setItem("token", authData.token);
          localStorage.setItem("user", JSON.stringify(authData.user));
          
          // Optionally store additional data
          localStorage.setItem("role", authData.user.role);
          
          // If it's a new user, might want to redirect to a profile completion page
          if (authData.newUser) {
            router.push("/complete-profile");
            return;
          }
          
          // Otherwise redirect based on user role
          switch (authData.user.role) {
            case "RENTER":
              router.push("/renter/dashboard");
              break;
            case "HOST":
              router.push("/host/dashboard");
              break;
            default:
              router.push("/dashboard");
          }
        } else {
          console.error("No auth data received");
          router.push("/login?error=no_data");
        }
      } catch (error) {
        console.error("Error processing auth response:", error);
        router.push("/login?error=invalid_response");
      }
    };

    handleAuthResponse();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Completing your sign in...</h2>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
}