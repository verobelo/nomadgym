'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className='inline-flex items-center gap-2 bg-prim/10 border border-acc/20 rounded-sm px-4 py-2 hover:bg-prim/20 transition-all duration-300 group cursor-pointer'
      aria-label='Toggle language'>
      <Languages className='w-4 h-4 text-acc group-hover:scale-110 transition-transform' />
      <span className='text-prim text-sm md:text-base font-medium'>
        {language === 'en' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}
