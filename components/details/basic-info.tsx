import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function BasicInfo() {
  return (
    <div>
      <CardHeader></CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xs font-medium">Product URL</div>
            <div className="text-xs font-medium mt-3">Open Source</div>
            <div className="text-xs font-medium mt-3">Employee Count</div>
            <div className="text-xs font-medium mt-3">Vendor Name</div>
            <div className="text-xs font-medium mt-3">Catagory</div>
            <div className="text-xs font-medium mt-3">L2 Subcatagory</div>
          </div>
          <div>
            <div className="text-xs font-small">Product URL</div>
            <div className="text-xs font-small mt-3">N/A</div>
            <div className="text-xs font-small mt-3">N/A</div>
            <div className="text-xs font-small mt-3">Microsoft 365</div>
            <div className="text-xs font-small mt-3">Office</div>
            <div className="text-xs font-small mt-3">Office Suites</div>
          </div>
          <div>
            <div className="text-xs font-medium">L3 Subcatagory</div>
            <div className="text-xs font-medium mt-3">NPS Score</div>
            <div className="text-xs font-medium mt-3">How is this app deducted?</div>
            <div className="text-xs font-medium mt-3">Headquarters Location</div>
            <div className="text-xs font-medium mt-3">Founded</div>
            <div className="text-xs font-medium mt-3">App Domains</div>
          </div>
          <div>
            <div className="text-xs font-small">N/A</div>
            <div className="text-xs font-small mt-3">N/A</div>
            <div className="text-xs font-small mt-3">App ID Classification</div>
            <div className="text-xs font-small mt-3">United States</div>
            <div className="text-xs font-small mt-3">N/A</div>
            <div className="text-xs font-small mt-3">Application Type - Office</div>
          </div>
        </div>
      </CardContent>
    </div>
  )
}
