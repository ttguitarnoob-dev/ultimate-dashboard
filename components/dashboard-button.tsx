import { Link } from "@heroui/link";

export default function DashboardButton(label: string, url: string, isExternal: boolean) {

    return(
        <>
        <div>
            <Link
            isExternal={isExternal}
            href={url}
            >
                {label}
            </Link>
        </div>
        </>
    )
}