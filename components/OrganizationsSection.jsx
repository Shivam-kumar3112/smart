import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  },
};

const OrganizationsSection = () => {
  const router = useRouter();
  
  return (
    <motion.div 
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.4 }} 
      className="container mx-auto flex flex-col max-w-[1250px] md:flex-row-reverse items-center rounded-md px-4 py-4"
      variants={cardVariants}
    >
   
      <div className="w-full md:w-1/2 flex items-center">
        <motion.img
          loading="lazy"
          src="/images/home/Organisation-Banner.png"
          className="w-full rounded-md h-full lg:px-16 object-cover"
          alt="Organization Banner"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-slate-800 px-4 py-4">
        <h2 className="text-3xl md:text-4xl font-spline font-medium my-4 leading-tight">
          AI-Powered Hiring for <br /> Organizations
        </h2>
        <img
          loading="lazy"
          src="/images/home/HomeLine.png"
          className="mt-1.5 max-w-full aspect-[14.29] w-[307px]"
        />
          <div className="mt-8 space-y-4 text-left lg:text-left">
          <div className="flex items-center gap-2 lg:justify-start">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Efficient Screening</span>
          </div>
          <p className="font-light">Quickly identify the best candidates with AI-driven insights.</p>
          <div className="flex items-center gap-2 mt-4  lg:justify-start">
            <img
              loading="lazy"
              src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">Customizable Interviews</span>
          </div>
          <p className="font-light">Tailor interview questions to fit your company’s needs.</p>
          <div className="flex items-center gap-2 mt-4 lg:justify-start">
            <img
              loading="lazy"
               src="/images/home/rounded-tick-icon.png"
              className="w-6 h-6"
              alt="Tick Icon"
            />
            <span className="font-medium">In-depth Analytics</span>
          </div>
          <p className="font-light">Make informed hiring decisions with comprehensive reporting.</p>
        </div>
        {/* Content including ticks and texts */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="flex items-center cursor-pointer justify-center self-start w-max px-4 py-2 mt-9 text-sm text-white bg-sky-500 rounded-md border border-sky-500 transition-transform duration-300 whitespace-nowrap"
          onClick={() => router.push('/signUp', { query: { activeTab: 'organization' } })}
        >
          <span>Optimize Your Hiring Process</span>
          <FaArrowRight className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OrganizationsSection;
