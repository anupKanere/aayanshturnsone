export const eventDetails = {
  birthdayBoy: "Aayansh",
  occasion: "First Birthday",
  age: 1,
  date: "2026-11-13",
  time: "19:00",
  displayDate: "Friday, 13 November 2026",
  displayTime: "7:00 PM onwards",
  hosts: ["Santosh", "Shravani"],
  hostsDisplay: "Santosh & Shravani",
  phone: "+917972556784",
  phoneDisplay: "+91 79725 56784",
  mapsUrl: "https://maps.app.goo.gl/n5x1wxWX48BwHRSz9",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=35.6234997,139.7491458&hl=en&z=15&output=embed",
  // Target date for countdown - 13 November 2026, 7:00 PM IST (UTC+5:30)
  targetDate: new Date("2026-11-13T19:00:00+05:30"),

  // Media assets
  photoUrl: "/images/aayansh.jpeg",
  photoWithDad: "/images/aayansh-with-dad.jpeg",
  photoWithMom: "/images/aayansh-with-mom.jpeg",
  reelVideoUrl: "/video/aayansh-reel.mp4",
  musicUrl: "/audio/birthday-piano.mp3",
};

export const getCallUrl = () => {
  return `tel:${eventDetails.phone}`;
};
