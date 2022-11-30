<template>
  <div class="container">
    <div class="d-flex justify-content-end">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
    <h1 class="mt-5 text-center">TIENDA</h1>
    <div id="error"></div>
    <div class="row d-flex justify-content-center">
      <div
        class="card my-3 mx-2 tarjeta rounded"
        v-for="documento in documentos"
        :key="documento.id"
      >
        <div class="divimgcard">
          <img v-bind:src="documento.imagen" class="card-img-top imgcard" />
        </div>
        <div class="card-body d-flex flex-column justify-content-center align-self-center">
          <h5 class="card-title">{{ documento.titulo }}</h5>
          <p class="card-text my-1">Autor: {{ documento.autor }}</p>
          <p class="card-text my-1">
            Categoria: {{ documento.tipo }}
          </p>
          <h4 class="text-center my-1">
            $ {{ documento.precio.toLocaleString() }}
          </h4>
           <router-link :to="{ name:'Documento', params:{id:documento.id} }" class="btn comprar">Comprar</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import error from '/components/error.vue'
export default {
  name: "Tienda",
  data() {
    return {
      documentos: [],
      error:'',
    };
  },
  components:{
    error
  },
  created() {
    var nav = document.getElementById("navegacion");
    nav.style.removeProperty("background-image");
    nav.style.removeProperty("background-size");
    nav.style.removeProperty("background-repeat");
    nav.style.removeProperty("height");
    const get_docs= async()=>{
      try{
      const respuesta= await fetch("http://127.0.0.1:8000/documentos")
      this.documentos= await respuesta.json()
        
        
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
