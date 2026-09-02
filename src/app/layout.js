import "./globals.css";

export const metadata = {
  title: "Phelyks | Video Editor",
  description: "Video editor specializing in short-form, long-form, and AI-assisted video production for brands, creators and organizations. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}