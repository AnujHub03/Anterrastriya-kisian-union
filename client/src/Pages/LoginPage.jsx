import React, { useState } from 'react'
import { useLanguage } from './LanguageContext'
import { Link } from 'react-router-dom'

const Login = () => {
  const { t } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  if (!t || !t.login) {
    return <div className="min-h-screen flex items-center justify-center text-lg bg-base-100">Loading...</div>
  }

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-base-100">

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* ===================== LEFT SIDE - Visual ===================== */}
      <div className="hidden lg:flex flex-1 relative z-10">

        {/* Base Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&h=1400&q=80"
            alt="Agricultural landscape"
            className="w-full h-full object-cover scale-110"
            style={{ filter: 'blur(12px) brightness(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-base-900/90 via-base-900/70 to-base-900/85"></div>
        </div>

        {/* Geometric Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Diagonal Accent Line */}
        <div className="absolute top-0 bottom-0 left-[35%] w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">

          {/* Top - Brand */}
          <div className="flex items-center gap-3">
            
            <div>
              <h1 className="text-4xl p-1 font-black text-slate-100 tracking-tight">{t.login.brand || t.home?.brand}</h1>
              <p className="text-[11px] text-accent font-semibold tracking-[0.2em] uppercase">{t.login.brandMotto || t.home?.motto}</p>
            </div>
          </div>

          {/* Middle - Hero Text */}
          <div className="max-w-md">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary mb-6">
              <span className="text-[11px] font-bold text-slate-50 tracking-widest uppercase">{t.login.sideBadge || 'किसान आंदोलन'}</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-black text-slate-100 leading-[1.1] mb-5">
              {t.login.sideTitle || 'भूमि की लड़ाई,'}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                {t.login.sideTitleHighlight || 'किसान की पहचान'}
              </span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-sm">
              {t.login.sideDesc || '~50 Cr किसानों की आवाज़ से जुड़ें। कृषि न्याय और किसान अधिकारों के लिए चल रहे इस ऐतिहासिक आंदोलन का हिस्सा बनें।'}
            </p>

            {/* Stats Row */}
            <div className="flex gap-3 flex-wrap text-slate-300 text-[10px] font-semibold tracking-wide">
              {[
                { value: '~50 Cr', label: t.login.stat1 || 'किसान' },
                { value: '17%', label: t.login.stat2 || 'जीडीपी' },
                { value: '28 राज्य', label: t.login.stat3 || 'सक्रिय' },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3">
                  <div className="text-lg font-black text-slate-100">{s.value}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom - Quote + Location */}
          <div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 mb-4">
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "{t.login.sideQuote || "यदि कृषि गलत हो जाती है, तो देश में कुछ भी सही नहीं हो सकता।"}"
              </p>
              <p className="text-[10px] text-slate-400 font-bold mt-2">— {t.login.sideQuoteAuthor || "एम.एस. स्वामीनाथन"}</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
              📍 भराला, मेरठ, उत्तर प्रदेश — 250221
            </div>
          </div>
        </div>
      </div>

      {/* ===================== RIGHT SIDE - Form ===================== */}
      <div className="flex-1 lg:max-w-[520px] xl:max-w-[560px] flex items-center justify-center p-6 sm:p-10 relative z-10">

        {/* Mobile Brand */}
        <div className="lg:hidden absolute top-6 left-6 flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
            <span className="text-xl">🌾</span>
          </div>
          <span className="text-lg font-black text-primary">{t.login.brand || t.home?.brand}</span>
        </div>

        <div className="w-full max-w-sm">

          {/* Back Link
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-base-content/40 hover:text-primary transition-colors mb-10 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            {t.login.backHome || 'होम पर वापस जाएं'}
          </Link> */}

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight mb-2">{t.login.title || 'स्वागत है'}</h2>
            <p className="text-sm text-base-content/50 leading-relaxed">{t.login.subtitle || 'आंदोलन से जुड़ने के लिए साइन इन करें।'}</p>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border border-base-300 bg-base-200/40 hover:bg-base-200 hover:border-base-content/20 transition-all duration-300 mb-5 group/btn">
            {/* <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg> */}
            <span className="text-sm font-semibold text-base-content/70 group-hover/btn:text-base-content/90 transition-colors">{t.login.googleBtn || 'Google से जारी रखें'}</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-base-300"></div>
            <span className="text-[10px] font-bold text-base-content/30 tracking-[0.15em] uppercase">{t.login.divider || 'ईमेल से साइन इन'}</span>
            <div className="flex-1 h-px bg-base-300"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`w-full h-14 rounded-xl border bg-base-100 px-4 pt-4 pb-1 text-sm font-medium outline-none transition-all duration-300 peer ${focusedField === 'email' || formData.email ? 'border-primary shadow-[0_0_0_3px_rgba(234,88,12,0.08)]' : 'border-base-300 hover:border-base-content/20'}`}
                placeholder=" "
                required
              />
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email ? 'top-2.5 text-[10px] text-primary font-bold tracking-wide' : 'top-1/2 -translate-y-1/2 text-sm text-base-content/40 font-medium'}`}>
                {t.login.emailLabel || 'ईमेल पता'}
              </label>
              <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-60' : 'opacity-20'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className={`w-full h-14 rounded-xl border bg-base-100 px-4 pt-4 pb-1 text-sm font-medium outline-none transition-all duration-300 peer ${focusedField === 'password' || formData.password ? 'border-primary shadow-[0_0_0_3px_rgba(234,88,12,0.08)]' : 'border-base-300 hover:border-base-content/20'}`}
                placeholder=" "
                required
              />
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'password' || formData.password ? 'top-2.5 text-[10px] text-primary font-bold tracking-wide' : 'top-1/2 -translate-y-1/2 text-sm text-base-content/40 font-medium'}`}>
                {t.login.passwordLabel || 'पासवर्ड'}
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/25 hover:text-base-content/60 transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer group/chk">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-md border-2 border-base-300 peer-checked:border-primary peer-checked:bg-primary transition-all duration-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <span className="text-xs text-base-content/50 font-medium group-hover/chk:text-base-content/70 transition-colors">{t.login.rememberMe || 'याद रखें'}</span>
              </label>
              <Link to="/forgot-password" className="text-xs text-primary/70 hover:text-primary font-semibold transition-colors">
                {t.login.forgotLink || 'पासवर्ड भूल गए?'}
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 rounded-xl bg-gradient-to-r from-primary via-primary to-accent text-base-100 font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                <>
                  {t.login.loginBtn || 'साइन इन करें'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-xs text-base-content/40 mt-7">
            {t.login.noAccount || 'अभी अकाउंट नहीं है?'}{' '}
            <Link to="/register" className="text-primary font-bold hover:underline underline-offset-2">
              {t.login.signupLink || 'अकाउंट बनाएं'}
            </Link>
          </p>

          {/* Separator */}
          <div className="h-px bg-base-300 my-7"></div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-5">
            {[
              { icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ), text: t.login.trustSecure || 'एन्क्रिप्टेड' },
              { icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ), text: t.login.trustPrivate || 'निजी' },
              { icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ), text: t.login.trustGlobal || 'वैश्विक' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-base-content/25">
                {item.icon}
                <span className="text-[10px] font-semibold tracking-wide uppercase">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Mobile Location */}
          <div className="lg:hidden text-center mt-6">
            <span className="text-[10px] text-base-content/20">📍 भराला, मेरठ, उत्तर प्रदेश — 250221</span>
          </div>
        </div>
      </div>

      <style>{`
        ::selection {
          background: rgba(234, 88, 12, 0.2);
        }
      `}</style>
    </div>
  )
}

export default Login