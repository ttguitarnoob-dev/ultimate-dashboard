import { GetCarryItems } from "@/app/lib/server-actions";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";

type Item = {
  id: string | number;
  name: string;
  item: string;
  createdAt: string | Date;
};

const columns = [
  { uid: "name", name: "Carrier" },
  { uid: "item", name: "Item" },
  { uid: "createdAt", name: "Date" },
];

export default async function CarryList() {
  // ✅ Await the promise
  const rawItems = await GetCarryItems();

  // ✅ Narrow down to Item[]
  const items: Item[] = rawItems.map((i) => ({
    id: i.id,
    name: i.name,
    item: i.item,
    createdAt: i.createdAt,
  }));

  return (
    <Table aria-label="Items table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={items}>
        {(row) => (
          <TableRow key={row.id}>
            {(columnKey) => {
              const value = row[columnKey as keyof Item];
              return <TableCell>{String(value)}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}