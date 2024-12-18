import React, { createContext, useContext } from 'react';
// service image 
import img1 from '../icons/html.svg'
import img2 from '../icons/css.svg'
import img3 from '../icons/figma.svg'
import img4 from '../icons/javascript.svg'
import img5 from '../icons/react.svg'
import img6 from '../icons/css_framework.svg'


// service image 
import portimg2 from '../assets/project2.jpg'
import portimg3 from '../assets/project3.jpg'
import portimg4 from '../assets/project4.jpg'
import portimg5 from '../assets/project5.jpg'








export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const serviceData = {
    items: [
      { 
        id: 1, 
        img:img1,
        name: 'HTML', 
        description: 'HTML-5/ React Js / Redux / Redux Toolkit' 
      },
      { 
        id: 2, 
        img:img2,
        name: 'CSS', 
        description: 'SASS / LESS / Tailwind' 
      },
      { 
        id: 3, 
        img:img3,
        name: 'UI/UX', 
        description: 'Figma / XD' 
      },
      { 
        id: 4, 
        img:img4,
        name: 'Javascript', 
        description: 'Javascript / JQuery / GSAP' 
      },
      { 
        id: 5, 
        img:img5,
        name: 'Javascript Framework ', 
        description: 'React Js / Redux / Redux Toolkit' 
      },
      { 
        id: 6, 
        img:img6,
        name: 'CSS Framework ', 
        description: 'Bootstrap / MUI / ANT / Design' 
      },
    ],
  };

  const portfoliodata=[
    {
      id:1,
      url:"https://i.ibb.co/tX95m9C/Screenshot-2.png",    
      img:portimg2, 
      projectUrladdress:'react.greatbritishtalent.com',     
      projectDesc: "British Speakers, Presenters and Voices are always in demand for a galaxy of events and videos around the globe.",
      category:"React js",
    },
    {
      id:2,
      url:"https://www.behance.net/embed/project/186766335?ilo0=1",
      img:portimg3,
      projectUrladdress:'www.fowigs.net',     
      projectDesc: 'The future isn’t here yet, and it is the task of the Global South to imagine and build a future that it wants. ',
      name:"Fowigs",  
      category:"React js",
    },
    {
      id:3,
      url:"https://www.behance.net/embed/project/186765795?ilo0=1",
      img:portimg4,
      projectUrladdress:'www.competitionkingdom.co.uk ',     
      projectDesc: 'At Competition Kingdom, our ambition is audacious—to emerge as the preeminent online competition platform globally. ',
      name:"Competition Kingdom",
      category:"React js",
    },
    {
      id:4,
      url:"https://www.behance.net/embed/project/178380453?ilo0=1",
      img:portimg5,
      projectUrladdress:'forex.stagingwebsite.space',     
      projectDesc: 'We arm you with the essential tools to make a profit. ',
      name:"Forex Toolbox Club",
      category:"React js",
    },
    {
      id:5,
      url:"https://i.ibb.co/fp3KZwz/Screenshot-3.png",
      img:portimg2,
      projectUrladdress:'www.adoptariceseed.com',     
      projectDesc: 'Each year we sow, grow and harvest 500 varieties of indigenous rice. ',
      name:"London Dairy",
      category:"React js",
    },
    {
      id:6,
      url:"https://i.ibb.co/GtDnJNw/Screenshot-4.png",
      img:portimg3,
      projectUrladdress:'www.globalcarbonstandard.org',     
      projectDesc: 'The world’s first standard and methodology for Carbon Debits is a great achievement in the fight against climate change. ',
      name:"The Global Carbon Standard",
      category:"React js",
    },
  ]
  const designingcontent=[
    {
      id:1,
      url:"https://www.behance.net/embed/project/211949783?ilo0=1",
      img:portimg2,
      name:"London Dairy",
      category:"React js",
    },
    {
      id:2,
      url:"https://www.behance.net/embed/project/186766335?ilo0=1",
      img:portimg3,
      name:"London Dairy",
      category:"React js",
    },
    {
      id:3,
      url:"https://www.behance.net/embed/project/186766335?ilo0=1",
      img:portimg4,
      name:"London Dairy",
      category:"React js",
    },
    {
      id:4,
      url:"https://www.behance.net/embed/project/186766335?ilo0=1",
      img:portimg5,
      name:"London Dairy",
      category:"React js",
    },
    {
      id:5,
      url:"https://www.behance.net/embed/project/186766335?ilo0=1",
      img:portimg2,
      name:"London Dairy",
      category:"React js",
    },
    {
      id:6,
      url:"https://www.behance.net/embed/project/186766335?ilo0=1",
      img:portimg3,
      name:"London Dairy",
      category:"React js",
    },
  ]


  console.log('Context provided:', serviceData); 

  return (
    <MyContext.Provider value={{serviceData,portfoliodata,designingcontent}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};
