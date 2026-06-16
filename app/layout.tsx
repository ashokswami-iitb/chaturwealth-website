import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chatur Wealth | Disciplined Wealth Management | Algo-Driven Investing",
  description:
    "Chatur Wealth is a research-driven wealth management firm using AI and algorithmic strategies to build and preserve long-term capital. Founded by Devesh Chawla — Forbes Top 100 Manager, TEDx Speaker.",
  keywords:
    "Chatur Wealth, wealth management India, algo trading, AI investing, Devesh Chawla, disciplined investing, capital preservation, algorithmic strategies",
  authors: [{ name: "Devesh Chawla" }],
  openGraph: {
    type: "website",
    title: "Chatur Wealth | Disciplined Wealth Management",
    description:
      "A research-driven, AI-assisted approach to long-term wealth creation. Discipline over speculation. Process over emotion. Founded by Forbes Top 100 Manager Devesh Chawla.",
    siteName: "Chatur Wealth",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatur Wealth | Disciplined Wealth Management",
    description:
      "AI-assisted, process-driven wealth management. Capital preservation and long-term growth through disciplined algorithmic strategies.",
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Chatur Wealth",
              description:
                "Research-driven wealth management firm using AI and algorithmic strategies for long-term capital growth and preservation.",
              founder: {
                "@type": "Person",
                name: "Devesh Chawla",
                jobTitle: "Founder & CEO",
                award: [
                  "Forbes Top 100 Great People Managers 2021",
                  "Mahatma Gandhi Samman Award — 36th International Congress of NRIs",
                  "Entrepreneur of the Year 2018 — Indian Achievers Forum",
                  "CEO of the Year 2019 — GISR Foundation",
                  "Business World 40 Under 40",
                ],
                sameAs: ["https://www.linkedin.com/in/deveshchawla"],
              },
              telephone: "+91-9820765679",
              email: "deveshchawla@chaturideas.com",
              areaServed: "India",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
