import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section className="bg-home-hero h-[800px] w-full bg-cover bg-no-repeat">
      <div className="layout-standard h-full flex-center gap-8 text-center flex-col">
        <div className="space-y-2">
          <h2 className="font-lato text-2xl text-secondary font-semibold">
            Welcome to Central Trademark Revival
          </h2>
          <h1 className="font-lato text-6xl text-white font-[900] max-w-[700px] leading-[120%]">
            Don&apos;t Let Others Take What&apos;s Rightfully Yours
          </h1>
        </div>

        <p className="text-xl text-white max-w-[980px]">
          Don&apos;t let a dead or abandoned trademark application hold back
          your business. Central Trademark Revival is here to guide you every
          step of the way. With no service fees and a dedication to making
          trademark revival simple and accessible, you can trust us to help you
          reclaim your brand.
        </p>

        <div className="flex items-center gap-2">
          <Button className="h-[55px] px-8 text-base font-lato font-bold hover:bg-primary-hover">
            Chat Now
          </Button>

          <Button className="h-[55px] px-8 text-base font-lato font-bold bg-secondary hover:bg-secondary-hover">
            Revive Now <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
