"use client";
// src/app/renter/dashboard/page.tsx

import { useAuth } from "@/contexts/auth-context";
import { Bell, Home, Settings, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "../../components/dashboard-layout";

export default function RenterDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout title="Renter Portal">
      <div className="min-h-screen bg-gray-100">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 px-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">
              Welcome back, {user?.firstName}  {user?.lastName}!
            </h1>
            <p className="text-gray-600">Manage your rentals and payments</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Current Rental
                </CardTitle>
                <Home className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Apartment 3B</div>
                <p className="text-xs text-gray-500">123 Main Street</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Next Payment
                </CardTitle>
                <Settings className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,200</div>
                <p className="text-xs text-gray-500">Due in 15 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Lease Status
                </CardTitle>
                <User className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Active</div>
                <p className="text-xs text-gray-500">Expires in 8 months</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Home className="h-6 w-6 text-blue-600" />
                <span className="font-medium">View Rental Details</span>
              </button>
              <button className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Settings className="h-6 w-6 text-orange-600" />
                <span className="font-medium">Make a Payment</span>
              </button>
              <button className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Bell className="h-6 w-6 text-purple-600" />
                <span className="font-medium">Submit Maintenance Request</span>
              </button>
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y">
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Rent Payment Processed</p>
                      <p className="text-sm text-gray-500">January 2024</p>
                    </div>
                    <span className="text-green-600 font-medium">$1,200</span>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Maintenance Request</p>
                      <p className="text-sm text-gray-500">
                        Fixed Kitchen Sink
                      </p>
                    </div>
                    <span className="text-blue-600">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </DashboardLayout>
  );
}
