import React from 'react';
import { BentoGrid, BentoGridItem } from '../grid/bentoGrid';
const Card = () => {
  return (
    <BentoGrid className='max-w-6xl mx-auto'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
};

const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);
const Skeleton2 = () => (
  <div className='flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <img
      src='https://picsum.photos/200/600'
      alt='placeholder'
      className='w-full bg-center object-cover'
    />
  </div>
);
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton2 />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton2 />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton2 />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton2 />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton2 />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton2 />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton2 />,
  },
];

export default Card;
