"use client";

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

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
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
          <Camera className="h-4 w-4" aria-hidden="true" />

          <span className="hidden sm:inline">
            Pogledaj ekipu
          </span>
        </span>
      )}
    </>
  );

  if (!hasPhoto) {
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 p-3 sm:p-5 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${name}, sezona ${season}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="grid h-[94vh] w-full max-w-6xl grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* HEADER */}
            <header className="flex min-h-[76px] items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6 md:px-7">
              <div className="min-w-0 pr-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 sm:text-xs">
                  KK Borča · sezona {season}
                </p>

                <h3 className="mt-1 text-lg font-black text-blue-950 sm:text-xl md:text-2xl">
                  {name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-950 text-white shadow-md transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                aria-label="Zatvori fotografiju"
              >
                <X
                  className="h-6 w-6"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              </button>
            </header>

            {/* IMAGE AREA */}
            <div className="flex min-h-0 items-center justify-center overflow-hidden bg-slate-100 p-2 sm:p-4 md:p-6">
              <img
                src={image}
                alt={`${name} KK Borča – sezona ${season}`}
                width={imageWidth}
                height={imageHeight}
                className="block max-h-full max-w-full rounded-2xl object-contain shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}