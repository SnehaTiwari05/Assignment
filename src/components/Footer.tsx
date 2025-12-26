"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-sm">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight">Aadrila.ai</span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            Empowering businesses with AI-driven security and identity verification solutions.
                        </p>
                        <div className="flex gap-4">
                            <Twitter className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                            <Github className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><Link href="#" className="hover:text-white transition-colors">Identity Verification</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Document Processing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Biometric Auth</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Fraud Detection</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Compliance</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>© 2024 Aadrila Technologies. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
                            <Mail className="w-4 h-4" /> support@aadrila.ai
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
