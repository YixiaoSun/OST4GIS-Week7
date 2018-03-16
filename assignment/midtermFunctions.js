/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
/* Function 1: Coloring map based on health data in the year selected*/
var myStyle1 = function(feature) {
  switch (waterLevel){
    case "1":
    return {fillColor:'#D6EAF8'};
    case "2":
    return {fillColor:'#AED6F1'};
    case "3":
    return {fillColor:'#5DADE2'};
    case "4":
    return {fillColor:'#3498DB'};
    case "5":
    return {fillColor:'#1B4F72'};
  }
};

var myStyle2 = function(feature) {
  switch (cleanRestroomLevel){
    case "1":
    return {fillColor:'#784212'};
    case "2":
    return {fillColor:'#A04000'};
    case "3":
    return {fillColor:'#D35400'};
    case "4":
    return {fillColor:'#E59866'};
    case "5":
    return {fillColor:'#F6DDCC'};
  }
};

var myStyle3 = function(feature) {
  switch (educationLevel){
    case "1":
    return {fillColor:'#D0ECE7'};
    case "2":
    return {fillColor:'#73C6B6'};
    case "3":
    return {fillColor:'#45B39D'};
    case "4":
    return {fillColor:'#117A65'};
    case "5":
    return {fillColor:'#0B5345'};
  }
};

/* Function 2: Adding markers to provinces based on health data in the selected year.
The markers should have popup text showing the data*/
var appState = {};

var filterProvince = function(datum){
  var conditionStatus = true;
  if (appState.stringField) { conditionStatus = conditionStatus && appState.numericField1 <= datum.PSA; }
};



/* Function 3: Filtering provinces, add marker when filtered, and show the information,
including 2016 circumstances and the change over years*/
