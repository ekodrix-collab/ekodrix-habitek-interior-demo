import { useState, useRef, useEffect, useCallback } from "react";
import { X, RotateCcw, ZoomIn, ZoomOut, Maximize2, Move, Info } from "lucide-react";

interface Viewer360Props {
  image: string;
  title: string;
  onClose: () => void;
}

export function Viewer360({ image, title, onClose }: Viewer360Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const animationRef = useRef<number>(0);

  // Auto-rotate effect
  useEffect(() => {
    if (isAutoRotating && !isDragging) {
      const animate = () => {
        setPosition((prev) => ({
          x: prev.x - 0.15,
          y: prev.y,
        }));
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoRotating, isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  }, [position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - startPos.x;
    const newY = Math.max(-50, Math.min(50, e.clientY - startPos.y));
    setPosition({ x: newX, y: newY });
  }, [isDragging, startPos]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setIsAutoRotating(false);
    setStartPos({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  }, [position]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newX = touch.clientX - startPos.x;
    const newY = Math.max(-50, Math.min(50, touch.clientY - startPos.y));
    setPosition({ x: newX, y: newY });
  }, [isDragging, startPos]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const handleReset = () => {
    setPosition({ x: 0, y: 0 });
    setZoom(1);
    setIsAutoRotating(true);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setPosition((p) => ({ ...p, x: p.x + 30 }));
      if (e.key === "ArrowRight") setPosition((p) => ({ ...p, x: p.x - 30 }));
      if (e.key === "ArrowUp") setPosition((p) => ({ ...p, y: Math.min(p.y + 15, 50) }));
      if (e.key === "ArrowDown") setPosition((p) => ({ ...p, y: Math.max(p.y - 15, -50) }));
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoRotating((r) => !r);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between p-4 md:p-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center">
                <Maximize2 size={12} className="text-white" />
              </div>
              <span className="text-brand-400 text-xs font-semibold uppercase tracking-wider">
                360° View
              </span>
            </div>
            <h2 className="text-white font-heading text-lg md:text-xl font-bold">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* 360 Viewer Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Panoramic Image Container */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-75"
          style={{
            transform: `scale(${zoom})`,
          }}
        >
          {/* Panoramic strip - simulating 360 view with repeating image */}
          <div
            className="flex items-center h-full"
            style={{
              transform: `translateX(${position.x}px) translateY(${position.y}px)`,
            }}
          >
            {/* Repeat image 3 times for seamless panning */}
            {[0, 1, 2].map((i) => (
              <img
                key={i}
                src={image}
                alt={`${title} panorama ${i}`}
                className="h-full w-auto max-w-none object-cover select-none pointer-events-none"
                style={{ minWidth: "150vw" }}
                draggable={false}
              />
            ))}
          </div>
        </div>

        {/* Center reticle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl rounded-full px-4 py-3 border border-white/10">
          <button
            onClick={handleZoomOut}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            title="Zoom Out (-)"
          >
            <ZoomOut size={20} />
          </button>
          <div className="w-px h-6 bg-white/20" />
          <button
            onClick={handleZoomIn}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            title="Zoom In (+)"
          >
            <ZoomIn size={20} />
          </button>
          <div className="w-px h-6 bg-white/20" />
          <button
            onClick={() => setIsAutoRotating((r) => !r)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isAutoRotating ? "text-brand-400 bg-brand-600/20" : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
            title="Auto Rotate (Space)"
          >
            <RotateCcw size={20} className={isAutoRotating ? "animate-spin" : ""} style={{ animationDuration: "3s" }} />
          </button>
          <div className="w-px h-6 bg-white/20" />
          <button
            onClick={handleReset}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            title="Reset View"
          >
            <Maximize2 size={20} />
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 right-6 z-10 hidden md:block">
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10">
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <Move size={14} />
            <span>Drag to look around</span>
          </div>
        </div>
      </div>

      {/* Hotspot indicator */}
      <div className="absolute top-1/2 left-1/4 z-10 hidden md:block">
        <div className="group relative">
          <div className="w-8 h-8 bg-brand-600/80 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform animate-pulse">
            <Info size={16} className="text-white" />
          </div>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <p className="text-white text-xs font-medium">Custom feature area</p>
          </div>
        </div>
      </div>
    </div>
  );
}
