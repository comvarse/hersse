import { Inter } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import VSpace48 from "@/components/VSpace48";
import Subheader from "@/components/Subheader";
import OnlyText from "@/components/OnlyText";
import ContactFormOrb from "@/components/ContactFormOrb";
import Updates from "@/components/Updates";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import HorizontalDisplays from "@/components/HorizontalDisplays";
import Guide from "@/components/Guide";
import VerticalSpace from "@/components/VerticalSpace";
import ClientResult from "@/components/ClientResult";
import OraStory from "@/components/OraStory";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const txt = "We help companies manage web presence costs, transform operations, embrace the latest web-digital technologies, and seize new market opportunities. In fruitful client engagements, we have supported companies across various subsectors, from retail, delivery, and startups to outsourcers, systems integrators, hardware equipment companies, and more.";
    const tx2 = "Our seamless network of experts help provide invaluable insights into every complex web presence problems demanding solutions. These can be cloud technology integrations, mobile devices technologies and Internet of Things. To stay competitive, we help you to build robust web capabilities and continue perfecting traditional offerings like application development and maintenance.";

    const heroJson = [
        {
            category: "Blockchain",
            topTitle: "Global Private Equity Report 2024",
            description: "Inspiring, award winning design meets modern, mobile-first service.",
            img: `bg-[url("/img/aihand.webp")]`,
            location: 'Down Town Dubai',
            property: 'The Winchester'
        },
        {
            category: "Web Development",
            topTitle: "Reality Check on Energy and Natural",
            description: "Inspiring, award winning design meets modern, mobile-first service.",
            img: `bg-[url("/img/landscape.jpg")]`,
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

            <Hero
                category={"Software Design & Development"}
                topTitle={"Outsourcing & Consulting"}
                description={"We bring an agile, results-focused approach shaped by our deep expertise across all relevant capabilities."}
                img={`bg-[url("/img/aihand.webp")]`}
                location={"Blockchain"}
                property={"Artificial Intelligence"}
            />

            <VSpace48 />
            <OraStory />

            <VSpace48 />
            <VSpace48 />
            <InfoCard />
            <VSpace48 />
            <VSpace48 />
            <VSpace48 />

            <Subheader title="Our Sustainability Partnerships" />
            <VSpace48 />

            <OnlyText txt={txt} />



            <VSpace48 />
            <VSpace48 />
            <VSpace48 />
            <Subheader title="Our Approach" />

            <VSpace48 />

            <HorizontalDisplays />


            <VSpace48 />
            <VSpace48 />
            <VSpace48 />
            <Subheader title="Our Experience" />
            <VSpace48 />

            <OnlyText txt={"In an era where the world swiftly embraces the digital landscape, the expectations for IT service firms soar higher than ever before. Our assistance aims to propel your business forward, enhance your capacities, and ensure you remain at the forefront of technological evolution."} />

            <VSpace48 />
            <VSpace48 />
            <VSpace48 />

            <Guide />

            <VSpace48 />
            <VSpace48 />
            <VSpace48 />


            <Subheader title="Expertise" />
            <VSpace48 />
            <ClientResult />


            <ContactFormOrb />

            <VSpace48 />
            <VSpace48 />

            <Subheader title="Analytics and AI" />
            <VSpace48 />

            <Updates />
            <VSpace48 />
            <VSpace48 />

            <Footer />

        </main>
    );
}
