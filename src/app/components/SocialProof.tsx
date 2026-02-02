'use client';

import React from 'react';

export const SocialProof = () => {
    const projects = [
        { img: "/assets/demo-1.jpg", name: "Biệt thự Vinh Tân" },
        { img: "/assets/demo-2.jpg", name: "Nhà phố Hưng Dũng" },
        { img: "/assets/demo-3.jpg", name: "Biệt thự Diễn Châu" },
        { img: "/assets/demo-4.jpg", name: "Villa Cửa Lò" },
        { img: "/assets/demo-5.jpg", name: "Nhà phố TP Vinh" },
        { img: "/assets/demo-6.jpg", name: "Biệt thự Hà Tĩnh" },
        { img: "/assets/demo-7.jpg", name: "Villa Nghi Lộc" },
        { img: "/assets/demo-8.jpg", name: "Nhà phố Quỳnh Lưu" },
        { img: "/assets/demo-9.jpg", name: "Biệt thự Thanh Hóa" },
    ];

    return (
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
                                poster="/assets/demo-0.jpg"
                            />
                            {/* Play button overlay for visual cue */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                                </div>
                            </div>
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
                                    className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
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
                    <button className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300">
                        Xem thêm công trình
                    </button>
                </div>
            </div>
        </section>
    );
};
