window.onload = function () {
  //Scroll page to next question once current is answered
  $( ".activity" ).click(function() {
    window.scrollTo(0, 853);
  });

  $( ".sitcom" ).click(function() {
    window.scrollTo(0, 1383);
  });

  $( ".time" ).click(function() {
    window.scrollTo(0, 1912);
  });

  $( ".day" ).click(function() {
    window.scrollTo(0, 2443);
  });

  $('#form').submit(function (event) {
    event.preventDefault()

    // Logic to get the elements with the selectedOp elememnt

    //Answer input
    var answer; 
    //document.getElementById('answer').innerHTML

    //Determine which rock
    if (total <= 5) {
      answer = "You're a sedimentary rock";
    } else if (total > 5 && total <= 10) {
      answer = "You're a metamorphic rock";
    } else if (total > 10 && total <= 15) {
      answer = "You're an igneous rock";
    }

    var alert = document.createElement('div')
    alert.className = 'alert alert-info'
    alert.textContent = answer

    var row = document.querySelector('form')
    row.append(alert)
  })

  // Set the colors
  $('.questionContainer').each(function (i, k) {
    let selected = -1;
    $(k).find('.optbox').each(function (io, ko) {
      $(ko).click(function() {
        if(selected !== ko) {
          $(ko).addClass("selectedOpt");
          $(ko).removeClass("opt");

          if(selected !== -1) {
            $(selected).addClass("opt");
            $(selected).removeClass("selectedOpt");
          }
          
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
