"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "../ui/badge"
import { Checkbox } from "../ui/checkbox"

import { labels, risks, types } from "@/app/dashboard/applications/data/data"
import { Task } from "@/app/dashboard/applications/data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
/*  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },*/
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = types.find(
        (type) => type.value === row.getValue("type")
      )

      if (!type) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {type.icon && (
            <type.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span className="w-[80px] truncate" style={{fontWeight:"400"}}>{type.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "risk",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Risk" />
    ),
    cell: ({ row }) => {
      const risk = risks.find(
        (risk) => risk.value === row.getValue("risk")
      )
      if (!risk) {
        return null
      }
      let risk_bg = "#ffffff"
      let risk_bgtext = "#000000"
      if (risk.value=="high"){
        risk_bg = "#FFE2AC"
        risk_bgtext = "#D84318"
      }
      else if (risk.value=="medium"){
        risk_bg = "#CDF4FF"
        risk_bgtext = "#0F7587"
      }
      else if (risk.value=="low") {
        risk_bg = "#22C55E66";
        risk_bgtext = "#599E18"
      }

      return (
        <div className="flex items-center">
          <Badge variant="outline" className="h-6" style={{background:risk_bg}}>          
            {risk.icon && (
            <risk.icon className="mr-2 h-4 w-4" style={{color: risk_bgtext}} />
              )}
            <span style={{color:risk_bgtext}}>{risk.label}</span>
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "security_policy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Security & Policy" />
    ),
    cell: ({ row }) => <div className="w-[80px] truncate font-medium">{row.getValue("security_policy")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "iam",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IAM" />
    ),
    cell: ({ row }) => <div className="w-[80px] truncate font-medium">{row.getValue("iam")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "compliance",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Compliance" />
    ),
    cell: ({ row }) => <div className="max-w-[80px] truncate font-medium">{row.getValue("compliance")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
