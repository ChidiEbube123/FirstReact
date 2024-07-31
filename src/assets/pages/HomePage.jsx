
import React from 'react'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import AboutSection from '../components/AboutSection'
import ProfessionalSection from '../components/ProfessionalSection'
import ServicesSection from '../components/ServicesSection'
import ClientReviewSection from '../components/ClientReviewSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

const HomePage = () => {
  return (
    <>
 <HeroSection/>
<Features/>
<AboutSection imagename={"about-img.jpg"}/>
<ProfessionalSection imagename={"professional-img.png"}/>
<ServicesSection/>
<ClientReviewSection/>
<ContactSection/>
 <FooterSection/>


  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  <script src="js/custom.js"></script>
  {/*<!-- Google Map -->*/}
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>
  {/*<!-- End Google Map -->*/}
    </>
  )
}

export default HomePage