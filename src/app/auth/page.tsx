"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface AuthUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  googleId: string;
  pictureUrl: string;
  authorities: Array<{ authority: string }>;
  isNewUser: boolean;
}

interface AuthResponse {
  token: string;
  message: string;
  user: AuthUser;
  isNewUser: boolean;
}

function AuthContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthResponse = async () => {
      try {
        const data = searchParams.get("data");
        if (!data) {
          toast({
            variant: "destructive",
            title: "Authentication Error",
            description:
              "No authentication data received. Please try signing in again.",
          });
          router.push("/login?error=no_data");
          return;
        }

        const authData: AuthResponse = JSON.parse(decodeURIComponent(data));

        if (authData.user.isNewUser) {
          toast({
            title: "Complete Your Profile",
            description: "Please select your role to continue.",
          });
          localStorage.setItem("registrationEmail", authData.user.email);
          router.push("/complete-profile");
          return;
        }

        // Only save data if role is valid
        localStorage.setItem("token", authData.token);
        localStorage.setItem("user", JSON.stringify(authData.user));
        localStorage.setItem("role", authData.user.role);

        // Handle new user case
        if (authData.isNewUser) {
          toast({
            title: "Welcome!",
            description: "Please complete your profile to get started.",
          });
          router.push("/complete-profile");
          return;
        }

        // Show success toast
        toast({
          title: "Sign in successful",
          description: `Welcome back, ${authData.user.firstName}!`,
        });

        // Route based on role
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
      } catch (error) {
        console.error("Error processing auth response:", error);
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description:
            "Failed to process authentication response. Please try again.",
        });
        router.push("/login?error=invalid_response");
      }
    };

    handleAuthResponse();
  }, [router, searchParams, toast]);

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
