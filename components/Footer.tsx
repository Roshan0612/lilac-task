export default function Footer() {
  return (
    <footer className="bg-[#EAE4DC] text-[#1F3A1F]">
      {/* Main Footer Content */}
      <div className="px-[6vw] py-[8vw] lg:py-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[6vw] lg:gap-[4vw] mb-[6vw] lg:mb-[4vw] text-center lg:text-left">
          {/* Column 1: Logo & Contact Info */}
          <div>
            <h3 className="text-[6vw] lg:text-[2.2vw] font-semibold mb-[3vw] lg:mb-[2vw]">
              Lilac Template
            </h3>
            <p className="text-[3.5vw] lg:text-[1vw] leading-[1.8] mb-[2vw] lg:mb-[1.5vw]">
              123 Example Road<br />
              Minneapolis, MN
            </p>
            <p className="text-[3.5vw] lg:text-[1vw] mb-[1vw]">
              <a href="mailto:email@example.com" className="underline hover:opacity-70">
                email@example.com
              </a>
            </p>
            <p className="text-[3.5vw] lg:text-[1vw]">
              (555) 555-5555
            </p>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="text-[5.5vw] lg:text-[1.8vw] font-medium mb-[2vw] lg:mb-[1.5vw]">
              Hours
            </h4>
            <p className="text-[3.5vw] lg:text-[1vw] leading-[1.8]">
              Monday – Friday<br />
              10am – 6pm
            </p>
          </div>

          {/* Column 3: Empty */}
          <div className="hidden lg:block"></div>

          {/* Column 4: Find (Navigation) */}
          <div>
            <h4 className="text-[5.5vw] lg:text-[1.8vw] font-medium mb-[2vw] lg:mb-[1.5vw]">
              Find
            </h4>
            <ul className="space-y-[1.5vw] lg:space-y-[0.8vw] text-[3.5vw] lg:text-[1vw]">
              <li>
                <a href="/" className="underline hover:opacity-70">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="underline hover:opacity-70">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="underline hover:opacity-70">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1F3A1F]"></div>

      {/* Bottom Footer */}
      <div className="bg-[#D3D3D3] px-[6vw] py-[6vw] lg:py-[3vw] text-center space-y-[2.5vw] lg:space-y-[1.5vw]">
        {/* Footer Links */}
        <div className="flex flex-col lg:flex-row justify-center gap-[2vw] flex-wrap text-[3.2vw] lg:text-[0.95vw]">
          <a href="#" className="underline hover:opacity-70">
            Privacy & Cookies Policy
          </a>
          <a href="#" className="underline hover:opacity-70">
            Good Faith Estimate
          </a>
          <a href="#" className="underline hover:opacity-70">
            Website Terms & Conditions
          </a>
          <a href="#" className="underline hover:opacity-70">
            Disclaimer
          </a>
        </div>

        {/* Credits */}
        <p className="text-[3.2vw] lg:text-[0.95vw]">
          Website Template Credits:{" "}
          <a href="#" className="underline hover:opacity-70">
            Go Bloom Creative
          </a>
        </p>

        {/* Copyright */}
        <p className="text-[3.2vw] lg:text-[0.95vw]">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </footer>
  );
}
