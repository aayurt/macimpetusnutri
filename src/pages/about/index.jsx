import React from 'react';
const BASE_URL = import.meta.env.VITE_API_URL;

function About() {
  return (
    <div className='max-w-6xl px-4 mx-auto mt-4 min-h-[100vh]'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex justify-center'>
          <img src='https://placehold.co/600x400' alt='about-use' />
        </div>
        <h1 className='text-3xl font-bold my-4'>About Us</h1>
        <p className='text-lg mb-4'>
          Mac impetus nutri is a company dedicated to providing nutritious and
          delicious meals to our customers. We believe in the power of healthy
          eating to transform lives and are passionate about making wholesome
          food accessible to everyone.
        </p>
        <p className='text-lg mb-4'>
          Our team consists of experienced chefs, nutritionists, and food
          enthusiasts who work together to create balanced and flavorful dishes.
          We source the finest ingredients and prioritize freshness and quality
          in every meal we prepare.
        </p>
        <p className='text-lg mb-4'>
          Whether you're looking to improve your overall health, manage a
          specific dietary requirement, or simply enjoy tasty and convenient
          meals, Mac impetus nutri has something for you. Join us in our mission
          to nourish bodies and delight taste buds!
        </p>
      </div>
    </div>
  );
}

export default About;
