// Función general que contiene cada función
function begin() {
  gettingInfo();
  showInfoByClicking();
}

// Función que muestra cada información al dar un click en imagen (DE PRUEBA)
function showInfoByClicking() {
// Crear variable que obtiene las imágenes
  var veggieRestPic1 = $('.veggie-rest1');
  var veggieRestPic2 = $('.veggie-rest2');
  var veggieRestPic3 = $('.veggie-rest3');
  var veggieRestPic4 = $('.veggie-rest4');
  var veggieRestPic5 = $('.veggie-rest5');
  var veggieRestPic6 = $('.veggie-rest6');

  // Crear función de click para mostrar eslogan para cada restaurante
  $(veggieRestPic1).on('click', function() {
    // Crear un párrafo que muestre el slogan del restaurante
    var restaurantSlogan = $('<span/>');
    restaurantSlogan.text(getRestaurantSlogan()[0]);
    $(this).append(restaurantSlogan);
  });
  $(veggieRestPic2).on('click', function() {
    // Crear un párrafo que muestre el slogan del restaurante
    var restaurantSlogan = $('<span/>');
    restaurantSlogan.text(getRestaurantSlogan()[1]);
    $(this).append(restaurantSlogan);
  });
  $(veggieRestPic3).on('click', function() {
    // Crear un párrafo que muestre el slogan del restaurante
    var restaurantSlogan = $('<span/>');
    restaurantSlogan.text(getRestaurantSlogan()[2]);
    $(this).append(restaurantSlogan);
  });
  $(veggieRestPic4).on('click', function() {
    // Crear un párrafo que muestre el slogan del restaurante
    var restaurantSlogan = $('<span/>');
    restaurantSlogan.text(getRestaurantSlogan()[3]);
    $(this).append(restaurantSlogan);
  });
  $(veggieRestPic5).on('click', function() {
    // Crear un párrafo que muestre el slogan del restaurante
    var restaurantSlogan = $('<span/>');
    restaurantSlogan.text(getRestaurantSlogan()[4]);
    $(this).append(restaurantSlogan);
  });
  $(veggieRestPic6).on('click', function() {
    // Crear un párrafo que muestre el slogan del restaurante
    var restaurantSlogan = $('<span/>');
    restaurantSlogan.text(getRestaurantSlogan()[5]);
    $(this).append(restaurantSlogan);
  });
}

// Función para obtener cada información: eslogan, dirección y servicios
function gettingInfo() {
  getRestaurantSlogan(); // devuelve array   getRestaurantSlogan()[0]
  getRestaurantAddress();
  getRestaurantServices();
}


/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS ESLÓGANES */
function getRestaurantSlogan(data) {
  //  Crear variable para tipo de restaurante (vegetariano)
  var typeofrestaurant = dataRestaurants['vegetarian-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantSlogans = [];
  // Iterar por cada uno de los restaurantes de comida vegetariana para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    slogan = typeofrestaurant[i]['slogan'];
    restaurantSlogans.push(slogan);
  }
  return restaurantSlogans;
}

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LAS DIRECCIONES */
function getRestaurantAddress(data) {
  //  Crear variable para tipo de restaurante (vegetariano)
  var typeofrestaurant = dataRestaurants['vegetarian-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantAddress = [];
  // Iterar por cada uno de los restaurantes de comida vegetariana para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    address = typeofrestaurant[i]['address'];
    restaurantAddress.push(address);
  }
  return restaurantAddress;
}

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS SERVICIOS OFRECIDOS POR RESTAURANTES */
function getRestaurantServices(data) {
  //  Crear variable para tipo de restaurante (vegetariano)
  var typeofrestaurant = dataRestaurants['vegetarian-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantServices = [];
  // Iterar por cada uno de los restaurantes de comida vegetariana para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    services = typeofrestaurant[i]['services'];
    restaurantServices.push(services);
  }
  return restaurantServices;
}


$(document).ready(begin);
