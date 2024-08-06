import React from 'react'
import Slider from 'react-slick';
import { carouseldata } from '../component/Data/data';

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
        <div className="container-fluid p-0 mb-5">
            <div className="carousel slide">
                <div className="carousel-inner">
                    <Slider {...settings} >
                    {
                        carouseldata.map((el,index)=>(
                            <div className="carousel-item" key={index}>
                                <img className='w-100' style={{height:'590px'}} src={el.img} alt="" />
                                <div className='carousel-caption d-flex flex-column align-items-center justify-content-center'>
                                    <div className='p-3' style={{maxWidth:'700px'}}>
                                        <h6  className='section-title text-white text-uppercase mb-3 animated slideInDown' >{el.subtitle}</h6>
                                        <h1 className='text-white display-3  mb-3 animated slideInDown'  >{el.title}</h1>
                                        <a href="" className="btn btn-warning py-md-3 px-md-5 animated slideInleft ">{el.btn1}</a>
                                        <a href="" className="btn btn-warning py-md-3 px-md-5 animated slideInleft">{el.btn2}</a>
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

export default Carousel
