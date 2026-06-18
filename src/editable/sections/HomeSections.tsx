import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableCategory, getEditableExcerpt, postHref } from '@/editable/cards/PostCards'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function TextStoryCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="editable-pop group block bg-white py-10 text-center transition hover:-translate-y-1">
      <p className="mx-auto w-fit border-b border-black text-xs font-black uppercase">{getEditableCategory(post)}</p>
      <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black uppercase leading-[1.06] text-[#202020] transition group-hover:text-[var(--slot4-accent)] sm:text-4xl">{post.title}</h3>
      <p className="mx-auto mt-7 max-w-2xl border-l-8 border-[var(--slot4-accent)] pl-5 text-left text-base leading-7 text-black/80 first-letter:text-6xl first-letter:font-black first-letter:text-[var(--slot4-accent)]">{getEditableExcerpt(post, 170)}</p>
      <span className="mt-9 inline-flex min-w-60 items-center justify-center rounded-full bg-[#2f2f2f] px-7 py-3 text-sm font-black text-white transition group-hover:bg-[var(--slot4-accent)]">Continue Reading</span>
      <span className="sr-only">Story {index + 1}</span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = 'Media Distribution That Moves Your Story Further'

  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="editable-animate mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[.2em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[.98] text-[#202020] sm:text-7xl">{lead?.title || heroTitle}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/65">{lead ? getEditableExcerpt(lead, 220) : 'Publish releases, announcements, newsroom updates, and campaign stories through a focused media distribution experience.'}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>Browse Distribution <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/create" className={dc.button.secondary}>Submit Media Update</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 6)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} border-t border-black/10 py-8 sm:py-10`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="editable-stagger divide-y divide-black/10">
            {railPosts.map((post, index) => <TextStoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
          <aside className="space-y-8 lg:sticky lg:top-64 lg:self-start">
            <form action="/search" className="border border-black/10 bg-white p-8">
              <label className="flex border border-black/10">
                <input name="q" placeholder="Type here to search" className="min-w-0 flex-1 px-4 py-4 outline-none" />
                <button className="bg-[#2f2f2f] px-6 text-white" aria-label="Search"><Search className="h-5 w-5" /></button>
              </label>
            </form>
            <div className="border border-black/10 bg-white p-8">
              <h2 className="border-b border-black/10 pb-3 text-2xl font-black uppercase">Recent Posts</h2>
              <div className="mt-5">
                {railPosts.slice(0, 5).map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = posts.slice(6, 12)
  if (!items.length) return null
  return (
    <section className="bg-[#f7fbff]">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="mb-6 text-center">
          <p className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-accent)]">Distribution desk</p>
          <h2 className="mt-2 text-4xl font-black uppercase text-[#202020]">Campaign intelligence</h2>
        </div>
        <div className="editable-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(47,143,237,.14)]">
              <p className="text-xs font-black uppercase tracking-[.18em] text-[var(--slot4-accent)]">{String(index + 1).padStart(2, '0')} / {getEditableCategory(post)}</p>
              <h3 className="mt-4 text-2xl font-black uppercase leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
              <p className="mt-4 line-clamp-4 text-sm leading-7 text-black/65">{getEditableExcerpt(post, 160)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = (collected.length ? collected : posts).slice(0, 8)
  if (!source.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[.22em] text-[var(--slot4-accent)]">Archive focus</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight">Explore every {taskLabel(primaryTask).toLowerCase()} story from {slot4BrandConfig.siteName}</h2>
          </div>
          <div className="grid gap-0 border-t border-black/10">
            {source.map((post, index) => <CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#202020] text-white">
      <div className={`${dc.shell.section} grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-center`}>
        <div>
          <p className="text-xs font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Start distributing</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-tight">Turn announcements into media-ready stories.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/create" className={dc.button.accent}>Create Update</Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-black">Contact Desk</Link>
        </div>
      </div>
    </section>
  )
}
