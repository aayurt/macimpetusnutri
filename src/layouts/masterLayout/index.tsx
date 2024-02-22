import React, { Suspense } from 'react'
import Navbar from '../../components/navbar'
import { Outlet } from 'react-router-dom';

function MasterLayout() {
    return (
        <div className='w-dvw h-dvh font-sans'>
            <Navbar />
            <Suspense fallback={<>ERROR</>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MasterLayout