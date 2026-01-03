import IconGrid from "@/components/IconGrid";
import AuthUIHero from "@/components/landing/hero";
import Section from "@/components/landing/sections";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <Section
        className="-z-1 -mt-10 mb-0 overflow-visible" 
        crosses
        crossesOffset="lg:translate-y-[0rem]"
        customPaddings 
        id="hero"
      >
        <div className="container relative mx-auto">
          <div className="-mt-8"> 
            <AuthUIHero />
          </div>
          
          {/* Decorative Divider */}
          <div className="w-[calc(100%+13rem)] mx-auto -translate-x-1/2 left-1/2 absolute z-20 mb-6 pointer-events-none">
            <hr className=" border-zinc-200 dark:border-zinc-800/80" />
            <div className="relative z-20 h-8 w-[calc(100%-5.8rem)] ml-1 -translate-x-1/2 left-1/2 bg-[repeating-linear-gradient(-45deg,#525354,#525354,transparent_1px,transparent_6px)] opacity-[30%]" />
            <hr className="border-zinc-200 dark:border-zinc-800/80" />
          </div>
        </div>
      </Section>

      {/* ICON GRID SECTION */}
      <div className="relative z-50 py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
           <IconGrid />
        </div>
      </div>
    </main>
  );
}