export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "India Launches Revolutionary Space Mission to Mars",
    excerpt: "In a historic leap for space exploration, ISRO announces the launch date for its next interplanetary mission.",
    content: "The Indian Space Research Organisation (ISRO) has officially announced the timeline for its next mission to Mars. Unlike previous expeditions, this mission carries a highly advanced autonomous rover capable of deep-soil analysis. The mission director stated that this technology was developed entirely indigenously. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "Science",
    author: "Aditi Sharma",
    publishedAt: "2023-10-25T10:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "2",
    title: "Cricket World Cup: India Clinches Thriller in Final Over",
    excerpt: "A nail-biting finish at the Wankhede Stadium as the Men in Blue clinch victory by just 2 runs.",
    content: "In a match that will be remembered for decades, the final over provided more drama than a Bollywood thriller. Needing 12 runs off 6 balls, the opposing team seemed in control until a stunning display of yorker bowling turned the tide. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "Sports",
    author: "Rajiv Malhotra",
    publishedAt: "2023-10-24T18:30:00Z",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
  },
  {
    id: "3",
    title: "Sensex Crosses 75,000: Tech Stocks Lead the Bull Run",
    excerpt: "The stock market hit a fresh all-time high today as global investors flocked to Indian tech startups.",
    content: "The bulls are firmly in charge on Dalal Street as the benchmark indices scaled new peaks. The rally was primarily driven by the IT and banking sectors, with mid-cap stocks also showing robust gains. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "Business",
    author: "Vikram Seth",
    publishedAt: "2023-10-25T09:15:00Z",
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
  },
  {
    id: "4",
    title: "Monsoon Fury: Orange Alert Issued for Northern States",
    excerpt: "The IMD has issued an orange alert for three northern states as heavy downpours are expected to continue.",
    content: "Residents in the northern belt are advised to exercise caution as the Meteorological Department predicts heavy to very heavy rainfall. Local authorities have set up 24-hour control rooms. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "Weather",
    author: "Weather Desk",
    publishedAt: "2023-10-23T14:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1514632542677-48fae74a01b2?w=800&q=80",
  },
  {
    id: "5",
    title: "Global Summit 2025: World Leaders Gather in New Delhi",
    excerpt: "Delegates from over 40 nations arrive in the capital to discuss climate change and trade policies.",
    content: "New Delhi has transformed into a fortress as world leaders arrive for the Annual Global Summit. Key topics on the agenda include a unified approach to carbon neutrality by 2050. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "World",
    author: "Sanya Gupta",
    publishedAt: "2023-10-26T08:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1529101091760-6149d4c81f22?w=800&q=80",
  },
  {
    id: "6",
    title: "The Rise of Electric Vehicles: Sales Double in One Year",
    excerpt: "Automotive reports show a 100% surge in EV sales across metro cities, driven by government subsidies.",
    content: "The transition to green mobility is happening faster than anticipated. Recent data from the Transport Ministry shows that EV registrations have doubled compared to the previous fiscal year. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "Auto",
    author: "Karan Johar",
    publishedAt: "2023-10-22T11:00:00Z",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
  },
  {
    id: "7",
    title: "New AI Tool Translates Ancient Sanskrit Texts in Seconds",
    excerpt: "Researchers at IIT have developed an AI model capable of translating complex Sanskrit manuscripts.",
    content: "Bridging the gap between ancient wisdom and modern technology, a team of researchers has unveiled 'Sanskriti-AI'. This tool can process thousands of pages of palm-leaf manuscripts in minutes. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "Tech",
    author: "Priya R.",
    publishedAt: "2023-10-21T16:45:00Z",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
  {
    id: "8",
    title: "Wellness Weekend: 5 Yoga Asanas for Stress Relief",
    excerpt: "Experts suggest adding these simple yoga postures to your daily routine to combat workplace anxiety.",
    content: "In today's fast-paced corporate world, stress has become a silent epidemic. Wellness experts recommend dedicating just 15 minutes a day to mindfulness. Asanas like Balasana have been proven to lower cortisol levels. These developments mark a significant milestone and will influence research, policy, and public engagement in the years ahead. Experts emphasize sustained investment, cross-disciplinary collaboration, and rigorous testing to ensure safe, equitable outcomes. Community outreach and transparent communication will be essential to build trust and to translate technical achievements into real-world benefits for diverse populations. Stakeholders are already planning follow-up studies, educational programs, and infrastructure upgrades to maximize impact. While challenges remain, the collective momentum suggests an optimistic trajectory, with opportunities for innovation, economic growth, and international cooperation that could reshape the landscape for future generations and strengthen global resilience together.",
    category: "Lifestyle",
    author: "Health Desk",
    publishedAt: "2023-10-20T07:30:00Z",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
];

export async function getArticles(): Promise<Article[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return articles;
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return articles.find((article) => article.id === id);
}
