'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* INFO */}
        <div>
          <h3 className="font-bold text-2xl mb-6 text-primary tracking-widest">TÍN AN ELEVATOR</h3>
          <p className="mb-4 text-gray-400">
            CÔNG TY TNHH THANG MÁY TÍN AN ELEVATOR
          </p>
          <div className="space-y-2 text-gray-300">
            <p>MST: 2902247009</p>
            <p>Đại diện: Nguyễn Lưu Tình</p>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white uppercase">Liên hệ</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Phone className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Hotline: 085 214 5968</p>
                <p className="text-sm text-gray-400">Hỗ trợ 24/7</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
              <p>Nhà G1-G2, Đường số 2G, KĐT Cửa Tiền, P. Vinh Tân, TP. Vinh, Nghệ An</p>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-primary w-5 h-5 flex-shrink-0 mt-1" />
              <p>Giờ làm việc: 8:00 - 17:30 (T2 - T7)</p>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div>
          <h3 className="font-bold text-lg mb-6 text-white uppercase">Bản đồ</h3>
          <div className="bg-gray-800 h-64 rounded-lg overflow-hidden relative group">
            <iframe
              src="https://maps.google.com/maps?q=CÔNG%20TY%20TNHH%20THANG%20MÁY%20TÍN%20AN%20ELEVATOR%2C%20Nhà%20G1-G2%2C%20Đường%20số%202G%2C%20KĐT%20Cửa%20Tiền%2C%20Vinh%20Tân%2C%20Vinh%2C%20Nghệ%20An&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        © 2026 Tin An Elevator. All rights reserved. Designed by Antigravity.
      </div>
    </footer>
  );
};

