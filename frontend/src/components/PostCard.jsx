import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Like } from "../icons/icon-thumb-up.svg";
import { ReactComponent as Dislike } from "../icons/icon-thumb-down.svg";

const propTypes = {
  post: PropTypes.shape({
    post_id: PropTypes.number,
    user_id: PropTypes.number,
    caption: PropTypes.string,
    image_url: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
  }),
};
//  the above code o have written have to be same with database which i created earlier in july

export default function PostCard(props) {
  const { post } = props;

  return (
    <div className="inline-block self-start w-32 sm:w-40 lg:w-48 xl:w-56 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 duration-150 bg-white">
      <div>
        <img src={post.image_url} />
      </div>
      <div className="px-3 py-2 h-16">
        <label
          style={{
            textOverflow: "ellipsis",
          }}
          className="inline-block w-full overflow-hidden whitespace-no-wrap text-xs"
        >
          {post.caption}
        </label>
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Like className="h-3 w-3 fill-current text-green-300" />
            <span className="text-xs w-8 text-left">{post.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Dislike className="h-3 w-3 fill-current text-red-300" />
            <span className="text-xs w-8 text-left">{post.dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = propTypes;
