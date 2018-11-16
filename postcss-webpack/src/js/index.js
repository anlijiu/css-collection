import 'airbnb-browser-shims';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import '../scss/main.scss';
import '../css/main.css';
import '../css/style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// window.addEventListener('scroll', (event) => {
//   let topDistance = window.pageYOffset
//   if( typeof( window.pageYOffset ) == 'number' ) {
//         //Netscape compliant
//         topDistance = window.pageYOffset;
//
//     } else if( document.body && document.body.scrollTop )  {
//         //DOM compliant
//         topDistance = document.body.scrollTop;
//     } 
//   $('.layer').each(function( index, layer ) {
//     let depth = layer.getAttribute('data-depth');
//     let movement = (topDistance  * depth * 1.2);
//     let translate3d = 'translate3d(0, ' + movement + 'px, 0)';
//     layer.style['-webkit-transform'] = translate3d;
//     layer.style['-moz-transform'] = translate3d;
//     layer.style['-ms-transform'] = translate3d;
//     layer.style['-o-transform'] = translate3d;
//     layer.style.transform = translate3d;
//   })
// })
// $(document).ready(function(){
//   $('.parallax').parallax();
// });
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems, options);
// });
// particlesJS("particles-js", {
//   "particles": {
//     "number": {
//       "value": 280,
//       "density": {
//         "enable": true,
//         "value_area": 400
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 6,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "grab"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });
