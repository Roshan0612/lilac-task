import "./globals.css";

export const metadata = {
  title: "Therapy Website",
  description: "Therapist Website Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#EAE4DC] text-[#1F3A1F] antialiased">
        {children}
      </body>
    </html>
  );
}
