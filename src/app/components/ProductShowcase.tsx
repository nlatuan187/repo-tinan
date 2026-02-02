'use client';

import React, { useState } from 'react';

export const ProductShowcase = () => {
    const [activeTab, setActiveTab] = useState<'glass' | 'inox' | 'wood'>('glass');

    const products = {
        glass: [
            { id: 1, name: "Thang máy Kính (Panorama)", img: "/assets/product-1.jpg" },
            { id: 2, name: "Thang máy Kính (Panorama)", img: "/assets/product-2.jpg" },
            { id: 3, name: "Thang máy Kính (Panorama)", img: "/assets/product-3.jpg" },
        ],
        inox: [
            { id: 4, name: "Thang máy Inox gương", img: "/assets/product-4.jpg" },
            { id: 5, name: "Thang máy Inox gương", img: "/assets/product-5.jpg" },
        ],
        wood: [
            { id: 7, name: "Thang máy Ốp gỗ / Giả gỗ", img: "/assets/product-6.jpg" },
            { id: 8, name: "Thang máy Ốp gỗ / Giả gỗ", img: "/assets/product-7.jpg" },
        ]
    };

    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-secondary">
                    BỘ SƯU TẬP <span className="text-primary">ĐẲNG CẤP</span>
                </h2>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <button
                        onClick={() => setActiveTab('glass')}
                        className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'glass' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-secondary hover:bg-gray-100'
                            }`}
                    >
                        Thang máy Kính (Panorama)
                    </button>
                    <button
                        onClick={() => setActiveTab('inox')}
                        className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'inox' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-secondary hover:bg-gray-100'
                            }`}
                    >
                        Thang máy Inox gương
                    </button>
                    <button
                        onClick={() => setActiveTab('wood')}
                        className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'wood' ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-secondary hover:bg-gray-100'
                            }`}
                    >
                        Thang máy Ốp gỗ / Giả gỗ
                    </button>
                </div>

                {/* Product Grid - Adjusted for mobile horizontal scroll */}
                <div className="flex md:flex-wrap overflow-x-auto md:overflow-visible gap-6 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {products[activeTab].map((item) => (
                        <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 min-w-[280px] w-[85vw] md:w-[350px] snap-center flex-shrink-0">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img
                                    src={item.img}
                                    alt="Thang máy Tín An"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button className="w-full py-3 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-primary hover:text-white transition-colors">
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
