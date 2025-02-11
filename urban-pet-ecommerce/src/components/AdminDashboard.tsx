import React from "react";
import { BarChart, Users, Package, DollarSign, TrendingUp } from "lucide-react";
export const AdminDashboard = () => {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h2>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[{
        title: "Total Sales",
        value: "$12,345",
        icon: DollarSign,
        color: "blue"
      }, {
        title: "Active Users",
        value: "1,234",
        icon: Users,
        color: "green"
      }, {
        title: "Products",
        value: "89",
        icon: Package,
        color: "purple"
      }, {
        title: "Growth",
        value: "+12.3%",
        icon: TrendingUp,
        color: "pink"
      }].map((stat, index) => <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>)}
      </div>
      {/* Sales Chart */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Sales Analytics
        </h3>
        <div className="h-64 flex items-center justify-center text-gray-400">
          <BarChart className="h-8 w-8" />
          <span className="ml-2">Chart visualization would go here</span>
        </div>
      </div>
      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3].map(order => <div key={order} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Order #{order}0234
                  </p>
                  <p className="text-sm text-gray-500">2 items • $158.00</p>
                </div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Completed
                </span>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};