"use client";

import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { DATA } from "@/data";
import { Idata } from "@/data";
import type { ColumnDef, Cell, CellContext } from "@tanstack/react-table";
import EditableCell from "./EditableCell";

const columns: ColumnDef<Idata>[] = [
  {
    accessorKey: "task",
    header: "Task",
    size: 225,
    cell: EditableCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: (props) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const TaskTable = () => {
  const [data, setData] = useState<Idata[]>(DATA);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getHeaderGroups());
  console.log(data);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>{header.column.columnDef.header}</th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskTable;
