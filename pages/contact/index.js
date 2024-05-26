import { Inter } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import IntroText from "@/components/IntroText";
import Subheader from "@/components/Subheader";
import VerticalSpace from "@/components/VerticalSpace";
import SpaceBar from "@/components/SpaceBar";
import HorizontalDisplays from "@/components/HorizontalDisplays";
import OnlyText from "@/components/OnlyText";
import Guide from "@/components/Guide";
import VSpace48 from "@/components/VSpace48";
import ClientResult from "@/components/ClientResult";
import ContactFormOrb from "@/components/ContactFormOrb";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import Updates from "@/components/Updates";
import ContactComp from "@/components/ContactComp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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

    const txt = "Thanks for your interest. Do you have a proposal you wish to discuss with us? Send us an email to discover how we can help. Explore our services and industry expertise. Need something else? Send us an email for more ways to work with us and  how we can help.";

    return (
        <main>
            <Header />
            <Hero
                category={""}
                topTitle={"Engage with us."}
                description={"Thanks for your interest. Got an idea, tell us how can we help?"}
                img={`bg-[url("/img/aihand.webp")]`}
                location={"Blockchain"}
                property={"Artificial Intelligence"}
            />


            <VSpace48 />



            <Subheader title="Do you have a proposal?" />
            <VSpace48 />

            <OnlyText txt={txt} />

            <VerticalSpace />
            <VerticalSpace />

            <ContactComp />
            <VSpace48 />
            <VSpace48 />

            <div id="talktous"></div>
            <Subheader title="Talk to us" />
            <VSpace48 />
            <VSpace48 />

            <ContactFormOrb />

            <VSpace48 />
            <VSpace48 />

            <Subheader title="Our Sustainability Experience" />
            <VSpace48 />

            <Updates />
            <VSpace48 />
            <VSpace48 />

            <Footer />
        </main>
    );
}
