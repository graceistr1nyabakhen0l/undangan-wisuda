"use client";

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function ScannerPage() {
  useEffect(() => {
    const scanner = new Html5Qrcode("reader");

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decodedText) => {
        new Audio("/beep.mp3").play();
        alert("Berhasil scan: " + decodedText);
      },
      () => {}
    );

    return () => {
      scanner.stop().catch(() => {});
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Scanner Check-In 🎫</h1>

      <div className="bg-white p-2 rounded-2xl">
        <div id="reader" className="w-[300px]"></div>
      </div>
    </main>
  );
}