import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FooterSection() {
    const menu = {
        left: [
            {
                title: "TOP",
                items: [],
            },
            {
                title: "service",
                items: [
                    "Interior renovation",
                    "Bathroom renovation",
                    "Small repair work",
                    "Electrical work",
                    "Cleaning",
                    "Construction flow",
                    "Frequently Asked Questions",
                ],
            },
            {
                title: "Construction example",
                items: [],
            },
            {
                title: "About J support",
                items: ["Company Profile", "Staff introduction"],
            },
            {
                title: "what's new",
                items: [],
            },
            {
                title: "Work together",
                items: ["Employee Interview", "Looking for partner companies"],
            },
        ],
    };

    return (
    <div className="bg-[#f9f8f6] w-[85%] mx-auto flex justify-center items-center py-2 border-t border-gray-200">
            <div
                className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full max-w-7xl items-center"
                style={{ height: '12.5vw', minHeight: '100px', maxHeight: '180px' }}
            >
            {/* Left Navigation (reduced width) */}
            <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-3 border-r border-gray-300 pr-4">
                {menu.left.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="text-[10px] font-semibold text-gray-700 flex items-center gap-1">
                            <span className="text-orange-500">▶</span> {section.title}
                        </h3>
                        <ul className="mt-1 space-y-0.5">
                            {section.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ scale: 1.07, x: 3 }}
                                    className="text-[10px] text-gray-400 cursor-pointer leading-tight"
                                >
                                    <a href="#samepage">{item}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Right Section: Replace with provided image (wider) */}
            <div className="col-span-2 flex items-center justify-center h-full">
                <img
                    src="/footer1.png"
                    alt="Footer Info"
                    className="rounded-md object-cover"
                    style={{ width: '100%', height: '90%', maxHeight: '100%' }}
                />
            </div>
            </div>
        </div>
    );
}
