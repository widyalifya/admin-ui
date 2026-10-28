import { useState } from "react";

const PostCard = ({ title, body }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(true)}
      className={`${
        clicked ? "bg-blue-100" : "bg-white"
      } rounded-lg shadow-md p-4 cursor-pointer`}
    >
      <h2 className="text-base font-semibold text-gray-800 mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;