import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/post-utils';


export default function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>My next blog</title>
        <meta name='description' content='blog posts on front end development' />
      </Head>
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