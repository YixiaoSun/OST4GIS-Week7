/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slide1 = {
  slideNumber: 1,
  title: "Hepatitis A Morbidity",
  filter: function(geojsonFeature) { return true ;}
};

var slide2 = {
  slideNumber: 2,
  title: "Dysentery Morbidity",
  filter: function(geojsonFeature) { return true ;}
};

var slide3 = {
  slideNumber: 3,
  title: "HIV Morbidity",
  filter: function(geojsonFeature) { return true ;}
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slide1, slide2, slide3];
