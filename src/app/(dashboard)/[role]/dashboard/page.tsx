"use client";
import { useAuth } from "@/contexts/auth-context";
import { DashboardLayout } from "../../components/dashboard-layout";
import { HostDashboard } from "./components/host-dashboard";
import { RenterDashboard } from "./components/renter-dashboard";

export default function DashboardPage() {
  const { user } = useAuth();
  const isHost = user?.role === "HOST";

  return (
    <DashboardLayout title={isHost ? "Host Portal" : "Renter Portal"}>
      {isHost ? <HostDashboard /> : <RenterDashboard />}
    </DashboardLayout>
  );
}
