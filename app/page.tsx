/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Shirt,
  ListOrdered,
  MessageSquare,
  Send,
  ExternalLink,
  Grid,
  Layout,
  Volume2,
  VolumeX,
} from "lucide-react";

function PremiumBg({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "%23C5A059" : "%23D9BE88";

  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? `
              radial-gradient(circle at 18% 18%, rgba(197,160,89,.20), transparent 32%),
              radial-gradient(circle at 85% 72%, rgba(255,220,140,.13), transparent 34%),
              radial-gradient(circle at 50% 0%, rgba(255,255,255,.06), transparent 36%),
              linear-gradient(135deg, #2D0A0A 0%, #581010 48%, #250707 100%)
            `
            : `
              radial-gradient(circle at 15% 15%, rgba(255,255,255,.95), transparent 34%),
              radial-gradient(circle at 80% 20%, rgba(197,160,89,.14), transparent 34%),
              radial-gradient(circle at 15% 85%, rgba(88,16,16,.05), transparent 38%),
              linear-gradient(135deg, #FFFDF9 0%, #F7EFE4 50%, #FFF9F0 100%)
            `,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.16]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='520' height='520' viewBox='0 0 520 520' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.45' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M62 470 C135 345 165 230 112 105 C205 165 246 286 205 435'/%3E%3Cpath d='M205 435 C284 342 306 225 268 74 C370 178 392 330 315 455'/%3E%3Cpath d='M315 455 C382 365 445 312 510 292 C490 385 410 458 315 455'/%3E%3Cpath d='M112 105 C66 85 52 43 82 10 C135 35 150 77 112 105Z'/%3E%3Cpath d='M268 74 C242 30 260 5 305 0 C340 45 318 75 268 74Z'/%3E%3Cpath d='M168 330 C120 300 114 250 148 220 C198 252 205 300 168 330Z'/%3E%3Cpath d='M322 350 C325 290 365 252 415 255 C410 315 372 352 322 350Z'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: "560px 560px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 4% top 10%",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='420' height='420' viewBox='0 0 420 420' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${stroke}' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M45 370 C100 280 120 190 82 95 C150 140 178 230 150 345'/%3E%3Cpath d='M150 345 C215 280 235 185 205 60 C285 145 298 250 240 360'/%3E%3Cpath d='M82 95 C45 78 35 42 60 15 C102 38 112 72 82 95Z'/%3E%3Cpath d='M205 60 C185 25 200 5 235 0 C265 38 245 62 205 60Z'/%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: "460px 460px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left -80px bottom -80px",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none opacity-40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 0%, transparent 43%, rgba(255,225,150,.16) 50%, transparent 57%, transparent 100%)",
          backgroundSize: "240% 240%",
        }}
      />
    </>
  );
}

function SmoothDivider({
  from,
  to,
  accent = "#C5A059",
}: {
  from: string;
  to: string;
  accent?: string;
}) {
  return (
    <div
      className="relative h-24 sm:h-32 -my-[1px] overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${from} 0%, ${from} 50%, ${to} 50%, ${to} 100%)`,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={accent} stopOpacity="0" />
            <stop offset="45%" stopColor={accent} stopOpacity="0.85" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M0,0 H1440 V78 C1190,122 990,42 720,82 C455,122 240,102 0,66 Z"
          fill={from}
        />

        <path
          d="M0,82 C260,122 480,108 720,82 C985,52 1200,106 1440,74 V180 H0 Z"
          fill={to}
        />

        <path
          d="M0,78 C260,118 480,104 720,78 C985,48 1200,102 1440,70"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <path
          d="M0,76 C260,116 480,102 720,76 C985,46 1200,100 1440,68"
          fill="none"
          stroke={accent}
          strokeOpacity="0.55"
          strokeWidth="1.3"
          strokeLinecap="round"
          filter="url(#softGlow)"
        />

        <path
          d="M0,84 C260,124 480,110 720,84 C985,54 1200,108 1440,76"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <circle cx="700" cy="78" r="4" fill={accent} opacity="0.75" />
        <circle cx="716" cy="76" r="2" fill="#FFF2C2" opacity="0.85" />
      </svg>
    </div>
  );
}

function FlipNumber({ value }: { value: number }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.span
        key={value}
        initial={{ rotateX: -90, opacity: 0, y: 8 }}
        animate={{ rotateX: 0, opacity: 1, y: 0 }}
        exit={{ rotateX: 90, opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="block origin-center"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
}

export default function ReimaginedGraduation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const galleryImages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date("June 11, 2026 07:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
      } else {
        setTimeLeft({
          hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
          jam: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
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
  const heroTextX = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  const addToCalendar = () => {
    const event = {
      text: "Wisuda Angkatan 32 SMK Telkom Malang",
      dates: "20260611T070000Z/20260611T120000Z",
      location: "Graha Cakrawala Universitas Negeri Malang",
    };

    window.open(
      `https://www.google.com/calendar/render?action=TEMPLATE&text=${event.text}&dates=${event.dates}&location=${event.location}`,
      "_blank",
    );
  };

  if (!isMounted) return <div className="min-h-screen bg-[#2D0A0A]" />;

  return (
    <main
      ref={containerRef}
      className="relative bg-[#FCFAFA] font-serif text-[#1A1A1A] overflow-x-hidden max-w-full"
    >
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#C5A059] z-[100] origin-left"
      />

      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[100]">
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
            isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
          }}
          className="w-11 h-11 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md border border-[#C5A059]/30 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all text-[#581010]"
        >
          {isPlaying ? (
            <Volume2 size={20} className="animate-pulse" />
          ) : (
            <VolumeX size={20} />
          )}
        </button>

        <audio
          ref={audioRef}
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          loop
        />
      </div>

      <section className="relative min-h-screen w-full flex items-center overflow-hidden px-4 sm:px-6 py-20 md:py-0">
        <PremiumBg dark />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="relative mx-auto max-w-[320px] sm:max-w-[430px]">
              <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-[#C5A059]/30 via-[#581010]/30 to-[#2D0A0A]/30 blur-2xl" />
              <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-[#C5A059]/80 via-[#F3D890]/35 to-white/10 shadow-[0_35px_90px_rgba(0,0,0,0.26)]">
                <div className="rounded-[calc(2rem-1.5px)] bg-white/10 backdrop-blur-sm p-3">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem]">
                    <img
                      src="/images/hero.png"
                      className="w-full h-full object-cover"
                      alt="hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <motion.div style={{ x: heroTextX }} className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 px-5 py-2 border border-[#C5A059]/60 text-[#F3D890] text-[10px] tracking-[0.45em] uppercase font-sans font-bold bg-white/10 backdrop-blur-sm rounded-full"
              >
                <span className="h-px w-8 bg-[#C5A059]" />
                SMK Telkom Malang
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.06em] leading-[0.88] text-white"
              >
                WISUDA <br />
                <span className="text-[#C5A059] italic font-light tracking-[-0.04em]">
                  ANGKATAN 32
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="text-sm sm:text-base md:text-xl font-light text-white/65 max-w-md mx-auto md:mx-0 italic"
              >
                Celebrating the transition of Class 32 from students to future
                leaders.
              </motion.p>

              <Link href="#detail">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-4 px-8 py-4 rounded-full bg-[#C5A059] text-[#2D0A0A] border border-[#F3D890]/60 text-[10px] font-black tracking-[0.28em] uppercase shadow-[0_18px_40px_rgba(197,160,89,0.25)]"
                >
                  Lihat Undangan
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <SmoothDivider from="#2D0A0A" to="#FFFDF9" />

      <section
        id="detail"
        className="relative z-20 py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
      >
        <PremiumBg />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-14"
          >
            <p className="text-[#C5A059] text-[10px] tracking-[0.45em] uppercase font-bold mb-4">
              Invitation
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight text-[#581010]">
              Yth. Orangtua / Wali Murid <br />
              <span className="text-[#C5A059] italic">
                Kelas XII Angkatan XXXII
              </span>
            </h2>

            <div className="w-20 h-[1.5px] bg-[#C5A059] mx-auto my-7 opacity-70" />

            <p className="text-gray-500 italic max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              &quot;Sebuah akhir hanyalah awal dari petualangan yang baru. Kami
              mengundang Bapak/Ibu untuk menjadi saksi langkah pertama
              putra-putri kita.&quot;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Calendar,
                label: "Tanggal",
                value: "11 Juni 2026",
                extra: "Kamis",
                theme: "light",
              },
              {
                icon: Clock,
                label: "Waktu",
                value: "07:00 — 12:00",
                extra: "WIB (Pagi)",
                theme: "dark",
              },
              {
                icon: MapPin,
                label: "Lokasi",
                value: "Graha Cakrawala",
                extra: "Kota Malang",
                theme: "light",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 45, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7, scale: 1.018 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-[2rem] p-[1.5px] bg-gradient-to-br from-[#C5A059]/70 via-white to-[#581010]/20 shadow-[0_18px_55px_rgba(88,16,16,0.12)]"
              >
                <div
                  className={`h-full p-8 rounded-[calc(2rem-1.5px)] text-center border ${
                    item.theme === "dark"
                      ? "bg-[#581010] text-white border-[#C5A059]/25"
                      : "bg-white/78 backdrop-blur-md text-[#333] border-white"
                  }`}
                >
                  <item.icon
                    className="mx-auto text-[#C5A059] mb-5"
                    size={31}
                  />

                  <p className="text-[10px] uppercase tracking-[0.28em] mb-3 opacity-60 font-sans font-bold">
                    {item.label}
                  </p>

                  <p className="text-xl font-bold text-inherit">
                    {item.value}
                  </p>

                  <p className="text-xs italic opacity-60 mt-1">{item.extra}</p>

                  {item.label === "Tanggal" && (
                    <button
                      onClick={addToCalendar}
                      className="mt-5 text-[9px] font-sans font-black uppercase tracking-[0.18em] text-[#C5A059] hover:opacity-70"
                    >
                      + Google Calendar
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 35, x: -18 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.012 }}
              className="rounded-3xl p-[1.5px] bg-gradient-to-r from-[#581010]/60 via-[#C5A059]/25 to-white shadow-[0_14px_38px_rgba(88,16,16,0.12)]"
            >
              <div className="h-full bg-white/80 backdrop-blur-md rounded-[calc(1.5rem-1.5px)] p-6 border border-white flex gap-4 items-center">
                <Users className="text-[#581010] shrink-0" size={24} />
                <p className="text-[13px] font-sans text-gray-600 leading-relaxed">
                  Maksimal 2 pendamping. Harap tunjukkan kartu akses digital.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35, x: 18 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.012 }}
              className="rounded-3xl p-[1.5px] bg-gradient-to-r from-[#C5A059]/70 via-[#C5A059]/25 to-white shadow-[0_14px_38px_rgba(197,160,89,0.16)]"
            >
              <div className="h-full bg-white/80 backdrop-blur-md rounded-[calc(1.5rem-1.5px)] p-6 border border-white flex gap-4 items-center">
                <Shirt className="text-[#C5A059] shrink-0" size={24} />
                <p className="text-[13px] font-sans text-gray-600 leading-relaxed">
                  Pria: Batik Lengan Panjang. Wanita: Sopan & Rapi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SmoothDivider from="#FFFDF9" to="#2D0A0A" />

      <section className="relative py-16 sm:py-24 px-4 sm:px-6 text-white overflow-hidden">
        <PremiumBg dark />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-9"
          >
            <div>
              <p className="text-[#C5A059] text-[10px] tracking-[0.45em] uppercase font-bold mb-4">
                Countdown
              </p>

              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95]">
                Menuju Hari <br />
                <span className="text-[#C5A059] italic font-light">
                  Besar Kita
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center">
              {Object.entries(timeLeft).map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="bg-white/7 backdrop-blur-md w-full p-5 sm:p-7 rounded-[1.6rem] border border-[#C5A059]/20 text-center shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                >
                  <p className="text-4xl sm:text-5xl font-bold text-[#C5A059] min-h-[52px] [perspective:700px]">
                    <FlipNumber value={value} />
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.32em] opacity-55 font-sans">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link href="#rsvp">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="mt-4 px-9 sm:px-12 py-4 sm:py-5 bg-[#C5A059] text-[#2D0A0A] rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_18px_45px_rgba(197,160,89,0.26)]"
              >
                Konfirmasi Kehadiran
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <SmoothDivider from="#2D0A0A" to="#FCFAFA" />

      <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <PremiumBg />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-9">
            <p className="text-[#C5A059] text-[10px] tracking-[0.4em] font-bold uppercase mb-2">
              Event Location
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#581010]">
              Denah Lokasi
            </h3>
          </div>

          <div className="w-full h-[280px] sm:h-[340px] md:h-[390px] rounded-[2rem] sm:rounded-[2.7rem] overflow-hidden shadow-[0_30px_90px_rgba(88,16,16,0.18)] border-[6px] border-white relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3435165415!2d112.61332731086055!3d-7.963402479326162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788280f55725f1%3A0x6446e01a88b8359a!2sGraha%20Cakrawala%20UM!5e0!3m2!1sid!2sid!4v1714188000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Link href="https://maps.app.goo.gl/3A3D7" target="_blank">
              <button className="flex items-center gap-3 px-6 sm:px-8 py-4 bg-white/90 backdrop-blur-sm border border-[#C5A059]/30 rounded-full text-[9px] sm:text-[10px] font-black tracking-[0.22em] hover:bg-[#fff8ea] transition-all shadow-[0_15px_35px_rgba(88,16,16,0.10)] text-[#581010]">
                <MapPin size={14} />
                PETUNJUK GOOGLE MAPS
                <ExternalLink size={12} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <SmoothDivider from="#FCFAFA" to="#2D0A0A" />

      <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <PremiumBg dark />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <ListOrdered className="text-[#C5A059]" size={34} />
            </div>

            <h3 className="text-3xl sm:text-5xl font-bold tracking-[-0.04em] uppercase text-white">
              Susunan Acara
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Pembukaan & Prosesi",
              "Menyanyikan Indonesia Raya",
              "Laporan Akademik",
              "Sambutan Kepala Sekolah",
              "Pengukuhan Wisudawan",
              "Janji Wisudawan",
              "Penyerahan Siswa",
              "Doa & Penutup",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="rounded-[1.7rem] p-[1.5px] bg-gradient-to-r from-[#C5A059]/80 via-[#F3D890]/40 to-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
              >
                <div className="relative overflow-hidden rounded-[calc(1.7rem-1.5px)] bg-[#431010]/80 backdrop-blur-md border border-[#C5A059]/20 px-6 sm:px-8 py-6 flex items-center gap-5">
                  <span className="text-[#C5A059] text-lg sm:text-xl font-bold tracking-widest min-w-[42px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="h-12 w-px bg-[#C5A059]/30" />

                  <p className="text-white text-base sm:text-lg font-bold">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SmoothDivider from="#2D0A0A" to="#FCFAFA" />

      <section className="relative py-16 sm:py-24 overflow-hidden">
        <PremiumBg />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-2">
              Our Journey
            </p>

            <h3 className="text-3xl sm:text-5xl italic text-[#581010]">
              Galeri Kenangan
            </h3>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-[#581010] rounded-full text-[11px] sm:text-[12px] font-black tracking-widest uppercase text-[#581010] hover:bg-[#581010] hover:text-white transition-colors shadow-[0_10px_25px_rgba(88,16,16,0.12)]"
          >
            {showAll ? (
              <>
                <Layout size={18} />
                Kembali
              </>
            ) : (
              <>
                <Grid size={18} />
                Lihat Semua
              </>
            )}
          </motion.button>
        </div>

        <div className="relative z-10 px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {!showAll ? (
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex gap-5 sm:gap-7 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {galleryImages.map((i) => (
                  <div
                    key={i}
                    className="group relative min-w-[82vw] sm:min-w-[360px] md:min-w-[450px] aspect-video rounded-[2rem] p-[1.5px] bg-gradient-to-br from-[#C5A059]/70 to-[#581010]/25 shadow-[0_18px_40px_rgba(88,16,16,0.14)] snap-center overflow-hidden"
                  >
                    <div className="relative w-full h-full rounded-[calc(2rem-1.5px)] overflow-hidden bg-[#F3F1EF]">
                      <img
                        src={`https://images.unsplash.com/photo-1523050853064-886918823f6d?q=80&w=800&sig=${i}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt="gallery"
                        loading="lazy"
                        draggable={false}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/65 via-transparent to-transparent" />

                      <div className="absolute left-5 bottom-5">
                        <p className="text-white/70 text-[8px] uppercase tracking-[0.35em] font-sans font-bold">
                          Memory
                        </p>
                        <h4 className="text-white text-lg italic leading-none mt-1">
                          Class 32
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6"
              >
                {galleryImages.map((i) => (
                  <div
                    key={i}
                    className="group relative aspect-square rounded-[2rem] p-[1.5px] bg-gradient-to-br from-[#C5A059]/70 to-[#581010]/25 shadow-[0_18px_40px_rgba(88,16,16,0.14)] overflow-hidden"
                  >
                    <div className="relative w-full h-full rounded-[calc(2rem-1.5px)] overflow-hidden bg-[#F3F1EF]">
                      <img
                        src={`https://images.unsplash.com/photo-1523050853064-886918823f6d?q=80&w=800&sig=${i}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt="gallery"
                        loading="lazy"
                        draggable={false}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D0A0A]/65 via-transparent to-transparent" />

                      <div className="absolute left-5 bottom-5">
                        <p className="text-white/70 text-[8px] uppercase tracking-[0.35em] font-sans font-bold">
                          Memory
                        </p>
                        <h4 className="text-white text-lg italic leading-none mt-1">
                          Class 32
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <SmoothDivider from="#FCFAFA" to="#2D0A0A" />

      <section
        id="rsvp"
        className="relative py-16 sm:py-24 px-4 sm:px-6 text-white overflow-hidden"
      >
        <PremiumBg dark />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/7 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[3rem] border border-[#C5A059]/20 shadow-2xl"
          >
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <MessageSquare className="text-[#C5A059]" />
              Kesan & Pesan
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#C5A059] transition-all"
              />

              <textarea
                rows={4}
                placeholder="Pesanmu..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#C5A059] transition-all resize-none"
              />

              <button className="w-full py-4 bg-white text-[#2D0A0A] rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2">
                Kirim Pesan
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <SmoothDivider from="#2D0A0A" to="#FFFFFF" />

      <footer className="py-16 bg-white text-center border-t border-gray-50">
        <div className="mb-6 flex justify-center gap-6 opacity-20 grayscale">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/4/44/Logo_Yayasan_Pendidikan_Telkom.png"
            className="h-8"
            alt="YPT"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Logo_SMK_Telkom_Malang.png"
            className="h-8"
            alt="Moklet"
          />
        </div>

        <p className="text-[10px] tracking-[0.5em] sm:tracking-[1em] uppercase text-gray-300 font-bold px-4">
          MOKLET • CLASS 32 • 2026
        </p>
      </footer>
    </main>
  );
}