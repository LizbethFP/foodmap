var restaurants = [
  {
    'name': 'Vegan',
    'food-type': 'vegan',
    'image': 'assets/images/vegan-peru.JPG',
    'slogan': 'Queremos incentivar que las personas adopten este estilo de vida',
    'address': 'Jiron Cabo Nicolás Gutarra 854, Pueblo Libre',
    'addressUri': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4546531865735!2d-77.0688929851871!3d-12.080996191444523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c905e64b8e37%3A0x39861d7f2a2f77a5!2sJiron+Cabo+Nicol%C3%A1s+Gutarra+854%2C+Pueblo+Libre+15084!5e0!3m2!1ses-419!2spe!4v1518904817414" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
    'services': 'Salchipapas libre de gluten y de grasas'
  },
  {
    'name': 'Sana Vegan Café',
    'food-type': 'vegan',
    'image': 'https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/13419142_1213109442040836_376719445398088436_n.jpg?oh=41533eb03b3a16b5c5efebdce3c8a4b9&oe=5B0B16B1',
    // https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/27749872_1800638116621296_7799412872154849094_n.jpg?oh=f6d41ed8a3893b15e69091c4462c81a6&oe=5B1AB3EF
    //   https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/27750133_1797572513594523_2204861125017079987_n.jpg?oh=2c7cd873a3708858f79a4e868bae5612&oe=5B0CA236
    // https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/13076614_1183715821646865_4790979931593636589_n.jpg?oh=309b2e94acdab5a0e1618caf2fd43f9b&oe=5B0FB3EC
    'slogan': 'No enfocamos en menestras, cereales y verduras',
    'address': 'Av. Universitaria 1135, San Miguel',
    'addressUri': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4546531865735!2d-77.0688929851871!3d-12.080996191444523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c905e64b8e37%3A0x39861d7f2a2f77a5!2sJiron+Cabo+Nicol%C3%A1s+Gutarra+854%2C+Pueblo+Libre+15084!5e0!3m2!1ses-419!2spe!4v1518906313000" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
    'services': 'Menú del día sano, divertido y económico'
  },
  {
    'name': 'El jardín de Jazmín',
    'food-type': 'vegan',
    'image': 'https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/26055895_2064394526911041_5108652043633053764_n.jpg?oh=5ad443024cc276c7a70d99bba360ec4a&oe=5B0B9A1F',
    // https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/23168037_1999844750032686_2125446252445506455_n.jpg?oh=44b5793a52735ca51bffb01f345060cc&oe=5B253005
    'slogan': 'Dedicados a la creación de platos veganos y en total armonía con la Madre Tierra',
    'address': 'Avenida La Paz 838, Miraflores',
    'addressUri': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7901167767645!2d-77.02916698556706!3d-12.126508191414215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81c25370bd5%3A0x84c5ba2bdadad6e5!2zRWwgSmFyZMOtbiBEZSBKYXptw61u!5e0!3m2!1ses-419!2spe!4v1518909403525" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
    'services': '"Champipapas", salchipapas con champiñones'
  },
  {
    'name': 'Raw Café',
    'food-type': 'vegan',
    'image': 'https://www.rawcafe.com.pe/images/la-carta_galeria/image13.jpg',
    // https://www.rawcafe.com.pe/images/la-carta_galeria/image7.jpg
    'slogan': 'Promovemos la preservación de los nutrientes de los alimentos ',
    'address': 'Los Sauces 511, La Molina',
    'addressUri': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.319612109015!2d-76.95134038518705!3d-12.090258391438333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c71a4d8f64b3%3A0x6daa5229b140b194!2sLos+Sauces+511%2C+Cercado+de+Lima+15024!5e0!3m2!1ses-419!2spe!4v1518908216206" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
    'services': 'Platos crudos al 80% y bebidas desintoxicantes'
  },
  {
    'name': 'La verde',
    'food-type': 'vegan',
    'image': 'https://scontent.flim5-1.fna.fbcdn.net/v/t1.0-9/19059851_1356385524440260_3385181562757520704_n.jpg?oh=486ba9f34f379cdf2a594d504c1746ea&oe=5B1E2873',
    'slogan': 'Vegano, orgánico y lleno de sabores',
    'address': 'Recavarren 315, Miraflores',
    'addressUri': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8618006136517!2d-77.03584368518669!3d-12.1216068914175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82283c68643%3A0xc95d2ef8e7eca14d!2sCalle+Gral+Recavarren+315%2C+Miraflores+15074!5e0!3m2!1ses-419!2spe!4v1518908307803" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>',
    'services': 'Platos 100% veganos y orgánicos'
  }
];