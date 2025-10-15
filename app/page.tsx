'use client';

import { useState, useEffect } from 'react';
import {
  Dumbbell,
  MapPin,
  Sparkles,
  CreditCard,
  Users,
  TrendingUp,
  Clock,
  Mail,
  Check,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { waitlistFormSchema } from '@/lib/validation';
import { addToWaitlist } from '@/lib/actions/waitlist';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: '',
      consent: false,
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  async function onSubmit(data: WaitlistFormValues) {
    setErrorMessage('');
    setIsSubmitted(false);

    const result = await addToWaitlist(data.email);
    if (result.success) {
      setIsSubmitted(true);
      form.reset();

      setTimeout(() => setIsSubmitted(false), 10000);
    } else {
      setErrorMessage(
        result.error || 'Something went wrong. Please try again.'
      );

      setTimeout(() => setErrorMessage(''), 10000);
    }
  }

  const scrollToNextSection = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className='bg-white overflow-x-hidden'>
      <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-sm'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <Image
              src='/logo-full1.png'
              alt='NomadGym Logo'
              width={350}
              height={150}
              className='hidden md:block h-14 object-cover'
              priority
            />

            <Image
              src='/logo-small.png'
              alt='NomadGym Logo'
              width={350}
              height={150}
              className='md:hidden h-12 w-12 object-cover'
              priority
            />
            <div className='flex items-center gap-3'>
              <div className='inline-flex items-center gap-2 bg-prim/10 border border-acc/20 rounded-sm px-4 py-2'>
                <Sparkles className='w-4 h-4 text-acc' />
                <span className='text-prim text-sm md:text-base font-medium'>
                  {t('comingSoon')}
                </span>
              </div>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/hero-gym-nomad.jpg'
            alt='Trailer and gym equipment'
            fill
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-br from-sec/35 via-sec/50 to-[#2A2D39]/50'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
          <div
            className={`transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
              {t('heroTitle1')}
              <br />
              <span className='bg-gradient-to-r from-prim to-acc bg-clip-text text-transparent'>
                {t('heroTitle2')}
              </span>
            </h1>

            <p className='text-xl sm:text-2xl text-neutral mb-8 max-w-2xl mx-auto'>
              {t('heroSubtitle')}
            </p>
          </div>
        </div>

        <div
          onClick={scrollToNextSection}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer group hover:scale-110 transition-transform duration-300'>
          <div className='flex items-center gap-1'>
            <div className='w-3 h-6 bg-gradient-to-r from-prim to-prim/80 rounded-sm group-hover:from-prim group-hover:to-prim transition-all'></div>
            <div className='w-8 h-2 bg-gradient-to-r from-acc/80 via-white to-acc/80 rounded-full group-hover:from-acc group-hover:via-white group-hover:to-acc transition-all'></div>
            <div className='w-3 h-6 bg-gradient-to-r from-prim/80 to-prim rounded-sm group-hover:from-prim group-hover:to-prim transition-all'></div>
          </div>
          <span className='text-white/70 text-xs font-medium group-hover:text-white transition-colors'>
            {t('knowMore')}
          </span>
        </div>
      </section>

      <section id='how-it-works' className='py-16 sm:py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-sec mb-3 sm:mb-4'>
              {t('howItWorks')}
            </h2>
            <p className='text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4'>
              {t('howItWorksSubtitle')}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12'>
            {([
              {
                icon: CreditCard,
                step: '01',
                titleKey: 'step1Title' as const,
                descriptionKey: 'step1Description' as const,
              },
              {
                icon: MapPin,
                step: '02',
                titleKey: 'step2Title' as const,
                descriptionKey: 'step2Description' as const,
              },
              {
                icon: Dumbbell,
                step: '03',
                titleKey: 'step3Title' as const,
                descriptionKey: 'step3Description' as const,
              },
            ] as const).map((item, index) => (
              <div key={index} className='relative group'>
                <div className='bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 pt-8 sm:pt-8 rounded-2xl border border-gray-100 hover:border-prim/30 transition-all duration-300 hover:shadow-xl md:hover:-translate-y-2'>
                  <div className='absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-prim to-acc rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-lg'>
                    {item.step}
                  </div>

                  <div className='mb-4 sm:mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-prim/10 to-acc/10 rounded-2xl group-hover:scale-110 transition-transform duration-300'>
                    <item.icon className='w-7 h-7 sm:w-8 sm:h-8 text-prim' />
                  </div>

                  <h3 className='text-xl sm:text-2xl font-bold text-sec mb-2 sm:mb-3'>
                    {t(item.titleKey)}
                  </h3>
                  <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-24 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl font-bold text-sec mb-4'>
              {t('whyChoose')}
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              {t('whyChooseSubtitle')}
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-6'>
            {([
              {
                icon: Sparkles,
                titleKey: 'flexibility' as const,
                descriptionKey: 'flexibilityDesc' as const,
              },
              {
                icon: CreditCard,
                titleKey: 'saveMoney' as const,
                descriptionKey: 'saveMoneyDesc' as const,
              },
              {
                icon: MapPin,
                titleKey: 'networkGyms' as const,
                descriptionKey: 'networkGymsDesc' as const,
              },
            ] as const).map((benefit, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-2xl border border-gray-100 hover:border-prim/30 hover:shadow-xl transition-all duration-300 group'>
                <div className='mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-prim/10 to-acc/10 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                  <benefit.icon className='w-6 h-6 text-prim' />
                </div>
                <h3 className='text-xl font-bold text-sec mb-2'>
                  {t(benefit.titleKey)}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-24 bg-gradient-to-br from-sec to-[#2A2D39] text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center gap-2 bg-acc/10 border border-acc/20 rounded-full px-4 py-2 mb-6'>
                <Users className='w-4 h-4 text-acc' />
                <span className='text-acc text-sm font-medium'>
                  {t('forGymOwners')}
                </span>
              </div>

              <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                {t('growYourGym')} <span className='text-prim'>NomadGym</span>
              </h2>
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                {t('growYourGymSubtitle')}
              </p>

              <div className='space-y-6 mb-8'>
                {([
                  {
                    icon: Users,
                    titleKey: 'attractCustomers' as const,
                    descriptionKey: 'attractCustomersDesc' as const,
                  },
                  {
                    icon: Clock,
                    titleKey: 'fillOffPeak' as const,
                    descriptionKey: 'fillOffPeakDesc' as const,
                  },
                  {
                    icon: TrendingUp,
                    titleKey: 'noRisk' as const,
                    descriptionKey: 'noRiskDesc' as const,
                  },
                ] as const).map((item, index) => (
                  <div key={index} className='flex gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-prim/20 to-acc/20 rounded-xl flex items-center justify-center'>
                      <item.icon className='w-6 h-6 text-acc' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold mb-1'>
                        {t(item.titleKey)}
                      </h3>
                      <p className='text-gray-400'>{t(item.descriptionKey)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href='mailto:infonomadgym@gmail.com'
                className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-acc to-[#00F0D0] text-sec font-semibold rounded-full hover:shadow-lg hover:shadow-acc/50 transform hover:scale-105 transition-all duration-300 group'>
                {t('partnerMyGym')}
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </a>
            </div>

            <Image
              width={500}
              height={500}
              src='/gym-receptionist.webp'
              alt='Gym receptionist'
              className='object-cover border border-acc rounded-md'
            />
            {/*<Users className='w-32 h-32 text-acc mx-auto mb-4 opacity-50' />
                  <p className='text-gray-400'>Gym partnership illustration</p>*/}
            {/*/<div className='absolute -top-6 -right-6 bg-white text-sec p-6 rounded-2xl shadow-2xl'>
                <div className='text-3xl font-bold text-prim mb-1'>500+</div>
                <div className='text-sm text-gray-600'>Partner Gyms</div>
              </div>

              <div className='absolute -bottom-6 -left-6 bg-white text-sec p-6 rounded-2xl shadow-2xl'>
                <div className='text-3xl font-bold text-acc mb-1'>10k+</div>
                <div className='text-sm text-gray-600'>Active Users</div>
              </div>*/}
          </div>
        </div>
      </section>

      <section className='py-24 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-sec mb-6'>
            {t('readyToStart')}
          </h2>
          <p className='text-xl text-gray-600 mb-10'>
            {t('joinWaitlist')}
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-full mx-auto'>
              <div className='flex flex-col sm:flex-row gap-3'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='flex-1'>
                      <FormControl>
                        <Input
                          {...field}
                          type='email'
                          placeholder={t('enterEmail')}
                          disabled={form.formState.isSubmitting}
                          className='px-6 py-4 h-auto rounded-md border-2 border-gray-200 text-sec placeholder-gray-400 focus:outline-none focus:border-prim transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type='submit'
                  disabled={
                    form.formState.isSubmitting || !form.watch('consent')
                  }
                  className='px-8 py-4 bg-gradient-to-r from-prim to-[#FF8555] text-white font-semibold rounded-md hover:shadow-lg hover:shadow-prim/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 disabled:hover:shadow-none cursor-pointer'>
                  {form.formState.isSubmitting ? t('joining') : t('joinWaitlistBtn')}
                  {!form.formState.isSubmitting && (
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  )}
                </button>
              </div>

              <FormField
                control={form.control}
                name='consent'
                render={({ field }) => (
                  <FormItem className='mt-4 flex items-start gap-2 text-left space-y-0'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={form.formState.isSubmitting}
                        className='ml-2'
                      />
                    </FormControl>
                    <div className='space-y-1 leading-none'>
                      <label className='text-sm text-gray-600 cursor-pointer'>
                        {t('consentText')}{' '}
                        <Link
                          href='/privacy'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-prim hover:underline font-medium'>
                          {t('privacyPolicy')}
                        </Link>
                      </label>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {isSubmitted && (
                <div className='mt-4 p-4 bg-green-50 border border-green-200 rounded-lg'>
                  <p className='text-green-800 flex items-center justify-center gap-2'>
                    <Check className='w-5 h-5' />
                    {t('successMessage')}
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg'>
                  <p className='text-red-800 flex items-center justify-center gap-2'>
                    <AlertCircle className='w-5 h-5' />
                    {errorMessage}
                  </p>
                </div>
              )}
            </form>
          </Form>
        </div>
      </section>

      <footer className='bg-sec text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8 mb-8'>
            <div>
              <div className='mb-4 bg-white'>
                <Image
                  src='/logo-full.png'
                  alt='NomadGym Logo'
                  width={200}
                  height={150}
                  className='object-cover mx-auto'
                />
              </div>
              <p className='text-gray-400'>
                {t('trainAnywhere')}
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>{t('contact')}</h3>
              <a
                href='mailto:gyms@nomadgym.es'
                className='flex items-center gap-2 text-gray-400 hover:text-prim transition-colors mt-2'>
                <Mail className='w-5 h-5' />
                infonomadgym@gmail.com
              </a>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>
                {t('followUs')}{' '}
                <Link
                  href='https://www.linkedin.com/company/nomadgym'
                  className='underline hover:text-prim'>
                  Linkedin
                </Link>{' '}
              </h3>
              {/* <div className='flex gap-4'>
                <a
                  href='#'
                  className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-prim transition-colors'>
                  <Instagram className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-prim transition-colors'>
                  <Twitter className='w-5 h-5' />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-prim transition-colors'>
                  <Facebook className='w-5 h-5' />
                </a>
              </div>
            </div>*/}
            </div>
          </div>
          <div className='border-t border-white/10 pt-8 text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} NomadGym. {t('allRights')}
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
      `}</style>
    </main>
  );
}
