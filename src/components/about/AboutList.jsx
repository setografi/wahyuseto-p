import React from 'react';
import 'remixicon/fonts/remixicon.css';

const AboutList = ({
  contenttitle,
  subtitle,
  content,
  contentimg,
  sociallink,
  loading,
  isLiked,
  onLike,
}) => {
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
              <div className="flex flex-row items-end justify-start text-base">
                <h2 id={`${contenttitle}-heading`} className="font-bold">
                  {contenttitle}
                </h2>
                <span className="ml-2 text-sm font-normal text-textPrimary-300">{subtitle}</span>
              </div>

              <p className="text-sm font-normal text-gray-400 md:text-base">{content}</p>

              <div className="flex items-start justify-start gap-4">
                <button
                  onClick={onLike}
                  aria-label={isLiked ? 'Unlike' : 'Like'}
                  className="text-xl"
                >
                  {isLiked ? (
                    <i className="ri-heart-3-fill text-red-500 hover:text-textPrimary-100"></i>
                  ) : (
                    <i className="ri-heart-3-line text-textPrimary-100 hover:text-red-500"></i>
                  )}
                </button>

                <a
                  href={sociallink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${contenttitle}`}
                  className="text-xl text-textPrimary-100 hover:text-red-500"
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
