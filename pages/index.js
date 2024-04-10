import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/post-utils';


export default function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { 
    props: {
      posts: featuredPosts
    },
  }
}