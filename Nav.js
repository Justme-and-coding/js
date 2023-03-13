import React from 'react';
//import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BiHomeAlt, BsBriefcase, BsChatSquare} from 'react-icons/bs';
//link
import {} from 'react-scroll';
const Nav = () => {
  return(
    <nav class='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
  <div class="container mx-auto">
    {/*nav inner*/}
    <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50'>
      <link 
      to='home'
      activeClass='active' 
      smooth={true}
      spy={true}
      offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-cemter justify-center'>
      <BiHomeAlt/>
      </link>
      <link 
      to='about'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-cemter justify-center'>
      <BiUser/>
      </link>
      <link 
      to='services' 
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-cemter justify-center'>
      <BsClipboardData/>
      </link>
      <link
      to='work'
      activeClass='active' 
      smooth={true}
      spy={true}
      offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-cemter justify-center'>
      <BsBriefcase/>
      </link>
      <link 
      to='contact'
      activeClass='active'
      smooth={true}
      spy={true}
      offset={-200}
      className='cursor-pointer w-[60px] h-[60px] flex items-cemter justify-center'>
      <BsChatSquareText/>
      </link>
    </div>
  </div>
  </nav>;
  ) 
};

export default Nav;
