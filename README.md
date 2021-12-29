# Proyecto E-Commerce en react de Matias Urbano

Este Proyecto simula un ecommerce de una tienda de productos mobiles. Toda la pagina desde el inicia tiene vistas sobre productos mobiles. La misma pagina te va guiando desde inicial a fin para que puedas hacer una compra sencilla del producto que este disponible.

## Navegacion

La barra de navegacion es simple cuenta con el nombre de la pagina como logo, un sub-menu con tres categorias, las cuales son samsung, motorola y LG. Y por ultimo el carrito de compras. Ingresar una url no reconocida renderiza una nueva pagina con un error 404, el navbar se mantiene para que el usuario pueda volver a renderizar el index o algunas de las categorias.

## Itemdetalcontainer

Contiene todos los productos que traemos desde firestores.

## Item - ItemDetil 

Cada producto tiene un boton de "ver mas" para poder visualizar las difererentes caracteristicas de cada celular, asi navegar a itemdetail, el cual cuenta con con los botones de sumar o restar productos y comprar, ademas de las ya nombradas caractericas del producto. Este tambien tiene la particularidad que mantiene contacto con el stock de la base de datos, de tal manera si el producto no tiene stock los botones se bloquean.

## Cart

Con haber almenos un producto agregar al carrito, este se hace visible sobre el navbar llevando asi un conteo de los productos agregados al carrito, y siendo clicleable para poder nevagar hacia el cartview. Y poder ver un resumen de la compra que vas efectuando hasta el momento.

## Cart Context

Este contiene todas funciones y prosesos los cuales son utilizados por el carrito en todo momento, de esa manera poder navegar por toda la pagina con el carrito abierto.

## Firebase

Todos los productos montrados en al pagina estan cargados a Firebase-Firestore. Cada con sus propiedades como : nombre, categoria, las diferentes imagenes, las diferentes caracteristicas, el stock y el precio, mas el ID proporcionado automaticamente por  Firestore

## Loader

Contiene un spinner de bootstraps que acompaña el tiempo de carga de renderizado en renderizado.

## Checkout

El checkout es el metodo de pago que hace la persona simplemente para este caso hace uso de un fomulario con pocos requerimientos, el cual genera una orden de compra que se guarda en una colleccion de firebase llamada orders. Si la compra el exitosa el usuario podra ver un alert con su numero de orden aunque en caso de que el producto no tenga stock en la base de datos se le proporcionara al usuario un alert con el mensaje de que los productos que escogio no tiene stock.

## Error 404

Esta pagina esta creada para que el usuario no pueda renderizar ninguna otra pagina que no este puesta en los path de los router de navegacion.