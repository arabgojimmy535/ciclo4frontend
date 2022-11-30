<template>
  <div class="container">
    <div class="col-md-6 mx-auto py-3 rounded" id="alert">
        <h4 id="mensaje" class="text-center"></h4>
          </div>
    <div class="card inicioSesion">
      <div class="row">
        <div class="col-md-6 divImgLogin">
          <img
            src="https://stat.ameba.jp/user_images/20210607/23/youka81/fb/d6/j/o0960064014954077776.jpg?caw=800"
            class="img-fluid rounded-start imgLogin"
            alt=""
          />
        </div>
        <div class="col-md-6 my-3">
          <div class="card-body my-5">
            <h1 class="card-title text-center mt-4">Iniciar Sesión</h1>
            <form v-on:submit.prevent="login" class="my-5">
              <div class="mt-3">
                <label>Username:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  v-model="user.usuario"
                />
              </div>
              <div class="mt-3">
                <label>Contraseña:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  v-model="user.contraseña"
                />
              </div>
              <div class="mt-3 col-md-6">
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="INICIAR SESIÓN"
                />
              </div>
              <div class="mt-4 d-flex">
                <p>Si no tienes una cuenta,</p>
                <router-link to="/Registrarse" class="link"
                  >Create una</router-link
                >
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
      user: {
        usuario: "",
        contraseña: "",
      },
      status: 0,
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
    login() {
      let url =
        "http://127.0.0.1:8000/clientes/login/" +
        this.user.usuario +
        "/" +
        this.user.contraseña;
      const get_cliente = async () => {
        try {
          const respuesta = await fetch(url);
          const datos = await respuesta.json();
          if (respuesta.status != 404) {
            localStorage.setItem("username", datos.usuario);
            localStorage.setItem("id", datos.id);
            location.reload();
            
          }
          
        } catch (error) {
          let alert= document.getElementById("alert")
          let mensaje = document.getElementById("mensaje");
          alert.style.backgroundColor="rgb(248, 215, 218)"
          mensaje.innerHTML += "Usuario o Contraseña Invalida";
          setTimeout(() => {
            location.reload();
          }, 500);
        }
      };
      get_cliente();
      this.$router.push("/")
    },
  },
};
</script>
