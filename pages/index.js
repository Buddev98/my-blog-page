import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'getting-started-with-nextjs',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Next js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-04-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'getting-started-with-nextjs',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Next js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-04-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'getting-started-with-nextjs',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Next js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-04-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'getting-started-with-nextjs',
    image: 'getting-started-with-nextjs.png',
    excerpt:
      'Next js is a React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2024-04-10',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
