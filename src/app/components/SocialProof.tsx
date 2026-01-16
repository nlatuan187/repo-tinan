'use client';

import React from 'react';

export const SocialProof = () => {
    const projects = [
        "/assets/project-1.jpg",
        "/assets/project-2.jpg",
        "/assets/project-3.jpg",
        "/assets/project-4.jpg",
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-secondary">
                    CÔNG TRÌNH & <span className="text-primary">DẤU ẤN</span>
                </h2>

                {/* Simple Masonry-like Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {/* Note: In a real masonry, we might use CSS columns or a library. 
              Here we use a grid with some spanning for effect. */}

                    <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                        <img src={projects[0]} alt="Biệt thự Vinh Tân" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold">Biệt thự Vinh Tân</p>
                            <p className="text-white/80 text-sm">Thang kính 450kg</p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
                        <img src={projects[1]} alt="Nhà phố Hưng Dũng" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
                        <img src={projects[2]} alt="Biệt thự Diễn Châu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
                        <img src={projects[3]} alt="Khách sạn Cửa Lò" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold">Khách sạn Cửa Lò</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
