import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

const toursData = [
  {
    id: 1,
    toursImage: tour1,
    toursHeading: "Tibet Adventure",
    spanTitle: "china",
    spanSecondPara: "6 days",
    spanThirdPara: "from $2100",
    topDate: "august 26th, 2020",
  },
  {
    id: 2,
    toursImage: tour2,
    toursHeading: "best of java",
    spanTitle: "indonesia",
    spanSecondPara: "11 days",
    spanThirdPara: "from $1400",
    topDate: "october 1th, 2020",
  },
  {
    id: 3,
    toursImage: tour3,
    toursHeading: "explore hong kong",
    spanTitle: "hong kong",
    spanSecondPara: "8 days",
    spanThirdPara: "from $5000",
    topDate: "september 15th, 2020",
  },
  {
    id: 4,
    toursImage: tour4,
    toursHeading: "kenya highlights",
    spanTitle: "kenya",
    spanSecondPara: "20 days",
    spanThirdPara: "from $3300",
    topDate: "december 5th, 2019",
  },
];

const servicesOffered = [
  { serviceName: "saving money", id: 1 },
  { serviceName: "endless hiking", id: 2 },
  { serviceName: "amazing comfort", id: 3 },
];

export { toursData, servicesOffered };
