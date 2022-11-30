<template>
  <div class="container ">
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
            <h1 class="card-title text-center">Registrarse</h1>
            <form v-on:submit.prevent="registrar()">
              <div class="mt-3">
                <label>Nombres:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombres"
                  v-model="usuario.nombres"
                />
              </div>
              <div class="mt-3">
                <label>Apellidos:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Apellidos"
                  v-model="usuario.apellidos"
                />
              </div>
              <div class="mt-3">
                <label>Email:</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="email@some.com"
                  v-model="usuario.email"
                />
              </div>
              <div class="mt-3">
                <label>Username:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  v-model="usuario.usuario"
                />
              </div>
              <div class="mt-3">
                <label>Contraseña:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  v-model="usuario.contraseña"
                />
              </div>
              <div class="mt-3 col-md-6">
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="REGISTRARSE"
                />
              </div>
              <div class="mt-4">
                <p>
                  Si ya tienes una cuenta,
                  <router-link to="/Login" class="link"
                    >Inicie sesión</router-link
                  >
                </p>
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
      usuario: {
        nombres: "",
        apellidos: "",
        usuario: "",
        email: "",
        contraseña: "",
      },
    };
  },
  created() {
    var nav = document.getElementById("navegacion");
    nav.style.removeProperty("background-image");
    nav.style.removeProperty("background-size");
    nav.style.removeProperty("background-repeat");
    nav.style.removeProperty("height");
  },
  methods: {
    registrar() {
      let user = this.usuario;
      let post = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "content-Type": "application/json",
        },
      };
      const registro = async () => {
        try{
          const respuesta= await fetch("http://127.0.0.1:8000/clientes", post)
          const datos= await respuesta.json()
          console.log(datos);
          if (respuesta.status != 404) {
            localStorage.setItem("username", datos.usuario);
            localStorage.setItem("id", datos.id);
            location.reload();
          }}catch(err){
            let alert= document.getElementById("alert")
          let mensaje = document.getElementById("mensaje");
          alert.style.backgroundColor="rgb(248, 215, 218)"
          mensaje.innerHTML += "Algo salio mal, Vuelve a intentarlo";
          setTimeout(() => {
            location.reload();
          }, 500);

          }
      };
      registro();
      this.$router.push("/")
    },
  },
};
</script>
