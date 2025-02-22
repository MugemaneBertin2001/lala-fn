import { DollarSign, AlertCircle, MessageSquare, Settings } from "lucide-react";

export function RenterActions() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <DollarSign className="h-6 w-6 text-blue-600 mb-2" />
          <span className="font-medium">Make Payment</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <AlertCircle className="h-6 w-6 text-red-600 mb-2" />
          <span className="font-medium">Report Issue</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <MessageSquare className="h-6 w-6 text-green-600 mb-2" />
          <span className="font-medium">Contact Host</span>
        </button>
        <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <Settings className="h-6 w-6 text-purple-600 mb-2" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </section>
  );
}
