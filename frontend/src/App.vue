<template>
  <header>
    <div class="navegacion">
      <nav
        class="navbar navbar-expand-lg bg-transparent px-4 pt-1 align-items-start"
        id="navegacion"
      >
        <div class="container-fluid opcionesNav" aria-hidden="true">
          <router-link class="navbar-brand" to="/">LosLibros</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
            v-if="username"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  to="/Tienda"
                  >Tienda</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {{ username }}
                </a>
                <div class="">
                  <ul class="dropdown-menu bg-transparent ">
                    <li>
                      
                      <router-link class="dropdown-item" to="/Documento/misDocumentos"
                      >Publicaciones</router-link
                      >
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/Documento/Subir" v-on:click=""
                      >Subir Documento</router-link
                      >
                    </li>
                    <li>
                      <router-link class="dropdown-item" to="/" v-on:click="logout"
                      >Cerrar Sesión</router-link
                      >
                    </li>
                  </ul>
                </div>
                </li>
            </ul>
          </div>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
            v-else
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  to="/Login"
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  to="/Registrarse"
                  >Registrarse</router-link
                >
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <router-view />
    </div>
  </header>
</template>
<script>
export default {
  name: "App",
  data(){
    return{
      username:'',

    }
  },
  mounted(){
    this.username= localStorage.getItem("username")
  },
  methods:{
    logout(){
      const cerrar=()=>{
        localStorage.clear();
        setTimeout(() => {
            location.reload();
          }, 500);
        }
        cerrar();
        this.$router.push("/");
        
      }
  }
};
</script>
