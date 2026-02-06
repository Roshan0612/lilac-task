import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

"use client";
  return (
    <>
      <Navbar />
      
      <main className="bg-[#D3D3D3] text-[#1F3A1F]">
        {/* Let's Connect Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full min-h-screen flex flex-col lg:flex-row items-start px-[6vw] py-[12vw] lg:py-[8vw] gap-[8vw] lg:gap-[4vw]"
        >
          
          {/* Left Content - Text and Images */}
          <div className="w-full lg:w-[50%] flex flex-col">
            <h1 className="text-[10vw] lg:text-[4.5vw] font-semibold text-[#1F3A1F] mb-[6vw] lg:mb-[3vw] leading-[1.1]">
              Let's Connect
            </h1>
            
            <p className="text-[4vw] lg:text-[1.1vw] text-[#1F3A1F] mb-[4vw] lg:mb-[2vw] leading-[1.6]">
              Starting therapy is courageous.
            </p>
            
            <p className="text-[4vw] lg:text-[1.1vw] text-[#1F3A1F] mb-[8vw] lg:mb-[4vw] leading-[1.6]">
              Get in touch for questions, or to book a free 15-minute consultation.
            </p>

            {/* Overlapping Images */}
            <div className="relative w-full h-[90vw] lg:h-[40vw]">
              {/* Back Image - Arch Top Rectangle */}
              <div className="relative w-[70vw] h-[85vw] lg:w-[30vw] lg:h-[36vw] rounded-t-full overflow-hidden">
                <Image
                  src="/image/office1.jpeg"
                  alt="Flowers"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Front Image - Circle (Overlapping) */}
              <div className="absolute bottom-[-5vw] lg:bottom-[-2vw] left-[42vw] lg:left-[18vw] w-[55vw] h-[55vw] lg:w-[24vw] lg:h-[24vw] rounded-full overflow-hidden">
                <Image
                  src="/image/office1.jpeg"
                  alt="Flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Green Note Box */}
          <div className="w-full lg:w-[40%] bg-[#1F3A1F] p-[6vw] lg:p-[3vw] lg:mt-[2vw] lg:min-h-[320px] flex items-center">
            <p className="text-[3.8vw] lg:text-[1.05vw] text-[#EAE4DC] leading-[1.7]">
              <span className="font-semibold">PLEASE NOTE:</span> If you opt to use a "Form Block" on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
            </p>
          </div>

        </motion.section>

        {/* Book an Appointment Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#EAE4DC] py-[12vw] lg:py-[8vw] px-[6vw]"
        >
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-[8vw] lg:text-[3.5vw] font-semibold text-[#1F3A1F] mb-[6vw] lg:mb-[4vw] text-center">
              Book an appointment.
            </h2>

            {/* Descriptive Text */}
            <p className="text-[3.8vw] lg:text-[1.1vw] text-[#1F3A1F] mb-[8vw] lg:mb-[6vw] text-center max-w-[800px] leading-[1.7]">
              Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
            </p>

            {/* Scheduling Widget Placeholder */}
            <div className="w-full max-w-[600px] bg-white p-[8vw] lg:p-[4vw] rounded-lg flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
              <h3 className="text-[5vw] lg:text-[1.8vw] font-semibold text-[#1F3A1F] mb-[3vw] text-center">
                This page is not active
              </h3>
              <p className="text-[3.5vw] lg:text-[1vw] text-[#1F3A1F] mb-[5vw] text-center leading-[1.6]">
                If you're the owner, please log into your account to start a free trial or subscribe.
              </p>
              <button className="px-[6vw] lg:px-[2.5vw] py-[2.5vw] lg:py-[0.8vw] bg-black text-white text-[3.5vw] lg:text-[1vw] font-semibold hover:opacity-80 transition-opacity">
                GO TO ACCOUNT
              </button>
            </div>

            {/* Powered by Text */}
            <div className="mt-[6vw] lg:mt-[4vw] text-center">
              <p className="text-[3.2vw] lg:text-[0.95vw] text-[#1F3A1F] mb-[1vw]">Powered by</p>
              <p className="text-[4vw] lg:text-[1.2vw] font-semibold text-[#1F3A1F]">acuity:scheduling</p>
            </div>
          </div>
        </motion.section>

        {/* My Office Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#8B9D5A] py-[10vw] lg:py-[8vw] px-[6vw]"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-stretch gap-[8vw] lg:gap-[4vw]">
            
            {/* Left Content - Office Info */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start text-white">
              {/* My Office Heading */}
              <h2 className="text-[8vw] lg:text-[3.5vw] font-semibold mb-[4vw] lg:mb-[3vw]">
                My Office
              </h2>

              {/* Address */}
              <div className="mb-[8vw] lg:mb-[5vw]">
                <p className="text-[4vw] lg:text-[1.2vw] leading-[1.8]">
                  123 Example Street<br/>
                  Minneapolis, MN
                </p>
              </div>

              {/* Hours Section */}
              <h3 className="text-[8vw] lg:text-[3.5vw] font-semibold mb-[3vw] lg:mb-[2vw]">
                Hours
              </h3>

              <p className="text-[4vw] lg:text-[1.2vw] leading-[1.8]">
                Monday – Friday<br/>
                10am – 6pm
              </p>
            </div>

            {/* Right Content - Google Map */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[60vw] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen=""
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.1234567890!2d-93.2654!3d44.9699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3329ce77d77ed%3A0x1234567890!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1234567890"
                ></iframe>
              </div>
            </div>

          </div>
        </section>

        {/* Find me on Social Section */}
        <section className="w-full bg-[#EAE4DC] py-[10vw] lg:py-[8vw] px-[6vw]">
          <div className="max-w-[1200px] mx-auto">
            {/* Heading */}
            <h2 className="text-[8vw] lg:text-[4vw] font-semibold text-[#1F3A1F] mb-[8vw] lg:mb-[6vw]">
              Find me on social.
            </h2>

            {/* Social Images Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[3vw] lg:gap-[2.5vw]">
              
              {/* Social Image 1 */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/image/office1.jpeg"
                  alt="Social Post 1"
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Social Image 2 */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/image/office1.jpeg"
                  alt="Social Post 2"
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Social Image 3 */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/image/office1.jpeg"
                  alt="Social Post 3"
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Social Image 4 */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/image/office1.jpeg"
                  alt="Social Post 4"
                  fill
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
