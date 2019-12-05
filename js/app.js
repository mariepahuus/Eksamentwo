new Vue({
  el: '#app',
  vuetify: new Vuetify(),
})

function myFunction() {
  var x = document.getElementById("popup_1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction2() {
  var x = document.getElementById("popup_2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}