import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!t || !t.contact) return <div className="py-24 text-center text-lg">Loading...</div>
  const c = t.contact

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <div className="py-8 max-w-6xl mx-auto space-y-10 px-4 sm:px-6 lg:px-8">
      
      {/* Structural Branding Header - Glassmorphism Hero */}
      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1400&h=400&q=80)',
            filter: 'blur(4px)',
          }}
        ></div>
        {/* Lightened overlay to make the background image clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-base-100/60 via-base-200/60 to-base-100/60 dark:from-base-900/60 dark:via-base-800/60 dark:to-base-900/60 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 p-10 sm:p-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-green-800/10 border border-green-800/20 text-green-800 dark:text-green-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            {c.subtitle}
          </div>
          <h2 className="text-4xl text-slate-100 sm:text-5xl font-black text-base-content tracking-tight leading-tight drop-shadow-md">
            {c.title}
          </h2>
        </div>
      </div>

      {submitted && (
        <div className="alert bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm border border-green-500/30 text-green-800 dark:text-green-400 font-bold rounded-2xl shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{c.successMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-slate-100 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] shadow-xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-green-800 dark:text-green-400 text-xs font-extrabold uppercase tracking-widest border-b border-base-300/40 pb-4 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {c.formTitle}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text text-black">{c.labelName} *</span></label>
                <input type="text" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} className="input input-bordered bg-base-100/80 dark:bg-base-900/80 font-medium w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold"><span className="label-text text-black">{c.labelPhone}</span></label>
                <input type="tel" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} placeholder="98765XXXXX" className="input input-bordered bg-base-100/80 dark:bg-base-900/80 font-medium w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" />
              </div>
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text text-black">{c.labelEmail} *</span></label>
              <input type="email" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} className="input input-bordered bg-base-100/80 dark:bg-base-900/80 font-medium w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text text-black">{c.labelSubject} *</span></label>
              <input type="text" value={form.subject} onChange={e => setForm(p => ({...p, subject: e.target.value}))} className="input input-bordered bg-base-100/80 dark:bg-base-900/80 font-medium w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
            </div>
            <div className="form-control">
              <label className="label text-xs font-bold"><span className="label-text text-black">{c.labelMessage} *</span></label>
              <textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} className="textarea textarea-bordered bg-base-100/80 dark:bg-base-900/80 font-medium h-36 leading-relaxed w-full focus:border-green-800 focus:ring-1 focus:ring-green-800/20 transition-all" required />
            </div>
            <button type="submit" className="btn bg-green-800 hover:bg-green-700 text-white border-none w-full font-black rounded-full shadow-lg shadow-green-800/20 text-base hover:scale-[1.02] active:scale-95 transition-transform duration-300">
              {c.btnSend}
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          
          {/* Office Info */}
          <div className="bg-slate-100 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl space-y-5">
            <h3 className="text-lg font-black text-green-700 dark:text-green-400">{c.officeTitle}</h3>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-black mb-0.5">Address</p>
                  <p className="font-bold text-black">अंतर्राष्ट्रीय किसान यूनियन</p>
                  <p className="opacity-80 text-sm text-black">{c.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-black mb-0.5">{c.emailLabel}</p>
                  <a href="mailto:anterrastriyakisanunion@gmail.com" className="text-green-700 dark:text-green-400 font-bold hover:underline text-sm">anterrastriyakisanunion@gmail.com</a>
                  <br />
                  <a href="mailto:support@anterrastriyakisanunion.com" className="text-green-700 dark:text-green-400 font-bold hover:underline text-sm">support@anterrastriyakisanunion.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-black mb-0.5">{c.phoneLabel}</p>
                  <a href="tel:+919012345678" className="text-green-700 dark:text-green-400 font-bold hover:underline text-sm">+91 6395103639</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕐</span>
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-black mb-0.5">{c.hoursLabel}</p>
                  <p className="opacity-80 text-sm text-black">{c.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/916395103639"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-[1.5rem] shadow-lg shadow-green-600/25 transition-all transform hover:scale-105 active:scale-95"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {c.whatsapp}
          </a>

          {/* Social Media */}
          <div className="bg-white/70 dark:bg-base-900/70 backdrop-blur-sm border border-white/40 dark:border-white/10 rounded-[2rem] p-6 shadow-xl">
            <h3 className="text-[10px] font-black text-base-content/50 uppercase tracking-widest mb-4">{c.socialTitle}</h3>
            <div className="flex flex-wrap gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-base-100/50 dark:bg-base-900/50 border border-base-300/30 gap-2 font-bold hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300 rounded-xl transition-all">
                <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-base-100/50 dark:bg-base-900/50 border border-base-300/30 gap-2 font-bold hover:bg-sky-100 hover:text-sky-600 hover:border-sky-300 rounded-xl transition-all">
                <svg className="w-4 h-4 fill-current text-sky-500" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter / X
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-base-100/50 dark:bg-base-900/50 border border-base-300/30 gap-2 font-bold hover:bg-red-100 hover:text-red-600 hover:border-red-300 rounded-xl transition-all">
                <svg className="w-4 h-4 fill-current text-red-600" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact