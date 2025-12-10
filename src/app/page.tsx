import Header from "@/components/header";
import LandingFormSection from "@/components/landing-form-section";
import PricingComparisonSection from "@/components/pricing-comparison-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-26 xl:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="bg-gradient-to-b py-2 from-stone-500 to-stone-800 bg-clip-text text-transparent">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Skip Paywalls, Access Knowledge
                  </h1>
                </div>
                <p className="mx-auto max-w-[700px] text-stone-600 md:text-xl">
                  Unlock articles behind paywalls and access the information you
                  need. Fast, easy, and reliable.
                </p>
              </div>
             {/* <LandingFormSection /> */}
            </div>
          </div>
        </section>
       {/* <PricingComparisonSection /> */}

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-stone-300">
        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} PaywallSkip. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-stone-500"
            href="/posts/tos"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-stone-500"
            href="/posts/privacy"
          >
            Privacy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-stone-500"
            href="/posts/legal"
          >
            Legal
          </Link>
        </nav>
      </footer>
    </div>
  );
}
