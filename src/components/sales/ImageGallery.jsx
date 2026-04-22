import { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ImageGallery({ images, modelName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Gallery */}
      <div className="relative bg-zinc-800 rounded-lg overflow-hidden aspect-video">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]}
          alt={`${modelName} - View ${currentIndex + 1}`}
          className="w-full h-full object-contain p-4"
        />

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-orange-500 text-white rounded-full transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-orange-500 text-white rounded-full transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 text-white text-xs font-semibold rounded-full">
          {currentIndex + 1} / {images.length}
        </div>

        {/* 360° Label */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full border border-orange-500/40">
          <ImageIcon className="w-3 h-3" />
          360° View
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
              currentIndex === idx
                ? 'border-orange-500 ring-2 ring-orange-500/30'
                : 'border-zinc-700 hover:border-orange-500/50'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}