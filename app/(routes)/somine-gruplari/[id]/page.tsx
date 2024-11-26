import React from 'react'
import pageContent from '@/constants/pageContent'
import Header from '@/components/Somıne-Gruplari/Ornek/Header'
import Navbar from '@/components/Navbar'

interface Post {
  id: string;
  title: string;
  content: string;
  images: string[];
  pdf:string;
}

const page = async ({ params }: { params: { id: string } }) => {
  const post: Post | undefined = pageContent.find((p) => p.id === params.id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <React.Fragment>
      <Navbar />
      <Header title={post.title} content={post.content} images={post.images} pdf={post.pdf} />
    </React.Fragment>
  );
};

export default page;