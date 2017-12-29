// Función general que contiene cada función
function begin() {
  searchRestaurant();
  mouseOverPicture();
  // mouseOutPicture();
}

// Función para mostrar nombre del restaurante vegetariano
function showVeggieRestaurantName(data) {
  // alert('Esta función debe conectarse con el mouseover');
  //  Crear variable para tipo de restaurante (vegetariano)
  var typeofrestaurant = dataRestaurants['vegetarian-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantNames = [];
  // Iterar por cada uno de los restaurantes de comida vegetariana para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    name = typeofrestaurant[i]['name'];
    restaurantNames.push(name);
  }
  return restaurantNames;
}

// Función para mostrar nombre del restaurante de parrillas
function showSteakRestaurantName(data) {
  // alert('Esta función debe conectarse con el mouseover');
  //  Crear variable para tipo de restaurante (vegetariano)
  var typeofrestaurant = dataRestaurants['steak-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantNames = [];
  // Iterar por cada uno de los restaurantes de comida vegetariana para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    name = typeofrestaurant[i]['name'];
    restaurantNames.push(name);
  }
  return restaurantNames;
}


// Función que genera un efecto al pasar el mouse sobre alguna de las imágenes
function mouseOverPicture() {
  $('.row-rest-pics').on('mouseover', 'figure', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(showVeggieRestaurantName()[0]);
    // // Agregar el párrafo creado dentro del contenedor de imagen para mostrar el nombre del restaurante
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    // llamado de función para mostrar nombre de restaurante
    // showVeggieRestaurantName();
  });
}
//
// function mouseOutPicture() {
//   $('.row-rest-pics').on('mouseout', 'figure', function() {
//     $(this).find('p').remove();
//   });
// }


// Función para hacer la búsqueda de los tipos de restaurantes
function searchRestaurant() {
  // Crear la variable en el que se aloja el tipo de comida vegetariana, parrillas y el contenedor que los envuelve
  var veggieRestaurant = $('.veggie-restaurant');
  var steakRestaurant = $('.steak-restaurant');
  var restaurantsPicturesContainer = $('.restaurants-pictures-container');
  // Crear evento al levantar el dedo de una tecla en el input
  $('#srch-term').keyup(function() {
    // Guardo en la variable lo que se ingresó en el input
    var restauranteType = $(this).val();
    // Creo condicionales en el que se pasa el valor de lo escrito en el input y se igual a algunas opciones preestablecidas para los tipos de restaurantes
    if (restauranteType === 'comida vegetariana' || restauranteType === 'vegetariana' || restauranteType === 'veget' || restauranteType === 'veg') {
      veggieRestaurant.show();
    } else if (restauranteType === 'parrilla' || restauranteType === 'par' || restauranteType === 'carne') {
      steakRestaurant.show();
    } else if (restauranteType === '') {
      restaurantsPicturesContainer.hide();
    }
  });
}

$(document).ready(begin);
