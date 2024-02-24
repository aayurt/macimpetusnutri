import React, { Suspense, createContext, useEffect } from 'react';
import Navbar from '../../components/navbar';
import { Outlet } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_API_URL;

function MasterLayout() {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    fetch(BASE_URL + '/api/posts')
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        if (json && json.response === 'success') {
          setPosts(json.data);
        }
      });
  }, []);
  return (
    <div className='w-dvw min-h-[100vh] font-sans bg-white dark:bg-gray-900 h-full text-black dark:text-white'>
      <Navbar />
      <Suspense fallback={<>ERROR</>}>
        <ApiContext.Provider value={{ loading, posts }}>
          <Outlet />
        </ApiContext.Provider>
      </Suspense>
    </div>
  );
}

export default MasterLayout;
export const ApiContext = createContext(null);
