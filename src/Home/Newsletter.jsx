import React from 'react'

function Newsletter() {
  return (
    <div>
        <div className="container news-letter mt-5 wow fadIn"  data-wow-delay='0.1s'>
           <div className="row justify-content-center ">
            <div className="col-lg-10 border rounded p-1 shadow">
                <div className="bg-white rounded text-center p-5">
                    <h4 className='mb-4'>
                        Subcribe Our
                    
                    <span className="text-warning text-uppercase">
                        Newsletter
                    </span>
                    </h4>
                    <div className="position-relative mx-auto border-light  " style={{maxWidth:'400px'}}>
                        <input type="text" className='form-control border-warning w-100 py-3 ps-4 pe-5' placeholder='Enter Your Email' />
                        <button type='button' className='btn  btn-warning py-2 px-3 position-absolute top-0 end-0 mt-2 me-2'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default Newsletter
