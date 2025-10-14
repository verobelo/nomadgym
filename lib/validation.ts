import z from 'zod';

export const waitlistFormSchema = z.object({
  email: z.email('Please enter a valid email address'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy',
  }),
});
