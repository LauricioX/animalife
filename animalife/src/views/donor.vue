<template>
  <div>
    <NavbarLeft />
    <div class="container__doador">
      <h1>pagina de doador</h1>
      <Griddoador/>
    </div>
  </div>
</template>

<script>
import '../../public/style/style.scss'
import '../../public/style/donor/style.scss'
import NavbarLeft from '../components/navbar/left.vue'
import GridDoador from "../components/GridDoador.vue"

export default {
  name:"Doador",
  components: {
    NavbarLeft,
    GridDoador
  }
}
</script>



