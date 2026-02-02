'use client';

import React, { useState } from 'react';

export const SocialProof = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Video Section - Left */}
                        <div className="w-full lg:w-1/3">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px] lg:min-h-full bg-gray-900">
                                <video
                                    src="/assets/video-1.mp4"
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* Video caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white font-bold">Video công trình thực tế</p>
                                    <p className="text-white/80 text-sm">Thang máy Tín An</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section - Right (3x3 grid) */}
                        <div className="w-full lg:w-2/3">
                            <div className="grid grid-cols-3 gap-3">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedImage(project.img)}
                                        className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                                        {/* Zoom icon on hover */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white text-sm font-medium truncate">{project.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats & CTA */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-8">
                        <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">50+</p>
                                <p className="text-gray-600 text-sm">Công trình</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-primary">100%</p>
                                <p className="text-gray-600 text-sm">Khách hài lòng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image */}
                    <img
                        src={selectedImage}
                        alt="Công trình Tín An"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Hint text */}
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                        Nhấn vào nền hoặc nút X để đóng
                    </p>
                </div>
            )}
        </>
    );
};
