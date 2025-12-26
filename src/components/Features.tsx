"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Brain, Zap, Globe, Lock, Search } from "lucide-react";

const FEATURES = [
    {
        title: "AI Document Processing",
        description: "Automate data extraction from identity documents with 99.9% accuracy using advanced OCR.",
        icon: <Brain className="w-6 h-6 text-primary" />,
    },
    {
        title: "Biometric Verification",
        description: "Real-time face matching and liveness detection to ensure the person is who they claim to be.",
        icon: <Search className="w-6 h-6 text-secondary" />,
    },
    {
        title: "Fraud Prevention",
        description: "Identify suspicious patterns and stolen identities before they impact your business.",
        icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    },
    {
        title: "Global Compliance",
        description: "Stay compliant with AML, KYC, and GDPR regulations across 200+ countries.",
        icon: <Globe className="w-6 h-6 text-primary" />,
    },
    {
        title: "Instant Verification",
        description: "Verify users in seconds with our optimized processing pipeline and global data sources.",
        icon: <Zap className="w-6 h-6 text-secondary" />,
    },
    {
        title: "Bank-Grade Security",
        description: "All data is encrypted in transit and at rest using the highest industry standards.",
        icon: <Lock className="w-6 h-6 text-accent" />,
    },
];

export function Features() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Solutions</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Comprehensive AI-driven tools designed to secure your business and
                        streamline user onboarding experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-3xl group hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
