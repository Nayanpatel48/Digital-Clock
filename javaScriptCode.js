const clock = document.getElementById('clock');

//here most people fails the javaScript interview
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date;
}, 1000);
