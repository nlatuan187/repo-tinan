'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions = () => {
    return (
        <>
            {/* Phone Button - Left */}
            <div className="fixed bottom-6 left-6 z-50 animate-bounce">
                <a
                    href="tel:0852145968"
                    className="flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors border-2 border-white ring-2 ring-green-600/30"
                    aria-label="Gọi điện ngay"
                >
                    <Phone className="w-6 h-6 animate-pulse" />
                </a>
            </div>

            {/* Zalo Button - Right */}
            <div className="fixed bottom-6 right-6 z-50">
                <a
                    href="https://zalo.me/0852145968"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors border-2 border-white ring-2 ring-blue-600/30"
                    aria-label="Chat Zalo"
                >
                    <span className="font-bold text-xs uppercase tracking-tighter">Zalo</span>
                </a>
            </div>
        </>
    );
};
