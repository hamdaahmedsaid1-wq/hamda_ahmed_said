import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectGallery({ images, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images, onClose]);

  if (!images?.length) return null;

  const previous = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie du projet"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 text-white"
        aria-label="Fermer la galerie"
      >
        <X size={30} />
      </button>

      <div
        className="flex w-full max-w-5xl flex-col items-center gap-5"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Capture ${index + 1} du projet`}
          className="max-h-[75vh] w-full rounded-xl object-contain"
        />

        <div className="flex items-center gap-8 text-white">
          <button
            onClick={previous}
            aria-label="Image précédente"
            className="rounded-full bg-white/20 p-3 hover:bg-purple-600"
          >
            <ChevronLeft size={25} />
          </button>

          <span className="font-semibold">
            {index + 1} / {images.length}
          </span>

          <button
            onClick={next}
            aria-label="Image suivante"
            className="rounded-full bg-white/20 p-3 hover:bg-purple-600"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}