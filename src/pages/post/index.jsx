import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../../layouts/masterLayout';
import { cn } from '../../utils/cn';
const BASE_URL = import.meta.env.VITE_API_URL;

function Post() {
  let { id } = useParams();
  const { posts } = useContext(ApiContext);
  const postContent = posts.find((ele) => ~~ele.id === ~~id);
  const filename = postContent?.media?.[0]?.file_name;
  const path = 'media/' + postContent?.media?.[0]?.id;
  return (
    <div className='max-w-6xl px-4 mx-auto mt-4 min-h-[150vh]'>
      <img
        src={BASE_URL + path + '/' + filename}
        alt='blog'
        className='w-full object-cover  rounded-xl min-h-96 max-h-[35rem] border border-white/[0.1]'
      />
      <div className='mt-6  '>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl font-bold m-auto'>{postContent?.title}</h1>

          <div className='m-auto'>
            <div
              className='mt-6 prose font-sans bg-white dark:bg-gray-900 h-full text-black dark:text-white'
              dangerouslySetInnerHTML={{ __html: postContent?.description }}
            />
          </div>
        </div>
      </div>
      <OtherPosts />
    </div>
  );
}

const OtherPosts = () => {
  const { posts } = useContext(ApiContext);
  let { id } = useParams();
  const tempPosts = posts.filter((ele) => ele.id != id);
  if (tempPosts.length === 0) return <></>;
  // Shuffle function
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const randomPosts = shuffle([...tempPosts]);
  if (randomPosts.length > 3) randomPosts.length = 3;
  if (randomPosts.length === 0) return <></>;
  return (
    <>
      <hr className='my-6' />
      <h3 className=' text-xl font-bold'>Other Posts</h3>
      <div className='py-6'>
        <div className='grid md:auto-rows-[25rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto '>
          {randomPosts.map((item, i) => {
            const filename = item?.media?.[0]?.file_name;
            const path = 'media/' + item?.media?.[0]?.id;

            return (
              <div
                className={cn(
                  'row-span-1 rounded-xl  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-black/[0.1] justify-between flex flex-col space-y-4'
                )}
                onClick={() => navigate(`/posts/${item.id}`)}
              >
                <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'>
                  <img
                    src={BASE_URL + path + '/' + filename}
                    alt='placeholder'
                    className='w-full bg-center object-cover '
                  />
                </div>
                <div className='group-hover/bento:translate-x-2 transition duration-200'>
                  {item.icon}
                  <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
                    {item.title}
                  </div>
                  <div className='font-sans font-normal text-neutral-700 text-xs dark:text-neutral-200'>
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Post;
