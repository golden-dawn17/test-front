import { RecentSales } from "./recent-sales"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function RecentlyUpdatedApps() {
  return (
    <div>
      <Card
        style={{
          boxShadow: "0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2",
        }}
      >
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
  )
}
