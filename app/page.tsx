import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ScrollIndicator from "@/components/scroll-indicator"
import EventsSection from "@/components/events-section"
import EventMarquee from "@/components/event-marquee"
import RobowarsSection from "@/components/robowars-section"
import PassesSection from "@/components/passes-section"
import ProniteSection from "@/components/pronite-section"
import WheelsSection from "@/components/wheels-section"
import GPCSection from "@/components/gpc-section"
import ExpoSection from "@/components/expo-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="relative bg-[#050505] lg:pl-16">
      <Navbar />
      <HeroSection />
      <ScrollIndicator />
      <EventsSection />
      <EventMarquee />
      <RobowarsSection />
      <PassesSection />
      <ProniteSection />
      <WheelsSection />
      <GPCSection />
      <ExpoSection />
      <Footer />
    </main>
  )
}
