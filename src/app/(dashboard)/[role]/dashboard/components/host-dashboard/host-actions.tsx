// components/host-dashboard/host-actions.tsx
import { Building, Users, DollarSign, Settings } from "lucide-react";

export function HostActions() {
  return (
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
  );
}
