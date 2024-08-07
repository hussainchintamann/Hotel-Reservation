import { FaRegStar } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa6";
import { FaSwimmer } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export const carouseldata = [
  {
  img:'./src/blog1 (1).jpg',
  title:'Discover A Brand Luxurious Hotel',
  subtitle:'Luxury living',
  btn1:'Our Room',
  btn2:'Book Room',
},
{
  img:'./src/blog1 (1).jpg',
  title:'Discover A Brand Luxurious Hotel',
  subtitle:'Luxury living',
  btn1:'Our Room',
  btn2:'Book Room',
},

]

export const socialIcon =[
  {
   icon:<i className="text-white" style={{fontSize:'13px'}}><FaFacebook /></i>
  },
  {
    icon:<i  className="text-white" style={{fontSize:'13px'}}><FaWhatsapp /> </i>
   },
   {
    icon:<i  className="text-white" style={{fontSize:'13px'}}><FaLinkedin />
</i>
   },
   {
    icon:<i  className="text-white" style={{fontSize:'13px'}}><FaYoutube />
</i>
   },

]

export const roomItem = [
  {
    id: 1,
    img: "./src/room1.jpg",
    price: "$100/night",
    name: "junior suit",
    star: [
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magnam",
    yellowbtn: "View Detaile",
    darkbtn: "Book Now",
  },
  {
    id: 2,
    img: "./src/room2.jpg",
    price: "$300/night",
    name: "junior suit",
    star: [
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magnam",
    yellowbtn: "View Detaile",
    darkbtn: "Book Now",
  },

  {
    id: 3,
    img: "./src/room3.jpg",
    price: "$200/night",
    name: "junior suit",
    star: [
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
      <small className="text-warning">
        <FaRegStar />
      </small>,
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magnam",
    yellowbtn: "View Detaile",
    darkbtn: "Book Now",
  },
];

export const facilty = [
  {
    icon: (
      <i className="text-warning me-2">
        <FaBed />
      </i>
    ),
    quantity: "3",
    facility: "bed",
  },
  {
    icon: (
      <i className="text-warning me-2">
        <FaBath />
      </i>
    ),
    quantity: "2",
    facility: "bath",
  },
  {
    icon: (
      <i className="text-warning me-2">
        <FaWifi />
      </i>
    ),
    facility: "wifi",
  },
];


export const service = [
  {
    icon:<i className="text-warning fa-2x  "><FaHotel /></i>,
    name:'Room And Apartment',
    description:'Contrary to popular belief ipsum is not simply random',
  },
  {
    icon:<i className="text-warning fa-2x"><FaUtensils /></i>,
    name:'Food & Restaurant',
    description:'Contrary to popular belief ipsum is not simply random',
  },
  {
    icon:<i className="text-warning fa-2x"><FaSpa /></i>,
    name:'Spa & Fitness',
    description:'Contrary to popular belief ipsum is not simply random',
  },
  


  {
    icon:<i className="text-warning fa-2x"><FaSwimmer />
</i>,
    name:'Sports & Gaming',
    description:'Contrary to popular belief ipsum is not simply random',
  },
  {
    icon:<i className="text-warning fa-2x"><FaGlassCheers /></i>,
    name:'Event & Party',
    description:'Contrary to popular belief ipsum is not simply random',
  },
  {
    icon:<i className="text-warning fa-2x"><FaDumbbell /></i>,
    name:'gyn & Yoga',
    description:'Contrary to popular belief ipsum is not simply random',
  },
]
 export const testimonial= [
  {
    
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis .',
    name:'Client Name',
    profession:'Professions',
    icon: <i className="text-warning position-absolute end-0 bottom-0 me-4"><FaQuoteRight/></i>,
    img:'./src/profile3.jpg',
  },
  {
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis .',
    name:'Client Name',
    profession:'Professions',
    icon: <i className="text-warning position-absolute end-0 bottom-0 me-4"><FaQuoteRight/></i>,
    img:'./src/profile4.jpg',
  },
  {
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, corporis .',
    name:'Client Name',
    profession:'Professions',
    icon: <i className="text-warning position-absolute end-0 bottom-0 me-4"><FaQuoteRight/></i>,
    img:'./src/profile5.jpg',
  },
 ]

 export const team = [
  {
    img:'./src/profile2.jpg',
    name:'Full Name',
    designation :'Designation',
    icon:'',
    
  },
  {
    img:'./src/profile5.jpg',
    name:'Full Name',
    designation :'Designation',
    icon:'',
  },
  {
    img:'../src/profile2.jpg',
    name:'Full Name',
    designation :'Designation',
    icon:'',
  },
  {
    img:'./src/profile4.jpg',
    name:'Full Name',
    designation :'Designation',
    icon:'',
  },
 ]