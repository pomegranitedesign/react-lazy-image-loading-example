import React from 'react';

import LazyImage from '../LazyImage';

const PostCard = ({ postImageSource, title }) => {
  return (
    <div className="PostCard">
      <LazyImage style={{ width: "50%" }} imageSource={postImageSource} />

      <div>
        <span>9 Oct, 2018</span>
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eaque corporis ab inventore a quo quis nesciunt laudantium, alias, molestias fugit in labore libero. Quisquam neque blanditiis minima consectetur molestiae.
        </p>
      </div>

    </div>
  );
};

export default PostCard;