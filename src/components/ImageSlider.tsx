'use client';

import CanvasViewer from '@/components/CanvasViewer';

interface GalleryItem {
  id: number;
  type: string;
  src?: string;
  title: string;
}

interface ImageSliderProps {
  currentItem: GalleryItem;
  productColor: string;
  onColorChange: (color: string) => void;
}

const colorOptions = [
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Red', hex: '#ef4444' },
  { name: 'Emerald', hex: '#10b981' },
  { name: 'Dark', hex: '#1e293b' },
];

export default function ImageSlider({ currentItem, productColor, onColorChange }: ImageSliderProps) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Container height image aur 3D canvas dono ke liye equal match ki hai */}
      <div className="w-full h-[380px] md:h-[450px] relative flex items-center justify-center">
        {currentItem.type === '3d' ? (
          <CanvasViewer color={productColor} />
        ) : (
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="w-full h-full object-contain transition-opacity duration-300"
          />
        )}

        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-800 shadow-sm">
          {currentItem.title}
        </div>
      </div>

      {/* Color options strictly for 3D model */}
      {currentItem.type === '3d' && (
        <div className="mt-4 flex items-center gap-3 bg-white/80 border border-slate-200 px-4 py-2 rounded-full shadow-sm">
          <span className="text-xs text-slate-600 font-medium">Custom Color:</span>
          <div className="flex gap-2">
            {colorOptions.map((c) => (
              <button
                key={c.name}
                onClick={() => onColorChange(c.hex)}
                className={`w-5 h-5 rounded-full border-2 transition-transform ${
                  productColor === c.hex ? 'scale-125 border-slate-900' : 'border-transparent hover:scale-110'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}