import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion';
//variant
import {fadeIn} from '../variants';
const About = () => {
  const [ref,InView] = useInView({
    threshold:0.5,
  })
  return <section
  id='about' 
  className='section'
  ref={ref}
  >
    <div className='container.mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/*img*/}
        <motion.div
        variants={fadeIn('right',0.3)}
        initial={hidden}
        whileInView={"show"}
        viewport={{once: false, amount:0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bt-top'
        >
          img
        </motion.div>
         {/*text*/}
         <motion.div 
         variants={fadeIn('left',0.5)}
         initial={hidden}
         whileInView={'show'}
         viewport={{once: false, amount:0.3}}
         className='flex-1'>
          <h2 className='h2 text-accent'>
            About us.
          </h2>
          <h3 className='h3 tmb-4'>
            We are a Digital Marketing company.
          </h3>
          <p className='mb-6'>text</p>
          {/*stats*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
              InView?  
              <CountUp 
              start={0} 
              end={1}
              duration={3}
              />:null
              }
            </div>
            <div className='font-primary text-sm tracking-[2px] '>Number of satisfied <br/>clients</div>
            </div>
            <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {
              InView?  
              <CountUp 
              start={0} 
              end={10}
              duration={3}
              />:null
              }
            </div>
            <div className='font-primary text-sm tracking-[2px] '>Number of succesfull <br/>projects</div>
            </div>
          </div>
          <div classname='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact Us</button>
            <a href="#" className='text-gradient btn-link'>
              Our projects
            </a>
          </div>
         </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
