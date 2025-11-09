'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4'>
      <div className='max-w-2xl w-full text-center'>
        {/* Logo */}
        <div className='flex justify-center mb-8'>
          <Link href='/'>
            <Image
              src='/logo-small.png'
              alt='NomadGym'
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* 404 Number */}
        <div className='mb-8'>
          <h1 className='text-9xl font-bold bg-gradient-to-r from-prim to-acc bg-clip-text text-transparent'>
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className='bg-white rounded-2xl border border-gray-100 p-8 sm:p-12 shadow-lg'>
          <h2 className='text-3xl sm:text-4xl font-bold text-sec mb-4'>
            {t('notFoundTitle')}
          </h2>
          <p className='text-gray-600 text-lg mb-8'>{t('notFoundMessage')}</p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              asChild
              size='lg'
              className='bg-gradient-to-r from-prim to-acc hover:from-prim/90 hover:to-acc/90 text-white'>
              <Link href='/'>
                <Home className='w-5 h-5' />
                {t('goHome')}
              </Link>
            </Button>

            <Button
              asChild
              variant='outline'
              size='lg'
              className='border-gray-300 text-sec hover:bg-gray-50'
              onClick={() => window.history.back()}>
              <button>
                <ArrowLeft className='w-5 h-5' />
                {t('goBack')}
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
