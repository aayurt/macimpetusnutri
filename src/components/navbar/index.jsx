import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
function Navbar() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav>
        <div className='pt-2 flex flex-wrap justify-around md:flex-nowrap md:gap-10'>
          <div className='flex w-full items-center justify-between md:w-auto'>
            <Link
              className=' w-40 dark:block novaSquare text-center text-xl uppercase'
              to='/'
            >
              Mac impetus nutri
            </Link>
            <button
              aria-label='Toggle Menu'
              className='ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden '
              id='headlessui-disclosure-button-:r0:'
              type='button'
              aria-expanded='false'
              data-headlessui-state=''
            >
              <svg
                className='h-6 w-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                ></path>
              </svg>
            </button>
          </div>
          <div className='order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end'>
            <Link
              className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
              target=''
              rel=''
              to='/'
            >
              Home
            </Link>
            <Link
              className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
              target=''
              rel=''
              to='/about'
            >
              About
            </Link>
            <Link
              className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
              target=''
              rel=''
              to='/contact-us'
            >
              Contact
            </Link>
            <input
              type='checkbox'
              className='toggle'
              checked={darkTheme}
              onClick={() => {
                toggleTheme();
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
