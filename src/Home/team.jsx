import React from 'react'
import { team } from '../component/Data/data'

function Team() {
  return (
    <div>
      <div className="container-xxl py-3">
        <div className="container">
            <div className="row g-4">
                {
                    team.map((el)=>(
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className='h-100 w-100 img-fluid' src={el.img} alt="" />
                                    <div>
                                        
                                    </div>
                                </div>
                               
                                <div className="p-4 mt-2">
                                    <div style={{textAlign:'center'}} >
                                        <h5>{el.name}</h5>
                                        <p>{el.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
