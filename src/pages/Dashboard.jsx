import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import MetricCard from '../components/dashboard/MetricCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import RecentActivity from '../components/dashboard/RecentActivity';
import ProjectsTable from '../components/dashboard/ProjectsTable';
import { DollarSign, Users, Activity, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <DashboardHeader title="Overview" subtitle="Welcome back, Jane. Here's what's happening." />
      
      <div className="p-8 space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Revenue"
            value="$52.1k"
            change="+12.5%"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Active Users"
            value="3,602"
            change="+8.2%"
            changeType="positive"
            icon={Users}
          />
          <MetricCard
            title="Conversion Rate"
            value="3.24%"
            change="-0.4%"
            changeType="negative"
            icon={Activity}
          />
          <MetricCard
            title="Avg. Session"
            value="4m 32s"
            change="+18.7%"
            changeType="positive"
            icon={ArrowUpRight}
          />
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <RecentActivity />
        </div>

        {/* Projects Table */}
        <ProjectsTable />
      </div>
    </div>
  );
}