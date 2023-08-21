import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TotalApplications() {
  return (
    <div>
      <Card
        style={{
          boxShadow: "0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2",
        }}
      >
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
  )
}
