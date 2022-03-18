<template>
  <div>
    <NavbarLeft />
    <div class="container__doador">
      <h1>pagina de Adoção</h1>
       <GridAdotar/>
    </div>
  </div>
</template>

<script>
import '../../public/style/style.scss'
import '../../public/style/home/style.scss'
import NavbarLeft from '../components/navbar/left.vue'
import GridAdotar from "../components/GridAdotar.vue"

export default {
  name: "App",
  components: {
    NavbarLeft,
    GridAdotar
  },
  methods:{
    fechar(){
      document.querySelector(".btn__close").classList.toggle("roted")
      document.querySelector(".nav__container").classList.toggle("fecha")
    },
  }
 
  
}
</script>
