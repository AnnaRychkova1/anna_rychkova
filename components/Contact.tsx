'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { MdOutlineSendToMobile } from 'react-icons/md';
import { FaHourglassEnd } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);

  const validations = {
    name: (value: string) => value.trim() !== '',
    email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: (value: string) => value.trim() !== '',
  };

  const errorMessages = {
    name: 'Name is required.',
    email: {
      required: 'Email is required.',
      invalid: 'Enter a valid email address.',
    },
    message: 'Message is required.',
  };

  const validateField = (name: keyof FormData, value: string) => {
    const trimmedValue = value.trim();

    if (name === 'name' && trimmedValue === '') {
      setErrors(prev => ({ ...prev, name: errorMessages.name }));
      return false;
    }

    if (name === 'email') {
      if (trimmedValue === '') {
        setErrors(prev => ({ ...prev, email: errorMessages.email.required }));
        return false;
      } else if (!validations.email(trimmedValue)) {
        setErrors(prev => ({ ...prev, email: errorMessages.email.invalid }));
        return false;
      }
    }

    if (name === 'message' && trimmedValue === '') {
      setErrors(prev => ({ ...prev, message: errorMessages.message }));
      return false;
    }

    setErrors(prev => ({ ...prev, [name]: undefined }));
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      validateField(name as keyof FormData, value);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    validateField(name as keyof FormData, value);
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const fieldValidations = (
      Object.keys(validations) as (keyof FormData)[]
    ).map(field => validateField(field, form[field]));

    const isFormValid = fieldValidations.every(Boolean);
    if (!isFormValid) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setSubmitted(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitted(false);
    } finally {
      setSending(false);
      setShowModal(true);
    }
  };

  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }
  }, [form.message]);

  return (
    <section id="contact">
      <div className="container flex flex-col gap-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          Contact me
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-xl w-full mx-auto space-y-4 flex flex-col gap-6 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <motion.input
              variants={itemVariants}
              id="email"
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required
              className="w-full py-2 px-4 border-2 border-[rgba(115,7,66,0.1)] focus:border-[rgba(115,7,66,0.3)] focus:outline-none rounded-xl shadow-md shadow-fuchsia-900/10 transition-all duration-300"
            />
            {errors.name && (
              <p className="absolute bottom-[-24px] left-0 text-[var(--light-accent)] text-[1rem] transition-all duration-300">
                {errors.name}
              </p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <motion.input
              variants={itemVariants}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className="w-full py-2 px-4 border-2 border-[rgba(115,7,66,0.1)] focus:border-[rgba(115,7,66,0.3)] focus:outline-none  rounded-xl shadow-md shadow-fuchsia-900/10 transition-all duration-300"
              required
            />
            {errors.email && (
              <p className="absolute bottom-[-24px] left-0 text-[var(--light-accent)] text-[1rem] transition-all duration-300">
                {errors.email}
              </p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <motion.textarea
              ref={ref}
              variants={itemVariants}
              id="message"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className="w-full min-h-[128px] pt-2 pb-4 px-4 border-2 border-[rgba(115,7,66,0.1)] focus:border-[rgba(115,7,66,0.3)] focus:outline-none rounded-xl overflow-hidden resize-none shadow-md shadow-fuchsia-900/10 transition-all duration-300"
              required
            />
            {errors.message && (
              <p className="absolute bottom-[-18px] left-0 text-[var(--light-accent)] text-[1rem] transition-all duration-300">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <motion.button
              type="submit"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[var(--light-accent)] text-[var(--dark-accent)] font-semibold rounded-2xl shadow-md hover:bg-[var(--dark-accent)] hover:text-[var(--light-accent)] transition-all duration-300 w-max md:w-[162px] text-center"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                type: 'spring',
                stiffness: 120,
              }}
              disabled={sending}
            >
              {sending ? (
                <>
                  <FaHourglassEnd size={22} /> Sending
                </>
              ) : (
                <>
                  <MdOutlineSendToMobile size={22} /> Send
                </>
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-60 bg-[rgba(59,44,50,0.9)]"
            onClick={e => {
              if (e.target === e.currentTarget) {
                setShowModal(false);
              }
            }}
          >
            <div className="bg-[var(--bg)] rounded-xl p-6 max-w-sm w-full text-center shadow-xl">
              <p
                className={`text-xl font-bold white-space-pre-line ${
                  submitted
                    ? 'text-[var(--dark-accent)]'
                    : 'text-[var(--light-accent)]'
                }`}
              >
                {submitted
                  ? 'Message sent successfully!\nThank you for reaching out!'
                  : 'Oops! Something went wrong.\nPlease try again later.'}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-[rgba(253,216,229,0.9)] text-[var(--dark-accent)] hover:bg-[var(--light-accent)] transition-all duration-300 font-semibold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
