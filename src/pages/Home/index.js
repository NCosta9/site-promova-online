import ProAbout from "../../components/Abouts/ProAbout";
import ProFaq from "../../components/Accordion/ProFaq";
import CarouselCanais from "../../components/Carousel/CarouselCanais";
import Competencias from "../../components/Competencias";
import ProContact from "../../components/Contacts/ProContact";
import ProCta from "../../components/Cta/ProCta";
import ProFeatures from "../../components/Features/ProFeatures";
import ProFooter from "../../components/Footer/ProFooter";
import ProHeader from "../../components/Header/ProHeader";
import ProHero from "../../components/Heros/ProHero";
import ProPrincing from "../../components/Princings/ProPricing";
import ProServices from "../../components/Services/ProServices";
import './stylepromova.css'
export default function Promova() {
    return(
        <>
          <main id="main">
            <ProHero/>
            <ProAbout/>
            <ProServices/>
            <ProCta/>
            <ProFeatures/>
            <Competencias/>
            <CarouselCanais/>
            <ProPrincing/>
            <ProFaq/>
            <ProContact/>
            <ProFooter/>
            
          </main>
        
        </>
    )
}