import { ApplicationsOverview } from "./applications-overview"
import { RiskScoreOverview } from "./risk-score-overview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ChartArea() {
  return (
    <div>
      <Card
        style={{
          boxShadow: "0px 2px 5px 0px #E5E4E2, 0px 2px 5px 0px #E5E4E2",
        }}
      >
        <CardHeader>
          <Tabs defaultValue="applications" className="space-y-4">
            <div className="flex">
              <TabsContent value="applications">
                <p style={{ fontWeight: "625", fontSize: "20px" }}>
                  Applications
                </p>
              </TabsContent>
              <TabsContent value="riskscore">
                <p style={{ fontWeight: "625", fontSize: "20px" }}>
                  Risk Score
                </p>
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
  )
}
