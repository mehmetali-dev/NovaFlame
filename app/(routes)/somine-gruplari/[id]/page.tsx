import React from 'react';
import pageContent from '@/constants/pageContent';
import Header from '@/components/Somıne-Gruplari/Ornek/Header';
import Navbar from '@/components/Navbar';

interface Post {
  id: string;
  title: string;
  content: string;
  images: string[];
  pdf: string;
}

const page = async ({ params }: { params: { id: string } }) => {
  // Find the post based on the provided ID
  const post: Post | undefined = pageContent.find((p) => p.id === params.id);

  if (!post) {
    return <p>Post not found</p>; // If the post doesn't exist
  }

  return (
    <React.Fragment>
      <Navbar /> {/* Navbar at the top */}
      {/* Passing the necessary post data (title, content, images, and PDF) to the Header component */}
      <Header title={post.title} content={post.content} images={post.images} pdf={post.pdf} />
    </React.Fragment>
  );
};

export default page;
