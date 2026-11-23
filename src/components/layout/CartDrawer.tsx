"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCartStore } from "@/lib/store";
import confetti from "canvas-confetti";

export const CartDrawer: React.FC = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, clearCart, subtotal } = useCartStore();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      closeCart();
    }, 3200);
  };

  if (!isOpen) return null;

  const total = subtotal();
  const savings = Math.round(total * 0.27); // Market price comparison savings

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col border-l border-[#DDF5FF] animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-[#DDF5FF] flex items-center justify-between bg-[#F7FCFF]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#0077D9]" />
            <h2 className="font-sans font-bold text-lg text-[#073B67]">Your Purifier Cart</h2>
            <span className="text-xs bg-[#DDF5FF] text-[#0077D9] font-bold px-2 py-0.5 rounded-full">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Confirmed Banner */}
        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-sans font-bold text-xl text-[#073B67]">Booking Confirmed!</h3>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Thank you! Our certified Chennai technician will contact you within 15 minutes to confirm delivery & free doorstep installation.
            </p>
          </div>
        ) : items.length === 0 ? (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#DDF5FF] flex items-center justify-center text-[#0077D9] mb-4">
              <ShoppingBag className="w-10 h-10 opacity-70" />
            </div>
            <h3 className="font-sans font-bold text-lg text-[#073B67]">Your cart is empty</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-xs mb-6">
              Browse top-rated water purifiers at guaranteed lower prices than Amazon & Flipkart.
            </p>
            <button
              onClick={closeCart}
              className="px-6 py-2.5 rounded-full bg-[#0077D9] text-white font-medium text-sm hover:bg-[#00B8E6] transition-colors"
            >
              Start Exploring
            </button>
          </div>
        ) : (
          /* Cart Items List */
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* Free installation badge */}
              <div className="bg-[#DDF5FF]/70 p-3 rounded-2xl flex items-center gap-3 border border-[#00B8E6]/20">
                <ShieldCheck className="w-5 h-5 text-[#0077D9] flex-shrink-0" />
                <p className="text-xs text-[#073B67]">
                  <strong className="text-[#0077D9]">Free Doorstep Installation:</strong> Certified Chennai technician visit included with this order.
                </p>
              </div>

              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 rounded-2xl border border-[#DDF5FF] bg-white hover:border-[#0077D9]/30 transition-all shadow-sm"
                >
                  <div className="relative w-20 h-20 rounded-xl bg-[#F7FCFF] overflow-hidden flex-shrink-0 border border-slate-100 p-1">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077D9]">
                          {item.product.brand}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <h4 className="text-sm font-bold text-[#073B67] line-clamp-1">
                        {item.product.name}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm font-extrabold text-[#0077D9]">
                          ₹{item.product.sellingPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{item.product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="flex items-center border border-[#DDF5FF] rounded-lg bg-[#F7FCFF]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#0077D9]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#073B67]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#0077D9]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div className="p-5 border-t border-[#DDF5FF] bg-[#F7FCFF] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#073B67]">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Marketplace Comparison Savings</span>
                  <span>- ₹{savings.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Chennai Installation & Delivery</span>
                  <span className="text-[#0077D9] font-bold uppercase tracking-wider text-[11px]">FREE</span>
                </div>
                <div className="border-t border-[#DDF5FF] pt-2 flex justify-between text-base font-extrabold text-[#073B67]">
                  <span>Total Payable</span>
                  <span className="text-[#0077D9]">₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0077D9] to-[#00B8E6] text-white font-bold text-sm shadow-aqua-md hover:shadow-aqua-glow hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                Confirm Order & Free Installation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

