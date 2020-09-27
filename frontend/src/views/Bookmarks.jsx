import React from "react";
import PostCardLayout from "../components/PostCardLayout";

const posts = [
  
  {
    post_id: 1,
    user_id: 2,
    caption: "Just went to iHop, bomb french toast!",
    image_url:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
    likes: 10,
    dislikes: 5,
  },


  {
    post_id: 3,
    user_id: 2,
    caption: "traditional food!",
    image_url:
      " https://sm.mashable.com/mashable_pk/photo/default/foodnerd-best-pakistani-food-dishes_9jvu.jpg",
    likes: 10,
    dislikes: 5,
  },
  {
    post_id: 4,
    user_id: 1,
    caption: "colorful salad made by me sabaaa!",
    image_url:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=631&q=80",
    likes: 10,
    dislikes: 5,
  },

  {
    post_id: 5,
    user_id: 2,
    caption: "Home made yummy roti salan by Saba !",
    image_url:
      "https://img-global.cpcdn.com/recipes/7c7566f1512e6570/640x640sq70/photo.jpg",
    likes: 10,
    dislikes: 5,
  },
];

export default function Bookmarks(props) {
  return <PostCardLayout posts={posts} />;
}
