function begin() {
  splashScreen();
};
function splashScreen() {
  // Crear variable para la sección de carga
  var title = $('.main-title');
  title.show();
  // Crear parámetro en el que se quita la característica de oculto a la sección de carga
  setTimeout(function() {
    window.location.href = ('views/main-view.html');
  }, 6000);
}

$(document).ready(begin);
