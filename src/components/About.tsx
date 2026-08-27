// ==========================================================================
// ABOUT COMPONENT (ส่วนแสดงข้อมูลส่วนตัวและการ์ดติดต่อ)
// ==========================================================================

import { User, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-[9%]">
            {/* ส่วนหัวข้อ About Me */}
            <div className="text-center w-full mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] text-xs font-bold tracking-widest mb-3 shadow-[0_0_15px_rgba(24,247,184,0.15)]">
                    <User size={14} />
                    <span>ABOUT ME</span>
                </div>
                <h2 className="text-4xl font-extrabold text-white mb-3">
                    About <span className="gradient-text">Me</span>
                </h2>
                <p className="text-slate-400 text-base max-w-xl mx-auto">
                    Passionate Developer & ICT Senior Student at Prince of Songkla University
                </p>
            </div>

            {/* ตารางแสดงผล 2 การ์ด (General Info และ Contact Info) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* การ์ด 1: ข้อมูลทั่วไป (General Info Glass Card) */}
                <div className="glass-card rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <User className="text-[#18f7b8]" size={24} />
                        <span>General Info</span>
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                            <span className="text-slate-400 font-medium text-sm">Nickname</span>
                            <span className="text-white font-semibold text-base">Meen</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                <Award size={16} className="text-[#18f7b8]" /> Age
                            </span>
                            <span className="text-white font-semibold text-base">21 years old</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                            <span className="text-slate-400 font-medium text-sm flex items-center gap-2">
                                <Calendar size={16} className="text-[#18f7b8]" /> Birth Date
                            </span>
                            <span className="text-white font-semibold text-base">March 15, 2005</span>
                        </div>
                        <div className="flex justify-between items-center py-2.5">
                            <span className="text-slate-400 font-medium text-sm">Status</span>
                            <span className="text-white font-semibold text-base">Undergraduate Student</span>
                        </div>
                    </div>
                </div>

                {/* การ์ด 2: ข้อมูลติดต่อ (Contact Info Glass Card) */}
                <div className="glass-card rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                        <Phone className="text-[#18f7b8]" size={24} />
                        <span>Contact Info</span>
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        I am open to job opportunities, internships, and freelance projects. Let's build something great together!
                    </p>
                    <div className="space-y-4">
                        {/* อีเมล */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] flex items-center justify-center shrink-0">
                                <Mail size={22} />
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Email</span>
                                <a href="mailto:mean1940@gmail.com" className="text-white font-semibold text-base hover:text-[#18f7b8] transition-colors">
                                    mean1940@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* เบอร์โทรศัพท์ */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] flex items-center justify-center shrink-0">
                                <Phone size={22} />
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Phone</span>
                                <a href="tel:0971590552" className="text-white font-semibold text-base hover:text-[#18f7b8] transition-colors">
                                    097-159-0552
                                </a>
                            </div>
                        </div>

                        {/* ที่อยู่/มหาวิทยาลัย */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#18f7b8]/10 border border-[#18f7b8]/25 text-[#18f7b8] flex items-center justify-center shrink-0">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Location</span>
                                <p className="text-white font-semibold text-base mb-0">
                                    Prince of Songkla University, Hat Yai, Thailand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
