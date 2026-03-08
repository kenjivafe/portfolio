'use client';

import { useState } from 'react';
import { X, Send, Mail, Clock, ShoppingBag, MessageCircle, User } from 'lucide-react';
import { FormData } from '@/types';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Show success message
    alert('Message sent successfully! I\'ll get back to you soon.');
    // Close modal and reset form
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-6xl lg:px-16 mr-auto ml-auto p-6 lg:p-16 overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border border-gray-100 rounded-[40px]">
      {/* <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-md text-gray-600 max-w-xl">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you!
        </p>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form card */}
        <div className="lg:col-span-5">
          <div id="contact" className="rounded-2xl bg-stone-900/95 backdrop-blur ring-1 ring-stone-800 shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Portfolio Contact</p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Connect with me
                </h3>
              </div>
              <div className="h-9 w-9 rounded-lg bg-white text-stone-900 flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="">
                <label htmlFor="ct-name" className="block text-xs text-gray-300">Your name<span className="text-gray-500"> *</span></label>
                <input 
                  id="ct-name" 
                  name="name" 
                  type="text" 
                  required 
                  placeholder="Jane Doe" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none bg-white/10 placeholder:text-gray-400 text-white"
                />
              </div>
              <div className="">
                <label htmlFor="ct-email" className="block text-xs text-gray-300">Email<span className="text-gray-500"> *</span></label>
                <div className="relative mt-1">
                  <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    id="ct-email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="you@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 outline-none bg-white/10 placeholder:text-gray-400 text-white"
                  />
                </div>
              </div>
                            <div className="">
                <label htmlFor="ct-msg" className="block text-xs text-gray-300">Message</label>
                <textarea 
                  id="ct-msg" 
                  name="message" 
                  rows={4} 
                  placeholder="Tell us what you&apos;re looking for..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-white/10 focus:ring-2 focus:ring-stone-500 outline-none bg-white/10 placeholder:text-gray-400 text-white"
                ></textarea>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-xl bg-white text-stone-900 px-4 py-3 text-sm font-semibold hover:bg-stone-200 transition-colors">
                Send message
                <Send className="h-4 w-4 ml-2" />
              </button>
              <p className="text-[11px] text-gray-500">By submitting, you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </div>

        {/* Copy + highlights */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-gray-900 tracking-tight">Let&apos;s build it.</h2>
          <p className="text-base sm:text-lg max-w-2xl text-gray-600 mt-4">
            Web development, mobile apps, or partnerships—tell me what you need. I reply within one business day.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-gray-100 backdrop-blur ring-1 ring-gray-200 flex items-center justify-center text-gray-600">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-sm">Quick response</p>
                <p className="text-gray-600 text-xs">Most messages receive a reply in under 24h.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-gray-100 backdrop-blur ring-1 ring-gray-200 flex items-center justify-center text-gray-600">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <div className="">
                <p className="text-gray-900 font-semibold text-sm">Clear next steps</p>
                <p className="text-gray-600 text-xs">I&apos;ll follow up with a concise plan and timeline.</p>
              </div>
            </div>
          </div>

          {/* Direct contact card */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-gray-50 backdrop-blur ring-1 ring-gray-200 shadow-lg p-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-stone-500 to-stone-900 flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 leading-none uppercase tracking-wider">Developer</p>
                <p className="text-gray-900 font-semibold tracking-tight truncate">Kenji Von Ashley</p>
              </div>
              <a href="mailto:hello@kenjivafe.dev" className="ml-1 inline-flex items-center gap-2 rounded-xl bg-stone-500 text-white px-3 py-2 text-xs font-semibold hover:bg-stone-600 transition-colors">
                Ask directly
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
