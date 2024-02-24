import React from 'react';
import { BentoGrid, BentoGridItem } from '../grid/bentoGrid';
import { ApiContext } from '../../layouts/masterLayout';
const BASE_URL = import.meta.env.VITE_API_URL;

const Posts = () => {
  const { loading, posts } = React.useContext(ApiContext);
  return (
    <>
      {loading ? (
        <div className=' mt-10  flex justify-center'>
          <div className='loader ' />
        </div>
      ) : (
        <BentoGrid className='max-w-6xl px-4 mx-auto'>
          {posts.map((item, i) => {
            const filename = item?.media?.[0]?.file_name;
            const path = 'media/' + item?.media?.[0]?.id;
            return (
              <BentoGridItem
                key={i}
                id={item.id}
                title={item.title}
                description={item.subtitle}
                header={<Skeleton2 img={BASE_URL + path + '/' + filename} />}
                icon={item.icon}
                className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
              />
            );
          })}
        </BentoGrid>
      )}
    </>
  );
};

const Skeleton2 = ({ img }) => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
    <img
      src={img}
      alt='placeholder'
      className='w-full bg-center object-cover'
    />
  </div>
);

export default Posts;
