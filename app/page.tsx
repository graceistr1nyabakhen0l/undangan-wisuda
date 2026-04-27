"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight, MapPin, Calendar, Clock, Sparkles,
  Users, Shirt, ArrowDownRight, Music, Heart,
  ListOrdered, MessageSquare, Send, Timer,
  ExternalLink, Grid, Layout, Volume2, VolumeX
} from "lucide-react";

export default function ReimaginedGraduation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  // Fitur Add to Calendar
  const addToCalendar = () => {
    const event = {
      text: "Wisuda Angkatan 32 SMK Telkom Malang",
      dates: "20240611T070000Z/20240611T120000Z",
      location: "Graha Cakrawala Universitas Negeri Malang",
    };
    window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${event.text}&dates=${event.dates}&location=${event.location}`, '_blank');
  };

  if (!isMounted) return <div className="min-h-screen bg-[#2D0A0A]" />;

  return (
    <main ref={containerRef} className="relative bg-[#FCFAFA] font-serif text-[#1A1A1A] overflow-x-hidden">

      {/* Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-[#C5A059] z-[100] origin-left" />

      {/* Floating Music Player */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
            isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
          }}
          className="w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all text-[#581010]"
        >
          {isPlaying ? <Volume2 size={20} className="animate-pulse" /> : <VolumeX size={20} />}
        </button>
        <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      </div>

      {/* SECTION 1: EDITORIAL HERO */}
      <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden bg-[#2D0A0A]">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <h2 className="text-[20vw] font-black text-white leading-none">MOKLET</h2>
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
              alt="ornament"
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
            <p className="text-lg md:text-xl font-light opacity-60 max-w-sm italic mt-4">
              Celebrating the transition of Class 32 from students to future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DETAILS */}
      <section className="relative z-20 bg-[#FFFDF9] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl leading-snug">
              Yth. Orangtua / Wali Murid <br />
              <span className="text-[#C5A059] italic">Kelas XII Angkatan XXXII</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#581010] mx-auto my-6 opacity-30" />
            <p className="text-gray-500 italic max-w-xl mx-auto text-sm">"Sebuah akhir hanyalah awal dari petualangan yang baru. Kami mengundang Bapak/Ibu untuk menjadi saksi langkah pertama putra-putri kita."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Calendar, label: "Tanggal", value: "11 Juni 2024", extra: "Selasa", theme: "light" },
              { icon: Clock, label: "Waktu", value: "07:00 — 12:00", extra: "WIB (Pagi)", theme: "dark" },
              { icon: MapPin, label: "Lokasi", value: "Graha Cakrawala", extra: "Kota Malang", theme: "light" },
            ].map((item, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] text-center border shadow-sm transition-all hover:shadow-md ${item.theme === "dark" ? "bg-[#581010] text-white border-[#581010]" : "bg-white text-[#333] border-gray-100"}`}>
                <item.icon className="mx-auto text-[#C5A059] mb-4" size={28} />
                <p className="text-[10px] uppercase tracking-widest mb-1 opacity-50 font-sans font-bold">{item.label}</p>
                <p className="text-lg font-bold">{item.value}</p>
                <p className="text-[10px] italic opacity-50">{item.extra}</p>
                {item.label === "Tanggal" && (
                  <button onClick={addToCalendar} className="mt-3 text-[9px] font-sans font-bold underline tracking-tighter hover:text-[#C5A059]">+ GOOGLE CALENDAR</button>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 flex gap-4 items-center">
              <Users className="text-[#581010]" size={20} />
              <p className="text-[11px] font-sans text-gray-500">Maksimal 2 pendamping. Harap tunjukkan kartu akses digital.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 flex gap-4 items-center">
              <Shirt className="text-[#C5A059]" size={20} />
              <p className="text-[11px] font-sans text-gray-500">Pria: Batik Lengan Panjang. Wanita: Sopan & Rapi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: MAPS COMPACT */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[#C5A059] text-[10px] tracking-widest font-bold uppercase mb-2">Event Location</p>
            <h3 className="text-2xl font-bold">Denah Lokasi</h3>
          </div>
          <div className="w-full h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3435165415!2d112.61332731086055!3d-7.963402479326162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788280f55725f1%3A0x6446e01a88b8359a!2sGraha%20Cakrawala%20UM!5e0!3m2!1sid!2sid!4v1714188000000!5m2!1sid!2sid"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            ></iframe>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="https://maps.app.goo.gl/3A3D7" target="_blank">
              <button className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 rounded-full text-[10px] font-bold tracking-widest hover:bg-gray-50 transition-all shadow-sm">
                <MapPin size={14} className="text-[#581010]" /> PETUNJUK GOOGLE MAPS <ExternalLink size={12} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: SUSUNAN ACARA GRID */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <ListOrdered className="text-[#C5A059]" size={28} />
            <h3 className="text-3xl font-bold tracking-tighter uppercase">Susunan Acara</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {[
              "Pembukaan & Prosesi", "Menyanyikan Indonesia Raya", "Laporan Akademik",
              "Sambutan Kepala Sekolah", "Pengukuhan Wisudawan", "Janji Wisudawan",
              "Penyerahan Siswa", "Doa & Penutup"
            ].map((item, i) => (
              <div key={i} className="flex items-center py-4 border-b border-gray-50 group">
                <span className="text-[10px] font-bold text-[#C5A059] w-8">0{i + 1}</span>
                <p className="text-gray-700 text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: GALLERY */}
      <section className="py-24 bg-[#FCFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-2">Our Journey</p>
            <h3 className="text-4xl italic text-[#333]">Galeri Kenangan</h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#581010] rounded-full text-[12px] font-black tracking-widest uppercase text-[#581010] hover:bg-[#581010] hover:text-white transition-all shadow-lg"
          >
            {showAll ? <><Layout size={18} /> Kembali</> : <><Grid size={18} /> Lihat Semua</>}
          </motion.button>
        </div>

        <div className="relative px-6">
          <AnimatePresence mode="wait">
            {!showAll ? (
              <motion.div key="carousel" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide snap-x">
                {galleryImages.map((i) => (
                  <div key={i} className="min-w-[300px] md:min-w-[450px] aspect-video rounded-[2.5rem] overflow-hidden bg-gray-100 snap-center shadow-xl">
                    <img src={`https://images.unsplash.com/photo-1523050853064-886918823f6d?q=80&w=800&sig=${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="gallery" />
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div key="grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((i) => (
                  <div key={i} className="aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                    <img src={`https://images.unsplash.com/photo-1523050853064-886918823f6d?q=80&w=800&sig=${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="gallery" />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION: TIMER & RSVP */}
      <section className="py-24 px-6 bg-[#2D0A0A] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold uppercase tracking-tighter">Menuju Hari <br /><span className="text-[#C5A059]">Besar Kita</span></h2>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                  <p className="text-3xl font-bold text-[#C5A059]">{value}</p>
                  <p className="text-[8px] uppercase tracking-widest opacity-40">{label}</p>
                </div>
              ))}
            </div>
            <Link href="#rsvp">
              <button className="mt-8 px-10 py-5 bg-[#C5A059] text-[#2D0A0A] rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl">Konfirmasi Kehadiran</button>
            </Link>
          </div>

          <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <MessageSquare className="text-[#C5A059]" /> Kesan & Pesan
            </h3>
            <form className="space-y-4">
              <input type="text" placeholder="Nama Lengkap" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#C5A059] transition-all" />
              <textarea rows={4} placeholder="Pesanmu..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#C5A059] transition-all resize-none" />
              <button className="w-full py-4 bg-white text-[#2D0A0A] rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2">
                Kirim Pesan <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-white text-center border-t border-gray-50">
        <div className="mb-6 flex justify-center gap-6 opacity-20 grayscale">
          <img src="https://upload.wikimedia.org/wikipedia/id/4/44/Logo_Yayasan_Pendidikan_Telkom.png" className="h-8" alt="YPT" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_SMK_Telkom_Malang.png" className="h-8" alt="Moklet" />
        </div>
        <p className="text-[10px] tracking-[1em] uppercase text-gray-300 font-bold">MOKLET • CLASS 32 • 2024</p>
      </footer>

    </main>
  );
}