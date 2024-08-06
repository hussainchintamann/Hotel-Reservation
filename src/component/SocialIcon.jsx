import React from 'react'
import { Link } from 'react-router-dom'
import { socialIcon } from './Data/data'

function SocialIcon() {
  return (
    <div>
      <div className="col-lg-3 px-5">
        <div>
            {
                socialIcon.map((el,index)=>(
                    <div
                    className='d-inline-flex align-item-center '
                     key={index.id}>
                        <Link className='me-3'>{el.icon}</Link>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default SocialIcon
