import { useState, useEffect } from "react";
import { X, Gift, Copy, Check } from "lucide-react";

const PromoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Check if the modal has already been shown in this session
        const hasShown = sessionStorage.getItem("promo_modal_shown");

        if (!hasShown) {
            const timer = setTimeout(() => {
                setShouldRender(true);
                setIsOpen(true);
                sessionStorage.setItem("promo_modal_shown", "true");
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Remove from DOM after transition
        setTimeout(() => setShouldRender(false), 300);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText("WELCOME10");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div
                className={`relative bg-white w-full max-w-[380px] rounded-[24px] overflow-hidden shadow-2xl transition-all duration-500 transform ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-20 w-7 h-7 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Top Section: Dark Green */}
                <div className="bg-[#1f3d14] pt-8 pb-6 px-6 text-center relative">
                    <div className="inline-flex w-14 h-14 bg-white/10 rounded-full items-center justify-center mb-4 ring-1 ring-white/20">
                        <Gift className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-[26px] font-serif font-bold text-white mb-2 leading-tight">
                        Welcome to Global Cart!
                    </h2>
                    <p className="text-white/80 text-[13px] font-medium max-w-[220px] mx-auto">
                        Get an exclusive discount on your first order
                    </p>
                </div>

                {/* Bottom Section: White */}
                <div className="p-6 sm:p-8 text-center">
                    <h3 className="text-4xl sm:text-[46px] font-serif font-bold text-[#1f3d14] mb-1 tracking-tight">
                        10% OFF
                    </h3>
                    <p className="text-muted-foreground text-[13px] mb-5 font-medium">
                        Use the code below at checkout
                    </p>

                    {/* Promo Code Box */}
                    <div
                        onClick={copyToClipboard}
                        className="group cursor-pointer relative mb-1.5"
                    >
                        <div className="bg-[#f2f7f0] border-2 border-dashed border-[#1f3d14]/15 rounded-xl py-3.5 px-6 flex items-center justify-center gap-3 hover:border-[#1f3d14]/30 transition-all">
                            <span className="text-xl font-serif font-bold text-[#1f3d14] tracking-widest">
                                WELCOME10
                            </span>
                            {copied ? (
                                <Check className="w-5 h-5 text-emerald-600 animate-in zoom-in" />
                            ) : (
                                <Copy className="w-4.5 h-4.5 text-[#1f3d14]/30 group-hover:text-[#1f3d14] transition-colors" />
                            )}
                        </div>
                    </div>
                    <p className="text-[10px] font-black text-[#1f3d14]/30 uppercase tracking-[0.2em] mb-7">
                        Click to copy
                    </p>

                    {/* Actions */}
                    <button
                        onClick={handleClose}
                        className="w-full bg-[#1f3d14] text-white font-bold py-3.5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#1f3d14]/10 mb-3.5"
                    >
                        Shop Now
                    </button>

                    <button
                        onClick={handleClose}
                        className="text-muted-foreground hover:text-[#1f3d14] text-xs font-bold transition-colors"
                    >
                        No thanks, maybe later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromoModal;
