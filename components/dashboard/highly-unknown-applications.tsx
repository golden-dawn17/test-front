import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function HighlyUnknownApps() {
  return (
    <div>
      <Card
        style={{
          boxShadow: "0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2",
        }}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            High Unknown Apps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mt-2">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
    </div>
  )
}
