"use client"

import { MainNav } from "@/components/dashboard//main-nav"
import { Search } from "@/components/dashboard/search"
import { UserNav } from "@/components/dashboard/user-nav"
import { Notifications } from "@/components/dashboard/notifications"
import { TotalApplications } from "@/components/dashboard/total-applications"
import { RiskScores } from "@/components/dashboard/risk-scores"
import { HighlyUnknownApps } from "@/components/dashboard/highly-unknown-applications"
import { ChartArea } from "@/components/dashboard/chart-area"
import { RecentlyUpdatedApps } from "@/components/dashboard/recently-updated-applications"
import "./dashboard.css"

export default function DashboardPage() {
  return (
    <div className="container">
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Notifications/>
              <UserNav />
            </div>
          </div>
        </div>
        <div className="dashboardLayout p-3 pt-6">
          <div className="box1">
            <TotalApplications/>
          </div>
          <div className="box2">
            <RiskScores/>
          </div>
          <div className="box3">
            <HighlyUnknownApps/>
          </div>
          <div className="box4">
            <ChartArea/>
          </div>
          <div className="box5">
            <RecentlyUpdatedApps/>
          </div>
        </div>
      </div>
    </div>
  )
}