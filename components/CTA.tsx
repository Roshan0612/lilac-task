export default function CTA() {
  return (
    <section className="bg-[#8B9D5A] text-white py-[12vw] md:py-[8vw] lg:py-[6vw] px-[6vw]">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[8vw] md:text-[5vw] lg:text-[3.5vw] font-light leading-[1.2] mb-[4vw] md:mb-[3vw] lg:mb-[2vw]">
          Get started today.
        </h2>

        {/* Description */}
        <p className="text-[3.8vw] md:text-[2.2vw] lg:text-[1.15vw] leading-[1.8] mb-[6vw] md:mb-[4vw] lg:mb-[3vw]">
          Ready to take the first step towards a happier, healthier you? Contact me to book your first session. I look forward to starting this therapeutic journey with you.
        </p>

        {/* Button */}
        <button className="px-[8vw] md:px-[4vw] lg:px-[3vw] py-[3vw] md:py-[1.8vw] lg:py-[1.3vw] border-2 border-white text-white text-[3.8vw] md:text-[1.8vw] lg:text-[1.05vw] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-[#8B9D5A] transition duration-300">
          Get in touch →
        </button>
      </div>
    </section>
  );
}
