export const links = {
  home: "https://blowupstudio.dk/",
  booking: "https://blowup-studio.planway.com/",
  readyBeat: "https://www.beatstars.com/blowupstudio",
  customBeat: "https://www.instagram.com/blowup_studio_coprod/",
  instagram: "https://www.instagram.com/blowup_studio/",
  youtube: "https://youtube.com/@BLOWUP_studio?si=662OrVgAfNgG2IBz",
  tiktok: "https://www.tiktok.com/@blowupstudio?_r=1&_t=ZN-96m6FoQV5r4",
  discord: "https://discord.gg/zfPjfQ2KJg",
  spotifyEmbed:
    "https://open.spotify.com/embed/playlist/71CAFwukAKylGAjjmCwMrT?theme=0",
  spotifyOpen: "https://open.spotify.com/playlist/71CAFwukAKylGAjjmCwMrT",
  email: "blowupstudio.booking@gmail.com",
  maps: "https://maps.google.com/maps?q=Hovedgaden%20440%2C%202640%20Hedehusene&t=m&z=12&output=embed&iwloc=near",
  address: "Hovedgaden 440, 2640 Hedehusene",
  cvr: "44986582",
};

export const asset = (name) => `/assets/site/${name}`;

export const nav = [
  { label: "Studie", href: "#studie" },
  { label: "Proces", href: "#proces" },
  { label: "Priser", href: "#priser" },
  { label: "Udgivelser", href: "#udgivelser" },
  { label: "Artister", href: "#artister" },
  { label: "Kontakt", href: "#kontakt" },
];

export const stats = [
  { value: "5.0", label: "Google rating", sub: "★★★★★" },
  { value: "3–6t", label: "Sessioner" },
  { value: "100+", label: "Udgivelser" },
  { value: "Alt-i-én", label: "Beat · coaching · mix" },
];

export const features = [
  {
    title: "Vokal & flow",
    text: "Live coaching på delivery, energi og tekst mens takes bygges op.",
  },
  {
    title: "Mix & mastering",
    text: "Industri-standard finish med teknisk mix og release-klar mastering.",
  },
  {
    title: "Beats & toplines",
    text: "Trap, drill, pop, soul og dancehall — bygget i FL Studio og Cubase.",
  },
];

export const sessionFlow = [
  {
    no: "01",
    title: "Retning",
    text: "Vi finder vibe, reference og mål, så sessionen starter med en klar plan.",
  },
  {
    no: "02",
    title: "Optagelse",
    text: "Patrick coacher flow, energi og delivery, mens takes bliver bygget hurtigt op.",
  },
  {
    no: "03",
    title: "Sound",
    text: "Beat, vokalchain, mix og master formes omkring artisten — ikke omvendt.",
  },
  {
    no: "04",
    title: "Release",
    text: "Du går derfra med en sang, der føles tættere på færdig end bare en demo.",
  },
];

export const pricing = [
  {
    title: "Tidlig / sen session",
    duration: "3 timer",
    price: "1.450,-",
    tag: "Hurtig release-klar session",
    included: ["Drikkevarer", "Beat", "Mix og master", "Flow- og tekstcoaching"],
  },
  {
    title: "Hverdags-session",
    duration: "6 timer",
    price: "2.000,-",
    tag: "Mest værdi",
    featured: true,
    included: ["Drikkevarer", "Beat", "Mix og master", "Flow- og tekstcoaching"],
  },
  {
    title: "Weekend-session",
    duration: "6 timer",
    price: "2.400,-",
    tag: "Når kalenderen skal passe",
    included: ["Drikkevarer", "Beat", "Mix og master", "Flow- og tekstcoaching"],
  },
  {
    title: "Mix / master",
    duration: "Fra bunden",
    price: "2.000,-",
    tag: "Industri-standard finish",
    included: ["Teknisk mix", "Mastering", "Balance", "Release-klar lyd"],
  },
  {
    title: "Skræddersyet beat",
    duration: "Custom",
    price: "400,-",
    tag: "Bygget til din vision",
    included: ["Moodmatch", "Arrangement", "Feedbackrunde", "Eksport"],
  },
];

export const videos = [
  { title: "ON THE SPOT — Nikz", id: "qIq5klvtMxk", duration: "1:25", thumb: asset("youtube-nikz.jpg") },
  { title: "ON THE SPOT — Micass", id: "9FN129SrMjI", duration: "1:37", thumb: asset("youtube-micass.jpg") },
  { title: "ON THE SPOT — ZZZ", id: "0Fz6g9WdRjs", duration: "1:00", thumb: asset("youtube-zzz.jpg") },
  { title: "ON THE SPOT — Yayo", id: "Dz77YzqPU5k", duration: "1:45", thumb: asset("youtube-yayo.jpg") },
  { title: "STJERNER I BOKSEN · Micass — EP 1", id: "r5BuyJc2jDM", duration: "8:06", thumb: asset("youtube-stjerner.jpg") },
];

export const reviews = [
  { name: "Pelle Krusbæk", text: "Varmeste producer i Danmark. Gratis øl." },
  { name: "BERG", text: "Kæmpe nice oplevelse, sødeste fyr i verden. 10/10." },
  {
    name: "Willow",
    text: "Meget seriøst og produktivt arbejde, rigtig god og talentfuld producer der ved hvad han laver.",
  },
  {
    name: "It's olive333351 #1",
    text: "Mega fedt studie, Patrick er mega hjælpsom og fornuftig at høre på, godt med drikkevarer og snacks.",
  },
  {
    name: "Birkehuset Hundested",
    text: "Super godt studie og man mangler ikke noget når man kommer ind.",
  },
];

export const releaseHighlights = [
  "Kamæleoner",
  "Holdin' On",
  "ETABLERET",
  "Mama",
  "Magisk",
  "Marseille",
  "UnderVand",
  "Formidable",
];

export const gallery = [
  asset("gallery-1.jpg"),
  asset("gallery-2.jpg"),
  asset("gallery-3.jpg"),
  asset("gallery-4.jpg"),
  asset("gallery-5.jpg"),
];

export const topics = ["Booking", "Mix / master", "Custom beat", "Andet"];
