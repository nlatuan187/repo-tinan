'use client';

import React from 'react';

export const FounderStory = () => {
    return (
        <section id="founder-story" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Frame */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl z-10">
                            <img
                                src="/assets/founder.jpg"
                                alt="Founder Nguyễn Lưu Tình"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative border behind */}
                        <div className="absolute top-8 left-8 w-full h-full border-2 border-primary rounded-2xl z-0 hidden lg:block" />

                        <div className="absolute bottom-10 -right-4 bg-white p-6 shadow-xl rounded-xl z-20 max-w-xs hidden lg:block">
                            <p className="text-primary font-bold text-lg">20 Năm</p>
                            <p className="text-gray-600 text-sm">Kinh nghiệm trong ngành thang máy & kiến trúc</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Câu chuyện niềm tin</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary leading-tight">
                            TÔI KHÔNG BÁN THANG MÁY,<br />
                            TÔI TRAO GỬI <span className="text-primary">SỰ AN TÂM</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
                            <p>
                                "Là một người con xứ Nghệ, tôi hiểu rằng ngôi nhà không chỉ là nơi để ở, mà là thành quả của cả một đời người phấn đấu.
                                Khi đưa một chiếc thang máy vào ngôi nhà ấy, đó phải là một tác phẩm hoàn hảo về thẩm mỹ và chuẩn mực về an toàn."
                            </p>
                            <p>
                                Mỗi chiếc thang máy Tín An đều được tôi và cộng sự chăm chút như chính ngôi nhà của mình.
                                Từ khâu khảo sát để không phá vỡ kết cấu cũ, đến từng đường keo mũi chỉ khi lắp đặt.
                            </p>
                            <p className="font-bold text-secondary italic">
                                — Founder Nguyễn Lưu Tình
                            </p>
                        </div>

                        <div className="mt-10">
                            <button className="text-primary font-bold hover:text-primary-dark transition-colors flex items-center gap-2 group">
                                Xem hồ sơ năng lực
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
