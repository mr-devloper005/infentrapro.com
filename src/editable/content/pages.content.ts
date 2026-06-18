import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'News, media, and public updates',
      description: 'Explore media distribution updates, press announcements, publisher visibility, and syndication-ready stories.',
      openGraphTitle: 'Media distribution updates and public announcements',
      openGraphDescription: 'Discover press releases, media coverage, and distribution-focused updates through a clean publication experience.',
      keywords: ['media distribution', 'press release', 'news distribution', 'media coverage'],
    },
    hero: {
      badge: 'Latest media distribution updates',
      title: ['A focused desk for', 'media distribution and public visibility.'],
      description: 'Browse distributed announcements, launch stories, brand updates, syndication notes, and publisher-ready coverage from the live archive.',
      primaryCta: { label: 'Browse media distribution', href: '/media-distribution' },
      secondaryCta: { label: 'Submit an update', href: '/create' },
      searchPlaceholder: 'Search releases, companies, categories, and updates',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together article-style reading, visual browsing, and structured discovery so visitors can move naturally between different content types.',
        'Instead of separating stories, visuals, and supporting resources into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a story, an image-led post, a listing, or a resource page, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A clearer way to move announcements through the media ecosystem.',
    description: `${slot4BrandConfig.siteName} helps brands, publishers, and communications teams present media distribution updates in a readable public archive.`,
    paragraphs: [
      'Instead of hiding releases in disconnected feeds, the platform keeps announcements, supporting details, and related updates easy to scan.',
      'Visitors can move from a current distribution story to related coverage, contact options, and publishing actions without losing context.',
    ],
    values: [
      {
        title: 'Distribution-first reading',
        description: 'We prioritize clear headlines, strong summaries, and fast scanning for press releases and media updates.',
      },
      {
        title: 'Connected visibility',
        description: 'Announcements, categories, search, and detail pages stay connected so every published update has a useful path forward.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and readable page structure to help visitors find relevant media information faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Reach the media distribution desk.',
    description: 'Tell us what you are trying to publish, correct, amplify, or launch. We will route your request through the right editorial or distribution lane.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find stories, listings, visuals, and resources faster.',
      description: 'Use keywords, categories, and content types to discover media distribution posts, public updates, and supporting resources.',
      placeholder: 'Search by release, topic, company, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create media updates.',
      description: 'Use your account to open the publishing workspace and prepare distribution-ready posts for this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create distribution-ready content.',
      description: 'Choose the content type, add source details, and prepare a clean media update with links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing media updates, managing submissions, and creating new distribution content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the publishing workspace, save details, and submit media distribution content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
