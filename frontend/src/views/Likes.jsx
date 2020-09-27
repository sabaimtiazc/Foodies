import React from "react";
import PostCardLayout from "../components/PostCardLayout";

const posts = [
  {
    post_id: 2,
    user_id: 1,
    caption: "Kheer!",
    image_url:
      "https://cdn.cnn.com/cnnnext/dam/assets/181019132031-16-pakistan-food-kheer.jpg",
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
    post_id: 0,
    user_id: 1,
    caption: "My Birthday Cake was too good!! :) ",
    image_url:
      "https://www.thespruceeats.com/thmb/iMQ49jNvVpEA8rCtJZEt3gOkKBk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AngelFoodCakeHERO-35c72869f62443638bd2b033d6d381bd.jpg",
    likes: 10,
    dislikes: 5,
  },

  {
    post_id: 2,
    user_id: 1,
    caption: "Sometimes the very best breakfast eats are the simplest.",
    image_url:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    likes: 10,
    dislikes: 5,
  },
];

export default function Likes(props) {
  return <PostCardLayout posts={posts} />;
}
