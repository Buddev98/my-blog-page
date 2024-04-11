import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-utils";


export default function AllPostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="List of all programming tutorials and posts!" />
      </Head>
      <AllPosts posts={posts}/>
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}
