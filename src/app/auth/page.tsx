"use client";
import { Suspense, useEffect } from "react";
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

function AuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleAuthResponse = async () => {
      try {
        const data = searchParams.get("data");
        if (data) {
          const authData: AuthResponse = JSON.parse(decodeURIComponent(data));
          localStorage.setItem("token", authData.token);
          localStorage.setItem("user", JSON.stringify(authData.user));
          localStorage.setItem("role", authData.user.role);

          if (authData.newUser) {
            router.push("/complete-profile");
            return;
          }

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
    <div className="text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Completing your sign in...</h2>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
    </div>
  );
}

export default function AuthHandler() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black">
      <Suspense
        fallback={
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Loading...</h2>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          </div>
        }
      >
        <AuthContent />
      </Suspense>
    </div>
  );
}
