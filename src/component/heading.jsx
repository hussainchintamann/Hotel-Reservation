import React from 'react'
import { Link } from 'react-router-dom'

  function Heading({heading,title,subtitle}) {
  return (
    <div>
      <div className="container-fluid page-header mb-5 p-0 bg-image">
        <div className="container-fluid page-header-inner py-5 ">
            <div className="container text-center pb-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                    {heading}
                </h1>

            </div>
            <nav>
                <ol className='breadcrumb justify-content-center text-uppercase'>
                    <li className='breadcrum-item'>
                        <Link to="/" >{title}</Link>
                    </li>
                    <li className='breadcrum-item text-white active'>
                        {subtitle}
                    </li>
                </ol>
            </nav>
        </div>

      </div>
    </div>
  )
}

export default Heading
