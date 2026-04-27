"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MapPin, Calendar, Clock } from "lucide-react";
import { useRef } from "react";

export default function UltraElegantLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animasi Parallax untuk elemen visual
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const opacityHeader = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main ref={containerRef} className="relative min-h-[150vh] bg-[#FFFDF9] font-serif overflow-x-hidden">
      
      {/* SECTION 1: CINEMATIC HERO (Sticky) */}
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#581010]">
        
        {/* Background Texture & Ornaments */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
        
        {/* Floating Floral Ornaments (Inspirasi Foto & Video) */}
        <motion.img 
          style={{ y: textY }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          src="https://www.transparentpng.com/download/floral/floral-free-download-transparent-png-3.png"
          className="absolute -top-20 -left-20 w-[400px] md:w-[600px] invert brightness-200"
        />
        <motion.img 
          style={{ y: textY }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          src="https://www.transparentpng.com/download/floral/floral-free-download-transparent-png-3.png"
          className="absolute -bottom-20 -right-20 w-[400px] md:w-[600px] scale-x-[-1] invert brightness-200"
        />

        {/* Content Header */}
        <motion.div 
          style={{ opacity: opacityHeader }}
          className="z-10 text-center px-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex gap-4 items-center justify-center"
          >
            <img src="https://upload.wikimedia.org/wikipedia/id/4/44/Logo_Yayasan_Pendidikan_Telkom.png" className="h-12 drop-shadow-lg" alt="YPT" />
            <div className="h-10 w-[1px] bg-white/40" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_SMK_Telkom_Malang.png" className="h-12 drop-shadow-lg" alt="SMK Telkom" />
          </motion.div>

          <p className="text-[#C5A059] tracking-[0.6em] text-[10px] uppercase mb-4 font-sans font-bold">The Official Invitation</p>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase mb-2">
            Angkatan <span className="italic font-light text-[#C5A059]">XXX</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 tracking-[0.3em] font-light italic">Commencement Exercises</p>
          
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent" />
            <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase animate-pulse">Scroll to Explore</p>
          </div>
        </motion.div>

        {/* Wave Overlay Smooth */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-[#FFFDF9]">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 2: THE DETAILS */}
      <section className="relative z-20 bg-[#FFFDF9] pt-10 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Letter Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 mb-24"
          >
            <h2 className="text-2xl md:text-4xl text-[#333] leading-snug">
              Yth. Orangtua / Wali Murid <br />
              <span className="text-[#C5A059] italic">Kelas XII Angkatan XXX</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#581010] mx-auto" />
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto italic">
              "Sebuah akhir hanyalah awal dari petualangan yang baru. Kami mengundang Bapak/Ibu untuk menjadi saksi langkah pertama putra-putri kita menuju masa depan."
            </p>
          </motion.div>

          {/* Event Card (Bento Style - Tidak Pasaran) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-center flex flex-col items-center"
            >
              <Calendar className="text-[#C5A059] mb-4" size={32} strokeWidth={1} />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Tanggal</p>
              <p className="text-lg font-bold">11 Juni 2024</p>
              <p className="text-xs text-gray-400">Selasa Wage</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#581010] p-10 rounded-[3rem] shadow-xl text-center flex flex-col items-center text-white"
            >
              <Clock className="text-[#C5A059] mb-4" size={32} strokeWidth={1} />
              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Waktu</p>
              <p className="text-lg font-bold">07:00 — 12:00</p>
              <p className="text-xs text-white/40">Waktu Indonesia Barat</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-center flex flex-col items-center"
            >
              <MapPin className="text-[#C5A059] mb-4" size={32} strokeWidth={1} />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Lokasi</p>
              <p className="text-lg font-bold">Graha Cakrawala</p>
              <p className="text-xs text-gray-400 italic">Kota Malang</p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="mt-24 text-center">
            <Link href="/invitation/SAMPLE-ID">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-6 bg-[#581010] text-white pl-10 pr-4 py-5 rounded-full shadow-[0_20px_50px_rgba(88,16,16,0.3)] overflow-hidden"
              >
                <span className="text-xs font-bold tracking-[0.4em] uppercase z-10">Buka Undangan Digital</span>
                <div className="bg-[#C5A059] p-3 rounded-full z-10 group-hover:rotate-45 transition-transform duration-500">
                  <ChevronRight size={20} />
                </div>
                {/* Efek Kilau */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </Link>
            <p className="text-[9px] text-gray-400 mt-6 uppercase tracking-[0.5em]">Tap to unlock your experience</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white text-center border-t border-gray-50">
        <p className="text-[10px] text-gray-300 tracking-[1em] uppercase">Moklet • Class of 2024</p>
      </footer>
    </main>
  );
}