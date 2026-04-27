"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import QRCode from "react-qr-code";
import { use, useRef } from "react";
import { Calendar, MapPin, Clock, Gift, Info, ChevronDown } from "lucide-react";

export default function ElegantGraduationInvitation({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const containerRef = useRef(null);

  // Data Dummy untuk Frontend (Sesuai Foto 2 & Vibes Video)
  const invitationData = {
    guestName: "Graciella Angelia",
    graduateName: "Hana & Firdaus", // Inisial H&F seperti di video, tapi versi Wisuda
    angkatan: "32",
    date: "Sabtu, 20 Juli 2026",
    time: "09.00 - Selesai",
    venue: "Royal Safwah Event Hall (Graha Wisuda Lt. 3)",
    familyCount: 2,
    package: "Premium (VVIP Access)",
    souvenirStatus: "Belum Diambil",
    snackStatus: "Belum Diambil",
  };

  // Konfigurasi Parallax Effect saat Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const openingScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const openingOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);

  return (
    <main
      ref={containerRef}
      className="min-h-[200vh] relative bg-[#f4f1ea] font-serif text-[#4a4a4a] overflow-x-hidden"
    >
      {/* Background Ornaments (Aksen Gold Klasik dari Video) */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/natural-paper.png')",
        }}
      />
      
      {/* ================= SECTION 1: ELEGANT OPENING (Screen 1) ================= */}
      <motion.section
        style={{ scale: openingScale, opacity: openingOpacity }}
        className="fixed inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Top Ornament */}
          <img src="https://www.transparentpng.com/download/floral/floral-free-download-transparent-png-3.png" 
               className="w-32 mx-auto opacity-30 mb-8" alt="Ornament" />

          <p className="text-[#c5a059] tracking-[0.3em] text-sm uppercase">THE GRADUATION OF</p>
          
          {/* Big Initials (Vibes H&F Video) */}
          <h1 className="text-6xl md:text-8xl font-black text-[#3a3a3a] leading-none my-4">
            A <span className="text-[#c5a059] font-normal">&</span> J
          </h1>
          
          <div className="bg-white/40 backdrop-blur-sm p-5 rounded-2xl border border-[#c5a059]/20 shadow-sm">
            <p className="text-[#888] text-sm mb-1 italic">Kepada Yth.</p>
            <p className="text-3xl font-bold">{invitationData.guestName}</p>
          </div>

          <p className="text-[#888] mt-8 italic text-xl">"A New Journey Begins"</p>

          {/* Scroll Down Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#c5a059] flex flex-col items-center gap-2 mt-16 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs uppercase tracking-widest font-bold">Scroll untuk Membuka</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ================= SECTION 2: SCROLLABLE CONTENT (Screen 2+) ================= */}
      <motion.section
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 top-[100vh] w-full max-w-lg mx-auto py-16 px-4 space-y-12 pb-24"
      >
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border-t-8 border-[#c5a059]">
          
          {/* Header Card (Vibes Foto 2) */}
          <div className="p-8 text-center bg-[#faf9f6]">
            <h2 className="text-[#c5a059] font-bold text-3xl mb-1 uppercase tracking-wider">E-PASS</h2>
            <div className="h-[1px] w-20 bg-[#c5a059] mx-auto mb-4" />
            <p className="text-gray-600">Terima kasih atas kehadiran Anda dalam Perayaan Wisuda <span className="font-bold">Angkatan {invitationData.angkatan}</span></p>
          </div>

          <div className="p-8 space-y-8">
            
            {/* QR Section (Fitur Utama Foto 2) */}
            <div className="text-center">
              <div className="bg-white p-5 rounded-2xl shadow-inner border-2 border-dashed border-gray-200 inline-block mb-4 relative group">
                <QRCode value={id} size={190} fgColor="#333" />
                {/* Efek Bingkai Kilau Gold ala Video saat hover */}
                <div className="absolute inset-0 border-4 border-[#c5a059] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-2">Scan untuk Check-In</p>
              <p className="text-[10px] text-gray-300 mt-1">ID: {id}</p>
            </div>

            {/* Info Acara */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <Calendar size={18} className="text-[#c5a059]" />
                <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Tanggal</p>
                    <p className="text-sm font-semibold">{invitationData.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <Clock size={18} className="text-[#c5a059]" />
                <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Waktu</p>
                    <p className="text-sm font-semibold">{invitationData.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 md:col-span-2">
                <MapPin size={18} className="text-[#c5a059]" />
                <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Lokasi</p>
                    <p className="text-sm font-semibold italic">{invitationData.venue}</p>
                </div>
              </div>
            </div>

            {/* Detail Paket & Status (Target Pengembangan Foto 2) */}
            <div className="bg-[#fcfaf5] rounded-2xl p-6 border border-[#c5a059]/10">
              <h3 className="text-[#c5a059] font-bold mb-5 flex items-center gap-2">
                <Info size={18} /> Detail Kehadiran
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500">Kuota Keluarga</span>
                  <span className="font-bold text-gray-800 text-lg">{invitationData.familyCount} Orang</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500">Kategori Paket</span>
                  <span className="px-3 py-1 bg-[#c5a059] text-white text-[11px] rounded uppercase font-black tracking-widest">
                    {invitationData.package}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500">Status Souvenir</span>
                  <span className="text-red-700 font-semibold flex items-center gap-1">
                    <Gift size={14} /> {invitationData.souvenirStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Tombol RSVP (Tombol bersinar di Video) */}
            <div className="pt-6">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#4a4a4a] text-white font-bold py-5 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-sm tracking-widest relative overflow-hidden group"
              >
                KONFIRMASI RSVP
                {/* Efek Kilau/Shine saat Hover ala Video */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
            </div>

          </div>
          
          <div className="bg-[#f4f1ea] p-4 text-center mt-4">
            <p className="text-[10px] text-[#c5a059] uppercase tracking-wider italic font-bold">
              Royal Wedding Vibes | Angkatan 32 Graduation
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <p className="text-center text-[#c5a059]/60 text-xs italic">See you there ✨</p>
      </motion.section>
    </main>
  );
}