"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight, MapPin, Calendar, Clock, Sparkles,
  Users, Shirt, ArrowDownRight, Music, Heart,
  ListOrdered, MessageSquare, Send, Timer,
  ExternalLink, Grid, Layout
} from "lucide-react";

export default function ReimaginedGraduation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // --- STATE UNTUK GALERI ---
  const [showAll, setShowAll] = useState(false);
  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // --- LOGIK COUNTDOWN TIMER ---
  const [timeLeft, setTimeLeft] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 });

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date("June 11, 2024 07:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
          jam: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          menit: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          detik: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? containerRef : undefined,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const flowerRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const heroTextX = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  if (!isMounted) return <div className="min-h-screen bg-[#2D0A0A]" />;

  return (
    <main ref={containerRef} className="relative bg-[#FCFAFA] font-serif text-[#1A1A1A] overflow-x-hidden">

      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-[#C5A059] z-[100] origin-left" />

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#2D0A0A]">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
          <h2 className="text-[20vw] font-black text-white leading-none tracking-tighter">MOKLET</h2>
        </div>

        <div className="relative w-full md:w-1/2 h-full flex items-center justify-center p-12 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-10 w-full aspect-[3/4] max-w-md border border-[#C5A059]/30 p-4"
          >
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?q=80&w=800')] bg-cover bg-center grayscale contrast-125" />
            <motion.img
              style={{ rotate: flowerRotate }}
              src="https://www.transparentpng.com/download/floral/floral-free-download-transparent-png-3.png"
              className="absolute -bottom-10 -right-10 w-48 invert brightness-150"
            />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 z-10 text-white order-1 md:order-2">
          <motion.div style={{ x: heroTextX }} className="space-y-4">
            <span className="inline-block px-4 py-1 border border-[#C5A059] text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-sans font-bold">
              SMK Telkom Malang
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              WISUDA <br />
              <span className="text-[#C5A059] italic font-light">ANGKATAN 32</span>
            </h1>
            <p className="text-lg md:text-xl font-light opacity-60 max-w-sm italic">
              Celebrating the transition of Class 32 from students to future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE EXPERIENCE & DETAILS */}
      <section className="relative z-20 bg-[#FFFDF9] pt-10 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="text-center space-y-8 mb-24">
            <h2 className="text-2xl md:text-4xl leading-snug">
              Yth. Orangtua / Wali Murid <br />
              <span className="text-[#C5A059] italic">Kelas XII Angkatan XXX</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#581010] mx-auto rounded-full" />
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto italic text-sm md:text-base">
              "Sebuah akhir hanyalah awal dari petualangan yang baru. Kami mengundang Bapak/Ibu untuk menjadi saksi langkah pertama putra-putri kita menuju masa depan."
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Calendar, label: "Tanggal", value: "11 Juni 2024", extra: "Selasa Wage", theme: "light" },
              { icon: Clock, label: "Waktu", value: "07:00 — 12:00", extra: "Wib (Pagi)", theme: "dark" },
              { icon: MapPin, label: "Lokasi", value: "Graha Cakrawala", extra: "Kota Malang", theme: "light" },
            ].map((item, i) => (
              <motion.div key={i} custom={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`p-10 rounded-[3rem] text-center flex flex-col items-center border shadow-sm ${item.theme === "dark" ? "bg-[#581010] text-white border-[#581010]" : "bg-white text-[#333] border-gray-100"}`}>
                <item.icon className="text-[#C5A059] mb-4" size={32} />
                <p className="text-[10px] uppercase tracking-widest mb-2 font-sans font-black opacity-50">{item.label}</p>
                <p className="text-lg font-bold">{item.value}</p>
                <p className="text-xs italic opacity-50">{item.extra}</p>
              </motion.div>
            ))}
          </div>

          {/* Ketentuan Kehadiran */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            <div className="bg-[#fcfcfc] p-8 rounded-[2rem] border border-gray-100 flex gap-6 items-start">
              <div className="bg-[#581010]/5 p-4 rounded-2xl text-[#581010]"><Users size={24} /></div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Kuota Tamu</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">Maksimal membawa 2 orang pendamping (Ayah & Ibu). Harap tunjukkan kartu akses digital saat registrasi.</p>
              </div>
            </div>
            <div className="bg-[#fcfcfc] p-8 rounded-[2rem] border border-gray-100 flex gap-6 items-start">
              <div className="bg-[#C5A059]/10 p-4 rounded-2xl text-[#C5A059]"><Shirt size={24} /></div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Dresscode</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">Pria: Batik Lengan Panjang / Formal. Wanita: Menyesuaikan (Sopan & Rapi).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REIMAGINED GALLERY WITH "VIEW ALL" */}
      <section className="py-32 bg-[#FCFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-2">Our Journey</p>
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#333]">Galeri Kenangan</h3>
          </div>

          {/* Tombol Toggle Lihat Semua yang Diperbesar */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#581010] rounded-full text-[12px] font-black tracking-widest uppercase text-[#581010] hover:bg-[#581010] hover:text-white transition-all duration-300 shadow-md shadow-[#581010]/10"
          >
            {showAll ? (
              <>
                <Layout size={18} />
                <span>Kembali ke Slide</span>
              </>
            ) : (
              <>
                <Grid size={18} />
                <span>Lihat Semua Foto</span>
              </>
            )}
          </motion.button>
        </div>

        <div className="relative px-6">
          <AnimatePresence mode="wait">
            {!showAll ? (
              /* VERSI CAROUSEL */
              <motion.div
                key="carousel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x cursor-grab active:cursor-grabbing"
              >
                {galleryImages.map((i) => (
                  <motion.div key={i} whileHover={{ y: -15 }} className="min-w-[300px] md:min-w-[450px] snap-center">
                    <div className="aspect-[16/10] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/5 group">
                      <img
                        src={`https://images.unsplash.com/photo-1523050853064-886918823f6d?q=80&w=800&sig=${i}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        alt="Gallery"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* VERSI GRID */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {galleryImages.map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="aspect-square bg-gray-100 rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
                      <img
                        src={`https://images.unsplash.com/photo-1523050853064-886918823f6d?q=80&w=800&sig=${i}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        alt="Gallery Grid"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION: SUSUNAN ACARA */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <ListOrdered className="text-[#C5A059]" size={28} />
            <h3 className="text-3xl font-bold tracking-tighter uppercase">Susunan Acara</h3>
          </div>
          <div className="space-y-0">
            {[
              "Prosesi Masuk Wisudawan", "Menyanyikan Lagu Indonesia Raya", "Laporan Kelulusan",
              "Prosesi Pengukuhan (Samir)", "Janji Wisudawan", "Penghargaan Lulusan Terbaik", "Penutup"
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-5 border-b border-gray-50 group hover:px-4 transition-all">
                <span className="text-xs font-sans font-bold text-[#C5A059]">0{i + 1}</span>
                <p className="flex-1 ml-8 text-lg text-gray-700">{item}</p>
                <Clock size={14} className="text-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: TIMER & KESAN PESAN */}
      <section className="py-32 px-6 bg-[#2D0A0A] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Timer */}
          <div className="space-y-12">
            <div>
              <Timer className="text-[#C5A059] mb-6" size={40} />
              <h2 className="text-5xl font-bold tracking-tighter uppercase">Menuju Hari <br />Kemenangan</h2>
              <p className="text-white/40 mt-4 italic">Waktu tersisa hingga prosesi dimulai:</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-[#C5A059]">{value}</p>
                  <p className="text-[8px] uppercase tracking-[0.2em] opacity-40 mt-2">{label}</p>
                </div>
              ))}
            </div>
            <div className="pt-8">
              <Link href="/rsvp">
                <button className="px-10 py-5 bg-[#C5A059] text-[#2D0A0A] rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-transform">
                  Konfirmasi Kehadiran
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Kesan Pesan Form */}
          <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
            <div className="flex items-center gap-4 mb-8">
              <MessageSquare className="text-[#C5A059]" />
              <h3 className="text-xl font-bold uppercase tracking-widest">Kesan & Pesan</h3>
            </div>
            <form className="space-y-6 font-sans">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#C5A059] transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Tuliskan pesan berkesanmu selama di Moklet..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#C5A059] transition-colors resize-none"
              />
              <button className="w-full py-4 bg-white text-[#2D0A0A] rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-[#C5A059] transition-colors">
                Kirim Pesan <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-white text-center">
        <div className="mb-8 flex justify-center gap-8 opacity-20 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/id/4/44/Logo_Yayasan_Pendidikan_Telkom.png" className="h-10" alt="YPT" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_SMK_Telkom_Malang.png" className="h-10" alt="Moklet" />
        </div>
        <p className="text-[10px] tracking-[1em] uppercase text-gray-300 font-sans font-bold">
          Moklet • Angkatan 32 • 2024
        </p>
      </footer>

    </main>
  );
}