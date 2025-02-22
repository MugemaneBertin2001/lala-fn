// components/renter-dashboard/renter-activity.tsx
import { Receipt, AlertCircle, Home } from "lucide-react";

export function RenterActivity() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y">
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <Receipt className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Rent Payment</p>
                <p className="text-sm text-gray-500">February 2024</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">2 days ago</span>
            </div>
          </div>
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-medium">Maintenance Request</p>
                <p className="text-sm text-gray-500">Kitchen sink repair</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">1 week ago</span>
            </div>
          </div>
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <Home className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium">Property Inspection</p>
                <p className="text-sm text-gray-500">Scheduled for Mar 15</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
