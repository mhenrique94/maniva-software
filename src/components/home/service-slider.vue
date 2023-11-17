<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
       <h2 class="h2 font-weight-bold text-uppercase text-center my-5">Our Services</h2>
      </div>
    </div>
    <div class="row">
    <div class="col-sm-12">
      <div class="carousel box-carousel d-none d-sm-block">
        <div class="box">
        <a href="https://www.digitalus.com/" ><i class="fa fa-3x fa-laptop" aria-hidden="true"></i><br>Web Design</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/product/host.stml" ><i class="fa fa-3x fa-cloud" aria-hidden="true"></i><br>Cloud Hosting</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/" ><i class="fa fa-3x fa-users" aria-hidden="true"></i><br>WXP</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/product/engage.stml" ><i class="fa fa-3x fa-line-chart" aria-hidden="true"></i><br>Marketing</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/product/engage.stml"><i class="fa fa-3x fa-code" aria-hidden="true"></i><br>SEO</a>
        </div>
      <div class="box">
        <a href="https://www.digitalus.com/" ><i class="fa fa-3x fa-laptop" aria-hidden="true"></i><br>Web Design</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/product/host.stml" ><i class="fa fa-3x fa-cloud" aria-hidden="true"></i><br>Cloud Hosting</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/" ><i class="fa fa-3x fa-users" aria-hidden="true"></i><br>WXP</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/product/engage.stml" ><i class="fa fa-3x fa-line-chart" aria-hidden="true"></i><br>Marketing</a>
        </div>
        <div class="box">
        <a href="https://www.solodev.com/product/engage.stml"><i class="fa fa-3x fa-code" aria-hidden="true"></i><br>SEO</a>
        </div>
      </div><!-- carousel-->
    </div><!--col-->
    </div><!--row-->

    <div class="carousel-mobile box-carousel-mobile d-block d-sm-none">
    <div class="row d-flex justify-content-center">
      <div class="col-xs-6">
      <div class="box">
        <a href="https://www.digitalus.com/" ><i class="fa fa-3x fa-laptop" aria-hidden="true"></i><br>Web Design</a>
      </div>
      <div class="box">
        <a href="https://www.solodev.com/product/host.stml" ><i class="fa fa-3x fa-cloud" aria-hidden="true"></i><br>Cloud Hosting</a>
      </div>
      <div class="box">
        <a href="https://www.solodev.com/" ><i class="fa fa-3x fa-users" aria-hidden="true"></i><br>WXP</a>
      </div>
      </div><!-- col-->
      <div class="col-xs-6">
      <div class="box">
        <a href="https://www.digitalus.com/" ><i class="fa fa-3x fa-laptop" aria-hidden="true"></i><br>Web Design</a>
      </div>
      <div class="box">
        <a href="https://www.solodev.com/product/host.stml" ><i class="fa fa-3x fa-cloud" aria-hidden="true"></i><br>Cloud Hosting</a>
      </div>
      <div class="box">
        <a href="https://www.solodev.com/" class="more-links">More Quick Links</a>
      </div>
      </div><!-- col-->
    </div>
    </div>
  </div><!-- container-->
</template>
<script>
$( document ).ready(function() {
   	$('.box-carousel').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: "<button type='button' class='mission-prev-arrow'></button>",
		nextArrow: "<button type='button' class='mission-next-arrow'></button>"
	});

});
</script>
<style>
.box {
  width: 227px;
  height: 227px;
  background-color: #f6f6f6;
}
.box a {
  color: #461e52;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 22px;
  font-weight: 700;
  padding: 30% 30px 0 30px;
  text-align: center;
  transition: none;
  line-height: 1;
  font-family: 'Open Sans Condensed', Arial, Verdana, sans-serif;
}
.box:hover{
  background-color: #461e52;
}
.box:hover a{
 color:#fff;
 text-decoration:none;
}
.mission-next-arrow {
  position: absolute;
  background: url(https://raw.githubusercontent.com/solodev/icon-box-slider/master/nextarrow2.png) no-repeat center;
  background-size: contain;
  top: 50%;
  transform: translateY(-50%);
  right: -36px;
  height: 17px;
  width: 10px;
  border:none;
}
.mission-next-arrow:hover {
  cursor: pointer;
}
.mission-prev-arrow {
  background: url(https://raw.githubusercontent.com/solodev/icon-box-slider/master/prevarrow2.png) no-repeat center;
  background-size: contain;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -36px;
  height: 17px;
  width: 10px;
  border:none;
}
.mission-prev-arrow:hover {
  cursor: pointer;
}
.box a.more-links {
  color: #fff;
  padding: 70px 110px 0 20px;
  background: #a89269 url(https://raw.githubusercontent.com/solodev/icon-box-slider/master/rightarrow.png) no-repeat 155px 170px;
}
</style>