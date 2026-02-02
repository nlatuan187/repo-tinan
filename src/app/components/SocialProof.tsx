'use client';

import React, { useState } from 'react';

export const SocialProof = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const projects = [
        { img: "/assets/demo-0.jpg", name: "Biệt thự Vinh Tân" },
        { img: "/assets/demo-1.jpg", name: "Nhà phố Hưng Dũng" },
        { img: "/assets/demo-2.jpg", name: "Biệt thự Diễn Châu" },
        { img: "/assets/demo-3.jpg", name: "Villa Cửa Lò" },
        { img: "/assets/demo-4.jpg", name: "Nhà phố TP Vinh" },
        { img: "/assets/demo-5.jpg", name: "Biệt thự Hà Tĩnh" },
        { img: "/assets/demo-6.jpg", name: "Villa Nghi Lộc" },
        { img: "/assets/demo-7.jpg", name: "Nhà phố Quỳnh Lưu" },
        { img: "/assets/demo-8.jpg", name: "Biệt thự Thanh Hóa" },
    ];

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % projects.length);
        }
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
        }
    };

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    return (
        <>
            <section id="projects" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase mb-2 block">
                            Công trình thực tế
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                            CÔNG TRÌNH TÍN AN <span className="text-primary">TRÊN KHẮP XỨ NGHỆ</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hơn 50 công trình hoàn thành với sự hài lòng tuyệt đối từ khách hàng
                        </p>
                    </div>

                    {/* Main Content: Video Left + Gallery Right */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Video Section - Left (Adjusted width slightly) */}
                        <div className="w-full lg:w-[35%]">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px] lg:min-h-full bg-gray-900 ring-1 ring-gray-200">
                                <video
                                    src="/assets/video-1.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* Video caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="text-white font-bold text-lg">Video công trình thực tế</p>
                                    <p className="text-white/80">Thang máy Tín An</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section - Right (3x3 grid) */}
                        <div className="w-full lg:w-[65%]">
                            {/* Visual Hint */}
                            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 justify-end italic">
                                <span>* Chạm vào ảnh để xem chi tiết</span>
                            </div>

                            <div className="grid grid-cols-3 gap-3 md:gap-4">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedIndex(index)}
                                        className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ring-1 ring-gray-100 hover:ring-primary/50"
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                        {/* Always visible but subtle Zoom icon */}
                                        <div className="absolute top-2 right-2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white text-xs md:text-sm font-medium truncate text-center">{project.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats & CTA */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0 w-full">
                            <div className="text-center px-6 border-r border-gray-200 last:border-0">
                                <p className="text-3xl font-bold text-primary">50+</p>
                                <p className="text-gray-600 text-sm">Công trình</p>
                            </div>
                            <div className="text-center px-6">
                                <p className="text-3xl font-bold text-primary">100%</p>
                                <p className="text-gray-600 text-sm">Khách hài lòng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Buttons - Left */}
                    <button
                        className="absolute left-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white hidden md:flex"
                        onClick={handlePrev}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full h-full flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={projects[selectedIndex].img}
                            alt={projects[selectedIndex].name}
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl animate-fade-in"
                        />

                        {/* Caption */}
                        <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                            <span className="inline-block px-4 py-2 bg-black/50 text-white rounded-full text-sm backdrop-blur-md">
                                {projects[selectedIndex].name} ({selectedIndex + 1}/{projects.length})
                            </span>
                        </div>
                    </div>

                    {/* Navigation Buttons - Right */}
                    <button
                        className="absolute right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white hidden md:flex"
                        onClick={handleNext}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Mobile Tap Zones */}
                    <div className="absolute inset-y-0 left-0 w-1/3 z-40 md:hidden" onClick={handlePrev} />
                    <div className="absolute inset-y-0 right-0 w-1/3 z-40 md:hidden" onClick={handleNext} />
                </div>
            )}
        </>
    );
};
