// Función general que contiene cada función
function begin() {
  gettingSteakInfo();
  showsSteakRestInfoByClickingOnModal();
}

/* FUNCIÓN QUE MUESTRA INFORMACIÓN AL APARECER MODAL PARA RESTAURANTES DE PARRILLAS */
function showsSteakRestInfoByClickingOnModal() {
  $('figure').on('click', function() {
    if ($(this).is('.steak-rest1')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[0]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[0]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[0]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[0]);
    } else if ($(this).is('.steak-rest2')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[1]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[1]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[1]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[1]);
    } else if ($(this).is('.steak-rest3')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[2]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[2]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[2]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[2]);
    } else if ($(this).is('.steak-rest4')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[3]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[3]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[3]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[3]);
    } else if ($(this).is('.steak-rest5')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[4]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[4]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[4]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[4]);
    } else if ($(this).is('.steak-rest6')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[5]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[5]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[5]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[5]);
    }
  });
}

/* FUNCIÓN PARA OBTENER CADA INFORMACIÓN DE RESTAURANTE DE PARILLAS: ESLOGAN, DIRECCIÓN Y SERVICIOS */
function gettingSteakInfo() {
  getSteakRestaurantName();
  getSteakRestaurantSlogan(); // devuelve array   getSteakRestaurantSlogan()[0]
  getSteakRestaurantAddress();
  getSteakRestaurantServices();
}

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS NOMBRES DE LOS RESTAURANTES DE PARILLAS */
function getSteakRestaurantName(data) {
  // alert('Esta función debe conectarse con el mouseover');
  //  Crear variable para tipo de restaurante de parillas
  var typeofrestaurant = dataRestaurants['steak-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantNames = [];
  // Iterar por cada uno de los restaurantes de parillas para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    name = typeofrestaurant[i]['name'];
    restaurantNames.push(name);
  }
  return restaurantNames;
}

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS ESLÓGANES DE RESTAURANTES DE PARILLAS */
function getSteakRestaurantSlogan(data) {
  //  Crear variable para tipo de restaurante de parillas
  var typeofrestaurant = dataRestaurants['steak-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantSlogans = [];
  // Iterar por cada uno de los restaurantes de parillas para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    slogan = typeofrestaurant[i]['slogan'];
    restaurantSlogans.push(slogan);
  }
  return restaurantSlogans;
}

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LAS DIRECCIONES DE RESTAURANTES DE PARILLAS */
function getSteakRestaurantAddress(data) {
  //  Crear variable para tipo de restaurante de parillas
  var typeofrestaurant = dataRestaurants['steak-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantAddress = [];
  // Iterar por cada uno de los restaurantes de parillas para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    address = typeofrestaurant[i]['address'];
    restaurantAddress.push(address);
  }
  return restaurantAddress;
}

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS SERVICIOS OFRECIDOS POR RESTAURANTES DE PARILLAS */
function getSteakRestaurantServices(data) {
  //  Crear variable para tipo de restaurante de parillas
  var typeofrestaurant = dataRestaurants['steak-restaurants'];
  // Crear variable para capturar la lista de restaurantes tomándolo de la data de restaurates
  var restaurantServices = [];
  // Iterar por cada uno de los restaurantes de parillas para conseguir el nombre de cada uno
  for (var i = 0; i < typeofrestaurant.length; i++) {
    services = typeofrestaurant[i]['services'];
    restaurantServices.push(services);
  }
  return restaurantServices;
}

$(document).ready(begin);
