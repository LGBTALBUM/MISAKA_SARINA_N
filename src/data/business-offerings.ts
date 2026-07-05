export type BusinessOffering = {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  suitableFor: string[];
  deliverables: string[];
  links?: { label: string; href: string; note?: string }[];
};

export const businessOfferings: BusinessOffering[] = [
  {
    title: 'Music production and arrangement',
    slug: 'music-production',
    eyebrow: 'Production',
    summary: 'Original song production, arrangement support, demo polishing, vocal-direction planning, and release-context consultation for independent creators and virtual singer projects.',
    suitableFor: ['Independent artists', 'VOCALOID / virtual singer projects', 'Release planning'],
    deliverables: ['Production consultation', 'Arrangement direction', 'Reference review', 'Release-ready planning notes'],
    links: [
      { label: 'SoundBetter', href: 'https://soundbetter.com/profiles/701882-misaka-sarina', note: 'Production profile' },
      { label: 'Music archive', href: '/music/', note: 'Listen to existing releases' }
    ]
  },
  {
    title: 'Web archive and creator homepage',
    slug: 'web-archive',
    eyebrow: 'Web / Archive',
    summary: 'Static creator sites, music catalogues, link archive migrations, release timeline structures, and reproducible project pages built around long-term maintainability.',
    suitableFor: ['Creators with scattered links', 'Music catalogues', 'Personal archive sites'],
    deliverables: ['Information architecture', 'Static site implementation', 'Catalogue data structure', 'Deployment notes'],
    links: [
      { label: 'Works', href: '/works/', note: 'Project archive' },
      { label: 'GitHub', href: 'https://github.com/LGBTALBUM/MISAKA_SARINA_N', note: 'Current site repository' }
    ]
  },
  {
    title: 'Digital project consulting',
    slug: 'digital-project-consulting',
    eyebrow: 'Consulting',
    summary: 'Small-scope technical planning for creator infrastructure, content operations, music metadata workflows, deployment paths, and archive maintenance routines.',
    suitableFor: ['Small creator teams', 'Personal infrastructure', 'Archive operations'],
    deliverables: ['Architecture review', 'Workflow notes', 'Risk checklist', 'Implementation roadmap'],
    links: [
      { label: 'Contact', href: '/contact/', note: 'Start a project inquiry' },
      { label: 'Blog', href: '/blog/', note: 'Read maintenance notes' }
    ]
  }
];

export const businessProcess = [
  { title: 'Brief', body: 'Share the project goal, reference links, expected outcome, deadline, budget range, and any technical constraints.' },
  { title: 'Scope', body: 'I turn the brief into a small, concrete scope: deliverables, timeline, assumptions, and what is explicitly outside the project.' },
  { title: 'Build', body: 'The work is executed in small reviewable steps, with notes kept clear enough for later maintenance or handoff.' },
  { title: 'Archive', body: 'Final outputs should remain understandable after launch: links, changelogs, deployment notes, and usage notes are kept close to the work.' }
];
