window.onload = function () {
  //Scroll page to next question once current is answered
  // $(".activity").click(function() {
  //   var next;
  //   next = $(this).parent().next().find(".quiz");
  //   $("html, body").scrollTop(next.offset().top);
  // });
  // $( ".activity" ).click(function() {
  //   window.scrollTo(0, 853);
  // });

  // $( ".sitcom" ).click(function() {
  //   window.scrollTo(0, 1383);
  // });

  // $( ".time" ).click(function() {
  //   window.scrollTo(0, 1912);
  // });

  // $( ".day" ).click(function() {
  //   window.scrollTo(0, 2443);
  // });

  var results = []
  

  $('#form').submit(function (event) {
    event.preventDefault()

    //Answer input
    let answer = "";
    let total = results.reduce(function (a,b) {
      return a + b;
    });

    //Determine which rock
    if (total <= 5) {
      answer = "You're a sedimentary rock";
    } else if (total > 5 && total <= 10) {
      answer = "You're a metamorphic rock";
    } else if (total > 10 ) {
      answer = "You're an igneous rock";
    }

    console.log(answer)

    // Remove the previous answers
    $('.alert').remove();
    
    // Create a new element and push it
    var alert = document.createElement('div')
    alert.className = 'alert alert-info'
    alert.textContent = answer

    $(alert).insertAfter('form');
  })

  // Set the colors
  $('.questionContainer').each(function (i, k) {
    let selected = -1;
    results[i] = 0;
    $(k).find('.optbox').each(function (io, ko) {
      $(ko).click(function() {
        // Update result
        results[i] = io + 1;

        // Update the colors selection
        if(selected !== ko) {
          $(ko).addClass("selectedOpt");
          $(ko).removeClass("opt");

          // Restore background color of previous tile
          if(selected !== -1) {
            $(selected).addClass("opt");
            $(selected).removeClass("selectedOpt");
          }
          
          // Update the selected tile to be the current tile
          selected = ko;
        }
      });
    });
  });



  $.each($('.questionContainer'), function(key, value) {
    //console.log(key);
    //console.log(value);
    //console.log();
  });
}
