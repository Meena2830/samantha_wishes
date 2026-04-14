const titles = [
  "Her Confidence",
  "Quiet Strength",
  "Her Signature Grace",
  "Driven Mindset",
  "Calm Energy",
  "Natural Leader",
  "Strong Character",
  "Focused Vision",
  "Proud Moments",
  "Her Journey",
  "Consistent Effort",
  "Unshaken Spirit",
  "Attention to Detail",
  "Life in Progress",
  "An Icon I Admire",
];

const captions = [
  "The confidence she carries makes her shine effortlessly.",
  "A strength that is calm, graceful, and always inspiring.",
  "Her presence is simple, elegant, and truly unforgettable.",
  "Always moving forward, growing, and chasing new heights.",
  "A presence that brings warmth, peace, and positivity.",
  "She leads with her actions, inspiring millions silently.",
  "Built on passion, discipline, and strong values.",
  "Clear vision, strong focus, and a future she’s shaping every day.",
  "Moments that reflect her journey, hard work, and success.",
  "Her journey as an actress, built with passion and dedication.",
  "Showing up every day and giving her best in everything she does.",
  "Standing strong through challenges, never losing her spark.",
  "Precise, expressive, and deeply committed to her craft.",
  "A life that continues to evolve into something extraordinary.",
  "More than her success, she is a true inspiration to admire.",
];

function createFallback(index) {
  const hue = 330 + (index % 5) * 12;
  const accentHue = 145 + (index % 4) * 10;
  const title = titles[index];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1500">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="hsl(${hue} 78% 95%)" />
          <stop offset="100%" stop-color="hsl(${accentHue} 52% 92%)" />
        </linearGradient>
        <radialGradient id="orbA" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stop-color="hsla(${hue} 82% 74% / 0.9)" />
          <stop offset="100%" stop-color="hsla(${hue} 82% 74% / 0)" />
        </radialGradient>
        <radialGradient id="orbB" cx="75%" cy="75%" r="45%">
          <stop offset="0%" stop-color="hsla(${accentHue} 70% 70% / 0.85)" />
          <stop offset="100%" stop-color="hsla(${accentHue} 70% 70% / 0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="1500" fill="url(#bg)" />
      <rect x="42" y="42" width="1116" height="1416" rx="48" fill="white" fill-opacity="0.26" stroke="white" stroke-opacity="0.44"/>
      <circle cx="260" cy="260" r="320" fill="url(#orbA)" />
      <circle cx="920" cy="1080" r="360" fill="url(#orbB)" />
      <path d="M240 1140C360 930 624 780 920 840" stroke="rgba(255,255,255,0.8)" stroke-width="24" stroke-linecap="round" fill="none"/>
      <path d="M220 980C420 680 760 560 990 650" stroke="rgba(255,255,255,0.42)" stroke-width="16" stroke-linecap="round" fill="none"/>
      <text x="96" y="1210" fill="rgba(50,40,54,0.78)" font-family="Georgia, serif" font-size="42" letter-spacing="8">FINAL BOSS</text>
      <text x="96" y="1290" fill="rgba(32,24,32,0.96)" font-family="Georgia, serif" font-size="88">${title}</text>
      <text x="96" y="1360" fill="rgba(70,60,70,0.72)" font-family="Arial, sans-serif" font-size="30">Drop ${index + 1}.jpg into /public/images to replace this premium fallback.</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const imageFiles = [
  "photo1.jpeg",
  "photo2.jpeg",
  "photo4.jpeg",
  "photo5.jpeg",
  "photo6.jpeg",
  "photo7.jpeg",
  "photo8.jpeg",
  "photo9.jpeg",
  "photo10.jpeg",
  "photo11.jpeg",
  "photo12.jpeg",
  "photo13.jpeg",
  "photo14.jpeg",
  "photo15.jpeg",
  "photo16.jpeg",
];

export const images = imageFiles.map((file, index) => ({
  id: index + 1,
  src: `/images/${file}`,
  fallback: createFallback(index),
  alt: titles[index],
  title: titles[index],
  caption: captions[index],
  accent: index % 2 === 0 ? "pink" : "green",
}));
