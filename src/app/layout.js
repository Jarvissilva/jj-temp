import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL('https://jj-temp.vercel.app'),
  title: "Surprise Gift for everyone",
  description: "Get free surprise gifts instantly — no signup, no login required. Discover mystery rewards, giveaways, and exclusive free offers today.",
  keywords: "free gifts online, free surprise gifts, free mystery gifts, free giveaways, free gift website, free rewards online, instant free gifts, free gift offers, free gifts no signup required, free gifts without registration, free surprise gifts online no login, claim free gifts instantly, free mystery box online, real free giveaways no sign up, free gift rewards instantly, 100% free gifts online, unlock free gifts now, surprise gift online free, free gift drop, limited time free gifts, exclusive free rewards, online free gift platform, instant gift claim website, daily free gift offers, free reward center, surprise giveaways online",
  openGraph: {
    url: 'https://jj-temp.vercel.app',
    title: 'Yokoso Watashi No Gifting Society yea',
    description: 'Free surprise gifts — no signup, no login. Just click and claim instantly! 🎁',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/gift.png`,
        width:1200 ,
        height: 630,
        alt: 'Yokoso watshi no gifting sekai yea',
        type: 'image/png',
      },
    ],
    siteName: 'Bankai Mugen Giftoo',
  },



};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      </body>
    </html>
  );
}
