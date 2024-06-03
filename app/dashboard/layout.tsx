import Navbar from "@/components/navbar/Navbar"
import { SideBar } from "@/components/side-bar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <div className=" flex h-screen relative max-w-screen ">
                <div className="md:block hidden relative min-w-[192px]">
                    <SideBar />
                </div>
                <div className="w-full flex flex-1 flex-col">
                    <Navbar />
                    <div className="w-full p-2 md:p-4 grow flex flex-col gap-4">{children}</div>
                </div>
            </div>
        </section>
    )
}
