import React from 'react'
import './mainnav.css'
import drop from  '../assets/images/menu-icon.svg'
import logo1 from '../assets/images/header-logo-1.svg'
import shoping from "../assets/images/shopping-icon.svg"
import user from "../assets/images/user.svg"
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
function Mainnav() {
  return (
    <>
        {/* <div className='container bar'>
        <div>
  <button className="openbtn" onClick={openNav}>☰</button>  
  </div>
  <div className='logo'>
  </div>
  <div>
  <div className='containeroflog'>
    <div className='bori'>
    <i class="fa-solid fa-user"></i>
    </div>

  <div>
  <i class="fa-solid fa-cart-shopping"></i>
    </div>
  </div>
  </div>
        </div>




        sidebar
<div id="mySidebar" className="sidebar">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
 */}


<section id="teck-nav-menu" class="tec-nav-menu">

<div class="container">

    <div class="row">

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3   main-menu">



             

           

              <button class="btn tatsu-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample">

                <img src={drop} class="img-fluid" alt="" />

              </button>

              

              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample1" aria-labelledby="offcanvasExampleLabel">

                <div class="offcanvas-header">

                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                </div>

                <div class="offcanvas-body slide-menu">

                 <ul>

                    <li><a href="index.html">Home</a></li>

                    <li><a href="about-us.html">About Us</a></li>

                    <li><a href="collection.html">Collection</a></li>

                    <li><a href="subscriptions.html">Subscriptions</a></li>

                    <li><a href="contact-us.html">Contact Us</a></li>

                 </ul>

                </div>

              </div>



        </div>


        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6  teck-main-logo">

            

            <img src={logo1} class="teck-logo" alt="" />



        </div>



         <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3  main-menu-icon">

              <div class="social-icon">

              

              

           

            

                <a href="#"> <span class="user-icon"> <img src={user} class="shopping-icon-icon user img-fluid" alt="" /> </span> </a>

               <a href="#"> <span> <img src={shoping} class=" img-fluid" alt="" /> </span> </a>

              </div>

        </div>

   </div>

</div>

</section>


<section id="teck-banner" class="teck-banner" >

<div class="container">

   <div class="row">

       <div class="col-xl-8 teck-banner-contant">

           <h3>Do Well, Live Well & <br></br>

               Dress Really Well</h3>

               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien,

                   <br></br> mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>

                   <a class="teck-banner-btn" href="collection.html" role="button">SHOP NOW!</a>

       </div>



       <div class="col-xl-4 teck-banner-img"> 

           <img src="assets/images/banner-img.png" class="banner-img img-fluid" alt="" />

       </div>

        

   </div>

</div>

</section>

    </>
  )
}

export default Mainnav