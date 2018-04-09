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
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[0]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[0]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[0]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[0]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13266.454499250664!2d150.78659607881875!3d-33.77064889093353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a970308cd3b%3A0x5017d681632c550!2sOxley+Park+Nueva+Gales+del+Sur+2760%2C+Australia!5e0!3m2!1ses-419!2spe!4v1523230520418" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.veggie-rest2')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[1]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[1]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[1]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[1]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13267.056722693873!2d150.7652602288169!3d-33.766759190950914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129ab1f75faf75%3A0x73b57775350ada2c!2sSaint+Marys%2C+St+Marys+Nueva+Gales+del+Sur+2760%2C+Australia!5e0!3m2!1ses-419!2spe!4v1523230861300" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.veggie-rest3')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[2]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[2]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[2]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[2]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9381.661276349849!2d150.73998283450663!3d-33.762780799187176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b128562ff94add1%3A0x1acdec30c9ea7995!2sTAFE+NSW+Nepean%2C+Kingswood!5e0!3m2!1ses-419!2spe!4v1523230998386" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.veggie-rest4')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[3]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[3]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[3]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[3]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9379.973837058686!2d150.7093336462695!3d-33.77819359377065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b128f71981763b1%3A0xa8da67d2018382b7!2sDan+Murphy&#39;s+Penrith!5e0!3m2!1ses-419!2spe!4v1523231053894" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.veggie-rest5')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[4]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[4]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[4]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[4]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9380.081557159927!2d150.69992646968183!3d-33.77720988120975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12858b69edd903%3A0xa7660579d8ca5683!2sSouthlands+Shopping+Centre+South+Penrith!5e0!3m2!1ses-419!2spe!4v1523231258346" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
    } else if ($(this).is('.veggie-rest6')) {
      // Eliminar el contenido textual de cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').text('');
      $('#MODAL-restaurant').find('#slogan').text('');
      $('#MODAL-restaurant').find('#address').text('');
      $('#MODAL-restaurant').find('#services').text('');
      // Eliminar mapa anterior 
      $('#google-map-rest-container').html('');
      // Agregar el contenido textual en cada elemento
      $('#MODAL-restaurant').find('#restaurant-name').append(getVeggieRestaurantName()[5]);
      $('#MODAL-restaurant').find('#slogan').append(getVeggieRestaurantSlogan()[5]);
      $('#MODAL-restaurant').find('#address').append(getVeggieRestaurantAddress()[5]);
      $('#MODAL-restaurant').find('#services').append(getVeggieRestaurantServices()[5]);
      // Agregar mapa
      $('#google-map-rest-container').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9380.758225403564!2d150.66800276074576!3d-33.771029890068775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1288ca76eb7669%3A0x52cb4ed42fa699ff!2sHarvey+Norman!5e0!3m2!1ses-419!2spe!4v1523231339634" width="280" height="300" frameborder="0" style="border:0" allowfullscreen class="center-block"></iframe>');
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

/* FUNCIÓN QUE OBTIENE UN ARRAY CON LOS NOMBRES DE LOS RESTAURANTES VEGETARIANOS */
function getVeggieRestaurantName(data) {
  // alert('Esta función debe conectarse con el mouseover');
  //  Crear variable para tipo de restaurante vegetariano
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
  //  Crear variable para tipo de restaurante vegetariano
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
  //  Crear variable para tipo de restaurante vegetariano
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
  //  Crear variable para tipo de restaurante vegetariano
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
