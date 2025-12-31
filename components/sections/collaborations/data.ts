export type BentoSize = 'normal' | 'large' | 'wide';
export type SocialType = 'youtube' | 'tiktok';

export interface BentoItem {
  id: number;
  type: SocialType;
  size: BentoSize;
  title: string;
  desc: string;
  thumbnail: string;
  videoUrl: string;
  stats: string;
  animationDirection: string;
}

const getEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1`;
const getThumbnail = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const COLLAB_DATA: BentoItem[] = [
  {
    id: 1,
    type: 'youtube',
    size: 'large',
    title: 'Sling TV: Enchanted Bar Commercial',
    desc: 'Voice over work for the magical "Enchanted Bar" campaign.',
    thumbnail: getThumbnail('oihjqvLP9mY'),
    videoUrl: getEmbedUrl('oihjqvLP9mY'),
    stats: 'Commercial',
    animationDirection: 'from-left'  
  },
  {
    id: 2,
    type: 'youtube',
    size: 'normal',
    title: 'Stop Motion Scene by Slug Films',
    desc: 'Immersive sound design and vocal performance for stop motion animation.',
    thumbnail: getThumbnail('2FftRPSGVyw'),
    videoUrl: getEmbedUrl('2FftRPSGVyw'),
    stats: 'Stop Motion',
    animationDirection: 'from-top' 
  },
  {
    id: 3,
    type: 'youtube',
    size: 'normal',
    title: 'Animated Short by Jaimz Art',
    desc: 'Character voicing and narrative storytelling for independent animation.',
    thumbnail: getThumbnail('nCatVCxD-UM'),
    videoUrl: getEmbedUrl('nCatVCxD-UM'),
    stats: 'Animmation',
    animationDirection: 'from-right' 
  },
  {
    id: 4,
    type: 'youtube',
    size: 'wide',
    title: 'Sound Foley: Sci-fi Alien Gunfire',
    desc: 'Experimental sound design focusing on sci-fi weapons and alien textures.',
    thumbnail: getThumbnail('8feirwnnYQg'),
    videoUrl: getEmbedUrl('8feirwnnYQg'),
    stats: 'Sound Design',
    animationDirection: 'from-bottom' 
  },
];
