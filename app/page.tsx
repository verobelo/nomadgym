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

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      email: '',
      acceptedPrivacy: false,
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = (data: WaitlistFormValues) => {
    const existingEmails = JSON.parse(localStorage.getItem('waitlist') || '[]');
    existingEmails.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('waitlist', JSON.stringify(existingEmails));

    setIsSubmitted(true);
    form.reset();

    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
              className='h-14 object-cover'
              priority
            />
            <div className='inline-flex items-center gap-2 bg-prim/10 border border-acc/20 rounded-sm px-4 py-2 mb-8'>
              <Sparkles className='w-4 h-4 text-acc' />
              <span className='text-prim text-base font-medium'>
                Coming Soon to Spain
              </span>
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
              Your Journey. Your Route.
              <br />
              <span className='bg-gradient-to-r from-prim to-acc bg-clip-text text-transparent'>
                Your Gym.
              </span>
            </h1>

            <p className='text-xl sm:text-2xl text-neutral mb-8 max-w-2xl mx-auto'>
              One pass. Unlimited access to partner gyms across Spain. Perfect
              for tourists, vanlifers, and eternal wanderers.
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
            Know more
          </span>
        </div>
      </section>

      <section id='how-it-works' className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl font-bold text-sec mb-4'>
              How It Works
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Getting started is simple. Train anywhere in just 3 easy steps.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 lg:gap-12'>
            {[
              {
                icon: CreditCard,
                step: '01',
                title: 'Buy Your Entry Pack',
                description:
                  'Choose from 5, 10, or 15+ entries. More options are coming.',
              },
              {
                icon: MapPin,
                step: '02',
                title: 'Find Gyms Near You',
                description:
                  'Browse our network of partner gyms across Spain. Filter by location, amenities, and availability.',
              },
              {
                icon: Dumbbell,
                step: '03',
                title: 'Train When You Want',
                description:
                  "Show up, scan your pass, and train. It's that simple. No contracts, no hassle.",
              },
            ].map((item, index) => (
              <div key={index} className='relative group'>
                <div className='bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-prim/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
                  <div className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-prim to-acc rounded-full flex items-center justify-center text-white font-bold shadow-lg'>
                    {item.step}
                  </div>

                  <div className='mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-prim/10 to-acc/10 rounded-2xl group-hover:scale-110 transition-transform duration-300'>
                    <item.icon className='w-8 h-8 text-prim' />
                  </div>

                  <h3 className='text-2xl font-bold text-sec mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {item.description}
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
              Why Choose NomadGym?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              The flexibility you need. The savings you want. The freedom you
              deserve.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-6'>
            {[
              {
                icon: Sparkles,
                title: 'Total Flexibility',
                description: 'Train at any partner gym. No fixed locations.',
              },
              {
                icon: CreditCard,
                title: 'Save Money',
                description: 'Pay less. No expensive monthly memberships.',
              },
              {
                icon: MapPin,
                title: 'Network of Gyms',
                description:
                  'Access hundreds of gyms across Spain. Check gym availability in the gyms list.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-2xl border border-gray-100 hover:border-prim/30 hover:shadow-xl transition-all duration-300 group'>
                <div className='mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-prim/10 to-acc/10 rounded-xl group-hover:scale-110 transition-transform duration-300'>
                  <benefit.icon className='w-6 h-6 text-prim' />
                </div>
                <h3 className='text-xl font-bold text-sec mb-2'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {benefit.description}
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
                  For Gym Owners
                </span>
              </div>

              <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                Grow Your Gym with <span className='text-prim'>NomadGym</span>
              </h2>
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                Join our network and attract a new wave of fitness enthusiasts.
                Perfect for filling off-peak hours and reaching travelers.
              </p>

              <div className='space-y-6 mb-8'>
                {[
                  {
                    icon: Users,
                    title: 'Attract New Customers',
                    description:
                      'Reach tourists, digital nomads, and vanlifers exploring Spain.',
                  },
                  {
                    icon: Clock,
                    title: 'Fill Off-Peak Hours',
                    description:
                      "Maximize your gym's capacity during quieter times of the day.",
                  },
                  {
                    icon: TrendingUp,
                    title: 'No Risk, Pay Per Use',
                    description:
                      'Only pay for actual visits. No upfront costs or commitments.',
                  },
                ].map((item, index) => (
                  <div key={index} className='flex gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-prim/20 to-acc/20 rounded-xl flex items-center justify-center'>
                      <item.icon className='w-6 h-6 text-acc' />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold mb-1'>
                        {item.title}
                      </h3>
                      <p className='text-gray-400'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href='mailto:infonomadgym@gmail.com'
                className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-acc to-[#00F0D0] text-sec font-semibold rounded-full hover:shadow-lg hover:shadow-acc/50 transform hover:scale-105 transition-all duration-300 group'>
                Partner My Gym
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
            Ready to Start Your Fitness Journey?
          </h2>
          <p className='text-xl text-gray-600 mb-10'>
            Join the waitlist and be the first to know when we launch in Spain.
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
                          placeholder='Enter your email'
                          className='px-6 py-4 h-auto rounded-md border-2 border-gray-200 text-sec placeholder-gray-400 focus:outline-none focus:border-prim transition-all'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type='submit'
                  disabled={
                    form.formState.isSubmitting ||
                    !form.watch('acceptedPrivacy')
                  }
                  className='px-8 py-4 bg-gradient-to-r from-prim to-[#FF8555] text-white font-semibold rounded-md hover:shadow-lg hover:shadow-prim/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100 disabled:hover:shadow-none cursor-pointer'>
                  Join Waitlist
                  <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </div>

              <FormField
                control={form.control}
                name='acceptedPrivacy'
                render={({ field }) => (
                  <FormItem className='mt-4 flex items-start gap-2 text-left space-y-0'>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className='ml-2'
                      />
                    </FormControl>
                    <div className='space-y-1 leading-none'>
                      <label className='text-sm text-gray-600 cursor-pointer'>
                        I agree to receive information about NomadGym launch and
                        accept the{' '}
                        <Link
                          href='/privacy'
                          className='text-prim hover:underline font-medium'>
                          Privacy Policy
                        </Link>
                      </label>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {isSubmitted && (
                <p className='mt-4 text-acc flex items-center justify-center gap-2'>
                  <Check className='w-5 h-5' />
                  You&apos;re on the list! We&apos;ll be in touch soon.
                </p>
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
                Train at any gym in Spain with a single pass. Perfect for
                travelers and digital nomads.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>Contact</h3>
              <a
                href='mailto:gyms@nomadgym.es'
                className='flex items-center gap-2 text-gray-400 hover:text-prim transition-colors mt-2'>
                <Mail className='w-5 h-5' />
                infonomadgym@gmail.com
              </a>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-4'>
                Follow us on{' '}
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
              &copy; {new Date().getFullYear()} NomadGym. All rights reserved.
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
