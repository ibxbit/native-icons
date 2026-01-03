'use client';

import React, { useState } from 'react';
import * as Icons from './icons';
import { RAW_CODE } from './icons';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Filter out the raw code object and the SVG sub-components
const iconEntries = Object.entries(Icons).filter(
  ([name]) => !name.endsWith('SVG') && name !== 'RAW_CODE'
) as [string, React.ComponentType<any>][];

export default function IconGrid() {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (name: string) => {
    console.log("Attempting to copy icon:", name);
    
    // 1. Get the code from the RAW_CODE object
    const code = (RAW_CODE as any)[name];

    if (!code) {
      console.error(`Error: No string found in RAW_CODE for key: "${name}"`);
      return;
    }

    try {
      // 2. Direct browser clipboard API call for maximum reliability
      await navigator.clipboard.writeText(code);
      console.log("Success! Code copied to clipboard.");
      
      // 3. UI Feedback
      setCopied(name);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  const filteredIcons = iconEntries.filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-sm text-black"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {filteredIcons.map(([name, IconComponent]) => (
          <button
            key={name}
            type="button"
            onClick={() => handleCopy(name)}
            className={cn(
              "relative flex flex-col items-center justify-center p-6 bg-white border rounded-2xl transition-all duration-300 active:scale-95",
              "hover:shadow-xl hover:border-gray-300",
              copied === name ? "border-green-500 ring-2 ring-green-500/20" : "border-gray-100"
            )}
          >
            <div className="p-3 mb-2">
              <IconComponent size={40} />
            </div>

            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pointer-events-none">
              {name}
            </p>

            {/* Hover State / Success UI */}
            <div
              className={cn(
                "absolute inset-0 flex flex-col items-center justify-center rounded-2xl transition-all duration-300 pointer-events-none",
                copied === name
                  ? "bg-green-50/90 opacity-100"
                  : "bg-white/80 opacity-0 group-hover:opacity-100"
              )}
            >
              {copied === name ? (
                <>
                  <Check className="w-6 h-6 text-green-600 mb-1" />
                  <span className="text-[10px] font-bold text-green-700">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-6 h-6 text-gray-400 mb-1" />
                  <span className="text-[10px] font-bold text-gray-400">COPY CODE</span>
                </>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}