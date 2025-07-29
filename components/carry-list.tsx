import { GetCarryItems } from "@/app/lib/server-actions";
import CarryItemCard from "./carry-item-card";

export default async function CarryList() {

    const items = await GetCarryItems()
    console.log("HEREITIS", items)

    return (

        <>
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <CarryItemCard name={item.name} item={item.item} createdAt={item.createdAt} />
                    </div>
                ))}
            </div>
        </>
    )
}