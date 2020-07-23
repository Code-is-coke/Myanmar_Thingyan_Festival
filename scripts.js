$(document).ready(function() {
  // Custom
  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});

// Scrollbar for history_thingyan
$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.historypage').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });
// Scrollbar for activities_thingyan
$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.activitiespage').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });
// Scrollbar for food_section
$(document).ready(function () {
                if (!$.browser.webkit) {
                    $('.food_section').html('<p>Sorry! Non webkit users. :(</p>');
                }
            });
// Scrollbar for water water_play
$(document).ready(function () {
                if (!$.browser.webkit) {
                    $('.water_play').html('<p>Sorry! Non webkit users. :(</p>');
                }
            });
