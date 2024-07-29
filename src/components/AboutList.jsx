import React, { useState } from "react";

const AboutList = ({
  contenttitle,
  subtitle,
  content,
  contentimg,
  sociallink,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <section aria-labelledby={`${contenttitle}-heading`}>
      <div className="mx-auto">
        <div className="max-w-lg p-4 text-gray-400">
          <div className="flex justify-start">
            <img
              className="w-9 h-9 mr-4"
              src={contentimg}
              alt={contenttitle}
              loading="lazy"
            />
            <div>
              <div className="flex flex-row">
                <h2 id={`${contenttitle}-heading`} className="font-bold">
                  {contenttitle}
                </h2>
                <span className="font-normal ml-2">{subtitle}</span>
              </div>
              <p className="font-normal mt-2">{content}</p>
            </div>
          </div>

          <div className="ml-12 mt-2">
            <button
              className="text-xl mr-4 hover:text-vividRed"
              onClick={handleLike}
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              {isLiked ? (
                <i className="ri-heart-3-fill ri-1x text-vividRed"></i>
              ) : (
                <i className="ri-heart-3-line ri-1x"></i>
              )}
            </button>
            <a
              className="text-xl hover:text-vividRed"
              href={sociallink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${contenttitle}`}
            >
              <i className="ri-share-forward-line ri-1x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutList;
