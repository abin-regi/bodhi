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
import CustomCursor from "@/components/custom-cursor"
import Scene3DBackground from "@/components/3d/scene-background"

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Scene3DBackground />
      <main className="relative z-10 lg:pl-16">
        <Navbar />
        <div className="relative">
          <HeroSection />
        </div>
        <ScrollIndicator />
        <div className="bg-[#050505]/90 backdrop-blur-sm">
          <EventsSection />
          <EventMarquee />
          <RobowarsSection />
          <PassesSection />
          <ProniteSection />
          <WheelsSection />
          <GPCSection />
          <ExpoSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
