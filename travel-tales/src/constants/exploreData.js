import { Uttarakhand, Common } from "./images";

// Placeholder activity images (reuse origin image where specific assets are not available)
const Activities = {
  gangaAartiImg: Common.originImg,
  templeImg: Common.originImg,
  gangaSnanImg: Common.originImg,
  raftingImg: Common.originImg,
  yogaImg: Common.originImg,
  bungeeImg: Common.originImg,
  mallRoadImg: Common.originImg,
  waterfallImg: Common.originImg,
  cableCarImg: Common.originImg,
  natureWalkImg: Common.originImg,
  parkImg: Common.originImg,
  campingImg: Common.originImg,
  jungleImg: Common.originImg,
  bonfireImg: Common.originImg,
  jetSkiImg: Common.originImg,
  boatingImg: Common.originImg,
  kayakImg: Common.originImg,
  confluenceImg: Common.originImg,
  skiingImg: Common.originImg,
  snowTrekImg: Common.originImg,
  trekImg: Common.originImg,
  photoImg: Common.originImg,
  sightseeingImg: Common.originImg,
};

export const exploreData = {
  Uttarakhand: [
    {
      id: 1,
      name: "Haridwar",
      title: "Gateway to Gods",
      description:
        "Haridwar is one of the holiest cities in India, located on the banks of the River Ganga. It is famous for spiritual rituals, temples, and the evening Ganga Aarti at Har Ki Pauri.",
      bestTime: "October to April",
      heroImage: Uttarakhand.haridwarImg,
      activities: [
        { name: "Ganga Aarti", image: Activities.gangaAartiImg },
        { name: "Temple Visit", image: Activities.templeImg },
        { name: "Holy Bath in Ganga", image: Activities.gangaSnanImg },
      ],
    },
    {
      id: 2,
      name: "Rishikesh",
      title: "Yoga Capital of the World",
      description:
        "Rishikesh is a spiritual and adventure hub known for yoga ashrams, river rafting, and scenic views along the Ganges.",
      bestTime: "September to April",
      heroImage: Uttarakhand.rishikeshImg,
      activities: [
        { name: "River Rafting", image: Activities.raftingImg },
        { name: "Yoga & Meditation", image: Activities.yogaImg },
        { name: "Bungee Jumping", image: Activities.bungeeImg },
      ],
    },
    {
      id: 3,
      name: "Mussoorie",
      title: "Queen of Hills",
      description:
        "Mussoorie is a popular hill station with mountain views, waterfalls, and colonial charm. Perfect for a relaxing vacation.",
      bestTime: "March to June",
      heroImage: Uttarakhand.mussoorieImg,
      activities: [
        { name: "Mall Road Walk", image: Activities.mallRoadImg },
        { name: "Kempty Falls Visit", image: Activities.waterfallImg },
        { name: "Cable Car Ride", image: Activities.cableCarImg },
      ],
    },
    {
      id: 4,
      name: "Dhanaulti",
      title: "Peaceful Hilltop",
      description:
        "Dhanaulti is a quiet hill destination surrounded by forests, ideal for nature lovers and peaceful stays.",
      bestTime: "March to June",
      heroImage: Uttarakhand.dhanaultiImg,
      activities: [
        { name: "Nature Walks", image: Activities.natureWalkImg },
        { name: "Eco Park Visit", image: Activities.parkImg },
        { name: "Camping", image: Activities.campingImg },
      ],
    },
    {
      id: 5,
      name: "Kanatal",
      title: "Scenic Ridge",
      description:
        "Kanatal is known for its calm environment, beautiful views, and adventure camping experiences.",
      bestTime: "March to June",
      heroImage: Uttarakhand.kanatalmg,
      activities: [
        { name: "Camping", image: Activities.campingImg },
        { name: "Jungle Safari", image: Activities.jungleImg },
        { name: "Bonfire Nights", image: Activities.bonfireImg },
      ],
    },
    {
      id: 6,
      name: "Tehri",
      title: "Lakes & Adventure",
      description:
        "Tehri is famous for Tehri Lake and dam, offering thrilling water sports and scenic landscapes.",
      bestTime: "October to March",
      heroImage: Common.originImg,
      activities: [
        { name: "Jet Ski", image: Activities.jetSkiImg },
        { name: "Boating", image: Activities.boatingImg },
        { name: "Kayaking", image: Activities.kayakImg },
      ],
    },
    {
      id: 7,
      name: "Rudraprayag",
      title: "Confluence Town",
      description:
        "Rudraprayag is a sacred town where the Alaknanda and Mandakini rivers meet. A spiritual stop on the Char Dham route.",
      bestTime: "March to June",
      heroImage: Common.rudranathImg,
      activities: [
        { name: "River Confluence Visit", image: Activities.confluenceImg },
        { name: "Temple Darshan", image: Activities.templeImg },
      ],
    },
    {
      id: 8,
      name: "Devprayag",
      title: "Sacred Confluence",
      description:
        "Devprayag is where the Alaknanda and Bhagirathi rivers merge to form the Ganga. A very spiritual and scenic destination.",
      bestTime: "October to April",
      heroImage: Common.devprayagImg,
      activities: [
        { name: "Sangam Visit", image: Activities.confluenceImg },
        { name: "Temple Darshan", image: Activities.templeImg },
      ],
    },
    {
      id: 9,
      name: "Auli",
      title: "Skiing Paradise",
      description:
        "Auli is India’s top skiing destination with snow-covered slopes and breathtaking Himalayan views.",
      bestTime: "December to March",
      heroImage: Uttarakhand.auliImg,
      activities: [
        { name: "Skiing", image: Activities.skiingImg },
        { name: "Cable Car Ride", image: Activities.cableCarImg },
        { name: "Snow Trekking", image: Activities.snowTrekImg },
      ],
    },
    {
      id: 10,
      name: "Chopta",
      title: "Trek Gateway (Tungnath)",
      description:
        "Chopta is known as the base for the Tungnath trek and offers peaceful Himalayan views and green meadows.",
      bestTime: "April to June",
      heroImage: Common.tungnathImg,
      activities: [
        { name: "Tungnath Trek", image: Activities.trekImg },
        { name: "Camping", image: Activities.campingImg },
        { name: "Photography", image: Activities.photoImg },
      ],
    },
    {
      id: 11,
      name: "Lansdowne",
      title: "Quiet Cantonment",
      description:
        "Lansdowne is a calm hill station known for pine forests, old churches, and peaceful vibes.",
      bestTime: "March to June",
      heroImage: Common.originImg,
      activities: [
        { name: "Nature Walk", image: Activities.natureWalkImg },
        { name: "Boating (Bhulla Lake)", image: Activities.boatingImg },
        { name: "Sightseeing", image: Activities.sightseeingImg },
      ],
    },
  ],
};

export default exploreData;
