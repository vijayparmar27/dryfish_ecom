import PostDetailsView from "@/sections/blogs/view/post-details-view";
import { _posts } from "@/_mock";
import React from "react";

// Generate static params for all blog posts
export async function generateStaticParams() {
  return _posts.map((post) => ({
    id: post.id,
  }));
}

const Blogs = () => {
  console.log("Blogs");

  return (
    <div>
      <PostDetailsView />
    </div>
  );
};

export default Blogs;
