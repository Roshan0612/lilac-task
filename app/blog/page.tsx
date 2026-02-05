'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      <main className=" bg-[#EAE4DC]  text-[#1F3A1F]">
        {/* Hero Section - Flexible Layout */}
        <section className="w-full flex flex-col lg:flex-row items-center lg:items-center min-h-screen lg:min-h-[700px]">
          {/* Image - Flexible sizing */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start pt-[8vw] lg:pt-0 lg:pl-[6vw]">
            <div className="relative w-[min(70vw,420px)] h-[min(90vw,520px)] lg:w-[550px] lg:h-[750px] rounded-t-full overflow-hidden">
              <Image
                src="/image/Dr. Maya Reynolds.png"
                alt="Blog"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Section - Flexible sizing */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-[6vw] py-[8vw] lg:py-0 lg:pr-[8vw]">
            <div className="text-center lg:text-left max-w-[560px]">
              {/* Heading */}
              <h1 className="text-[8vw] sm:text-[6vw] lg:text-[3.6vw] font-semibold leading-[1.15] mb-[2.5vw]">
                The Lilac Blog
              </h1>

              {/* Description */}
              <p className="text-[3.5vw] sm:text-[2.4vw] lg:text-[1.1vw] leading-[1.7] mb-[2.5vw]">
                My tiny corner of the internet where I talk about all things healing, heart, and wholeness.
              </p>

              {/* Closing Text */}
              <p className="text-[3.6vw] sm:text-[2.6vw] lg:text-[1.1vw] font-medium">
                Glad you're here.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="w-full px-[6vw] py-[8vw]">
          <div className="max-w-[1200px] mx-auto">
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw] lg:gap-[3vw]">
              
              {/* Blog Post Card 1 */}
              <div className="flex flex-col">
                <div className="relative w-full h-[45vw] lg:h-[28vw] rounded-lg overflow-hidden mb-[4vw] lg:mb-[2vw]">
                  <Image
                    src="/image/office1.jpeg"
                    alt="Blog Post One"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[3.5vw] lg:text-[0.95vw] text-[#1F3A1F] mb-[1.5vw]">3/11/19</p>
                  <h3 className="text-[6vw] lg:text-[2.2vw] font-semibold text-[#1F3A1F] mb-[2.5vw] lg:mb-[1.5vw] leading-[1.2]">Blog Post One</h3>
                  <a href="#" className="text-[3.8vw] lg:text-[1vw] text-[#1F3A1F] underline hover:opacity-70 transition-opacity w-fit">
                    Read More
                  </a>
                </div>
              </div>

              {/* Blog Post Card 2 */}
              <div className="flex flex-col">
                <div className="relative w-full h-[45vw] lg:h-[28vw] rounded-lg overflow-hidden mb-[4vw] lg:mb-[2vw]">
                  <Image
                    src="/image/office1.jpeg"
                    alt="Blog Post Two"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[3.5vw] lg:text-[0.95vw] text-[#1F3A1F] mb-[1.5vw]">3/11/19</p>
                  <h3 className="text-[6vw] lg:text-[2.2vw] font-semibold text-[#1F3A1F] mb-[2.5vw] lg:mb-[1.5vw] leading-[1.2]">Blog Post Two</h3>
                  <a href="#" className="text-[3.8vw] lg:text-[1vw] text-[#1F3A1F] underline hover:opacity-70 transition-opacity w-fit">
                    Read More
                  </a>
                </div>
              </div>

              {/* Blog Post Card 3 */}
              <div className="flex flex-col">
                <div className="relative w-full h-[45vw] lg:h-[28vw] rounded-lg overflow-hidden mb-[4vw] lg:mb-[2vw]">
                  <Image
                    src="/image/office1.jpeg"
                    alt="Blog Post Three"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[3.5vw] lg:text-[0.95vw] text-[#1F3A1F] mb-[1.5vw]">3/11/19</p>
                  <h3 className="text-[6vw] lg:text-[2.2vw] font-semibold text-[#1F3A1F] mb-[2.5vw] lg:mb-[1.5vw] leading-[1.2]">Blog Post Three</h3>
                  <a href="#" className="text-[3.8vw] lg:text-[1vw] text-[#1F3A1F] underline hover:opacity-70 transition-opacity w-fit">
                    Read More
                  </a>
                </div>
              </div>

              {/* Blog Post Card 4 */}
              <div className="flex flex-col">
                <div className="relative w-full h-[45vw] lg:h-[28vw] rounded-lg overflow-hidden mb-[4vw] lg:mb-[2vw]">
                  <Image
                    src="/image/office1.jpeg"
                    alt="Blog Post Four"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[3.5vw] lg:text-[0.95vw] text-[#1F3A1F] mb-[1.5vw]">3/11/19</p>
                  <h3 className="text-[6vw] lg:text-[2.2vw] font-semibold text-[#1F3A1F] mb-[2.5vw] lg:mb-[1.5vw] leading-[1.2]">Blog Post Four</h3>
                  <a href="#" className="text-[3.8vw] lg:text-[1vw] text-[#1F3A1F] underline hover:opacity-70 transition-opacity w-fit">
                    Read More
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="w-full bg-[#8B9D5A] py-[10vw] lg:py-[6vw] px-[6vw]">
          <div className="max-w-[1100px] mx-auto">
            <div className="border-2 border-white py-[10vw] lg:py-[6vw] px-[8vw] lg:px-[10vw] flex flex-col items-center">
              {/* Heading */}
              <h2 className="text-[8vw] lg:text-[3.5vw] font-semibold text-white mb-[4vw] lg:mb-[2vw] text-center">
                Subscribe
              </h2>

              {/* Description */}
              <p className="text-[3.8vw] lg:text-[1.15vw] text-white mb-[6vw] lg:mb-[3vw] text-center max-w-[600px]">
                Sign up with your email address to receive news and updates.
              </p>

              {/* Form */}
              <div className="w-full max-w-[700px] flex flex-col lg:flex-row items-center gap-[3vw] lg:gap-[2vw] mb-[6vw] lg:mb-[3vw]">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full lg:flex-1 px-[4vw] lg:px-[1.5vw] py-[3.5vw] lg:py-[1.2vw] text-[3.5vw] lg:text-[1vw] bg-white text-[#1F3A1F] placeholder:text-gray-400 outline-none"
                />
                <button className="w-full lg:w-auto px-[8vw] lg:px-[3vw] py-[3.5vw] lg:py-[1.2vw] border-2 border-white text-white text-[3.8vw] lg:text-[1vw] font-medium hover:bg-white hover:text-[#8B9D5A] transition-colors">
                  SIGN UP
                </button>
              </div>

              {/* Privacy Text */}
              <p className="text-[3.5vw] lg:text-[1vw] text-white text-center">
                We respect your privacy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
