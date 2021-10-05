import React from 'react';
import './Footer.css';

function Footer () {

  return (

<div className="footer">    
<section className="footer-main">
<hr className="footer-seperator" />

<section className="footer-social-media">
<a href="/" target="_blank" rel="noopener noreferrer">Explore With Tarun</a>
</section>

<section className="footer-info">

<section className="footer-info-left">
  <section className="footer-info__name">
      Home
  </section>
  <section className="footer-info__returns">
    About
    <br />
    Blog
  </section>        
</section>


<section className="footer-info-center">
<section className="footer-info__email">
  explorer@gmail.com
</section>
<section className="footer-info__terms">
  Terms and Conditions
  <br />
  Copyright
</section>
</section>


<section className="footer-info-right">
<span>
<a href="#" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>
<a href="#" class="fa fa-google"></a>
<a href="#" class="fa fa-youtube"></a>
</span>
</section>


</section>
<hr className="footer-seperator" />
</section>
</div>
);
}

export default Footer;