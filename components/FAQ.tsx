"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const faqs = [
	{
		question: "Do you take insurance?",
		answer: ""
	},
	{
		question: "What are your rates?",
		answer: ""
	},
	{
		question: "Do you have any openings?",
		answer: ""
	}
];

export default function FAQ() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="bg-[#EAE4DC] text-[#1F3A1F] py-[10vw] md:py-[8vw] lg:py-[100px]"
		>
			<div className="w-full flex flex-col md:flex-row">
				{/* Left Image - Mobile Top / Desktop 50% */}
				<div className="w-full md:w-1/2 flex items-center justify-center p-[6vw] md:p-[4vw]">
					<div className="relative w-[28vw] h-[36vw] md:w-[24vw] md:h-[32vw] lg:w-[420px] lg:h-[560px] rounded-t-full overflow-hidden">
						<Image
							src="/image/Dr. Maya Reynolds.png"
							alt="FAQ flowers"
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Right Accordion - Mobile Full / Desktop 50% */}
				<div className="w-full md:w-1/2 flex flex-col justify-center px-[6vw] md:pr-[6vw]">
					<h2 className="text-[7vw] md:text-[3vw] font-semibold mb-[4vw] md:mb-[2.5vw]">FAQs</h2>

					<div className="border-t border-[#1F3A1F] mt-[2vw] md:mt-[3vw]">
						{faqs.map((item) => (
							<details key={item.question} className="border-b border-[#1F3A1F] group">
								<summary className="list-none cursor-pointer flex items-center gap-[3vw] md:gap-[1.5vw] py-[3vw] md:py-[1.2vw] text-[4vw] md:text-[2vw] font-medium">
									<span className="text-[4vw] md:text-[2vw] leading-none">+</span>
									<span>{item.question}</span>
								</summary>
								{item.answer ? (
									<div className="pb-[4vw] md:pb-[1.5vw] pl-[6vw] md:pl-[3.5vw] text-[3.6vw] md:text-[1.05vw] leading-[1.6]">
										{item.answer}
									</div>
								) : null}
							</details>
						))}
					</div>
				</div>
			</div>
	</motion.section>
	);
}