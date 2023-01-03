// Counnter
$(document).ready(function(){
            $(window).scroll(function(){
                if($(document).scrollTop()>50){
                    $("nav").addClass("shrink")
                }
                else{
                    $("nav").removeClass("shrink")
                }
            });
        });

(function($) {  
  $.fn.countTo = function(options) {  
    optionsoptions = options || {};  
    return $(this).each(function() {    
      var settings = $.extend(  
        {},  
        $.fn.countTo.defaults,  
        {  
          from: $(this).data("from"),  
          to: $(this).data("to"),  
          speed: $(this).data("speed"),  
          refreshInterval: $(this).data("refresh-interval"),  
          decimals: $(this).data("decimals")  
        },  
        options  
      );  
        var loops = Math.ceil(settings.speed / settings.refreshInterval),  
        increment = (settings.to - settings.from) / loops;  
        var self = this,  
        $self = $(this),  
        loopCount = 0,  
        value = settings.from,  
        data = $self.data("countTo") || {};  
      $self.data("countTo", data);  
      if (data.interval) {  
        clearInterval(data.interval);  
      }  
      data.interval = setInterval(updateTimer, settings.refreshInterval);  
      render(value);  
      function updateTimer() {  
        value += increment;  
        loopCount++;  
        render(value);  
        if (typeof settings.onUpdate == "function") {  
          settings.onUpdate.call(self, value);  
        }  
        if (loopCount >= loops) {  
          $self.removeData("countTo");  
          clearInterval(data.interval);  
          value = settings.to;  
          if (typeof settings.onComplete == "function") {  
            settings.onComplete.call(self, value);  
          } } }  
      function render(value) {  
        var formattedValue = settings.formatter.call(self, value, settings);  
        $self.html(formattedValue);  
      }  
    });  
  };  
  $.fn.countTo.defaults = {  
    from: 0,  
    to: 0,   
    speed: 1000,   
    refreshInterval: 100,  
    decimals: 0,   
    formatter: formatter,   
    onUpdate: null,   
    onComplete: null   
  };  
  function formatter(value, settings) {  
    return value.toFixed(settings.decimals);  
  }  
}) (jQuery);  
jQuery(function($) {  
  $(".count-number").data("countToOptions", {  
    formatter: function(value, options) {  
      return value  
        .toFixed(options.decimals)  
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");  
    }  
  });  
    $(".timer").each(count);  
  function count(options) {  
    var $this = $(this);  
    options = $.extend({}, options || {}, $this.data("countToOptions") || {} );  
    $this.countTo(options);  
  }  
});  



// card slider
$('#recipeCarousel').carousel({
  interval: 1500
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
});


// gallery page
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}