import CarryList from "@/components/carry-list";
import { title } from "@/components/primitives";

export default function CarryListPage() {
  return (
    <div>
      <h1 className={title()}>Carry List</h1>
      <CarryList />
    </div>
  );
}
