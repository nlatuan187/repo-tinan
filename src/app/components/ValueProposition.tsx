'use client';

import React from 'react';
import Image from 'next/image';

export const ValueProposition = () => {
    const values = [
        {
            id: 1,
            title: "Biểu tượng Đẳng cấp",
            description: "Điểm nhấn nội thất xa xỉ, gia tăng giá trị bất động sản.",
            icon: "/assets/icon-class.png"
        },
        {
            id: 2,
            title: "Tròn đạo Hiếu nghĩa",
            description: "Món quà sức khỏe cho cha mẹ già, sự an toàn cho con trẻ.",
            icon: "/assets/icon-filial.png"
        },
        {
            id: 3,
            title: "Công nghệ May đo",
            description: "Thiết kế linh hoạt theo kích thước thực tế, không phá vỡ kết cấu.",
            icon: "/assets/icon-tailor.png"
        }
    ];

    return (
        <section className="py-24 bg-background-cream relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                        KHÔNG CHỈ LÀ TIỆN ÍCH,<br />ĐÓ LÀ <span className="text-primary">TÀI SẢN GIA ĐÌNH</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {values.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {/* Placeholder for Icon - using simple text/fallback for now if image missing */}
                                <div className="relative w-10 h-10">
                                    {/* In real app use Next Image */}
                                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center text-secondary group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-center text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
