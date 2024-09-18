import React, { useState } from 'react';

const AboutList = ({ contenttitle, subtitle, content, contentimg, sociallink, loading }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <section aria-labelledby={`${contenttitle}-heading`}>
      <div className="mx-auto">
        <div className="max-w-lg p-4 text-white">
          <div className="flex justify-start">
            <img
              className="mr-4 h-9 w-9 rounded-xl bg-white p-1"
              src={contentimg}
              alt={contenttitle}
              loading={loading}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-start justify-start">
                <h2 id={`${contenttitle}-heading`} className="font-bold">
                  {contenttitle}
                </h2>
                <span className="ml-2 font-normal">{subtitle}</span>
              </div>

              <p className="font-normal">{content}</p>

              <div className="flex items-start justify-start gap-4">
                <button
                  className="text-xl hover:text-red-500"
                  onClick={handleLike}
                  aria-label={isLiked ? 'Unlike' : 'Like'}
                >
                  {isLiked ? (
                    <i className="ri-heart-3-fill text-red-500"></i>
                  ) : (
                    <i className="ri-heart-3-line"></i>
                  )}
                </button>
                <a
                  className="text-xl hover:text-red-500"
                  href={sociallink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${contenttitle}`}
                >
                  <i className="ri-send-plane-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutList;
