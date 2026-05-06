export interface NavChild {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

// Hrefs use absolute paths so they resolve from any page (root, /about/, /book/, etc.).
// "/#approach" navigates back to the homepage and scrolls to the engagement section.
export const navItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Workflow Automator', href: '/services/#service-workflow' },
      { label: 'Insight Engine', href: '/services/#service-insights' },
      { label: 'Document Brain', href: '/services/#service-documents' },
      { label: 'Always-On Front Desk', href: '/services/#service-frontdesk' },
      { label: 'Inbox Autopilot', href: '/services/#service-response' },
      { label: 'Future-Proof Your Service', href: '/services/#service-ainative' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights/ai-for-smbs/',
    children: [
      { label: 'AI for SMBs', href: '/insights/ai-for-smbs/' },
      { label: 'Automation Playbook', href: '#', disabled: true },
      { label: 'Implementation Guide', href: '#', disabled: true },
    ],
  },
  {
    label: 'Testimonials',
    href: '/#testimonials',
    children: [
      { label: 'Featured Stories', href: '#', disabled: true },
    ],
  },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'Background', href: '/about/#background' },
      { label: 'Approach', href: '/#approach' },
      { label: 'Press and Speaking', href: '/about/#press' },
    ],
  },
];
