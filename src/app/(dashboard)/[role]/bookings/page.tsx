"use client";

import { useAuth } from "@/contexts/auth-context";
import { DashboardLayout } from "../../components/dashboard-layout";
import { HostBookings } from "./components/host-bookings";
import { RenterBookings } from "./components/renter-bookings";

export default function BookingsPage() {
  const { user } = useAuth();
  const isHost = user?.role === "HOST";

  return (
    <DashboardLayout>
      <div className="container mx-auto py-6">
        {isHost ? <HostBookings /> : <RenterBookings />}
      </div>
    </DashboardLayout>
  );
}