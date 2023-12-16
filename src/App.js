import logo from './logo.svg';
import bLogo from './bootstrap-solid.jpg'
import './App.css';

function App() {
  return (
    <div>

      <header className='shadow-sm'>
        <div className="container-fluid py-3 d-flex justify-content-between">
            <a href="#" className='titleSite'>Company Name</a>
            <ul className='nav d-flex justify-content-between'>
              <li className='navList px-3 py-1'><a href="#" className='navItem'>Features</a></li>
              <li className='navList px-3 py-1'><a href="#" className='navItem'>Enterprise</a></li>
              <li className='navList px-3 py-1'><a href="#" className='navItem'></a>Support</li>
              <li className='navList px-3 py-1'><a href="#" className='navItem'></a>Pricing</li>
              <li className='navList px-3 py-0'><a href="#" className='btn btn-outline-primary'>Sign Up</a></li>
            </ul>
        </div>
      </header>

      <section id="homeSection" className='py-5'>
        <div className="container-fluid">

          <div className="pricing-header text-center p-3 mt-md-5 mb-md-4 mx-auto">
             <h1>
                  Pricing
              </h1>
              <p className='text-center'>
                Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
              </p>
          </div>

          <div className="container">

            <div className="row mb-5 text-center">
              <div className="col-sm-12 col-md-6 col-lg-3 mx-4 border">
                <div className="pricingCards box-shadow">
                    <h4 className='my-0 font-weight-normal py-2'>Free</h4>
                    <hr />
                    <h1>$0 <small className='text-muted'>/ mo</small></h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type='button' className='btn btn-lg btn-block btn-outline-primary'>Sign up for free</button>
                </div>

                
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 mx-4 border">
                <div className="pricingCards box-shadow">
                    <h4 className='my-0 font-weight-normal py-2'>Pro</h4>
                    <hr />
                    <h1>$15 <small className='text-muted'>/ mo</small></h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type='button' className='btn btn-lg btn-block btn-primary'>Get Started</button>
                </div>      
              </div>

              <div className="col-sm-12 col-md-6 col-lg-3 mx-4 border">
                <div className="pricingCards box-shadow">
                    <h4 className='my-0 font-weight-normal py-2'>Enterprise</h4>
                    <hr />
                    <h1>$29 <small className='text-muted'>/ mo</small></h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type='button' className='btn btn-lg btn-block btn-primary mb-3'>Contact Us</button>
                </div>             
              </div>
              
            </div>

     

          </div>
              
        </div>
      </section>

     
      <section id='footer' className='pt-4 my-md-5'>
        <div className="container  ">
           <div className="row pt-md-5  border-top">
              <div className="col-3 col-md">
                  <img src={bLogo} alt=""  className='mb-2' width={24} height={24}/>
                  <small className="d-block mb-3 text-muted">© 2017-2018</small>
              </div>
              <div className="col-3 col-md">
                  <h5>Features</h5>
                  <ul className='list-unstyled text-small'>
                    <li className='text-muted'><a href="#">Cool stuff</a></li>
                    <li className='text-muted'><a href="#">Random feature</a></li>
                    <li className='text-muted'><a href="#">Team feature</a></li>
                    <li className='text-muted'><a href="#">Stuff for developers</a></li>
                    <li className='text-muted'><a href="#">Another one</a></li>
                    <li className='text-muted'><a href="#">Last time</a></li>
                  </ul>
              </div>
              <div className="col-3 col-md">
                  <h5>Resources</h5>
                  <ul className='list-unstyled text-small'>
                    <li className='text-muted'><a href="#">Resource</a></li>
                    <li className='text-muted'><a href="#">Resource name</a></li>
                    <li className='text-muted'><a href="#">Another resource</a></li>
                    <li className='text-muted'><a href="#">Final resource</a></li>
                  </ul>
              </div>
              <div className="col-3 col-md">
                 <h5>About</h5>
                  <ul className='list-unstyled text-small'>
                    <li className='text-muted'><a href="#">Team</a></li>
                    <li className='text-muted'><a href="#">Location</a></li>
                    <li className='text-muted'><a href="#">Privacy</a></li>
                    <li className='text-muted'><a href="#">Terms</a></li>
                  </ul>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

export default App;
