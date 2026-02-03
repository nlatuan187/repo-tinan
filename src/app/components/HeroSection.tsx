import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                {/* Note: In a real Next.js app, using the Image component is better for optimization.
            We use a standard img tag here with object-cover as a fallback if the Next image config isn't fully set up for placeholders. */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
                <img
                    src="/assets/hero-bg.jpg"
                    alt="Thang máy biêt thự Tín An Luxury"
                    className="w-full h-full object-cover object-[55%_center] md:object-[52%_center]"
                />
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center mt-16">
                <div className="mb-6 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 border border-primary/50 rounded-full bg-black/30 backdrop-blur-sm text-primary-dark text-sm font-semibold tracking-widest uppercase mb-4">
                        CÔNG NGHỆ CHÂU ÂU - ĐẲNG CẤP TINH HOA
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-sans leading-tight tracking-tight mb-6">
                        THANG MÁY TÍN AN<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-primary to-yellow-600">
                            NÂNG TẦM DI SẢN NGÔI NHÀ VIỆT
                        </span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                        Giải pháp thang máy may đo riêng cho gia chủ xứ Nghệ.<br className="hidden md:block" />
                        An toàn tuyệt đối - Đẳng cấp thượng lưu.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button className="group relative px-8 py-4 bg-primary overflow-hidden rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine" />
                        <span className="relative font-bold text-white tracking-wide uppercase">
                            Tư vấn khảo sát miễn phí
                        </span>
                    </button>

                    <button className="px-8 py-4 border border-white/40 hover:bg-white hover:text-secondary hover:border-white rounded-full font-bold uppercase tracking-wide transition-all duration-300">
                        Xem bộ sưu tập
                    </button>
                </div>
            </div>
        </section>
    );
};
