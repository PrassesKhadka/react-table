"use client";

import { ColumnDef } from "@tanstack/react-table";
import Table from "./components/Table";
import { DATA, Idata } from "@/data";

// for columns:
const columns: ColumnDef<Idata>[] = [
  {
    header: "Task",
    accessorKey: "task",
    cell: (row) => row.renderValue(),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (row) => row.renderValue(),
  },
  {
    header: "Due",
    accessorKey: "due",
    cell: (row) => row.getValue()?.toString(),
  },
  {
    header: "Notes",
    accessorKey: "notes",
    cell: (row) => row.renderValue(),
  },
];

export default function Home() {
  return (
    <main>
      <Table data={DATA} columns={columns} />
    </main>
  );
}
