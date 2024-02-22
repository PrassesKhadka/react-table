import { ColumnDef } from "@tanstack/react-table";
import { Idata } from "@/data";
import { type ReactNode } from "react";

// for columns:
export const columns: ColumnDef<Idata>[] = [
  {
    header: "Name",
    columns: [
      {
        header: "First Name",
        accessorKey: "firstName",
        cell: (row) => row.renderValue(),
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
        cell: (row) => row.renderValue(),
      },
      {
        header: "Combined Name",
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        cell: (row) => row.renderValue(),
      },
    ],
  },
  {
    header: "Task",
    accessorKey: "task",
    cell: (row) => (
      <p className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {row.renderValue() as ReactNode}
      </p>
    ),
  },
  {
    header: "Task and Status",
    accessorFn: (row) => `${row.task} and ${row.status}`,
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (row) => row.renderValue(),
  },
  {
    header: "Due",
    accessorKey: "due",
    cell: (row) => row.renderValue(),
  },
  {
    header: "Notes",
    accessorKey: "notes",
    cell: (row) => row.renderValue(),
    footer: "Total Price",
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: (row) => row.renderValue(),
    footer: () => <p>This is where total value will be placed</p>,
  },
];
