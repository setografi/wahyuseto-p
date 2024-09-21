import React from 'react';

export default function ProfileButton() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:wahyusetotkrx18@gmail';
  };

  return (
    <div className="py-6">
      <a
        href="mailto:wahyusetotkrx18@gmail"
        target="_blank"
        className="rounded-lg bg-magentaC px-4 py-2 font-offBit text-sm tracking-widest text-whiteText transition duration-300 ease-in hover:bg-grayNetral hover:text-gray-400"
      >
        Email Me
      </a>
    </div>
  );
}
