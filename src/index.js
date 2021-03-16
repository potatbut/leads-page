import * as $ from 'jquery'
window.$ = window.jQuery = $
import 'slick-carousel'
import './styles/styles.scss'
import 'slick-carousel/slick/slick.min';

$('.single-item').slick({
  fade: true,
  dots: true,
  infinite: true,
  arrows: false,
  speed: 2500,
}) 
