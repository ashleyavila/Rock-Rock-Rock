window.onload = function () {
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
      answer = "You're a sedimentary rock!";
    } else if (total > 5 && total <= 10) {
      answer = "You're a metamorphic rock!";
    } else if (total > 10 ) {
      answer = "You're an igneous rock!";
    }

    console.log(answer)

    // Remove the previous answers
    $('.alert').remove();
    
    // Create a new element and push it
    var alert = document.createElement('div')
    alert.className = 'alert alert-info'
    alert.textContent = answer + " Congrats! Now that you know what rock you are, fill out the https://goo.gl/forms/HmNouUrGI0QsTfsn1 to find your potential soulmate ;)"

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
  });
}
