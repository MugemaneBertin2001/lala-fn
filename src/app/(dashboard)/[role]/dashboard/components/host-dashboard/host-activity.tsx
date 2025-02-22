// components/host-dashboard/host-activity.tsx
import { Users, DollarSign, AlertCircle } from "lucide-react";

export function HostActivity() {
  return (
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
              <span className="ml-auto text-sm text-gray-500">2 hours ago</span>
            </div>
          </div>
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Payment Received</p>
                <p className="text-sm text-gray-500">$1,200 - Apt 3A</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">5 hours ago</span>
            </div>
          </div>
          <div className="p-4 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium">Maintenance Request</p>
                <p className="text-sm text-gray-500">Plumbing Issue - Apt 2C</p>
              </div>
              <span className="ml-auto text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
