var form = document.getElementById('form');

form.onsubmit=function() {
  //Question variables
  var date = parseInt(document.querySelector('input[name = "date"]:checked').value);
  var home = parseInt(document.querySelector('input[name = "home"]:checked').value);
  var admire = parseInt(document.querySelector('input[name = "admire"]:checked').value);
  var music = parseInt(document.querySelector('input[name = "music"]:checked').value);
  var life = parseInt(document.querySelector('input[name = "life"]:checked').value);

  //Add values
  var total = date + home + admire + music + life;

  //Answer input
  var answer = document.getElementById('answer').textContent

  if (total <= 5) {
    answer = "You're a sedimentary rock";
  } else if (total > 5 && total < 10) {
    answer = "You're a metamorphic rock";
  } else {
    answer = "You're an igneous rock";
  }
  //Stop page from refreshing
  return false;
}