"use client"

import { useRouter } from "next/navigation";

const Page = () => {
    return useRouter().push("/angebote-events")
}
 
export default Page;