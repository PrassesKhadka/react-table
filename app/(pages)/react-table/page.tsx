"use client";

import Table from "./components/Table";
import { DATA } from "@/data";
import { columns } from "./columns";

export default function Home() {
  return (
    <main className="">
      <Table
        data={DATA}
        columns={columns}
        showFooter
        showNavigation
        showGlobalFilter={true}
      />
    </main>
  );
}
