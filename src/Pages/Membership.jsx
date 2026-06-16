import React from 'react'
import { useLanguage } from './LanguageContext'

const Membership = () => {
  const { t } = useLanguage() // 👈 Extract custom language mapping state objects

  // Dynamic initialization verification check block
  if (!t || !t.membership) {
    return <div className="py-12 text-center text-lg">Loading Form Systems...</div>
  }

  return (
    <div className="py-6 max-w-xl mx-auto">
      <div className="bg-base-200 border border-base-300 p-6 sm:p-10 rounded-3xl shadow-xl space-y-6">
        
        {/* Header Invitation */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-primary">{t.membership.title}</h2>
          <p className="text-xs sm:text-sm font-semibold opacity-85 px-2">
            {t.membership.subtitle}
          </p>
        </div>

        {/* Registration Input Form Elements */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="form-control w-full">
            <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{t.membership.labelName}</span></label>
            <input type="text" placeholder={t.membership.placeholderName} className="input input-bordered w-full bg-base-100 font-medium" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-control w-full">
              <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{t.membership.labelMobile}</span></label>
              <input type="tel" placeholder="98765XXXXX" className="input input-bordered w-full bg-base-100 font-medium" />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{t.membership.labelLand}</span></label>
              <select className="select select-bordered w-full bg-base-100 font-medium" defaultValue={t.membership.selectOptionDefault}>
                <option disabled>{t.membership.selectOptionDefault}</option>
                <option>{t.membership.selectOptionSmall}</option>
                <option>{t.membership.selectOptionMedium}</option>
                <option>{t.membership.selectOptionOther}</option>
              </select>
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label font-bold text-xs sm:text-sm"><span className="label-text">{t.membership.labelLocation}</span></label>
            <input type="text" placeholder={t.membership.placeholderLocation} className="input input-bordered w-full bg-base-100 font-medium" />
          </div>

          <div className="form-control pt-4">
            <button className="btn btn-primary w-full text-base font-bold shadow-lg transform active:scale-95 transition-transform">
              {t.membership.submitBtn}
            </button>
          </div>
        </form>

        <div className="text-center text-xs opacity-60 font-semibold pt-2 border-t border-base-300">
          {t.membership.footerNote}
        </div>
      </div>
    </div>
  )
}

export default Membership