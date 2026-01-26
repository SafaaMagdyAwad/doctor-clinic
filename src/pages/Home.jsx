import '../styles/home.css'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Doctors } from '../components/Doctors'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'
import { WhyUs } from '../components/WhyUs'
import { Booking } from '../components/Booking'
import { Testimonials } from '../components/Testimonials'
import { AddTestimonial } from '../components/AddTestimonial'

export function Home() {
    return (
        <>
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    {/* TopNavBar */}
                    <Navbar />
                    <main className="flex-1">
                        {/* HeroSection */}
                        <Hero />
                        {/* FeatureSection / Services */}
                        <Services />
                        {/* SectionHeader + Accordions (Why Choose Us) */}
                        <WhyUs />
                        {/* Doctors Grid Section (Custom) */}
                        <Doctors />
                        {/* CTA / Location Section */}
                        <CTA />
                        {/* Testimonials */}
                        {/* <Testimonials /> */}
                        <AddTestimonial />
                        {/* Booking */}
                        <Booking />
                    </main>
                    {/* Footer */}
                    <Footer />
                </div>
            </div>

        </>
    )
}
