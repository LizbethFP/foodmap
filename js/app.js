function begin() {
  splashScreen();
};
function splashScreen() {
  // Crear variable para el elemento a animar
  var title = $('.main-title');
  // Crear efecto de toggle al elemento
  $(title).slideToggle(3000);
  // Redireccionar a siguiente página en 6 segundos
  setTimeout(function() {
    window.location.href = ('views/main-view.html');
  }, 6000);
}

$(document).ready(begin);
