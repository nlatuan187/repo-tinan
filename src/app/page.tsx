import {
    Header,
    HeroSection,
    ValueProposition,
    FounderStory,
    ProductShowcase,
    ServicePromise,
    SocialProof,
    Footer,
    FloatingActions,
} from "./components";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <HeroSection />
            <ValueProposition />
            <FounderStory />
            <ProductShowcase />
            <ServicePromise />
            <SocialProof />
            <Footer />
            <FloatingActions />
        </main>
    );
}
