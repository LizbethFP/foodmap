function begin() {
  splashScreen;
};
function splashScreen() {
  // Crear variable para la sección de carga
  var loadingSection = $('.loading-section');
  // Crear parámetro en el que se quita la característica de oculto a la sección de carga
  setTimeout(function() {
    loadingSection.show();
  });
  windows.open('../views/main-view.html');
};
$(document).ready(begin);
