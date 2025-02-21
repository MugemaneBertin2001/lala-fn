import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Home, User } from "lucide-react";

const CompleteProfile = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!selectedRole) return;

    try {
      setIsSubmitting(true);
      const token = localStorage.getItem("token");

      const response = await fetch("/api/users/role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ role: selectedRole }),
      });

      if (!response.ok) {
        throw new Error("Failed to update role");
      }

      const data = await response.json();

      // Update local storage with new role
      localStorage.setItem("role", selectedRole);
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, role: selectedRole })
      );

      // Redirect based on role
      if (selectedRole === "RENTER") {
        router.push("/renter/dashboard");
      } else if (selectedRole === "HOST") {
        router.push("/host/dashboard");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      // You might want to show an error toast here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Complete Your Profile</CardTitle>
          <CardDescription>Choose your role to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <RadioGroup
              className="gap-6"
              value={selectedRole}
              onValueChange={setSelectedRole}
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="RENTER" id="renter" />
                <Label
                  htmlFor="renter"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <User className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Renter</p>
                    <p className="text-sm text-gray-500">
                      I want to rent properties
                    </p>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="HOST" id="host" />
                <Label
                  htmlFor="host"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Home className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Host</p>
                    <p className="text-sm text-gray-500">
                      I want to list my properties
                    </p>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            <Button
              type="submit"
              className="w-full mt-6"
              disabled={!selectedRole || isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Continue"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompleteProfile;
