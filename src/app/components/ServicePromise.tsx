'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const ServicePromise = () => {
    return (
        <section id="service" className="py-24 bg-gradient-to-br from-primary/5 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-16 text-secondary">
                    AN TÂM TUYỆT ĐỐI TẠI <span className="text-primary">THỊ TRƯỜNG NGHỆ AN</span>
                </h2>

                <div className="space-y-6 max-w-3xl mx-auto">
                    {/* Promise 1 */}
                    <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                        <CheckCircle2 className="text-green-500 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-xl text-secondary mb-2">Trực tiếp thi công</h4>
                            <p className="text-gray-600">
                                Đội ngũ kỹ thuật tay nghề cao, giám sát bởi Nhà sáng lập 20 năm kinh nghiệm.
                                Cam kết không bán thầu, đảm bảo chất lượng đồng nhất.
                            </p>
                        </div>
                    </div>

                    {/* Promise 2 */}
                    <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                        <CheckCircle2 className="text-green-500 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-xl text-secondary mb-2">Hỗ trợ siêu tốc trong 1-2h</h4>
                            <p className="text-gray-600">
                                Trụ sở ngay tại TP. Vinh, chúng tôi có mặt xử lý sự cố nhanh chóng.
                                Lợi thế vượt trội so với các đơn vị ở xa hoặc chỉ có văn phòng đại diện.
                            </p>
                        </div>
                    </div>

                    {/* Promise 3 */}
                    <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                        <CheckCircle2 className="text-green-500 w-8 h-8 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-xl text-secondary mb-2">Linh kiện chính hãng CO/CQ</h4>
                            <p className="text-gray-600">
                                Động cơ nhập khẩu (Ý, Đức, Nhật...) đầy đủ giấy tờ xuất xứ.
                                Minh bạch tuyệt đối với khách hàng về nguồn gốc thiết bị.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
