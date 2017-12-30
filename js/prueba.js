
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
