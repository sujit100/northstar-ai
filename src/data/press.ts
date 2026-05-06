export interface PressFeature {
  feature: string;
  publication: string;
  publicationUrl?: string;
  date: string;
  title: string;
  image: string;
  imageAlt: string;
  summary: string;
  excerpt: string;
}

// First of many. Add new entries to the top of this array.
export const pressFeatures: PressFeature[] = [
  {
    feature: 'PO Box shipping exclusion · TikTok Shop',
    publication: 'Social Media Today',
    publicationUrl:
      'https://www.socialmediatoday.com/news/tiktok-updates-seller-terms-returns-shipping/742249/',
    date: 'March 11, 2025',
    title: 'TikTok Adds More Flexible Options for Sellers',
    image:
      'https://imgproxy.divecdn.com/EqEF5Qfoeu5oiqLPT7_zN58EqaSWYm8JCErpJ4SupKk/g:ce/rs:fit:770:435/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS90aWt0b2tfc2VsbGVycy5wbmc=.webp',
    imageAlt: 'TikTok Shop seller updates',
    summary:
      'TikTok Shop sellers can now exclude PO Box deliveries and set custom return windows between 14–90 days to streamline order management.',
    excerpt:
      'Using the PO Box exclusion feature prevents PO Boxes from being entered as a delivery address, so you can avoid order cancelations and Delivered Not Received (DNR) notices.',
  },
];
