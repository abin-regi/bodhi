import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import PageHeader from "@/components/page-header"
import EventCard from "@/components/event-card"
import Footer from "@/components/footer"
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

            <PageHeader
                title={department.abbr}
                subtitle={department.name}
                description={`Technical events organized by the ${department.name} department`}
                backLink="/bodhi"
                backLabel="ALL DEPARTMENTS"
            />

            {/* Events Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-12 bg-red-500/30" />
                            <span className="text-[10px] font-mono text-red-500/60 tracking-[0.3em] uppercase">
                                {events.length} Events
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                            EVENTS
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {events.map((event, index) => (
                            <EventCard
                                key={event.name}
                                name={event.name}
                                description={event.description}
                                registrationUrl={event.registrationUrl}
                                index={index}
                            />
                        ))}
                    </div>

                    {events.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-white/30 font-mono">No events found for this department.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
