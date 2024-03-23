"use client";

import { Description } from "@/components/desciption";
import { LinkerContainer } from "@/components/linker-cotainer";
import { Overline } from "@/components/overline";
import { SocialLinker } from "@/components/social-linker";
import { Status } from "@/components/status";
import { Topic } from "@/components/topic";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

export type Profit = {
  type: string;
  reward: string;
  profit: "holding" | "sold";
  value?: string;
};

const data: Profit[] = [
  {
    type: "airdrop",
    reward: "1000 $Lamark",
    profit: "holding",
  },
];

export const columns: ColumnDef<Profit>[] = [
  {
    accessorKey: "type",
    header: "类型",
    cell: ({ row }) => <div>{row.getValue("type")}</div>,
  },
  {
    accessorKey: "reward",
    header: "奖励",
    cell: ({ row }) => <div>{row.getValue("reward")}</div>,
  },
  {
    accessorKey: "profit",
    header: () => <div>状态</div>,
    cell: ({ row }) => {
      if (row.getValue("profit") === "holding") {
        return <div>holding</div>;
      } else {
        return <div>{row.getValue("value")}</div>;
      }
    },
  },
  {
    accessorKey: "value",
    header: () => <div></div>,
    enableHiding: true,
    cell: ({ row }) => <div></div>,
  },
];

export default function PigmoPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <Topic topic="Pigmo">
        <Status status="finished" marker="NFT mint阶段结束" />
        <Status status="counting" marker="等待$PIG TGE" />
      </Topic>
      <Description desciption="Pigmo 是一个基于Solana区块链的线上游戏平台，有实体公司做支撑，目前已经上线了多种类型小游戏" />
      <Description desciption="已经发行NFT 5000枚，代币$PIG在TGE时会向NFT持有者发放空投，以及后续NFT质押挖矿$PIG" />
      <LinkerContainer topic="官方链接">
        <SocialLinker linker="https://pigmo.com/" name="website" />
        <SocialLinker linker="https://twitter.com/pigmo_com" name="twitter" />
        <SocialLinker linker="https://discord.gg/pigmo" name="discord" />
      </LinkerContainer>
      <p>收益记录</p>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Overline />
    </>
  );
}
