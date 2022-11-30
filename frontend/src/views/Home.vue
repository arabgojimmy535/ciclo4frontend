<template>
  <body>
    <main>
      <div class="container mt-4">
        <h1 id="titulo" class="text-center "></h1>
        <h1 class="text-center mt-5">
          Para comprar y publicar documentos,por favor inicie sesion o cree una cuenta
        </h1>
        <!-- <div class="container row d-flex mt-5 mb-5 ">
          <button class="btn col-md-5 mx-auto">
            Comprar Documentos
          </button>
          <button class="btn col-md-5 mx-auto">
            Publicar Documentos
          </button>
        </div> -->
        <div class="row">
          <div class="collage mt-5 justify-content-center">
            <div v-for="documento in documentos" :key="id">
              <img v-bind:src="documento.imagen" class="imgCollage mx-2" >
            </div>
          </div>
        </div>
        </div>
    </main>
  </body>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      documentos: [],
      url: "http://127.0.0.1:8000/",
    };
  },
  beforeCreate() {
    var nav = document.getElementById("navegacion");
    nav.style.backgroundImage =
      "url('https://stat.ameba.jp/user_images/20210607/23/youka81/fb/d6/j/o0960064014954077776.jpg?caw=800')";
    nav.style.backgroundSize = "100% 100%";
    nav.style.backgroundRepeat = "no-repeat";
    const mediaQueryNav = matchMedia("(min-width:800px)");
    const changeSize = (mq) => {
      if (mq.matches) {
        nav.style.height = "650px";
        nav.style.backgroundSize = "100% 100%";
      } else {
        nav.style.height = "500px";
        nav.style.backgroundSize = "auto auto";
      }
    };
    mediaQueryNav.addListener(changeSize);
    changeSize(mediaQueryNav);
  },
  created() {
    const get_docs= async()=>{
      try{
      const respuesta= await fetch("http://127.0.0.1:8000/documentos")
      const datos= await respuesta.json()
      this.documentos=datos}
      catch(err){
        console.log(err);
      }
    }
    get_docs();
  },
  mounted(){
    let h1= document.getElementById("titulo")
    let escribir = (mensaje) => {
      let arraymensaje = mensaje.split("");
      let i = 0;
      let imprimir = setInterval(function () {
        h1.innerHTML+= arraymensaje[i];
        i++;
        if (i==arraymensaje.length) {
          clearInterval(imprimir);
        }
      }, 50);
    };
    escribir("No busques más.En LosLibros encontrarás lo que necesitas");
  }
};
</script>
