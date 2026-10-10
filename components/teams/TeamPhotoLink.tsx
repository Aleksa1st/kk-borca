"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Camera, X } from "lucide-react";

type TeamPhotoLinkProps = {
  name: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  season?: string;
  variant?: "light" | "dark";
};

export default function TeamPhotoLink({
  name,
  image,
  imageWidth,
  imageHeight,
  season = "2026/27",
  variant = "light",
}: TeamPhotoLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasPhoto =
    Boolean(image) &&
    Boolean(imageWidth) &&
    Boolean(imageHeight);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const baseClasses =
    "flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-bold transition";

  const lightClasses = hasPhoto
    ? "bg-slate-100 text-blue-950 hover:bg-blue-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
    : "cursor-default bg-slate-100 text-blue-950";

  const darkClasses = hasPhoto
    ? "bg-white/10 text-white hover:bg-white/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300/40"
    : "cursor-default bg-white/10 text-white";

  const content = (
    <>
      <span>{name}</span>

      {hasPhoto && (
        <span
          className={
            variant === "dark"
              ? "flex shrink-0 items-center gap-2 text-sm font-black text-yellow-300"
              : "flex shrink-0 items-center gap-2 text-sm font-black text-blue-700"
          }
        >
          <Camera
            className="h-4 w-4"
            aria-hidden="true"
          />

          <span className="hidden sm:inline">
            Pogledaj ekipu
          </span>
        </span>
      )}
    </>
  );

  if (!hasPhoto || !image || !imageWidth || !imageHeight) {
    return (
      <div
        className={`${baseClasses} ${
          variant === "dark" ? darkClasses : lightClasses
        }`}
      >
        {content}
      </div>
    );
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`${baseClasses} ${
          variant === "dark" ? darkClasses : lightClasses
        }`}
        aria-label={`Pogledaj fotografiju ekipe ${name}`}
      >
        {content}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/90 p-2 backdrop-blur-sm sm:p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} – sezona ${season}`}
          onClick={closeModal}
        >
          <div
            className="relative flex h-[96vh] max-h-[96vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-[94vh] sm:rounded-3xl"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {/* HEADER */}
            <div className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-7 sm:py-5">
              <div className="min-w-0 pr-2">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
                  KK Borča · sezona {season}
                </p>

                <h2 className="mt-1 truncate text-lg font-black text-blue-950 sm:text-2xl md:text-3xl">
                  {name}
                </h2>
              </div>

              {/* X DUGME – DESKTOP + MOBILNI */}
              <button
                type="button"
                onClick={closeModal}
                className="z-50 flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-full bg-blue-950 text-white shadow-lg transition active:scale-95 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                aria-label="Zatvori fotografiju"
              >
                <X
                  className="h-7 w-7"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* FOTOGRAFIJA */}
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-slate-100 p-2 sm:p-5 md:p-7">
              <Image
                src={image}
                alt={`${name} – KK Borča – sezona ${season}`}
                width={imageWidth}
                height={imageHeight}
                sizes="(max-width: 640px) 96vw, (max-width: 1024px) 90vw, 1152px"
                className="block max-h-full max-w-full rounded-xl object-contain shadow-xl sm:rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}