// Función general que contiene cada función
function begin() {
  gettingVeggieInfo();
  showVeggieRestInfoByClickingOnModal();
  // showInfoByClicking();
}

/* FUNCIÓN QUE MUESTRA INFORMACIÓN AL APARECER MODAL PARA RESTAURANTES VEGETARIANOS */
function showVeggieRestInfoByClickingOnModal() {
  $('figure').on('click', function() {
    if ($(this).is('.veggie-rest1')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[0]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[0]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[0]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[0]);
    } else if ($(this).is('.veggie-rest2')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[1]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[1]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[1]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[1]);
    } else if ($(this).is('.veggie-rest3')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[2]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[2]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[2]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[2]);
    } else if ($(this).is('.veggie-rest4')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[3]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[3]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[3]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[3]);
    } else if ($(this).is('.veggie-rest5')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[4]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[4]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[4]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[4]);
    } else if ($(this).is('.veggie-rest6')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[5]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[5]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[5]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[5]);
    }
  });
}

/* FUNCIÓN PARA OBTENER CADA INFORMACIÓN DE RESTAURANTE VEGETARIANO: ESLOGAN, DIRECCIÓN Y SERVICIOS */
function gettingVeggieInfo() {
  getVeggieRestaurantName();
  getVeggieRestaurantSlogan(); // devuelve array   getVeggieRestaurantSlogan()[0]
  getVeggieRestaurantAddress();
  getVeggieRestaurantServices();
}

/* Función para obtener nombre del restaurante vegetariano (devuelve array) */
function getVeggieRestaurantName(data) {
  // alert('Esta función debe conectarse con el mouseover');
  //  Crear variable para tipo de restaurante (vegetariano)
  var typeofrestaurant = dataRestaurants['vegetarian-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var veggieRestaurantNames = [];
  // Iterar por cada uno de los restaurantes de comida vegetariana para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    name = typeofrestaurant[i]['name'];
    veggieRestaurantNames.push(name);
  }
  return veggieRestaurantNames;
}

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS ESLÓGANES DE RESTAURANTES VEGETARIANOS */
function getVeggieRestaurantSlogan(data) {
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

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LAS DIRECCIONES DE RESTAURANTES VEGETARIANOS */
function getVeggieRestaurantAddress(data) {
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

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS SERVICIOS OFRECIDOS POR RESTAURANTES VEGETARIANOS */
function getVeggieRestaurantServices(data) {
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
