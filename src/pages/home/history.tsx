"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules"; // Added EffectFade
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Required for fade effect

const historyData = [
    {
        "year": "2021",
        "title": "The Journey Begins",
        "description": "In 2021, our vision was set into motion. We assembled a core team of engineers to build a foundation for a more transparent business world, turning a bold idea into a working prototype.",
        "color": "#FF6854"
    },
    {
        "year": "2022",
        "title": "Architecture & Optimization",
        "description": "Focus shifted to performance and scale. We overhauled our data processing pipelines, reducing latency by over 50% and ensuring a faster, more reliable experience for our early users.",
        "color": "#3AC4E5"
    },
    {
        "year": "2023",
        "title": "32M+ Data Milestone",
        "description": "Growth took center stage as our database expanded to 32 million business profiles. We introduced advanced cleansing protocols to maintain strict standards for accuracy and data freshness.",
        "color": "#FF6854"
    },
    {
        "year": "2024",
        "title": "Ecosystem Integration",
        "description": "We evolved into an integrated ecosystem by launching robust API integrations and web scraping frameworks, enabling seamless data syncing into existing project management and CRM tools.",
        "color": "#3AC4E5"
    },
    {
        "year": "2025",
        "title": "86M+ Verified Profiles",
        "description": "A landmark year as we surpassed 86 million verified profiles globally. We integrated AI-driven validation to provide the most authoritative and up-to-date business intelligence available.",
        "color": "#3AC4E5"
    }
];

export default function History() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="grid grid-cols-30 md:grid-cols-12 py-10 md:py-20 bg-light pb-10 md:pb-20">
            <div className="col-start-2 col-end-30 md:col-end-12 pb-10 md:pb-16 grid gap-3">
                <span className="text-2xl md:text-3xl title font-medium text-primary-dark">Our achievement</span>
                <span className="text-sm md:text-base leading-snug block max-w-md text-primary-dark">Celebrating the Triumphs of Completed Marketing Campaigns and Projects.</span>
            </div>
            <div className="col-start-2 col-end-30 md:col-end-12 bg-white p-3 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row w-full gap-8 lg:gap-16">
                <div className="flex md:flex-col gap-3 min-w-[120px] overflow-x-auto no-scrollbar md:overflow-visible pb-4 md:pb-0 border-b md:border-b-0 md:border-r border-gray-100 pr-0 md:pr-8">
                    {historyData.map((item, index) => (
                        <button
                            key={item.year}
                            onClick={() => swiper?.slideTo(index)}
                            className={`text-left px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap
                                ${activeIndex === index
                                    ? "bg-primary-dark text-white shadow-md scale-105"
                                    : "bg-transparent text-gray-400 hover:text-primary-dark"}`}
                        >
                            {item.year}
                        </button>
                    ))}
                </div>

                {/* Slider Content */}
                <div className="flex-1 min-w-0">
                    <Swiper
                        autoplay
                        modules={[Navigation, EffectFade, Autoplay]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        slidesPerView={1}
                        spaceBetween={30}
                        onSwiper={setSwiper}
                        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
                        className="h-full"
                    >
                        {historyData.map((item) => (
                            <SwiperSlide key={item.year} className="bg-white">
                                <div className="flex flex-col justify-center max-w-2xl transition-all duration-500">
                                    {/* Animated Color Bar from your HTML */}
                                    <div className="mb-6 opacity-80">
                                        <svg width="12" height="40" viewBox="0 0 12 64" fill="none">
                                            <line x1="6" y1="6" x2="6" y2="58" stroke={item.color} strokeWidth="12" strokeLinecap="round" />
                                        </svg>
                                    </div>

                                    <span className="text-sm  md:text-base font-black tracking-[0.2em] uppercase mb-2" style={{ color: item.color }}>
                                        {item.year}
                                    </span>

                                    <h2 className="text-3xl title md:text-4xl lg:text-5xl font-extrabold mb-4 text-primary-dark leading-tight">
                                        {item.title}
                                    </h2>

                                    <p className="text-gray-500 text-sm md:text-base lg:text-base leading-relaxed max-w-prose">
                                        {item.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Progress Indicator */}
                    <div className="mt-10 h-[4px] rounded-full w-full bg-light relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 h-full transition-all duration-700 ease-in-out"
                            style={{
                                width: `${((activeIndex + 1) / historyData.length) * 100}%`,
                                backgroundColor: historyData[activeIndex].color
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}