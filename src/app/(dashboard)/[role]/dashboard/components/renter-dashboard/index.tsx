// components/renter-dashboard/index.tsx
"use client";
import { RenterStats } from "./renter-stats";
import { RenterActions } from "./renter-actions";
import { RenterActivity } from "./renter-activity";

export function RenterDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Renter Dashboard</h1>
          <p className="text-gray-600">Manage your rental and payments</p>
        </div>

        <RenterStats />
        <RenterActions />
        <RenterActivity />
      </main>
    </div>
  );
}
