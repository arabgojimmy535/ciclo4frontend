<template>
  <div class="container">
    <h1 class="mt-5 text-center">Mis Libros</h1>
    <div id="error"></div>
    <div class="row d-flex justify-content-center">
      <div
        class="card my-3 mx-2 tarjeta rounded"
        v-for="publicacion in publicaciones"
      >
        <div class="divimgcard">
          <img v-bind:src="publicacion.imagen" class="card-img-top imgcard" />
        </div>
        <div class="card-body d-flex flex-column justify-content-center align-self-center">
          <h5 class="card-title">{{ publicacion.titulo }}</h5>
          <p class="card-text my-1">Autor: {{ publicacion.autor }}</p>
          <p class="card-text my-1">
            Categoria: {{ publicacion.tipo }}
          </p>
          <h4 class="text-center my-1">
            $ {{ publicacion.precio }}
          </h4>
           <!-- <router-link :to="{ name:'Documento', params:{id:documento.id} }" class="btn comprar">Comprar</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Publicaciones",
  data() {
    return {
      publicaciones: '',
      id: localStorage.getItem("id")
    }
  },
  created() {
    var nav = document.getElementById("navegacion");
    nav.style.removeProperty("background-image");
    nav.style.removeProperty("background-size");
    nav.style.removeProperty("background-repeat");
    nav.style.removeProperty("height");
    const get_docs= async()=>{
      try{
      const respuesta= await fetch("http://127.0.0.1:8000/clientes/"+this.id)
      const datos= await respuesta.json()
      this.publicaciones= datos.publicaciones
    }
      catch(err){
          let div= document.getElementById("error");
          div.style.height="600px"
          div.style.backgroundImage="url('https://static.vecteezy.com/system/resources/previews/004/865/762/non_2x/electric-socket-with-a-plug-connection-and-disconnection-concept-concept-of-404-error-connection-electric-plug-and-outlet-socket-unplugged-wire-cable-of-energy-disconnect-vector.jpg')"
          div.style.backgroundSize="100% 100%"
        
      }
      
    }
    get_docs();
  },
  methods: {},
};
</script>