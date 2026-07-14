'use client'
import Button from "../../components/ui/Button"
import { useState } from "react"
import { ROLES } from "../roles"

export default function Login() {
  const [role, setRole] = useState("owner")

  const handleClick = (selectedRole : string) => {
    setRole(selectedRole)
  }

  const roleLabel = ROLES.find((r) => r.value === role)?.label ?? ""

  return(
    <div className="mt-6 bg-white/3 border border-white/10 rounded-xl p-6">
      <h1 className="text-white text-2xl font-semibold">Sign in</h1>
      <p className="text-gray-400 text-sm mt-1">Manage inventory, analytics and reservations across your fleet.</p>

      <div className="mt-6">
        <p className="text-gray-400 text-sm mb-2">Role</p>
        <div className="flex border border-white/10 rounded-lg overflow-hidden">
          {ROLES.map((r) => (
            <Button
              key={r.value}
              text={r.label}
              isActive={role === r.value}
              onClick={() => handleClick(r.value)}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className="mt-1 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#9184D9]/60"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="password" className="text-gray-400 text-sm">Password</label>
        <input
          id="password"
          type="password"
          className="mt-1 w-full bg-transparent border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#9184D9]/60"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-400">
          <input type="checkbox" className="accent-[#9184D9]" />
          Remember me
        </label>
        <a href="#" className="text-sm text-[#9184D9] hover:underline">Forgot password?</a>
      </div>

      <button
        type="submit"
        className="mt-6 w-full border border-[#9184D9]/60 text-[#9184D9] rounded-md py-2.5 text-sm font-medium hover:bg-[#9184D9]/10 flex items-center justify-center gap-2"
      >
        Sign in as {roleLabel}
        <span aria-hidden>→</span>
      </button>

      <p className="text-center text-gray-400 text-sm mt-4">
        Don&apos;t have an account? <a href="/register" className="text-[#9184D9] hover:underline">Create one</a>
      </p>
    </div>
  )
}