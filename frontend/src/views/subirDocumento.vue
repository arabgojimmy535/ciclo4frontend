<template>
  <div class="container">
    <div class="card mt-5">
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://stat.ameba.jp/user_images/20210607/23/youka81/fb/d6/j/o0960064014954077776.jpg?caw=800"
            class="img-fluid rounded-start imgRegistro"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h1 class="card-title text-center">Subir Documento</h1>
            <form v-on:submit.prevent="" enctype="multipart/form-data">
              <div class="mt-3">
                <label>Titulo:</label>
                <input type="text" class="form-control" placeholder="Titulo"
                v-model="documento.titulo" />
              </div>
              <div class="mt-3">
                <label>Autor:</label>
                <input type="text" class="form-control" placeholder="Autor" 
                v-model="documento.autor"/>
              </div>
              <div class="mt-3">
                <label>Imagen:</label>
                <input   type="file" class="form-control"/>
              </div>
              <div class="mt-3">
                <label>Tipo:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tipo"
                  v-model="documento.tipo"
                />
              </div>
              <div class="mt-3">
                <label>Precio:</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="12.000"
                  v-model="documento.precio"
                />
              </div>
              <div class="mt-3">
                <label>Stock:</label>
                <input type="number" class="form-control" placeholder="10" 
                v-model="documento.stock"/>
              </div>
              <div class="mt-3">
                <label>Digital:</label>
                <input type="checkbox" class="mx-2" placeholder="Digital" 
                v-model="documento.digital"/>
              </div>
              <div class="mt-3 col-md-6">
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="PUBLICAR"
                />
              </div>
            </form>
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
      documento: {
          titulo: "",
          autor: "",
          imagen: "",
          tipo: "",
          precio: 0,
          stock: 0,
          digital: true,
        }
      }
    },
    created(){
      console.log(Math.random()*10);
      
    }
  }
</script>
