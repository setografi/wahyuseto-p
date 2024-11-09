import React from 'react';

function JobProfile({ imageprof, job, company, bgColor, rotation }) {
  return (
    <div className="grid grid-flow-col items-center justify-start gap-4 p-2">
      <div
        className="flex h-10 w-8 items-center justify-center rounded p-1"
        style={{
          backgroundColor: bgColor,
          transform: `rotate(${rotation})`,
        }}
      >
        {imageprof ? (
          <img
            src={imageprof}
            alt={company}
            width={40}
            height={40}
            className="h-10 w-10 object-center"
            loading="lazy"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded"></div>
        )}
      </div>

      <div>
        <p className="text-sm text-dark-text-primary md:text-base">
          <span>{job}</span>
        </p>
        <p className="text-xs text-dark-text-secondary md:text-sm">
          <span>{company}</span>
        </p>
      </div>
    </div>
  );
}

export default JobProfile;
