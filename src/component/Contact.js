import React from 'react'

function Contact() {
  return (
    <div className='about'>
      <div className="flex items-center ">
        <div className="container mx-auto">
          <div className="mx-auto p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold ">
                Contact Us
              </h1>
              <p>
                Fill up the form below to send us a message.
              </p>
            </div>
            <div className="text-center d-flex justify-content-center">
              <form className="form">

                <div>
                  <label htmlFor="name" className="text-sm ">Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required className="" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm ">Email Address</label>
                  <input type="email" name="email" placeholder="you@company.com" required className="" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm ">Phone Number</label>
                  <input type="text" name="phone" placeholder="+1 (555) 1234-567"  required className="" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm">Your Message</label>

                  <textarea rows="4" name="message" placeholder="Your Message" style={{width:"188px"}} required></textarea>
                </div>
                <div className="justify-content-center">
                  <button type="submit" className="btn btn-warning">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact