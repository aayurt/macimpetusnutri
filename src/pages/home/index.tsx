import React from 'react'
import Card from '../../components/card';

function Home() {
    const imageId = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/seed/${imageId}/200`;
    const people = [
        {
            id: 1,
            title: 'John Doe',
            subtitle: 'John is a talented software engineer with a passion for building scalable web applications.',
            image: imageUrl
        },
        {
            id: 2,
            title: 'Jane Doe',
            subtitle: 'Jane is a skilled product manager with a track record of delivering successful products on time and under budget.'
            , image: imageUrl

        },
        {
            id: 1,
            title: 'John Doe',
            subtitle: 'John is a talented software engineer with a passion for building scalable web applications.',
            image: imageUrl
        },
        {
            id: 2,
            title: 'Jane Doe',
            subtitle: 'Jane is a skilled product manager with a track record of delivering successful products on time and under budget.'
            , image: imageUrl

        }
        , {
            id: 2,
            title: 'Jane Doe',
            subtitle: 'Jane is a skilled product manager with a track record of delivering successful products on time and under budget.'
            , image: imageUrl

        }
    ];

    return (
        <div className='w-full mt-4' >
            <Card />
        </div>
    )
}

export default Home;