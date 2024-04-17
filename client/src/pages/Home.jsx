import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { TextPlugin } from 'gsap/TextPlugin';
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import TechList from '../components/TechList';
import Hero from "../components/Hero";




// Nastavení GSAP animace s ScrollTrigger
export default function Home () {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {

    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col px-3 max-w-8xl mx-auto '>
        <Hero />
        <TechList />
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
    </div>
  );
}