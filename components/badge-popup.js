"use client";
import { useEffect, useState } from "react";

export default function BadgePopup({ level, onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onClose, 300);
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const getBadgeImage = () => {
        if (level >= 10) return "/badges/level3.png";
        if (level >= 5) return "/badges/level2.png";
        return "/badges/level1.png";
    };

    const getBadgesTitle = () => {
        if (level >= 10) return "Productivity Master";
        if (level >= 5) return "Getting Things Done";
        return "First Steps";
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
            <div className={`relative bg-white p-8 rounded-3xl shadow-2xl transform transition-transform duration-300 ${show ? 'scale-100' : 'scale-90'}`}>
            <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#4CAF50' }}>
                New Badge Unlocked!
            </h2>
                <img
                    src={getBadgeImage()}
                    alt={getBadgesTitle()}
                    className="w-64 h-64 mx-auto mb-4"
                />
                <p className="text-2xl font-bold text-center text-gray-800">{getBadgesTitle()}</p>
                <p className="text-lg text-center text-gray-600 mt-2">Level {level}</p>
            </div>
        </div>
    );
}