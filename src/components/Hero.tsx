"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Lock, ScanLine } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
            {/* Background Orbits */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[1000px] pointer-events-none">
                <Orbit radius={200} duration={20} icon={<Shield className="text-primary w-6 h-6" />} />
                <Orbit radius={350} duration={35} reverse icon={<Lock className="text-secondary w-5 h-5" />} />
                <Orbit radius={500} duration={50} icon={<ScanLine className="text-accent w-4 h-4" />} />

                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary mb-6 inline-block tracking-widest uppercase">
                        AI Powered Security
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
                        Seamlessly Verify Identities <br className="hidden md:block" />
                        <span className="text-gradient">with Precision AI</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Enhance security, prevent fraud, and automate compliance with our
                        state-of-the-art document processing and biometric verification tools.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-white/90 transition-all group">
                            Get Started
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-full glass font-semibold hover:bg-white/10 transition-all">
                            Book a Demo
                        </button>
                    </div>
                </motion.div>

                {/* Floating stats or logos could go here as seen in some variations */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-20 flex flex-wrap justify-center gap-12 grayscale opacity-50"
                >
                    {/* Mock partner logos */}
                    <div className="flex items-center gap-2 font-bold text-xl italic">TRUSTED BY INDUSTRY LEADERS</div>
                </motion.div>
            </div>
        </section>
    );
}

function Orbit({ radius, duration, reverse = false, icon }: { radius: number; duration: number; reverse?: boolean; icon?: React.ReactNode }) {
    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"
            style={{ width: radius * 2, height: radius * 2 }}
        >
            <motion.div
                animate={{ rotate: reverse ? -360 : 360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-1/2 -ml-3 -mt-3"
            >
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="glass p-3 rounded-full relative bg-black/50">
                        {icon || <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
