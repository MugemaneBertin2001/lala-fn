"use client"
import { useAuth } from "@/contexts/auth-context";
import { DashboardLayout } from "../../components/dashboard-layout";
import { HostProperties } from "./components/host-properties";
import { RenterProperties } from "./components/renter-properties";

export default function PropertiesPage() {
  const { user } = useAuth();
  const isHost = user?.role === "HOST";

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6">
        {isHost ? <HostProperties /> : <RenterProperties />}
      </div>
    </DashboardLayout>
  );
}
