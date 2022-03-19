import{ pintarTienda} from './llenadoTienda.js';
import{ampliarInformacion} from './ampliarinfo.js';

    //llamando al modulo de pintar
    pintarTienda()


    // llamando al modulo ampliarinfo
    let contenedorTienda=document.getElementById("fila")
    contenedorTienda.addEventListener("click",function(event){

        let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto') )
        ampliarInformacion(event)
        modalinfoproducto.show()
    })
