import React from 'react';

function Navbar() {
    return (
        <div>
            <nav>

                <div className='mt-2 flex flex-wrap justify-around md:flex-nowrap md:gap-10'>
                    <div className='flex w-full items-center justify-between md:w-auto'>
                        <a className='w-28 dark:hidden' href='/'>
                            <img
                                alt='Logo'
                                width='132'
                                height='52'
                                decoding='async'
                                data-nimg='1'
                                sizes='(max-width: 640px) 100vw, 200px'
                                src='https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe8fa4f57a95067e838d7aa5a4f80042137d9f5b6-132x52.svg%3Fw%3D132%26auto%3Dformat&w=640&q=75'
                                style={{ color: 'transparent' }}
                            />
                        </a>
                        <a className='hidden w-40 dark:block novaSquare text-center text-xl' href='/'>
                            Mac impetus nurti
                        </a>
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
                        <a
                            className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                            target=''
                            rel=''
                            href='/'
                        >
                            Home
                        </a>
                        <a
                            className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                            target=''
                            rel=''
                            href='/about'
                        >
                            About
                        </a>
                        <a
                            className='px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400'
                            target=''
                            rel=''
                            href='/contact'
                        >
                            Contact
                        </a>
                    </div>


                </div>
            </nav>
        </div>
    );
}

export default Navbar;
