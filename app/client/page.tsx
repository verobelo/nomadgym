'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  CreditCard,
  MapPin,
  History,
  Settings,
  HelpCircle,
  Menu,
  X,
  LogOut
} from 'lucide-react';

export default function ClientDashboard() {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    {
      name: 'My Passes',
      href: '/client-dashboard/passes',
      icon: CreditCard,
    },
    {
      name: 'Find Gyms',
      href: '/client-dashboard/find-gyms',
      icon: MapPin,
    },
    {
      name: 'Visit History',
      href: '/client-dashboard/history',
      icon: History,
    },
    {
      name: 'Account Settings',
      href: '/client-dashboard/settings',
      icon: Settings,
    },
    {
      name: 'Help / Support',
      href: '/client-dashboard/support',
      icon: HelpCircle,
    },
  ];

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Fixed Top Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
              >
                {sidebarOpen ? (
                  <X className='w-6 h-6 text-sec' />
                ) : (
                  <Menu className='w-6 h-6 text-sec' />
                )}
              </button>

              {/* Logo */}
              <Link href='/'>
                <Image
                  src='/logo-small.png'
                  alt='NomadGym'
                  width={48}
                  height={48}
                  priority
                />
              </Link>
            </div>

            {/* Logout Button */}
            <Button
              onClick={() => {/* TODO: Implement logout */}}
              variant='ghost'
              className='text-sec'
            >
              <LogOut className='w-4 h-4 mr-2' />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className='flex pt-20'>
        {/* Sidebar - Desktop */}
        <aside className='hidden lg:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white border-r border-gray-200'>
          <nav className='p-4 space-y-2'>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                    'hover:bg-gray-100',
                    isActive
                      ? 'bg-gradient-to-r from-prim to-acc text-white hover:from-prim/90 hover:to-acc/90'
                      : 'text-sec'
                  )}
                >
                  <Icon className='w-5 h-5' />
                  <span className='font-medium'>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Sidebar - Mobile */}
        {sidebarOpen && (
          <div
            className='lg:hidden fixed inset-0 z-40 bg-black/50'
            onClick={() => setSidebarOpen(false)}
          >
            <aside
              className='fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white border-r border-gray-200 shadow-lg'
              onClick={(e) => e.stopPropagation()}
            >
              <nav className='p-4 space-y-2'>
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                        'hover:bg-gray-100',
                        isActive
                          ? 'bg-gradient-to-r from-prim to-acc text-white hover:from-prim/90 hover:to-acc/90'
                          : 'text-sec'
                      )}
                    >
                      <Icon className='w-5 h-5' />
                      <span className='font-medium'>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Content Area */}
        <main className='flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8'>
          <div className='max-w-7xl mx-auto'>
            {/* Welcome Section */}
            <div className='bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 mb-6'>
              <h1 className='text-3xl sm:text-4xl font-bold text-sec mb-2'>
                Welcome to Your Dashboard
              </h1>
              <p className='text-gray-600'>
                Manage your gym passes, discover new locations, and track your fitness journey.
              </p>
            </div>

            {/* Placeholder Content */}
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {/* Quick Stats Cards */}
              <div className='bg-white rounded-xl border border-gray-100 p-6 hover:border-prim/30 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='font-semibold text-sec'>Active Passes</h3>
                  <CreditCard className='w-5 h-5 text-prim' />
                </div>
                <p className='text-3xl font-bold text-sec'>0</p>
                <p className='text-sm text-gray-600 mt-2'>No active passes yet</p>
              </div>

              <div className='bg-white rounded-xl border border-gray-100 p-6 hover:border-acc/30 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='font-semibold text-sec'>Gym Visits</h3>
                  <History className='w-5 h-5 text-acc' />
                </div>
                <p className='text-3xl font-bold text-sec'>0</p>
                <p className='text-sm text-gray-600 mt-2'>Start your journey today</p>
              </div>

              <div className='bg-white rounded-xl border border-gray-100 p-6 hover:border-prim/30 transition-all duration-300'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='font-semibold text-sec'>Locations</h3>
                  <MapPin className='w-5 h-5 text-prim' />
                </div>
                <p className='text-3xl font-bold text-sec'>0</p>
                <p className='text-sm text-gray-600 mt-2'>Find gyms near you</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
