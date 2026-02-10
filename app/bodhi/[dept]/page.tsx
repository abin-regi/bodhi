import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DeptEventsContent from "@/components/dept-events-content"
import { departments, technicalEvents } from "@/lib/events-data"

interface DeptPageProps {
    params: Promise<{ dept: string }>
}

export async function generateStaticParams() {
    return departments.map((dept) => ({
        dept: dept.slug,
    }))
}

export default async function DeptEventsPage({ params }: DeptPageProps) {
    const { dept: deptSlug } = await params

    const department = departments.find((d) => d.slug === deptSlug)

    if (!department) {
        notFound()
    }

    const events = technicalEvents[deptSlug] || []

    return (
        <main className="relative bg-[#050505] lg:pl-16 min-h-screen">
            <Navbar />
            <DeptEventsContent department={department} events={events} />
            <Footer />
        </main>
    )
}
