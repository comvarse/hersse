import { Inter } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import VSpace48 from "@/components/VSpace48";
import InfoCard from "@/components/InfoCard";
import Subheader from "@/components/Subheader";
import OnlyText from "@/components/OnlyText";
import HorizontalDisplays from "@/components/HorizontalDisplays";
import Guide from "@/components/Guide";
import VerticalSpace from "@/components/VerticalSpace";
import ClientResult from "@/components/ClientResult";
import ContactFormOrb from "@/components/ContactFormOrb";
import Updates from "@/components/Updates";
import LargeStory from "@/components/LargeStory"
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const txt = "We help companies manage web presence costs, transform operations, embrace the latest web-digital technologies, and seize new market opportunities. In fruitful client engagements, we have supported companies across various subsectors, from retail, delivery, and startups to outsourcers, systems integrators, hardware equipment companies, and more.";

  const heroJson = [
    {
      category: "Machine Learning and AI",
      topTitle: "Maximize Artificial Intelligence Potentials",
      description: "The artificial intelligence revolution is transforming business, government and society",
      img: `bg-[url("/img/aihand.webp")]`,
      location: '',
      property: ''
    },
    {
      category: "CBDC, Finance & Smart Contracts",
      topTitle: "Central Bank Digital Currency",
      description: "Smart Contracts Power CBDC Transactions.",
      img: `bg-[url("/img/cbdc.jpg")]`,
      location: 'West London',
      property: 'Dorchester Valley'
    },
    {
      category: "Latest Crypto",
      topTitle: "Lorem Ipsum is simply dummy text of",
      description: "Inspiring, award winning design meets modern, mobile-first service.",
      img: `bg-[url("/img/process.jpg")]`,
      location: 'New York',
      property: 'Times Square'
    },
    {
      category: "Dine With Micro",
      topTitle: "Inspiring, award winning design",
      description: "Inspiring, award winning design meets modern, mobile-first service.",
      img: `bg-[url("/img/blockchain.jpg")]`,
      location: 'New York',
      property: 'Times Square'
    },

  ]
  return (
    <main>
      <Header />
      <Carousel
        className="shadow-2xl"
        showArrows={true} transitionTime={1500} autoPlay={true} interval={12000} infiniteLoop={true} showThumbs={false}>
        {
          heroJson.map(item => (
            <Hero
              key={item.location}
              category={item.category}
              topTitle={item.topTitle}
              description={item.description}
              img={item.img}
              location={item.location}
              property={item.property}
            />
          ))
        }
      </Carousel>

      <VSpace48 />
      <InfoCard />
      <VSpace48 />
      <VSpace48 />



      <Subheader title="Our Approach" />

      <VSpace48 />

      <HorizontalDisplays />


      <VSpace48 />
      <VSpace48 />
      <LargeStory />


      <VSpace48 />
      <VSpace48 />

      <Subheader title="Our Partnerships" />
      <VSpace48 />

      <OnlyText txt={txt} />

      <VSpace48 />
      <VSpace48 />

      <Guide />

      <VSpace48 />
      <VSpace48 />
      <VSpace48 />
      <Subheader title="Our Experience" />

      <VSpace48 />

      <ClientResult />

      <VSpace48 />

      <ContactFormOrb />

      <VSpace48 />
      <VSpace48 />
      <VSpace48 />

      <Subheader title="Industry Experience" />
      <VSpace48 />

      <Updates />
      <VSpace48 />
      <VSpace48 />

      <Footer />

    </main>
  );
}
