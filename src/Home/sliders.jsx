import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from '../component/Data/data';
import Slider from 'react-slick'
export function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
  return (
    <div>
      <div className="container-xxl testimonial my-5 py-5">
        <div className="container ">
            <div className="owl-carousel testimonial-carousel py-5">
             <Slider {...settings} >
               
                {
                    testimonial.map((el)=>(
                       
                        <div className='testimonial-item position-relative rounded bg-white overflow-hidden '>
                             {/* <img src={el.img1}alt="" /> */}
                            <p>{el.description}</p>
                            <div className='d-flex align-items-center'>
                                <img className='img-fluid flex-shrink-0 rounded' src={el.img} style={{width:'45px', height:'45px'}} alt="" />
                                <div className='ps-3 testimonial-set'>
                                <h6 className='fw-bold '>{el.name}</h6>
                                <small style={{position:'relative',bottom:'30px'}}>{el.profession}</small>
                                <small style={{fontSize:'40px'}}>{el.icon}</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
             </Slider>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sliders
