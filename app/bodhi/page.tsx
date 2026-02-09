import Navbar from "@/components/navbar"
import PageHeader from "@/components/page-header"
import DeptCard from "@/components/dept-card"
import Footer from "@/components/footer"
import { departments } from "@/lib/events-data"

export default function BodhiPage() {
    return (
        <main className="relative bg-[#050505] lg:pl-16 min-h-screen">
            <Navbar />

            <PageHeader
                title="BODHI"
                subtitle="Technical Events"
                description="Explore technical events across departments. Compete, learn, and innovate."
            />

            {/* Department Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-12 bg-red-500/30" />
                            <span className="text-[10px] font-mono text-red-500/60 tracking-[0.3em] uppercase">
                                Choose Your Department
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white">
                            DEPARTMENTS
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {departments.map((dept, index) => (
                            <DeptCard
                                key={dept.slug}
                                name={dept.name}
                                abbr={dept.abbr}
                                slug={dept.slug}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
