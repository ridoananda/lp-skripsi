"use client";

import Script from "next/script";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Preview from "@/components/sections/Preview";
import Testimonial from "@/components/sections/Testimonial";
import Bonus from "@/components/sections/Bonus";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Script id="fb-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facE-book.net/en_US/fbevents.js');
        fbq('init', '1258221552283963');
        fbq('track', 'PageView');
      `}</Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facE-book.com/tr?id=1258221552283963&ev=PageView&noscript=1"
          alt="fb-pixel"
        />
      </noscript>
      
      <div className="min-h-screen w-full bg-hero">
        <Header />
        <Hero />
      </div>

      <Problem />
      <Solution />
      <Preview />
      <Testimonial />
      <Bonus />
      <Pricing />
      <CTA />

      <FloatingWhatsApp />
    </>
  );
}
