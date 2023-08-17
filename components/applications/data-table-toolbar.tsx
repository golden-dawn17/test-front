"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "../ui/button"
import { Input } from "../ui/input"

import { risks, types } from "@/app/dashboard/applications/data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { DataTableAdd } from "./data-table-add"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter apps..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
          style={{boxShadow:"0px 1px 4px 0px #E5E4E2, 0px 1px 4px 0px #E5E4E2"}}
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
            style={{boxShadow:"0px 1px 4px 0px #E5E4E2, 0px 1px 4px 0px #E5E4E2"}}
          >
            Reset filter
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        {table.getColumn("type") && (
          <DataTableFacetedFilter
            column={table.getColumn("type")}
            title="Type"
            options={types}
          />
        )}
        {table.getColumn("risk") && (
          <DataTableFacetedFilter
            column={table.getColumn("risk")}
            title="Risk"
            options={risks}
          />
        )}
      </div>
      <DataTableAdd table={table} />
    </div>
  )
}
