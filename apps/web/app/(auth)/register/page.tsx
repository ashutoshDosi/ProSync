'use client'
import Button from "../../components/ui/Button"
import { useState } from "react"
import { ROLES } from "../roles"

export default function Register() {
  const [role, setRole] = useState("owner")
  const [agreed, setAgreed] = useState(false)

  

  return(
    <div className="mt-6 bg-white/3 border border-white/10 rounded-xl p-6">
      <h1 className="text-white text-2xl font-semibold">Create your account</h1>
      <p className="text-gray-400 text-sm mt-1">Manage inventory, analytics and reservations across your fleet.</p>

      <div className="mt-6">
        <p className="text-gray-400 text-sm mb-2">I am a...</p>
        <div className="flex border border-white/10 rounded-lg overflow-hidden">
          {ROLES.map((r) => (
            <Button
              key={r.value}
              text={r.label}
              isActive={role === r.value}
              onClick={() => setRole(r.value)}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="name" className="text-gray-400 text-sm">Full name</label>
          <input
            id="name"
            type="text"
            placeholder="Jordan Miller"
            className="mt-1 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9184D9]/60"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-gray-400 text-sm">Company name</label>
          <input
            id="company"
            type="text"
            placeholder="Acme Rentals"
            className="mt-1 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9184D9]/60"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="mt-1 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9184D9]/60"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="password" className="text-gray-400 text-sm">Password</label>
          <input
            id="password"
            type="password"
            className="mt-1 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#9184D9]/60"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="text-gray-400 text-sm">Confirm password</label>
          <input
            id="confirmPassword"
            type="password"
            className="mt-1 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#9184D9]/60"
          />
        </div>
      </div>

      <label className="mt-4 flex items-center gap-2 text-sm text-gray-400">
        <input
          type="checkbox"
          className="accent-[#9184D9]"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to the Terms of Service and Privacy Policy
      </label>

      <button
        type="submit"
        disabled={!agreed}
        className="mt-6 w-full border border-[#9184D9]/60 text-[#9184D9] rounded-md py-2.5 text-sm font-medium hover:bg-[#9184D9]/10 disabled:opacity-40 disabled:hover:bg-transparent flex items-center justify-center gap-2"
      >
        Create {role.charAt(0).toUpperCase()+role.slice(1)} account
        <span aria-hidden>→</span>
      </button>

      <p className="text-center text-gray-400 text-sm mt-4">
        Already have an account? <a href="/login" className="text-[#9184D9] hover:underline">Sign in</a>
      </p>
    </div>
  )
}
