"use client";
import { useAuth } from "@/contexts/auth-context";
import { DashboardLayout } from "../../components/dashboard-layout";
import { HostSettings } from "./components/host-settings";
import { RenterSettings } from "./components/renter-settings";

export default function SettingsPage() {
  const { user } = useAuth();
  const isHost = user?.role === "HOST";

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6">
        {isHost ? <HostSettings /> : <RenterSettings />}
      </div>
    </DashboardLayout>
  );
}
