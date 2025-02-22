"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CompletePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"RENTER" | "HOST" | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRoleSelect = (role: "RENTER" | "HOST") => {
    if (isLoading) return;
    if (selectedRole === role) {
      setSelectedRole(null);
      return;
    }
    setSelectedRole(role);
    setError(null);
  };

  const handleContinue = async () => {
    if (!selectedRole || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);

      // Get email from session storage
      const email = localStorage.getItem("registrationEmail");
      if (!email) {
        setError("Session expired. Please login again.");
        setIsLoading(false);

        router.push("/login");
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/complete-registration`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            role: selectedRole,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to complete registration");
      }

      const data = await response.json();

      // Clear the email from session storage
      localStorage.removeItem("registrationEmail");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("role", data.user.role);

      // Redirect based on role
      switch (selectedRole) {
        case "RENTER":
          router.push("/renter/dashboard");
          break;
        case "HOST":
          router.push("/host/dashboard");
          break;
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Failed to complete registration. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Home Navigation */}
      <div className="absolute left-4 top-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-blue-800/50 px-4 py-2 transition-all hover:bg-blue-800/70"
        >
          <Home className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 rounded-xl bg-blue-800/30 p-8 shadow-lg border border-blue-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Welcome</h2>
            <p className="mt-2 text-gray-300">Complete your registration</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-100 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="pt-4 space-y-4">
            <button
              onClick={() => handleRoleSelect("RENTER")}
              disabled={isLoading}
              className={`flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-gray-900 transition-colors hover:bg-gray-100 disabled:opacity-50 ${
                selectedRole === "RENTER" ? "bg-gray-100" : ""
              }`}
            >
              <span className="font-medium">Continue as Renter</span>
              {selectedRole === "RENTER" && (
                <Check className="h-5 w-5 text-green-600" />
              )}
            </button>

            <div className="flex items-center justify-center">
              <div className="border-t border-gray-500 w-full"></div>
              <span className="bg-transparent px-4 text-gray-400">or</span>
              <div className="border-t border-gray-500 w-full"></div>
            </div>

            <button
              onClick={() => handleRoleSelect("HOST")}
              disabled={isLoading}
              className={`flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-gray-900 transition-colors hover:bg-gray-100 disabled:opacity-50 ${
                selectedRole === "HOST" ? "bg-gray-100" : ""
              }`}
            >
              <span className="font-medium">Continue as Host</span>
              {selectedRole === "HOST" && (
                <Check className="h-5 w-5 text-green-600" />
              )}
            </button>

            {selectedRole && (
              <button
                onClick={handleContinue}
                disabled={isLoading || !selectedRole}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
              >
                <span className="font-medium">
                  {isLoading ? "Processing..." : "Continue"}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
