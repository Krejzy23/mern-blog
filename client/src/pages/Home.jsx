import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import TechList from '../components/TechList';
import Hero from "../components/Hero";
import AnimatedComponent from "../components/AnimatedComponent";
import AnimatedPhoenix from "../components/AnimatedPhoenix";
import Section from '../components/Section';
import { BottomLine } from '../components/design/Hero';



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
      <div className='flex flex-col max-w-8xl mx-auto '>
        <Section 
          className="pt-[12rem] mt-[5.25rem]"
          crosses
          customPaddings
        >
          <Hero />
        </Section>

        <Section crosses>
          <TechList />
        </Section>

        <Section crosses>
          <AnimatedComponent />  
        </Section>

        <Section crosses>
          <AnimatedPhoenix />
        </Section>
        
      </div>
      
      <Section
        className="pt-[12rem] -mt-[2.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem] md:translate-y-[5.25rem]"
        customPaddings
      >
        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
          {posts && posts.length > 0 && (
            <div className='flex flex-col gap-6'>
              <h2 className='text-2xl font-semibold text-center'>Recent   Posts</h2>
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
      </Section>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
    </div>
  );
}