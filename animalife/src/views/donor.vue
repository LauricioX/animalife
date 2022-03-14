<template>
  <div>
    <NavbarLeft />
    <div class="container__doador">
      <h1>pagina de doador</h1>
    </div>
  </div>
</template>

<script>
import '../../public/style/style.scss'
import '../../public/style/donor/style.scss'
import NavbarLeft from '../components/navbar/left.vue'

export default {
  name:"Doador",
  components: {
    NavbarLeft
  }
}
</script>



