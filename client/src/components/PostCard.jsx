import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { category } from '../constants/index';
import AnimatedLines from '../svg/AnimatedLines';

export default function PostCard({ post }) {
  const [showLines, setShowLines] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const getButtonColor = () => {
    if (!post) return 'defaultColor';
    const categoryColor = category.find(cat => cat.title === post.category)?.color[0] || '#FC2207';
    return categoryColor;
  };

  return (
    <div
      className='group relative w-full border-2 border-stroke-1 hover:border-4 h-[400px] overflow-hidden rounded-lg sm:w-[460px] transition-all'
      onMouseEnter={() => {
        setShowLines(true);
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setShowLines(false);
        setShowButton(false);
      }}
    >
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt='post cover'
          className='h-[320px] -mt-2 w-full object-cover group-hover:h-[250px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='flex flex-col gap-2'>
        <p className='text-xl ml-2 font-semibold line-clamp-2'>{post.title}</p>
        <span className='custom-category ml-2' style={{ borderColor: getButtonColor() }}>{post.category}</span>
        {showButton && (
          <Link
            to={`/post/${post.slug}`}
            className='z-10 absolute bottom-0 left-0 right-0 border-2 border-stroke-1 text-stroke-1 hover:bg-stroke-1 hover:text-white transition-all duration-300 font-serif text-center text-2xl py-2 rounded-md !rounded-tl-none m-3'
          >
            Read Article
          </Link>
        )}
      </div>
      {showLines && <AnimatedLines />}
    </div>
  );
}