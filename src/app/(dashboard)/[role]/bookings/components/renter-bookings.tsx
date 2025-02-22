import { Calendar, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RenterBookings() {
  const booking = {
    property: "Apartment 3B",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    rent: 1200,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Lease</h1>
        <p className="text-gray-500">View your current lease details</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Lease</CardTitle>
          <CardDescription>
            {booking.property} - 123 Main Street
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span>
                {new Date(booking.startDate).toLocaleDateString()} -{" "}
                {new Date(booking.endDate).toLocaleDateString()}
              </span>
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
                <span className="font-medium">${booking.rent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Security Deposit</span>
                <span className="font-medium">${booking.rent}</span>
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
