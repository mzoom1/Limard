import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Zap } from 'lucide-react';

const Comparison: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in event) {
        clientX = event.touches[0].clientX;
    } else {
        clientX = (event as MouseEvent).clientX;
    }

    let pos = ((clientX - left) / width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPosition(pos);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleWindowMove = (e: MouseEvent | TouchEvent) => {
        if (isDragging) handleMove(e);
    };
    const handleWindowUp = () => setIsDragging(false);

    if (isDragging) {
        window.addEventListener('mousemove', handleWindowMove);
        window.addEventListener('mouseup', handleWindowUp);
        window.addEventListener('touchmove', handleWindowMove);
        window.addEventListener('touchend', handleWindowUp);
    }
    return () => {
        window.removeEventListener('mousemove', handleWindowMove);
        window.removeEventListener('mouseup', handleWindowUp);
        window.removeEventListener('touchmove', handleWindowMove);
        window.removeEventListener('touchend', handleWindowUp);
    }
  }, [isDragging]);


  return (
    <section className="py-16 md:py-20 bg-[#111111] border-t border-white/10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-5">
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Instant Transformation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase">
                See The Difference
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-2xl mx-auto">
                Slide to compare the outdated factory interface with our high-resolution, responsive Apple CarPlay integration.
            </p>
        </div>

        <div className="w-full max-w-5xl">
            <div 
                ref={containerRef}
                className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                onClick={handleMove as any}
            >
                {/* After Image (Full Width Background) */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop" 
                        alt="After Upgrade" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-brand-red/90 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 shadow-lg">
                        <span className="text-white font-bold text-sm tracking-wide uppercase">Limard Upgrade</span>
                    </div>
                </div>

                {/* Before Image (Clipped) */}
                <div 
                    className="absolute inset-0 w-full h-full overflow-hidden bg-slate-800"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2583&auto=format&fit=crop" 
                        alt="Stock" 
                        className="w-full h-full object-cover object-left grayscale-[50%]"
                        style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }} // Keep static
                    />
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 shadow-lg">
                        <span className="text-white font-bold text-sm tracking-wide uppercase">Factory Stock</span>
                    </div>
                    {/* Darker overlay on stock to emphasize the new screen brightness */}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-900 hover:scale-110 transition-transform">
                        <div className="flex gap-0.5">
                            <ChevronLeft className="w-4 h-4" />
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;