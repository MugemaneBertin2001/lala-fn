// app/(dashboard)/[role]/bookings/page.tsx
"use client";
import { Calendar, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const bookings = [
  {
    id: 1,
    property: "Apartment 3B",
    tenant: "Jane Doe",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    status: "active",
    rent: 1200,
  },
  // Add more bookings
];

export default function BookingsPage() {
  const { user } = useAuth();
  const isHost = user?.role === "HOST";

  if (!isHost) {
    // Renter View
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Lease</h1>
          <p className="text-gray-500">View your current lease details</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Lease</CardTitle>
            <CardDescription>Apartment 3B - 123 Main Street</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>Feb 1, 2024 - Jan 31, 2025</span>
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <Badge variant="success" className="flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Active
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Monthly Rent</span>
                  <span className="font-medium">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Security Deposit</span>
                  <span className="font-medium">$1,200</span>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <Button className="w-full">Download Lease Agreement</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Host View
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leases</h1>
          <p className="text-gray-500">Manage your rental agreements</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Leases</CardTitle>
          <CardDescription>
            Overview of all rental agreements and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Monthly Rent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">
                    {booking.property}
                  </TableCell>
                  <TableCell>{booking.tenant}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>
                        {new Date(booking.startDate).toLocaleDateString()} -{" "}
                        {new Date(booking.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>${booking.rent}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === "active" ? "success" : "default"
                      }
                      className="flex items-center gap-1 w-fit"
                    >
                      {booking.status === "active" ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
