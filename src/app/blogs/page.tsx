import { _posts } from "@/_mock";
import { BlogView } from "@/layouts/blog/view";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <BlogView posts={_posts} />
    </div>
  );
};

export default Blogs;
