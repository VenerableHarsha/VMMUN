import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutUsBg from './utilities/Background.svg'; 
import vini from './utilities/vinimaya.svg';
import rot from './utilities/MediKardiafinallogo.svg';
import roxky from './utilities/AmsaLogo.png';

function AboutUs() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  
  return (
    <div ref={ref} className="h-[1700px] sm:h-[200vh] text-white flex flex-col" style={{ backgroundColor:"#8f3b9d", color:"white", backgroundImage: `url(${AboutUsBg})`, backgroundSize: 'cover' }}>
      <motion.div 
        className="text-black font-bold flex justify-center text-2xl mt-10 sm:3xl"
        style={{ fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        About us
      </motion.div>
      
      <div className='flex gap-12 justify-center flex-wrap mt-14'>
        <motion.div 
          className='sm:w-5/12 sm:h-[625px] rounded-3xl w-[280px] h-[600px] bc'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className='flex justify-center mt-4'>
            <motion.img 
              src={rot} 
              className='w-14 sm:w-14'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 1 }}
            />
          </div>
          <motion.div 
            className='sm:text-md text-black mt-4 mx-6 para'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
The Rotaract Club of MediKardia is a dynamic force in the realm of Rotaract and healthcare, fueled by 162 passionate medical students dedicated to service and excellence. Through a series of medico-exclusive health-related events, the club brings vital healthcare services and information to communities in need. From organizing PHC lead surveys to conducting blood donation drives and health awareness campaigns, the club leaves an indelible mark on society and its very own district, Rotaract 3191. With each event, the Rotaract Club of Medikardia reaffirms its commitment to enhancing healthcare access and promoting wellness, embodying the spirit of compassionate leadership in the medical field. Project Swasthya Stree Swasthya Shishu was the award winning event carried out by Medikardia in the primary health care centres of a small town north of Bangalore, Avati. The motto ‘Service over Self’ is striven for in ways unimaginable          </motion.div>
        </motion.div>
        
        <motion.div 
          className='sm:w-5/12 sm:h-[625px] bg-pink-300 rounded-3xl w-[280px] h-[470px] bc'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className='flex justify-center mt-4'>
            <motion.img 
              src={vini} 
              className='w-24 sm:w-32'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 1 }}
            />
          </div>
          <motion.div 
            className='sm:text-md text-black mt-4 mx-6 para'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
 We, at Vinimaya, were known as just the literature club of University of Visvesvaraya College of Engineering, UVCE for a long time. Evolving in countless aspects since and Vinimaya now encompasses a much larger diaspora deemed to be the Pop Culture Club of UVCE, while staying true to our roots. We have organised numerous intra college fests such as Escapade (the first edition of a 120 student escape room event), Smart Charades (a spicy twist on the classic Dumb Charades) and YES OFFENCE
We also cater to the Literature enthusiasts of UVCE by conducting Literature & Lattes.

It would be criminal to restrict such a budding club small but talented population of UVCE. Hence, in collaboration with Medikardia, we present to you the first edition of MVMUN, in our campus!          </motion.div>
        </motion.div>
      </div> 

      <div className='w-[100%] flex justify-center mt-12'>
        <motion.div 
          className='sm:w-5/12 sm:h-[450px] bg-pink-300 bc rounded-3xl flex flex-col w-[280px] h-[380px]'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className='flex justify-center mt-4'>
            <motion.img 
              src={roxky} 
              className='w-20 sm:w-20' 
              alt='AMSA'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ ease: "easeOut", duration: 1 }}
            />
          </div>
          <motion.div 
            className='sm:text-md text-black mt-5 mb-5 mx-6 para'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
 As the AMSA India Bioethics Unit, we have been at the forefront of efforts to enhance the social literacy of medical students, organizing workshops nationwide to educate and inform students from “the pillars of bioethics” to much more complex nuanced explorations of social justice and literacy.
In addition to workshops, we have pioneered an array of novel events focusing on bioethics and social justice within the medical fraternity. 
Looking ahead, AMSA India Bioethics Unit aspires to be the vanguard of the bioethics movement in India.          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
