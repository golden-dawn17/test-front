"use client"
import { z } from "zod"

import { columns } from "@/components/applications/columns"
import { DataTable } from "@/components/applications/data-table"
import { UserNav } from "@/components/dashboard/user-nav"
import { taskSchema } from "./data/schema"
import { MainNav } from "@/components/dashboard//main-nav"
import { Search } from "@/components/dashboard/search"
import { Notifications } from "@/components/dashboard/notifications"

// Simulate a database read for tasks.
function getApplications() {
  const data = require("app/dashboard/applications/data/applications.json")
  return z.array(taskSchema).parse(data)
}

export default function ApplicationsPage() {
  const applications = getApplications()

  return (
    <section className="container">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Notifications/>
            <UserNav />
          </div>
        </div>
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={applications} columns={columns} />
      </div>
    </section>
  )
}
