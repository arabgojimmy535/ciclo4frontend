<template>
  <div class="container justify-content-center">
      <div id="error"></div>
      <div class="col-md-6 mx-auto py-3 rounded" id="alert">
        <h4 id="mensaje" class="text-center"></h4>
          </div>
    <div v-if="documento" class="ms-5 card compraDocumento ">
      <div class="row" >
        <div class="col-md-5 divImgDocumento">
          <img
            v-bind:src="documento.imagen"
            class="img-fluid rounded-start imgDocumento"
            alt=""
          />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h1 class="card-title text-center my-2">{{ documento.titulo }}</h1>
            <div class="mt-2">
              <h6>Autor:</h6>
              <h4>{{ documento.autor }}</h4>
            </div>
            <div class="mt-2">
              <h6>Categoria:</h6>
              <h4>{{ documento.tipo }}</h4>
            </div>
            <div class="mt-2">
              <h6>Stock:</h6>
              <h4>{{ documento.stock }}</h4>
            </div>
            <div class="mt-2">
              <h6>Disponible en digital:</h6>
              <div v-if="documento.digital">
                <h4>Si</h4>
                <h6 class="mt-4">Elige si quieres el libro digital o fisico</h6>
                <select class="mt-2 rounded btn" v-model="compra_digital">
                    <option value="false">Documento Fisico</option>
                    <option value="true">Documento Digital</option>
                </select>
              </div>
              <div v-else>
                <h4>No</h4>
              </div>
            </div>
            <div class="mt-3">
              <h6>Precio:</h6>
              <h2>{{ documento.precio.toLocaleString() }}</h2>
            </div>
            <div>
                <h4>Metodo de Pago</h4>
                <select class="my-3 rounded btn" v-model="pago">
                    <option selected="selected" value="false">Elige el metodo de pago</option>
                    <option value="true">Tarjeta Debito</option>
                    <option value="true">Tarjeta Credito</option>
                </select>
              </div>
            <button v-on:click="compra(compra_digital,pago)" class="btn col-md-12 mt-3">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      documento: "",
      compra_digital: false,
      pago:false,
    };
  },
  created() {
    // setInterval(()=>console.log(this.pago),2000)
    let url = "http://127.0.0.1:8000/documentos/" + this.id;
    const documento = async () => {
      try {
        const respuesta = await fetch(url);
        this.documento = await respuesta.json();
        
      } catch (err) {
        let div = document.getElementById("error");
        div.style.height = "600px";
        div.style.backgroundImage =
          "url('https://static.vecteezy.com/system/resources/previews/004/865/762/non_2x/electric-socket-with-a-plug-connection-and-disconnection-concept-concept-of-404-error-connection-electric-plug-and-outlet-socket-unplugged-wire-cable-of-energy-disconnect-vector.jpg')";
        div.style.backgroundSize = "100% 100%";
      }
    };
    documento();
  },methods:{
    compra(compra_digital,pago){
      let alert= document.getElementById("alert");
      let mensaje = document.getElementById("mensaje");
      if(compra_digital && pago){
          alert.style.backgroundColor="rgb(247, 220, 111)"
          mensaje.innerHTML += "Compra Realizada Con exito</br> El link del documento llegar a su email pronto";
          setTimeout(() => {
            this.$router.push("/");
          }, 6000);
      }
      else if(pago==false){
        alert.style.backgroundColor="rgb(248, 215, 218)"
          mensaje.innerHTML += "Por favor, Seleccione un metodo de pago";
          setTimeout(() => {
            location.reload();
          }, 2000);
      }
      else if(compra_digital==false && pago){
        alert.style.backgroundColor="rgb(247, 220, 111)"
          mensaje.innerHTML += "Compra Realizada Con exito</br> El documento llegara pronto a su Domicilio";
          setTimeout(() => {
            this.$router.push("/");
          }, 6000);
      }
    }
  }
};
</script>
