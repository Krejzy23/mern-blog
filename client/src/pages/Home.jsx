import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import TechList from "../svg/TechList";
import Hero from "../components/Hero";
import AnimatedComponent from "../svg/AnimatedComponent";
import Promo from "../components/Promo";
import ScrollSection from "../components/ScrollSection";
import Section from "../components/Section";
import Tagline from "../components/Tagline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { RingsWithText } from "../components/design/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();

    gsap.to(".posts-section", {
      scrollTrigger: {
        trigger: ".posts-section",
        start: "top bottom", // Spustí, když horní část sekce dosáhne spodní části viewportu
        end: "bottom top",
        scrub: true,
        markers: true, // Nastavte na true pro ladění
      },
      y: () => -document.querySelector(".tech-list-section").offsetHeight, // Posun nahoru o výšku sekce TechList
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col max-w-screen-2xl mx-auto ">
        <Section
          crosses
          className="pt-[2rem] mt-[1.25rem]"
          customPaddings
          showVerticalLines={true}
        >
          <Hero />
        </Section>

        <Section crosses customPaddings showVerticalLines={true}>
          <Promo />
        </Section>

        <Section customPaddings crosses showVerticalLines={false}>
          <ScrollSection />
        </Section>

        <Section
          className="tech-list-section z-10"
          customPaddings
          showVerticalLines={false}
        >
          <TechList />
        </Section>
      </div>

      <Section
        className="posts-section mx-auto bg-white dark:bg-[rgb(16,23,42)] z-30"
        crosses
        crossesOffset
        customPaddings
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-8 py-7">
          <Tagline className="text-xl">Posts</Tagline>
          <AnimatedComponent />
          {posts && posts.length > 0 && (
            <div className="flex flex-col gap-6 ">
              <div className="relative z-40">
                <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%] p-5 max-w-lg lg:text-6xl text-4xl tracking-wider font-poppins font-bold text-center text-transparent text-stroker-2 text-stroke-custom border-2 border-stroke-1 bg-white dark:bg-[rgb(16,23,42)] z-50">
                  Recent Posts
                </h2>
              </div>
              <div className="flex flex-wrap pt-24 pb-24 gap-4 justify-center border-stroke-1 border-2">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              <Link
                to={"/search"}
                className="relative bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[-50%] p-5 text-2xl max-w-lg border-2 border-stroke-1 hover:underline text-center font-serif font-semibold bg-white dark:bg-[rgb(16,23,42)] z-50"
              >
                View all posts
              </Link>
            </div>
          )}
        </div>
      </Section>

      <Section className="-mt-[56.725rem]" crosses crossesOffset>
        <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-16 xl:max-w-[87.5rem]">
          <Tagline className="flex justify-start text-xl">CONTACT ME</Tagline>
          <div className="flex justify-center p-5 items-center mt-36">
            <div className="flex justify-center items-center p-10">
              <div className="hidden md:flex z-0">
                <RingsWithText />
              </div>
              <div className="flex p-5 pb-32 z-30">
                <CallToAction />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
