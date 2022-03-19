
  export function pintarTienda(){
    //arreglo de objetos
  let productosBD = [
      {foto:'asset/shop1.jpg',nombre:"GK-O Anime Monokuma", precio:20000 , descripcion:" capucha de oso blanco y negro, disfraz de cosplay de anime con cremallera unisex"},
      {foto:'asset/shop2.jpg',nombre:"Juego de 6 figuras ", precio:25000, descripcion:"Tanjiro Nezuko Kyoujurou - Juego de 6 figuras de anime para niños, colección de fans para niños, Navidad"},
      {foto:'asset/shop3.jpg',nombre:"Tokyoanillos", precio:15000 ,descripcion:"Anillo de titanio de Ken kaneki y Oomori Yakumo para Cosplay del anime"},
      {foto:'asset/shop4.jpg',nombre:"paquete de calcomanías", precio:80000 ,descripcion:"calcomanías de vinilo impermeables para botellas de agua, laptop, monopatín, cuaderno, regalo para adultos, niños, adolescentes"},
      {foto:'asset/shop5.jpg',nombre:"Camisa Zoro", precio:200000 ,descripcion:"una pieza, camiseta de manga corta para hombres y mujeres"},
      {foto:'asset/shop6.jpg',nombre:"WoneNice Lámpara", precio:40000 ,descripcion:"recargable por USB, luz nocturna para niños con blanco cálido y modos de respiración de 7 colores, control de sensor táctil"},
      {foto:'asset/shop7.jpg',nombre:"mochila impresa", precio:27000 ,descripcion:"para ordenador portátil con puerto de carga USB y puerto para auriculares, Ataque a Titan "},
      {foto:'png/fotopng1.png',nombre:"Stiker grande", precio:16000 ,descripcion:"Stiker grande para las paredes"},
      {foto:'asset/collar2.jpg',nombre:"Collar para cosplay", precio:18000 ,descripcion:"collar para cosplay de naruto"},
      {foto:'asset/tanjiro.jpg',nombre:"Figura de Tanjiro", precio:15000 ,descripcion:" figura grande para coleccionar 4.5 cm"},
  
  ]
  
  //creo referencia al componente padre
  //creo una variable para almacenar la base
  //sobre la cual voy a pintar
  
  let fila=document.getElementById("fila")
  
  
  
  //Recorriendo un arreglo con js
  // buscar o selecconary esculcar
  
    // productosBD.forEach(function(producto){ console.log("Quiero una skate")})
   productosBD.forEach(function(producto){ 
        console.log(producto.nombre)
        console.log(producto.precio)
        console.log(producto.foto)
        console.log(producto.descripcion)


        //receta para pintar con js
        //paso 1 
        //comienze a crear la estroctura que nesesite
        //creo la columna
        let columna=document.createElement("div")
        columna.classList.add("col")
  
        //creo la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
  
        //creo la imagen
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto
  
        let precio=document.createElement("h2")
        precio.classList.add("card-text")
        precio.textContent= `${producto.precio}`
  
        let nombre=document.createElement("h3")
        nombre.classList.add("card-title")
        nombre.textContent= producto.nombre

        //agregar descripcion
        let descripcion=document.createElement("p")
        descripcion.classList.add("card-text")
        descripcion.textContent= producto.descripcion

        // creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-info","mx-4","mb-4")
        boton.textContent= "ver producto"

  
  
  
  
          //ordenar la estroctura
        //crear padres e hijos
  
        tarjeta.appendChild(foto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
  
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
  
        
        tarjeta.appendChild(nombre)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
   })
}