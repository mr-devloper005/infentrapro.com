'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

const utilityLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Media Distribution', href: '/media-distribution' },
  { label: 'Search', href: '/search' },
  { label: 'Create', href: '/create' },
]

const categoryLinks = [
  
  { label: 'Press Release', href: '/press-release' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 bg-white text-black shadow-[0_1px_0_rgba(0,0,0,.12)]">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-sm">
        {utilityLinks.map((item) => <Link key={item.href} href={item.href} className="hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
      </div>

      <div className="border-y border-black/10">
        <div className="mx-auto grid min-h-[116px] max-w-[1160px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <Link href="/" className="editorial-brand max-w-[58vw] truncate text-center text-3xl font-black uppercase text-[var(--slot4-accent)] [text-shadow:0_1px_0_#0b3157] sm:text-5xl">
            {slot4BrandConfig.siteName}
          </Link>

          <div className="flex items-center justify-end gap-3">
            {session ? (
              <>
                <Link href="/create" className="hidden max-w-[160px] truncate text-xs font-black uppercase tracking-[.12em] sm:block">{session.name}</Link>
                <button type="button" onClick={logout} className="hidden rounded-full bg-[#202020] px-4 py-2 text-xs font-black text-white transition hover:bg-[var(--slot4-accent)] sm:block">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Log in</Link>
                <Link href="/signup" className="rounded-full bg-[var(--slot4-accent)] px-4 py-3 text-[10px] font-black uppercase tracking-[.14em] text-white transition hover:bg-[#202020] sm:px-6">Sign up</Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="border-b border-black/10 bg-white text-black">
        <div className="mx-auto flex min-h-[58px] max-w-[1160px] items-center px-4 sm:px-6 lg:px-8">
          <nav className="hidden flex-1 items-center justify-center gap-7 text-sm font-medium uppercase lg:flex">
            {categoryLinks.map((item) => <Link key={item.href} href={item.href} className="hover:text-[var(--slot4-accent)]">{item.label}</Link>)}
          </nav>
          <form action="/search" className="ml-auto flex min-w-0 items-center border-l border-black/10 lg:w-[260px]">
            <Search className="ml-4 h-4 w-4 text-black/65" />
            <input name="q" type="search" placeholder="Search" className="min-w-0 flex-1 bg-transparent px-3 py-4 text-xs font-bold outline-none placeholder:text-black/45" />
          </form>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black/15 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {[...utilityLinks, ...(session ? [] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
