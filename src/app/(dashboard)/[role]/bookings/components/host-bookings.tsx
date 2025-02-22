import { Calendar, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
];

export function HostBookings() {
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
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <div className="font-medium">{booking.property}</div>
                  <div className="text-sm text-gray-500">{booking.tenant}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">
                    {new Date(booking.startDate).toLocaleDateString()} -{" "}
                    {new Date(booking.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div>${booking.rent}</div>
                <Badge
                  variant={booking.status === "active" ? "success" : "default"}
                  className="flex items-center gap-1 w-fit"
                >
                  {booking.status === "active" ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Clock className="h-3 w-3" />
                  )}
                  {booking.status}
                </Badge>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
