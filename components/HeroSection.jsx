import Image from "next/image";
import CTASection from "./CTASection";
import FeatureList from "./FeatureList";

const features = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

export default function HeroSection() {
  return (
    <main className="px-4 md:px-8 lg:px-16 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <section className="w-full flex-1">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              Want to Turn Social Media Into a{" "}
              <span className="text-white">Profitable Career?</span>
            </h1>
            <h2
              className="font-[Urbanist] font-bold text-[35px] leading-[100%] align-middle"
              style={{
                color: "hsla(184, 100%, 49%, 1)",
                textShadow: "0px 4px 4px hsla(341, 100%, 49%, 1)",
              }}
            >
              Discover your way to success with Fametonic:
            </h2>
          </div>

          <FeatureList features={features} />
          <CTASection />
        </section>

        <div className="w-full flex-1 flex justify-center lg:justify-end">
          <Image
            src="/phone-mockup.png"
            alt="Phone Mockup"
            width={1000}
            height={1000}
            priority
            className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </main>
  );
}
