'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const tasks = SITE_CONFIG.tasks.filter((task) => task.enabled).slice(0, 7)

  return (
    <footer className="bg-[#202020] text-white">
      <div className="mx-auto max-w-[1160px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr_1.05fr]">
          <div>
            <Link href="/" className="editorial-brand text-4xl font-black uppercase text-[var(--slot4-accent)] sm:text-5xl">{slot4BrandConfig.siteName}</Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/68">{globalContent.footer?.description || 'Media distribution coverage, release visibility, publisher updates, and syndication insights for brands and communicators.'}</p>
          </div>
          <div>
            <h3 className="pb-3 text-xl font-black uppercase">Categories</h3>
            <div className="mt-4 grid gap-0">
              {tasks.map((task) => (
                <Link key={task.key} href={SITE_CONFIG.taskViews[task.key] || `/${task.key}`} className="border-t border-white/10 py-3 text-sm text-white/75 hover:text-[var(--slot4-accent)]">
                  {task.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="pb-3 text-xl font-black uppercase">Latest Post</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/media-distribution" className="group inline-flex items-center justify-between gap-4 border-t border-white/10 py-3 text-sm leading-6 text-white/75 hover:text-[var(--slot4-accent)]">
                Browse current media distribution stories <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              <Link href="/search" className="border-t border-white/10 py-3 text-sm text-white/75 hover:text-[var(--slot4-accent)]">Search the archive</Link>
              {session ? <><Link href="/create" className="border-t border-white/10 py-3 text-sm text-white/75 hover:text-[var(--slot4-accent)]">Create as {session.name}</Link><button onClick={logout} className="border-t border-white/10 py-3 text-left text-sm text-white/75 hover:text-[var(--slot4-accent)]">Logout</button></> : <><Link href="/login" className="border-t border-white/10 py-3 text-sm text-white/75 hover:text-[var(--slot4-accent)]">Log in</Link><Link href="/signup" className="border-t border-white/10 py-3 text-sm text-white/75 hover:text-[var(--slot4-accent)]">Sign up</Link></>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] px-4 py-5 text-center text-sm text-white/68">Copyright © {year} {slot4BrandConfig.siteName}. All rights reserved.</div>
    </footer>
  )
}
