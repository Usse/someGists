########################################################
### HTML : ### 
########################################################
<a data-track-event="Category-name|Event-name" href="#">link</a>



########################################################
### JS : ### 
########################################################
var eventTracking = {
  init: function() {
    var that = this;
    $("body").on("click","a[data-track-event]",function(e){
      that.trackEvent($(this).data("track-event").split("|"));
    });
  },
  trackEvent: function(optionsArray) {
    var eventCategory = optionsArray[0] || "";
    var eventAction   = optionsArray[1] || "";
    var eventLabel    = optionsArray[2] || "";

    _gaq.push(['_trackEvent', eventCategory, eventAction, eventLabel]);
  }
};



########################################################
### JS init : ### 
########################################################
$(document).ready(function() {
  eventTracking.init();
});


