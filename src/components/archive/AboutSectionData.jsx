import React, { useState } from 'react';
import AboutList from './AboutList';

const aboutItems = [
  {
    contenttitle: 'Instagram',
    subtitle: '. 1m ago',
    content:
      'My other skills? you can visit my Instagram. You can see Instagram Typography content and some of my Photography Collections.',
    contentimg: './skill-img/instagram-color.svg',
    sociallink: 'https://www.instagram.com/setografi',
  },
  {
    contenttitle: 'Twitter',
    subtitle: '. 5m ago',
    content:
      'You can see me here sharing design thoughts and sometimes I tell you about my daily activities and hobbies.',
    contentimg: './skill-img/x-color.svg',
    sociallink: 'https://x.com/wysmooncino',
  },
  {
    contenttitle: 'LinkedIn',
    subtitle: '. 3d ago',
    content: 'See my experience and qualifications.',
    contentimg: './skill-img/linkedin-color.svg',
    sociallink: 'https://www.linkedin.com/in/setografi',
  },
  {
    contenttitle: 'read.cv',
    subtitle: '. 1y ago',
    content: 'Find me and take me.',
    contentimg: './skill-img/readdotcv-color.svg',
    sociallink: 'https://read.cv/setografi',
  },
];

function AboutSectionData() {
  const [likedItems, setLikedItems] = useState({});

  const handleLike = (index) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mb-8 grid grid-flow-row gap-8 md:mb-12">
      {aboutItems.map((item, index) => (
        <AboutList
          key={index}
          contenttitle={item.contenttitle}
          subtitle={item.subtitle}
          content={item.content}
          contentimg={item.contentimg}
          sociallink={item.sociallink}
          loading={index === 0 ? 'eager' : 'lazy'}
          isLiked={!!likedItems[index]} // Check if item is liked
          onLike={() => handleLike(index)} // Pass handler function
        />
      ))}
    </div>
  );
}

export default AboutSectionData;
