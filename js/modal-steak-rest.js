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
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[0]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[0]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[0]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[0]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44644.37292145959!2d150.96759668472774!3d-33.72931123147188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a1eeabc741db%3A0x8c92aa4331a0da9f!2sNovotel+Sydney+Norwest!5e0!3m2!1ses-419!2spe!4v1523232964252" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.steak-rest2')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[1]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[1]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[1]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[1]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26539.198839168148!2d150.91833567567352!3d-33.75033181408538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1298b979f79a25%3A0x5017d681632bc70!2sKings+Langley+Nueva+Gales+del+Sur+2147%2C+Australia!5e0!3m2!1ses-419!2spe!4v1523233185470" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.steak-rest3')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[2]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[2]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[2]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[2]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26539.536562735197!2d150.87338297567146!3d-33.74924061410486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12991688a83bdb%3A0x5017d681632bfe0!2sMarayong+Nueva+Gales+del+Sur+2148%2C+Australia!5e0!3m2!1ses-419!2spe!4v1523233244682" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.steak-rest4')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[3]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[3]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[3]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[3]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13269.317305528506!2d150.82786522880988!3d-33.752154791016096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129bb545e70fbb%3A0x5017d681632c6d0!2sPlumpton+Nueva+Gales+del+Sur+2761%2C+Australia!5e0!3m2!1ses-419!2spe!4v1523233281294" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.steak-rest5')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[4]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[4]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[4]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[4]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13269.704296915801!2d150.8060717288087!3d-33.74965409102726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a55793ae7f1%3A0x5017d681632b490!2sDharruk+Nueva+Gales+del+Sur+2770%2C+Australia!5e0!3m2!1ses-419!2spe!4v1523233342628" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.steak-rest6')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getSteakRestaurantName()[5]);
      $('#MODAL-restaurant').find('#slogan').append(getSteakRestaurantSlogan()[5]);
      $('#MODAL-restaurant').find('#address').append(getSteakRestaurantAddress()[5]);
      $('#MODAL-restaurant').find('#services').append(getSteakRestaurantServices()[5]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13266.56741489851!2d150.79384085570092!3d-33.769919610326426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a8a42f15267%3A0xce81194ee35827be!2sThe+Village+Recreation+Centre!5e0!3m2!1ses-419!2spe!4v1523233397224" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
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
