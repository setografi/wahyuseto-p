import React, { useState } from "react";

const AboutList = ({ title, subtitle, content, imgabout, sociallink }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <section>
      <div className="mx-auto">
        <div className="max-w-lg p-4 text-gray-400">
          <div className="flex justify-start">
            <img className="w-9 h-9 mr-4" src={imgabout} alt={title} />
            <div className="font-bold">
              {title}
              <span className="font-normal ml-2">{subtitle}</span>
              <p className="font-normal mt-2">{content}</p>
            </div>
          </div>

          <div className="ml-12 mt-2">
            <button
              className="text-xl mr-4 hover:text-vividRed"
              onClick={handleLike}
            >
              {isLiked ? (
                <i className="ri-heart-3-fill ri-1x text-vividRed"></i>
              ) : (
                <i className="ri-heart-3-line ri-1x"></i>
              )}
            </button>
            <button
              className="text-xl hover:text-vividRed"
              href={sociallink}
              target="_blank"
            >
              <i className="ri-share-forward-line ri-1x"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutList;
