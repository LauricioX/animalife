<template>
  <div>
    <NavbarLeft />
    <div class="home">
      <h1>pagina de adoçao</h1>
    </div>
  </div>
</template>

<script>
import '../../public/style/style.scss'
import '../../public/style/home/style.scss'
import NavbarLeft from '../components/navbar/left.vue'

export default {
  name: "App",
  components: {
    NavbarLeft
  },
  methods:{
    fechar(){
      document.querySelector(".btn__close").classList.toggle("roted")
      document.querySelector(".nav__container").classList.toggle("fecha")
    
    },
  }
}
</script>
