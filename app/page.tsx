import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsBar } from "@/components/stats-bar";
import { ExpertiseCards } from "@/components/expertise-cards";
import { CoursesSection } from "@/components/courses-section";
import { MentorshipSection } from "@/components/mentorship-section";
import { AIInsightsSection } from "@/components/ai-insights-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#faf8ff" }}>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ExpertiseCards />
        <CoursesSection />
        <MentorshipSection />
        <AIInsightsSection />
      </main>
      <Footer />
    </div>
  );
}
