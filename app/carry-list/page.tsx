import CarryList from "@/components/carry-list";
import NewCarryItemForm from "@/components/new-carry-item-form";
import { title } from "@/components/primitives";

export default function CarryListPage() {
  return (
    <div>
      <h1 className={title()}>Carry List</h1>
      <NewCarryItemForm />
      <CarryList />
    </div>
  );
}
