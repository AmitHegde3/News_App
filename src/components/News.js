import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Kirsten Chuba, Kimberly Nordyke",
      title:
        "PGA Awards: ‘Oppenheimer’ Takes Top Film Prize - Hollywood Reporter",
      description:
        "'Succession,' 'The Bear,' 'Last Week Tonight,' 'RuPaul's Drag Race,' 'Welcome to Wrexham,' 'Spider-Man: Across the Spider-Verse' and 'American Symphony' also were among the winners.",
      url: "http://www.hollywoodreporter.com/movies/movie-news/2024-producers-guild-awards-winners-list-1235833336/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/02/MCDOPPE_UV016-copy.jpg?w=1024",
      publishedAt: "2024-02-26T05:45:21Z",
      content:
        "Oppenheimer took the top prize at the 2024 Producers Guild of AmericaAwards on Sunday night.\r\nThe film won the Darryl F. Zanuck Award for outstanding producer of theatrical motion pictures, a day aft… [+6842 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Kristen Rogers",
      title:
        "Antidepressant prescriptions to youths spiked during and after the pandemic, study finds - CNN",
      description:
        "The rate of antidepressant prescriptions to young people surged during and after the pandemic, according to a new study. Experts weigh in on the possible reasons.",
      url: "https://www.cnn.com/2024/02/26/health/antidepressant-use-spikes-after-pandemic-youth-wellness/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1488897301.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-02-26T05:01:00Z",
      content:
        "Sign up for CNNs Stress, But Less newsletter. Our six-part mindfulness guide will inform and inspire you to reduce stress while learning how to harness it.\r\nMany young people have reported having poo… [+6536 chars]",
    },
    {
      source: { id: null, name: "[Removed]" },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Safid Deen",
      title:
        "Inter Miami vs. LA Galaxy score: Full recap with every Messi highlight - USA TODAY",
      description:
        "Lionel Messi rescued Inter Miami late against the Los Angeles Galaxy, earning a late draw on the road. Take a look at the game's highlights.",
      url: "https://www.usatoday.com/story/sports/soccer/2024/02/25/inter-miami-la-galaxy-live-stream-updates-stats-highlights/72737101007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/26/USAT/72742165007-usatsi-22621599.jpg?crop=2800,1575,x59,y218&width=2800&height=1575&format=pjpg&auto=webp",
      publishedAt: "2024-02-26T04:22:12Z",
      content:
        "The Los Angeles Galaxy were five minutes away from beating Lionel Messi and Inter Miami.\r\nBut it was enough time for the worlds greatest player to come to Inter Miamis rescue and make his mark in Los… [+14884 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Reuters",
      title:
        "Taiwan ally Tuvalu names Feleti Teo as new prime minister - Reuters",
      description: null,
      url: "https://www.reuters.com/world/asia-pacific/tuvalu-name-new-prime-minister-monday-2024-02-25/",
      urlToImage: null,
      publishedAt: "2024-02-26T03:48:00Z",
      content: null,
    },
    {
      source: { id: "axios", name: "Axios" },
      author: "Axios",
      title:
        "U.S. airman set himself on fire outside Israeli Embassy in D.C. - Axios",
      description: null,
      url: "https://www.axios.com/2024/02/25/man-set-himself-on-fire-israel-embassy-dc",
      urlToImage: null,
      publishedAt: "2024-02-26T03:33:45Z",
      content: null,
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: null,
      title:
        "Video appears to show Cam Newton in scuffle at youth football event - ESPN",
      description:
        "A video surfaced Sunday that appears to show 2015 NFL MVP Cam Newton involved in a scuffle at a 7-on-7 youth football tournament in Atlanta.",
      url: "https://www.espn.com/nfl/story/_/id/39601186/video-appears-show-cam-newton-involved-scuffle-youth-football-tournament-atlanta",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0226%2Fr1296332_1296x729_16%2D9.jpg",
      publishedAt: "2024-02-26T03:07:00Z",
      content:
        "Feb 25, 2024, 10:07 PM ET\r\nA video surfaced Sunday that appears to show 2015 NFL MVP Cam Newton involved in a scuffle at a 7-on-7 youth football tournament in Atlanta.\r\nIt seems to show Newton, weari… [+1759 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Sara Smart, Steve Almasy",
      title:
        "Nex Benedict death: Police video shows non-binary teen describe fight in high school bathroom - CNN",
      description:
        "Body camera video released by police in Oklahoma shows a teenager and their guardian speaking with an officer about a fight at a high school, giving more insight into a reported altercation that preceded the 10th grader’s death.",
      url: "https://www.cnn.com/2024/02/25/us/oklahoma-nex-benedict-death-police-video/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/nex-benedict-1707490102.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-02-26T03:05:00Z",
      content:
        "Body camera video released by police in Oklahoma shows a teenager and their guardian speaking with an officer about a fight at a high school, giving more insight into a reported altercation that prec… [+5216 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Greg Wehner",
      title:
        "Houthis nearly strike oil tanker in Gulf of Aden; US, coalition forces take out more one-way attack drones - Fox News",
      description:
        "Iranian-backed Houthis nearly struck an oil tanker in the Gulf of Aden on Saturday, while Central Command forces took out two drones flying toward military vessels in the Red Sea.",
      url: "https://www.foxnews.com/world/houthis-nearly-strike-oil-tanker-gulf-aden-us-coalition-forces-take-out-way-attack-drones",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/Houthi-missile-at-protest-in-Yemen.jpg",
      publishedAt: "2024-02-26T03:02:00Z",
      content:
        "Join Fox News for access to this content\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you… [+2693 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: null,
      title:
        "WTO in 'damage control' mode as Abu Dhabi agenda unravels - POLITICO",
      description:
        "The failure of WTO member countries to produce anything meaningful at the group’s 13th Ministerial Conference could further erode the Geneva-based organization's ability to create new global trade rules.",
      url: "https://www.politico.com/news/2024/02/25/world-trade-cooperation-will-be-put-to-the-test-in-abu-dhabi-00143019",
      urlToImage:
        "https://static.politico.com/43/68/a04f837a4a95a993ee4ad7e6bf2a/https-delivery-gettyimages.com/downloads/1241258865",
      publishedAt: "2024-02-26T03:00:00Z",
      content:
        "You could put the worlds greatest matchmaker, arbiter and negotiator in charge of the WTO right now and I dont think much could happen, said Rufus Yerxa, a former U.S. trade official who was a WTO de… [+9202 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Nikola Jokic Drops Another HUGE Triple-Double vs Golden State! 🔥 | February 25, 2024 - NBA",
      description:
        "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.Download now: https://link.n...",
      url: "https://www.youtube.com/watch?v=imjfvqtAR2M",
      urlToImage: "https://i.ytimg.com/vi/imjfvqtAR2M/maxresdefault.jpg",
      publishedAt: "2024-02-26T02:48:44Z",
      content: null,
    },
    {
      source: { id: null, name: "WLKY Louisville" },
      author: "Danielle Goodman",
      title:
        "Coroner identifies cause of death for Campbellsville University student found unresponsive in dorm - WLKY Louisville",
      description:
        "The Taylor County coroner has identified the cause of death for a Champbsville University student found unresponsive in a dorm room.",
      url: "https://www.wlky.com/article/taylor-county-coroner-death-campbellsville-university-student-unresponsive-dorm/46963691",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/josiah-kilman-65dbf55c9962c.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2024-02-26T02:30:00Z",
      content:
        "CAMPBELLSVILLE, Ky. —The Taylor County coroner has identified the cause of death for a Champbsville University student found unresponsive in a dorm room.\r\nAccording to the coroner, Josiah Kilman, 18,… [+579 chars]",
    },
    {
      source: { id: null, name: "Digital Trends" },
      author: "Trevor Mogg",
      title:
        "Samsung is about to display the Galaxy Ring for the first time - Digital Trends",
      description:
        "Samsung will show off the Galaxy Ring for the first time this week, offering visitors to Mobile World Congress a closer look at the health tracker.",
      url: "https://www.digitaltrends.com/mobile/samsung-is-about-to-display-galaxy-ring-for-first-time/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/01/samsung-galaxy-ring-unpacked-2.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-02-26T02:15:16Z",
      content:
        "Last year there was much talk about Samsung launching a smart ring to compete with the likes of the Oura ring, and last month it became a reality when the Korean company teased the Galaxy Ring in a s… [+1573 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author:
        "Ashley Williams, Raja Razek, Priscilla Alvarez, Isabel Rosales, Jaide Timm-Garcia",
      title:
        "Questions remain in investigation of death of Augusta University student found on UGA campus - CNN",
      description:
        "As the investigation continues into the death of an Augusta University College of Nursing student on the University of Georgia campus in Athens, Thursday, federal officials confirmed the immigration status of a suspect now in custody.",
      url: "https://www.cnn.com/2024/02/25/us/uga-augusta-university-student-death-sunday/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/20240224-zaf-m67-003.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2024-02-26T02:10:00Z",
      content:
        "As the investigation continues into the death of an Augusta University College of Nursing student on the University of Georgia campus in Athens, Thursday, federal officials confirmed the immigration … [+5770 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "Katherine Tangalakis-Lippert",
      title:
        "Investment advice from Warren Buffett's 2024 letter to shareholders - Business Insider",
      description:
        "In his 2024 letter to Berkshire Hathaway shareholders, centibillionaire Warren Buffett offered advice to investors looking to grow their wealth.",
      url: "https://www.businessinsider.com/investment-advice-warren-buffett-letter-berkshire-hathaway-shareholders-2024-2",
      urlToImage:
        "https://i.insider.com/65dbd4106080194819fa06ef?width=1200&format=jpeg",
      publishedAt: "2024-02-26T02:03:00Z",
      content:
        "Warren Buffett on Saturday released his annual letter to Berkshire Hathaway shareholders, offering subtle investment advice to readers who may be looking to grow their wealth the way the centibillion… [+3064 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Nidia Cavazos",
      title:
        "Network founded by Koch brothers says it will stop spending on Nikki Haley's presidential campaign - CBS News",
      description:
        "The cut comes after Haley lost the Republican primary in her home state of South Carolina to former President Donald Trump by 20 points.",
      url: "https://www.cbsnews.com/news/network-founded-by-koch-brothers-says-it-will-stop-spending-on-nikki-haleys-presidential-campaign/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2024/02/26/b7d62925-8371-4464-bda6-e1e79b9ed53a/thumbnail/1200x630/f86021f1d69cf9ca94b092fb809a5343/gettyimages-2028818692.jpg?v=26439302e0bbe3219b6ef78d2fd37ce0",
      publishedAt: "2024-02-26T00:56:03Z",
      content:
        "Americans for Prosperity Action, a libertarian conservative political policy network founded by the billionaire Koch brothers, announced on Sunday that it will no longer spend on Nikki Haley's presid… [+2487 chars]",
    },
    {
      source: { id: null, name: "AL.com" },
      author: "Sarah Whites-Koditschek | swhites-koditschek@al.com",
      title:
        "Alabama Republican urges fertility clinics to reopen; UAB says it’s not so simple - AL.com",
      description:
        "Democratic and Republican lawmakers are considering legislation that would protect in vitro fertilization.",
      url: "https://www.al.com/news/2024/02/alabama-republican-urges-fertility-clinics-to-reopen-uab-says-its-not-so-simple.html",
      urlToImage:
        "https://www.al.com/resizer/b3N6AgrS6M_AdTFPFzzHQ0Ojn9M=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/3FG5MRPRMZBM7BP3RDOJ5MILU4.JPG",
      publishedAt: "2024-02-26T00:37:00Z",
      content:
        "Alabamas Republican lawmakers are considering legislation to protect in vitro fertilization and their vision of the right to life following the Alabama Supreme Courts recent ruling that frozen embryo… [+4423 chars]",
    },
    {
      source: { id: null, name: "WPLG Local 10" },
      author: "Samiar Nefzi, Andrea Torres",
      title:
        "Measles outbreak: 2 more children infected; case list increases to 8 in Broward - WPLG Local 10",
      description:
        "Two children are the newest measles patients on Sunday in Broward County. The spread of the highly contagious airborne virus increased the total cases from six to eight in Broward.",
      url: "https://www.local10.com/news/local/2024/02/26/measles-outbreak-cases-of-2-more-children-increase-infections-to-8-in-broward/",
      urlToImage:
        "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/02-26-2024/t_76a51d9289174e589ae843580bf1defd_name_image.jpg?_a=ATAPphC0",
      publishedAt: "2024-02-26T00:34:37Z",
      content:
        "WESTON, Fla. Two children are the newest measles patients on Sunday in Broward County. The spread of the highly contagious airborne virus increased the total cases from six to eight in Broward.\r\nAcco… [+1749 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "The crowded race back to the moon | February 26, 2024 - CNN 10",
      description:
        "Today on CNN 10, we highlight the Odysseus lunar lander, which became the first US-made spacecraft to land on the moon in 50 years! We explain what’s next in...",
      url: "https://www.youtube.com/watch?v=h26usciZl6o",
      urlToImage: "https://i.ytimg.com/vi/h26usciZl6o/maxresdefault.jpg",
      publishedAt: "2024-02-26T00:00:23Z",
      content: null,
    },
    {
      source: { id: null, name: "BBC News" },
      author: null,
      title:
        "Ryanair warns of higher fares in summer due to lack of planes - BBC.com",
      description:
        "The airline's boss, Michael O'Leary, said prices could rise by 10% this summer due to capacity constraints.",
      url: "https://www.bbc.com/news/business-68398421",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7425/production/_132733792_gettyimages-1963642000.jpg",
      publishedAt: "2024-02-26T00:00:18Z",
      content:
        "By Katy AustinTransport correspondent\r\nThe boss of Ryanair has said holidaymakers will face higher fares this summer due to new Boeing planes arriving late.\r\nChief executive Michael O'Leary said the … [+2980 chars]",
    },
  ];
  constructor() {
    super();
    // console.log("Hello this is a constrcutor");
    this.state = {
      articles: this.articles,
      laoding:false
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Nuggets - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="Title 1" description="Lorem epsum" imageUrl="https://www.hollywoodreporter.com/wp-content/uploads/2024/02/MCDOPPE_UV016-copy.jpg?w=1024"/>
          </div>
          <div className="col-md-4">
          <NewsItem title="Title 1" description="Lorem epsum" />
          </div>
          <div className="col-md-4">
          <NewsItem title="Title 1" description="Lorem epsum" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
