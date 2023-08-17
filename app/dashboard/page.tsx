"use client"
import { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Circle } from "lucide-react"
import { ArrowUpCircleIcon } from "lucide-react"
import { ArrowRightCircleIcon } from "lucide-react"
import { ArrowDownCircleIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { MainNav } from "@/components/dashboard//main-nav"
import { ApplicationsOverview } from "@/components/dashboard/applications-overview"
import { RiskScoreOverview } from "@/components/dashboard/risk-score-overview"
import { RecentSales } from "@/components/dashboard/recent-sales"
import { Search } from "@/components/dashboard/search"
import TeamSwitcher from "@/components/dashboard/team-switcher"
import { UserNav } from "@/components/dashboard/user-nav"
import { Notifications } from "@/components/dashboard/notifications"
import "./dashboard.css"
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
}

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
            <Card style={{boxShadow:"0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2"}}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Applications
                </CardTitle>
                </CardHeader>
                <CardContent>
                      <div className="text-2xl font-bold mt-2">59,234</div>
                      <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                      </p>
                </CardContent>
            </Card>
          </div>
          <div className="box2">
          <Card style={{boxShadow:"0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2"}}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Risk Score
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mt-1" style={{justifyContent:"space-around"}}>
                        <div>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_3241)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#FFE2AC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9966 3.8147e-06C15.3571 3.8147e-06 14.8386 0.519096 14.8386 1.15943C14.8386 1.79976 15.3571 2.31884 15.9966 2.31884C23.5126 2.31884 29.6166 8.3965 29.6608 15.9176C29.6646 16.5579 30.1861 17.0739 30.8256 17.0702C31.4651 17.0664 31.9805 16.5443 31.9768 15.9039C31.925 7.10772 24.7866 3.8147e-06 15.9966 3.8147e-06Z" fill="#FF754C"/>
                            <circle cx="16.5918" cy="16.1038" r="8.29591" fill="#FAFBFF"/>
                            <path d="M13.9128 14.6087L16.6955 11.8261L19.4781 14.6087" stroke="#FF754C" stroke-width="1.3913" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6954 11.8261L16.6954 19.0116" stroke="#FF754C" stroke-width="1.3913" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_3241">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        <div>
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_3253)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#CDF4FF"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9966 3.8147e-06C15.3571 3.8147e-06 14.8386 0.519096 14.8386 1.15943C14.8386 1.79976 15.3571 2.31884 15.9966 2.31884C23.5126 2.31884 29.6166 8.3965 29.6608 15.9176C29.6646 16.5579 30.1861 17.0739 30.8256 17.0702C31.4651 17.0664 31.9805 16.5443 31.9768 15.9039C31.925 7.10772 24.7866 3.8147e-06 15.9966 3.8147e-06Z" fill="#3F8CFF"/>
                          <circle cx="16.5918" cy="16.1038" r="8.29591" fill="#FAFBFF"/>
                          <path d="M17.3914 13.2174L20.174 16L17.3914 18.7826" stroke="#3F8CFF" stroke-width="1.3913" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M20.174 16H12.9885" stroke="#3F8CFF" stroke-width="1.3913" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_3253">
                          <rect width="32" height="32" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>
                        </div>
                        <div>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_3265)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#22C55E" fill-opacity="0.4"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9966 3.8147e-06C15.3571 3.8147e-06 14.8386 0.519096 14.8386 1.15943C14.8386 1.79976 15.3571 2.31884 15.9966 2.31884C23.5126 2.31884 29.6166 8.3965 29.6608 15.9176C29.6646 16.5579 30.1861 17.0739 30.8256 17.0702C31.4651 17.0664 31.9805 16.5443 31.9768 15.9039C31.925 7.10772 24.7866 3.8147e-06 15.9966 3.8147e-06Z" fill="#22C55E"/>
                            <circle cx="16.5918" cy="16.1038" r="8.29591" fill="#FAFBFF"/>
                            <path d="M19.4781 17.3913L16.6955 20.1739L13.9129 17.3913" stroke="#22C55E" stroke-width="1.3913" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6956 20.1739L16.6956 12.9885" stroke="#22C55E" stroke-width="1.3913" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_3265">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                      </div>
                      <div className="flex mt-1 text-xs text-black" style={{justifyContent:"space-around"}}>
                        <p style={{fontWeight:"650"}}>11,242</p>
                        <p style={{fontWeight:"650"}}>9,654</p>
                        <p style={{fontWeight:"650"}}>22,354</p>
                      </div>
                    </CardContent>
                  </Card>            
          </div>
          <div className="box3">
          <Card style={{boxShadow:"0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2"}}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">High Unknown Apps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold mt-2">+12,234</div>
                      <p className="text-xs text-muted-foreground">
                        +19% from last month
                      </p>
                    </CardContent>
                  </Card>
          </div>
          <div className="box4">
          <Card style={{boxShadow:"0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2"}}>
                  <CardHeader>
                    <Tabs defaultValue="applications" className="space-y-4">
                      <div className="flex">
                          <TabsContent value="applications">
                            <p style={{fontWeight:"625", fontSize:"20px"}}>Applications</p> 
                          </TabsContent>
                          <TabsContent value="riskscore">
                          <p style={{fontWeight:"625", fontSize:"20px"}}>Risk Score</p> 
                          </TabsContent>
                        <div className="flex ml-auto">
                          <TabsList>
                            <TabsTrigger value="applications">Applications</TabsTrigger>
                            <TabsTrigger value="riskscore">Risk Score</TabsTrigger>
                          </TabsList>
                        </div>
                      </div>
                      <TabsContent value="applications" className="pt-8">
                        <CardContent>
                          <ApplicationsOverview />
                        </CardContent>
                      </TabsContent>
                      <TabsContent value="riskscore" className="pt-8">
                        <CardContent>
                          <RiskScoreOverview />
                        </CardContent>
                      </TabsContent>
                    </Tabs>
                  </CardHeader>
                </Card>
          </div>
          <div className="box5">
                  <Card style={{boxShadow:"0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2"}}>
                      <CardHeader>
                        <CardTitle>Recently Updated Apps</CardTitle>
                        <div className="mt-1"></div>
                        <CardDescription>
                          You have added 1265 apps this month.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RecentSales />
                      </CardContent>
                    </Card>
          </div>
        </div>
      </div>
    </div>
  )
}