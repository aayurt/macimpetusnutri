import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[30rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <Link
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-black/[0.1] justify-between flex flex-col space-y-4',
        className
      )}
      to={`/posts/${id}`}
    >
      {header}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        {icon}
        <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
          {title}
        </div>
        <div className='font-sans font-normal text-neutral-700 text-xs dark:text-neutral-200'>
          {description}
        </div>
      </div>
    </Link>
  );
};
