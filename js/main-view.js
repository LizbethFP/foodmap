// Función general que contiene cada función
function begin() {
  searchRestaurant();
  mouseOverPicture();
  // mouseOutPicture();
}

// Función para obtener nombre del restaurante vegetariano (devuelve array)
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

// Función para obtener nombre del restaurante de parrillas (devuelve array)
function getSteakRestaurantName(data) {
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

// Función que genera un efecto al pasar el mouse VERSION 2 sobre alguna de las imágenes para mostrar el nombre de cada restaurante y darle un estilo de activo
function mouseOverPicture() {
  // Crear variable que obtiene las imágenes de restaurantes vegetarianos
  var veggieRestPic1 = $('.veggie-rest1');
  var veggieRestPic2 = $('.veggie-rest2');
  var veggieRestPic3 = $('.veggie-rest3');
  var veggieRestPic4 = $('.veggie-rest4');
  var veggieRestPic5 = $('.veggie-rest5');
  var veggieRestPic6 = $('.veggie-rest6');
  // Crear variable que obtiene las imágenes de restaurantes vegetarianos
  var steakRestPic1 = $('.steak-rest1');
  var steakRestPic2 = $('.steak-rest2');
  var steakRestPic3 = $('.steak-rest3');
  var steakRestPic4 = $('.steak-rest4');
  var steakRestPic5 = $('.steak-rest5');
  var steakRestPic6 = $('.steak-rest6');

  /* Crear función para mostrar el nombre de los RESTAURANTES VEGETARIANOS AL PASAR EL MOUSE encima de la imagen */
  $(veggieRestPic1).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getVeggieRestaurantName()[0]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(veggieRestPic2).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getVeggieRestaurantName()[1]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(veggieRestPic3).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getVeggieRestaurantName()[2]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(veggieRestPic4).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getVeggieRestaurantName()[3]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(veggieRestPic5).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getVeggieRestaurantName()[4]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(veggieRestPic6).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getVeggieRestaurantName()[5]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });

  /* Crear función para mostrar el nombre de los RESTAURANTES DE PARRILLAS AL PASAR EL MOUSE encima de la imagen */
  $(steakRestPic1).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getSteakRestaurantName()[0]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(steakRestPic2).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getSteakRestaurantName()[1]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(steakRestPic3).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getSteakRestaurantName()[2]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(steakRestPic4).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getSteakRestaurantName()[3]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(steakRestPic5).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getSteakRestaurantName()[4]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
  $(steakRestPic6).on('mouseover', function() {
    // Crear un párrafo que muestre el nombre del restaurante
    var restaurantName = $('<p/>');
    restaurantName.text(getSteakRestaurantName()[5]);
    $(this).append(restaurantName);
    // Quitar y agregar clase active en el elemento donde ocurre el mouseover
    $(this).removeClass('active').addClass('active');
    // Quitarle la clase active a los hermanos
    $(this).siblings().removeClass('active');
    // Quitarle el nombre de restaurante a los hermanos
    $(this).siblings().find('p').remove();
    $(this).siblings().find('span').remove();
  });
};

/* Función que genera un efecto al pasar el mouse VERSION 1 sobre alguna de las imágenes */
// function mouseOverPicture() {
//   $('.row-rest-pics').on('mouseover', 'figure', function() {
//     // Crear un párrafo que muestre el nombre del restaurante
//     var restaurantName = $('<p/>');
//     restaurantName.text(getVeggieRestaurantName()[0]);
//     // // Agregar el párrafo creado dentro del contenedor de imagen para mostrar el nombre del restaurante
//     $(this).append(restaurantName);
//     // Quitar y agregar clase active en el elemento donde ocurre el mouseover
//     $(this).removeClass('active').addClass('active');
//     // Quitarle la clase active a los hermanos
//     $(this).siblings().removeClass('active');
//     // Quitarle el nombre de restaurante a los hermanos
//     $(this).siblings().find('p').remove();
//     $(this).siblings().find('span').remove();
//     // llamado de función para mostrar nombre de restaurante
//     // getVeggieRestaurantName();
//   });
// }

/* FUNCIÓN PARA ELIMINAR PÁRRAFOS AL COLOCAR EL MOUSE FUERA DE LA IMAGEN */
// function mouseOutPicture() {
//   $('.row-rest-pics').on('mouseout', 'figure', function() {
//     $(this).find('p').remove();
//   });
// }


/* FUNCIÓN PARA HACER LA BÚSQUEDA DE LOS TIPOS DE RESTAURANTES */
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
