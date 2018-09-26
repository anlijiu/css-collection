import 'airbnb-browser-shims';
import '../scss/main.scss';
import '../css/main.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});
