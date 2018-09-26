/**
 * 顺序很重要！！！！！！！！！！！！！！！！！！！！！！
 */

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      require('autoprefixer')({}),
      require('cssnano')({}),
      require('rucksack-css')({}),
      // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
      // https://github.com/postcss/postcss-import
      require('postcss-partial-import')({}),
      require('postcss-grid-kiss')({}),
      require('postcss-preset-env')({stage: 0}),
      // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
      // https://github.com/postcss/postcss-custom-properties
      require('postcss-custom-properties')({}),
      // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
      // https://github.com/postcss/postcss-custom-media
      require('postcss-custom-media')({}),
      // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
      // https://github.com/postcss/postcss-media-minmax
      require('postcss-media-minmax')({}),
      // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
      // https://github.com/postcss/postcss-custom-selectors
      require('postcss-custom-selectors')({}),
      // Allows you to nest one style rule inside another
      // https://github.com/jonathantneal/postcss-nesting
      require('postcss-nesting')({}),
      // Unwraps nested rules like how Sass does it
      // https://github.com/postcss/postcss-nested
      require('postcss-nested')({}),
      // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
      // https://github.com/iamvdo/pleeease-filters
      require('pleeease-filters')({}),
      // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
      // https://github.com/postcss/postcss-selector-matches
      require('postcss-selector-matches')({}),
      // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
      // https://github.com/postcss/postcss-selector-not
      require('postcss-selector-not')({}),
      // Postcss flexbox bug fixer
      // https://github.com/luisrudge/postcss-flexbugs-fixes
      require('postcss-flexbugs-fixes')({}),
    ]
  };
} else {
  module.exports = {
    plugins: [
      require('autoprefixer')({}),
      require('rucksack-css')({}),
      require('postcss-import')({}),
      require('postcss-grid-kiss')({}),
      require('postcss-preset-env')({}),
      // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
      // https://github.com/postcss/postcss-import
      // require('postcss-import')({}),
      // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
      // https://github.com/postcss/postcss-custom-properties
      require('postcss-custom-properties')({}),
      // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
      // https://github.com/postcss/postcss-custom-media
      require('postcss-custom-media')({}),
      // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
      // https://github.com/postcss/postcss-media-minmax
      require('postcss-media-minmax')({}),
      // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
      // https://github.com/postcss/postcss-custom-selectors
      require('postcss-custom-selectors')({}),
      // Allows you to nest one style rule inside another
      // https://github.com/jonathantneal/postcss-nesting
      require('postcss-nesting')({}),
      // Unwraps nested rules like how Sass does it
      // https://github.com/postcss/postcss-nested
      require('postcss-nested')({}),
      // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
      // https://github.com/iamvdo/pleeease-filters
      require('pleeease-filters')({}),
      // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
      // https://github.com/postcss/postcss-selector-matches
      require('postcss-selector-matches')({}),
      // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
      // https://github.com/postcss/postcss-selector-not
      require('postcss-selector-not')({}),
      // Postcss flexbox bug fixer
      // https://github.com/luisrudge/postcss-flexbugs-fixes
      require('postcss-flexbugs-fixes')({}),
    ]
  };
}
