import React from 'react'
import Navbar from './Navbar'
import './home.css'
import cardimg from'./assets/images/shirt-3.png'
import Mainnav from './Mainnav'
import '../css/styles.css'
import '../css/styles. singup.css'
import '../css/responsive.css'
import next from '../assets/images/next-icon.png'
import previous from '../assets/images/prevew-icon.png'
import boxer from '../assets/images/boxers-img.png'
import inchtap from '../assets/images/siora-img.png'
import guy from '../assets/images/jusdevoyage-img.png'
import popimg from '../assets/images/Group-img.png'
import girlimg from '../assets/images/member-1.png'
import topa from '../assets/images/member-2.jpg'
import tato from '../assets/images/member-3.jpg'
import tshirt from "../assets/images/shirt-2.png"
import capd from "../assets/images/home-hat.png"
import hoodie from "../assets/images/home-hoodies.png"
import Jogger from "../assets/images/home-tshirt.png"
import short from "../assets/images/home-shorts.png"
import $ from 'jquery'


function Home() {


      // Testimonials

      $(document).ready(function(){

        $('.carousel-inner').slick({

          dots: true,

          infinite: true,

          speed: 800,

          autoplay: true,

          autoplaySpeed: 2000,

          slidesToShow: 3,

          slidesToScroll: 1,

          prevArrow: $('.slick-prev'),

    nextArrow: $('.slick-next')

        });

      });









   

  $(document).ready(function(){

  

  var current_fs, next_fs, previous_fs; //fieldsets

  var opacity;

  

  $(".next").click(function(){

      

      current_fs = $(this).parent();

      next_fs = $(this).parent().next();

      

      //Add Class Active

      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      

      //show the next fieldset

      next_fs.show(); 

      //hide the current fieldset with style

      current_fs.animate({opacity: 0}, {

          step: function(now) {

              // for making fielset appear animation

              opacity = 1 - now;

  

              current_fs.css({

                  'display': 'none',

                  'position': 'relative'

              });

              next_fs.css({'opacity': opacity});

          }, 

          duration: 600

      });

  });

  

  $(".previous").click(function(){

      

      current_fs = $(this).parent();

      previous_fs = $(this).parent().prev();

      

      //Remove class active

      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      

      //show the previous fieldset

      previous_fs.show();

  

      //hide the current fieldset with style

      current_fs.animate({opacity: 0}, {

          step: function(now) {

              // for making fielset appear animation

              opacity = 1 - now;

  

              current_fs.css({

                  'display': 'none',

                  'position': 'relative'

              });

              previous_fs.css({'opacity': opacity});

          }, 

          duration: 600

      });

  });

  

  $('.radio-group .radio').click(function(){

      $(this).parent().find('.radio').removeClass('selected');

      $(this).addClass('selected');

  });

  

  $(".submit").click(function(){

      return false;

  })

      

  });







$(document).ready(function(){



  $(".block").click(function(){

      $(this).toggleClass('active');

      $(".price").removeClass('active');

      $(".active .price").addClass('active');

  });

  

  });





    



  
  return (
    <>
<Navbar/>
<div className='bgimage'>
<Mainnav/>
</div>


<section id="teck-selling-products" class="teck-selling-product">

<div class="container">

    <div class="row">

        <h3 class="product-text">Best Selling Product </h3>

      <div class="selling-product-text">

        <p> 

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

            Proin a tempus augue, id convallis est. Nulla neque sapien,

            mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet

            luctus erat, at ullamcorper neque feugiat id.

        </p>

    </div>

        



        <div id="carousel" class="carousel gallery" data-ride="carousel">

            <button class="slick-prev slick-arrow" aria-label="Previous" type="button" >
                 <img src={previous} class="image-fluid" alt="..." /> Previous</button>

             <div class="carousel-inner">

               <div class="carousel-item active">



                    <div class="content-with-image">

                        <div class="image">

                            <img src={tato} class="carousal-img img-fluid" />

                        </div>

                         <div class="desc">

                            <h2>Menace Shirt Design</h2>

                         </div>

                    </div>

                    <div class="member-text">

                        <h4>Menace Shirt Design</h4>

                        <p class="over-line">Retail: $90.00</p>

                        <p>3 For $30 (B1G2)</p>

                    </div>

                    <div class="member-link">

                        <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>

                    </div>

              </div>

              



              <div class="carousel-item carousel3">

                <div class="content-with-image">

                    <div class="image">

                        <img src={tato} class="carousal-img img-fluid" />

                    </div>

                     <div class="desc">

                        <h2>Menace Shirt Design</h2>

                     </div>

                </div>

                <div class="member-text">

                        <h4>Menace Shirt Design</h4>

                        <p class="over-line">Retail: $90.00</p>

                        <p>3 For $30 (B1G2)</p>

                    </div>

                    <div class="member-link">

                        <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>

                    </div>

              </div>



              <div class="carousel-item"> 

                <div class="content-with-image">

                    <div class="image">

                        <img src={tato} class="carousal-img img-fluid" />

                    </div>

                     <div class="desc">

                        <h2>Menace Shirt Design</h2>

                     </div>

                </div>   

                 <div class="member-text">

                        <h4>Menace Shirt Design</h4>

                        <p class="over-line">Retail: $90.00</p>

                        <p>3 For $30 (B1G2)</p>

                    </div>

                    <div class="member-link">

                        <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>

                    </div>

              </div>

              <div class="carousel-item">

                <div class="content-with-image">

                    <div class="image">

                        <img src={tato} class="carousal-img img-fluid" />

                    </div>

                     <div class="desc">

                        <h2>Menace Shirt Design</h2>

                     </div>

                </div>

                <div class="member-text">

                        <h4>Menace Shirt Design</h4>

                        <p class="over-line">Retail: $90.00</p>

                        <p>3 For $30 (B1G2)</p>

                    </div>

                    <div class="member-link">

                        <a href="#">NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>

                    </div>

              </div>

            </div>



            <button class="slick-next slick-arrow" aria-label="Next" type="button" > 
            <img src={next} class="image-fluid" alt="..." /></button>

           </div>

      <div class="btn-selling">

           <a class="teck-selling-btn" href="collection.html" role="button">SHOP NOW!</a>

    </div>

        </div>

        

    </div>

   </section>






    {/* cardsliders */}


    {/* Your Choice Counts */}
    <section id="choice-sec">

<div className="container">

    <div className="row">

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col choice-col">

            <h3>Your Choice Counts</h3>

            <p>Choose what design you'd like to see us add an d get an extra special discount.</p>

            <div className="continue-btn" data-toggle="modal" data-target="#exampleModal"><a href="#!"><button type="button" className="teck-btn-contact-7">CONTINUE</button></a></div>

        </div>

    </div>

</div>

</section>

{/* about section */}
    

<section id="teck-about-section" className="teck-about-section">

<div className="container">

    <div className="row">

        <h3>About Tatsu Threads</h3>



        <div className="col-lg-7  teck-boxers-img">

            <img src={boxer} className="boxers-img img-fluid"  alt="" />

            <div className="group-img"><a href="#">
               <img src={popimg} className="img-fluid" alt="" /> </a></div>

        </div>



        <div className="col-lg-5 col-md-12 col-sm-12  teck-siora-img">

            <img src={inchtap} className="siora img-fluid" alt="" />

            <p>

                lorem ipsum dolor sit amet, consectetur adipiscing elit. 

                sed euismod libero nec arcu vehicula congue. pellentesque lacinia

                lobortis efficitur. mauris vel ipsum mi. mauris lacus tellus.

            </p>

        

        </div>

        <div className="row">

            <div className="col-lg-6 teck-man-img">

                <img src={guy} className="jusdevoyage-img img-fluid" alt="" />

               <div className="group-img"><a href="#"> 
               <img src={popimg} className=" img-fluid" alt="" /> </a></div>


            </div>
        
        
          
        </div>
     
    </div>

</div>

</section>




<section id="trending-sec" className="teck-trending-">

<div className="container">

    <div className="row">



        <h3>Trending Now</h3>

        <p className="trending-matter"> 

           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. 

           Nulla neque sapien, mattis <br></br> at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat,

           at ullamcorper neque feugiat id.

       </p>



        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">

            <div className="buy-now">

                <img src={girlimg} className="buy-now-img img-fluid" alt=""/>

                <div className="shop-btn buy-me-now">

                    <a href="#">
                <img src={popimg} className="buy-now-btn img-fluid" alt=""/>

                </a>

               </div>

          

            </div>

            <div className="trending-member">

                        <h4>Menace Shirt Design</h4>

                        <p className="over-line">Retail: $90.00</p>

                        <p>3 For $30 (B1G2)</p>

                    </div>

                    <div className="trending-link">

                        <a href="#">NEW VIP MEMEBERSHIP OFFER <i className="fa fa-caret-right" aria-hidden="true"></i></a>

                    </div>

        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 cap-boy">

            <div className="buy-now">

                <img src={topa} className="buy-now-img img-fluid" alt=""/>

                <div className="shop-btn">

                    <a href="#">
                <img src={popimg} className="buy-now-btn img-fluid" alt=""/>
                </a>

               </div>

            

            </div>

            <div className="trending-member">

                        <h4>Menace Shirt Design</h4>

                        <p className="over-line">Retail: $90.00</p>

                        <p>3 For $30 (B1G2)</p>

                    </div>

                    <div className="trending-link">

                        <a href="#">NEW VIP MEMEBERSHIP OFFER <i className="fa fa-caret-right" aria-hidden="true"></i></a>

                    </div>

        </div>

        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">

            <div className="buy-now">

                <img src={tato} className="buy-now-img img-fluid" alt=""/>

                <div className="shop-btn buy-me-now">

                    <a href="#">
              <img src={popimg} className="buy-now-btn img-fluid" alt=""/>

              </a>

               </div>

            </div>

            <div className=" trending-member">

                        <h4>Menace Shirt Design</h4>

                        <p className="over-line">Retail: $90.00</p>

                        <p>3 For $30 (B1G2)</p>

                    </div>

                    <div className="trending-link">

                        <a href="#">NEW VIP MEMEBERSHIP OFFER <i className="fa fa-caret-right" aria-hidden="true"></i></a>

                    </div>

        </div>

    </div>

</div>

</section>


<section id="teck-colllection-text" className="teck-collection-text" >

<div className="container">

 <div className="row">

  <div className="col-lg-6 col-md-12 col-sm-12"> 

    <h3>

        Once Again tatsuthreads  defies <br></br> the odds with the 2k22 <br></br> Collection



    </h3>

   </div>

   <div className="col-lg-6 col-md-12 col-sm-12 2k22-Collection-content"> 



  <p>

     lorem ipsum dolor sit amet, consectetur adipiscing elit.

     sed euismod libero nec <br></br> arcu vehicula congue. pellentesque

     lacinia lobortis efficitur. mauris vel ipsum mi <br></br>. mauris lacus

     tellus.lorem ipsum dolor sit amet, consectetur adipiscing elit.

     sed <br></br> euismod libero nec arcu vehicula congue.

 </p>
 

 <a className=" teck-btn-discover-as"  role="button">DISCOVER US</a>

 

 </div>

 </div>
 

 <div className="teck-hr"> <hr /> </div>

  </div>

</section>

<section id="our-collection">

<div className="container">

    <div className="row">

        <h1>Our Collection</h1>

        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">

            <a >

                <div className="tatsu-collection">

                <img src={tshirt} className="img-fluid" />

            </div>

            <div className="product-name">

                <h4>T-Shirt</h4>

            </div>

            </a>

        </div>

        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">

            <a >

                <div className="tatsu-collection">

                <img src={capd} className="img-fluid" />

            </div>

            <div className="product-name">

                <h4>Hats</h4>

            </div>

            </a>

        </div>

        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">

            <a >

                <div className="tatsu-collection">

                <img src={hoodie} className="img-fluid" />

            </div>

            <div className="product-name">

                <h4>Hoodies</h4>

            </div>

            </a>

        </div>

        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">

            <a >

                <div className="tatsu-collection">

                <img src={Jogger} className="img-fluid" />

            </div>

            <div className="product-name">

                <h4>Joggers</h4>

            </div>

            </a>

        </div>

        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 ">

            <a >

                <div className="tatsu-collection">

                <img src={short} className="img-fluid" />

            </div>

            <div className="product-name">

                <h4>Shorts</h4>

            </div>

            </a>

        </div>

        

        

        

    </div>

</div>

</section>


    </>
  )
}

export default Home