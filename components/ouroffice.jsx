import Image from "next/image";

const officeImage = "/image/office1.jpeg";

export default function OurOffice() {
  return (
    <section className="bg-[#EAE4DC] text-[#1F3A1F] py-[10vw] lg:py-[6vw]">
      <div className="w-full px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6vw] lg:gap-[3vw] items-center">
          <div>
            <h2 className="text-[7vw] lg:text-[3.5vw] font-semibold leading-[1.2] mb-[4vw] lg:mb-[2vw]">
              A Calm Space for Healing
            </h2>

            <p className="text-[3.8vw] lg:text-[1.1vw] leading-[1.7] mb-[3.5vw] lg:mb-[1.5vw]">
              Our office is designed to feel warm, quiet, and welcoming — a place where you can slow down and feel at ease. From the moment you arrive, the space is intentionally arranged to promote comfort, privacy, and a sense of safety.
            </p>
            <p className="text-[3.8vw] lg:text-[1.1vw] leading-[1.7] mb-[3.5vw] lg:mb-[1.5vw]">
              Soft lighting, natural textures, and thoughtfully arranged seating create an environment that supports open conversation and reflection. Whether you're visiting for in-person sessions or beginning your therapy journey through hybrid support, this space is here for you.
            </p>
            <p className="text-[3.8vw] lg:text-[1.1vw] leading-[1.7]">
              Located in [City/Neighborhood from profile], the office offers a peaceful setting where healing can unfold at your own pace.
            </p>
          </div>

          <div className="relative w-full aspect-square rounded-[2vw] lg:rounded-[1vw] overflow-hidden border-2 border-[#1F3A1F] bg-[#f5f5f0]">
            <Image src={officeImage} alt="Office space" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
