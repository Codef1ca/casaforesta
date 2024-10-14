// Carousel.js
'use client'
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper(...);
  

<div class="swiper">

  <div class="swiper-wrapper">

    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>

  </div>

  <div class="swiper-pagination"></div>


  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>


  <div class="swiper-scrollbar"></div>
</div>
