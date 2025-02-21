"use client";
import {
  Settings,
  Users,
  DollarSign,
  Building,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "../../components/dashboard-layout";

export default function HostDashboard() {
  return (
    <DashboardLayout title="Host Portal">
      <div className="min-h-screen bg-gray-100">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 px-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Host Dashboard</h1>
            <p className="text-gray-600">Property and tenant management</p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Properties
                </CardTitle>
                <Building className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-gray-500">Total units</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Occupancy</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-gray-500">22 occupied units</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$28,800</div>
                <p className="text-xs text-gray-500">Monthly revenue</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <AlertCircle className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-gray-500">Maintenance requests</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Management Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Building className="h-6 w-6 text-blue-600 mb-2" />
                <span className="font-medium">Manage Properties</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Users className="h-6 w-6 text-green-600 mb-2" />
                <span className="font-medium">Manage Tenants</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <DollarSign className="h-6 w-6 text-orange-600 mb-2" />
                <span className="font-medium">View Payments</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <Settings className="h-6 w-6 text-purple-600 mb-2" />
                <span className="font-medium">Settings</span>
              </button>
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y">
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">New Tenant Registration</p>
                      <p className="text-sm text-gray-500">John Doe - Apt 4B</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">
                      2 hours ago
                    </span>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Payment Received</p>
                      <p className="text-sm text-gray-500">$1,200 - Apt 3A</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">
                      5 hours ago
                    </span>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Maintenance Request</p>
                      <p className="text-sm text-gray-500">
                        Plumbing Issue - Apt 2C
                      </p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">
                      1 day ago
                    </span>
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
