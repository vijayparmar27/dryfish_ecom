import { useCallback, useState } from "react";
// utils
import axios, { API_ENDPOINTS } from "@/utils/axios";
// types
import { IPostItem } from "@/types/blog";
import { IErrorType } from "@/types/error";

// ----------------------------------------------------------------------

type StatusProps = {
  loading: boolean;
  empty?: boolean;
  error: IErrorType;
};

const postMock: { post: IPostItem } = {
  post: {
    id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
    publish: "draft",
    metaKeywords: ["Fitness", "Nature", "Business"],
    content:
      '\n\n<h1>Heading H1</h1><br/><br/>\n\n<h2>Heading H2</h2><br/><br/>\n\n<h3>Heading H3</h3><br/><br/>\n\n<h4>Heading H4</h4><br/><br/>\n\n<h5>Heading H5</h5><br/><br/>\n\n<h6>Heading H6</h6><br/><br/>\n\n<br/><br/><hr><br/><br/>\n\n<h3>Paragraph</h3><br/>\n\n\n<p>What is MTAweb Directory?</p><br/>\n\n<p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><br/>\n\n<p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p><br/>\n\n<p><strong>This is strong text.</strong></p><br/>\n\n<p><em>This is italic text</em></p><br/>\n\n<p><u>This is underline text</u></p>\n\n<br/><br/><hr><br/><br/>\n\n<h3>Unordered list</h3><br/>\n\n<ul>\n    <li>Implements\n        <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n    </li>\n    <li>Implements\n        <a href="/dashboard/blog">This is an inside link</a>\n    </li>\n    <li>Renders actual, "native" React DOM elements</li>\n    <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n    <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n<br/><br/><hr><br/><br/>\n\n<h3>Ordered list</h3>\n\n<br/>\n<ol>\n    <li>Analysis</li>\n    <li>Design</li>\n    <li>Implementation</li>\n</ol>\n\n<br/><br/><hr><br/><br/>\n\n<h3>Blockquote</h3>\n<br/>\n\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<br/><br/><hr><br/><br/>\n\n<h3>Block Code</h3>\n\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">\'react\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactDOM</span> <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-dom\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-title class_">ReactMarkdown</span> <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-markdown\'</span>;\n<span class="hljs-keyword">import</span> rehypeHighlight <span class="hljs-keyword">from</span> <span class="hljs-string">\'rehype-highlight\'</span>;\n\n<span class="hljs-title class_">ReactDOM</span>.<span class="hljs-title function_">render</span>(\n  <span class="hljs-tag">&lt;<span class="hljs-name">ReactMarkdown</span> <span class="hljs-attr">rehypePlugins</span>=<span class="hljs-string">{[rehypeHighlight]}</span>&gt;</span>{\'# Your markdown here\'}<span class="hljs-tag">&lt;/<span class="hljs-name">ReactMarkdown</span>&gt;</span>,\n  <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">querySelector</span>(<span class="hljs-string">\'#content\'</span>)\n);\n</pre>\n\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n<br/>\n<br/>\n<p>Why do we use it?</p>\n<br/>\n<br/>\n\n<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n<p>\n<img src=http://localhost:3000/assets/images/cover/cover_5.jpg />\n</p>\n<br/>\n<br/>\n\n<p>\n    It is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n<p>\n    <img src=http://localhost:3000/assets/images/cover/cover_14.jpg />\n</p>\n<br/>\n<br/>\n',
    comments: [
      {
        id: "a582eef3-0c87-48b3-8816-5d1997f31da5",
        name: "Jayvion Simon",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_1.jpg",
        message:
          "She eagerly opened the gift, her eyes sparkling with excitement.",
        postedAt: new Date("2025-11-30T06:00:03.121Z"),
        users: [
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
            name: "Jayvion Simon",
            avatarUrl:
              "http://localhost:3000/assets/images/avatar/avatar_1.jpg",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
            name: "Lucian Obrien",
            avatarUrl:
              "http://localhost:3000/assets/images/avatar/avatar_2.jpg",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
            name: "Deja Brady",
            avatarUrl:
              "http://localhost:3000/assets/images/avatar/avatar_3.jpg",
          },
        ],
        replyComment: [
          {
            id: "375bd2a4-5a70-49af-88af-97ec89c5fba2",
            userId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
            message:
              "The old oak tree stood tall and majestic, its branches swaying gently in the breeze.",
            postedAt: new Date("2025-11-29T05:00:03.123Z"),
          },
          {
            id: "e7575297-f2ae-4cb8-a529-2cd786881888",
            userId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
            message:
              "The aroma of freshly brewed coffee filled the air, awakening my senses.",
            tagUser: "Lucian Obrien",
            postedAt: new Date("2025-11-28T04:00:03.123Z"),
          },
          {
            id: "8cc1ff7c-601f-4ecd-9fcc-dfe5e733d99b",
            userId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
            message:
              "The children giggled with joy as they ran through the sprinklers on a hot summer day.",
            postedAt: new Date("2025-11-27T03:00:03.123Z"),
          },
        ],
      },
      {
        id: "be75ed53-bf07-4bb6-a67e-a1836a196f15",
        name: "Reece Chung",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_5.jpg",
        message:
          "He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.",
        postedAt: new Date("2025-11-26T02:00:03.123Z"),
        users: [
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
            name: "Lainey Davidson",
            avatarUrl:
              "http://localhost:3000/assets/images/avatar/avatar_6.jpg",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
            name: "Cristopher Cardenas",
            avatarUrl:
              "http://localhost:3000/assets/images/avatar/avatar_7.jpg",
          },
          {
            id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
            name: "Melanie Noble",
            avatarUrl:
              "http://localhost:3000/assets/images/avatar/avatar_8.jpg",
          },
        ],
        replyComment: [
          {
            id: "c87cc530-4985-4403-9ac7-114695256225",
            userId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
            message:
              "The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.",
            postedAt: new Date("2025-11-25T01:00:03.123Z"),
          },
          {
            id: "7d770355-f65f-4eb0-89dc-9f59ce1dc7c2",
            userId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
            message:
              "The waves crashed against the shore, creating a soothing symphony of sound.",
            postedAt: new Date("2025-11-24T00:00:03.123Z"),
          },
          {
            id: "e53f3445-25a0-4c86-8340-3e634a4e428c",
            userId: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
            message:
              "The scent of blooming flowers wafted through the garden, creating a fragrant paradise.",
            postedAt: new Date("2025-11-22T23:00:03.123Z"),
          },
        ],
      },
      {
        id: "bfd2e2c7-b7b6-4c6d-9ab4-57912ad4ed50",
        name: "Chase Day",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_9.jpg",
        message:
          "She gazed up at the night sky, marveling at the twinkling stars that dotted the darkness.",
        postedAt: new Date("2025-11-21T22:00:03.123Z"),
        users: [],
        replyComment: [],
      },
      {
        id: "79c0d8ce-d56b-4bc1-b3cf-ebcf6e2d1a57",
        name: "Shawn Manning",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_10.jpg",
        message:
          "The professor delivered a captivating lecture, engaging the students with thought-provoking ideas.",
        postedAt: new Date("2025-11-20T21:00:03.123Z"),
        users: [],
        replyComment: [],
      },
    ],
    tags: ["Technology", "Marketing", "Design", "Photography", "Art"],
    metaTitle: "Minimal UI Kit",
    createdAt: "2025-12-01T07:00:03.124Z",
    title: "10 Essential Tips for Healthy Living",
    coverUrl: "http://localhost:3000/assets/images/cover/cover_1.jpg",
    totalViews: 9911,
    totalShares: 9124,
    totalComments: 1947,
    totalFavorites: 6984,
    metaDescription:
      "The starting point for your next project with Minimal UI Kit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: {
      name: "Jayvion Simon",
      avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_1.jpg",
    },
    favoritePerson: [
      {
        name: "Jayvion Simon",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_1.jpg",
      },
      {
        name: "Lucian Obrien",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_2.jpg",
      },
      {
        name: "Deja Brady",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_3.jpg",
      },
      {
        name: "Harrison Stein",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_4.jpg",
      },
      {
        name: "Reece Chung",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_5.jpg",
      },
      {
        name: "Lainey Davidson",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_6.jpg",
      },
      {
        name: "Cristopher Cardenas",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_7.jpg",
      },
      {
        name: "Melanie Noble",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_8.jpg",
      },
      {
        name: "Chase Day",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_9.jpg",
      },
      {
        name: "Shawn Manning",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_10.jpg",
      },
      {
        name: "Soren Durham",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_11.jpg",
      },
      {
        name: "Cortez Herring",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_12.jpg",
      },
      {
        name: "Brycen Jimenez",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_13.jpg",
      },
      {
        name: "Giana Brandt",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_14.jpg",
      },
      {
        name: "Aspen Schmitt",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_15.jpg",
      },
      {
        name: "Colten Aguilar",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_16.jpg",
      },
      {
        name: "Angelique Morse",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_17.jpg",
      },
      {
        name: "Selina Boyer",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_18.jpg",
      },
      {
        name: "Lawson Bass",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_19.jpg",
      },
      {
        name: "Ariana Lang",
        avatarUrl: "http://localhost:3000/assets/images/avatar/avatar_20.jpg",
      },
    ],
  },
};

export default function useBlog() {
  const [posts, setPosts] = useState<IPostItem[]>([]);

  const [post, setPost] = useState<IPostItem | null>(null);

  const [latestPosts, setLatestPosts] = useState<IPostItem[]>([]);

  const [postsStatus, setPostsStatus] = useState<StatusProps>({
    loading: false,
    empty: false,
    error: null,
  });

  const [postStatus, setPostStatus] = useState<StatusProps>({
    loading: false,
    error: null,
  });

  const handleSetPostsStatus = useCallback(
    (name: string, value: boolean | null) => {
      setPostsStatus((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const handleSetPostStatus = useCallback(
    (name: string, value: boolean | null) => {
      setPostStatus((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const getPosts = useCallback(async () => {
    handleSetPostsStatus("loading", true);
    handleSetPostsStatus("empty", false);
    handleSetPostsStatus("error", null);
    try {
      const response = await axios.get(API_ENDPOINTS.post.list);
      setPosts(response.data.posts);
      handleSetPostsStatus("loading", false);
      handleSetPostsStatus("empty", !response.data.posts.length);
      handleSetPostsStatus("error", null);
    } catch (error) {
      console.error(error);
      handleSetPostsStatus("loading", false);
      handleSetPostsStatus("empty", false);
      // handleSetPostsStatus("error", error);
    }
  }, [handleSetPostsStatus]);

  const getPost = useCallback(
    async (title: string) => {
      console.log("title :", title);
      handleSetPostStatus("loading", true);
      handleSetPostStatus("error", null);
      try {
        // const response = await axios.get(API_ENDPOINTS.post.details, {
        //   params: {
        //     title,
        //   },
        // });
        setPost(postMock.post);
        handleSetPostStatus("loading", false);
        handleSetPostStatus("error", null);
      } catch (error) {
        console.error(error);
        handleSetPostStatus("loading", false);
        // handleSetPostStatus("error", error);
      }
    },
    [handleSetPostStatus]
  );

  const getLatestPosts = useCallback(
    (title: string) => {
      console.log("title :", title);
      // const response = await axios.get(API_ENDPOINTS.post.latest, {
      //   params: {
      //     title,
      //   },
      // });
      setLatestPosts([postMock.post]);
    },
    [postMock]
  );

  return {
    post,
    posts,
    latestPosts,
    //
    postsStatus,
    postStatus,
    //
    getPost,
    getPosts,
    getLatestPosts,
  };
}
