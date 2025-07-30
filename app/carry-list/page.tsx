import CarryList from "@/components/carry-list";
import NewCarryItemForm from "@/components/new-carry-item-form";
import { title } from "@/components/primitives";

export default function CarryListPage() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className={title()}>Carry List</h1>
      <p>Add a reference to all the ridiculous things you carried back and forth and then laugh at it later</p>
      <NewCarryItemForm />
      <CarryList />
    </div>
  );
}
