<template>
  <div>
    <NavbarLeft />
    <div class="home">
      <ul>
        <li style="margin-bottom: 20px" v-for="(data, index) in Datas" :key="index">
          <hr>
          {{data.name}}
          <ul>
            animais
            <li v-for="(animal, i) in data.animals" :key="i">
              {{animal.name}}
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
import '../../public/style/style.scss'
import '../../public/style/home/style.scss'
import NavbarLeft from '../components/navbar/left.vue'
import axios from "axios"

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
  },
  data(){
    return {
      Datas: ''
    }
  },
  mounted(){
    const data = {
        name: 'Laurício',
        email: "lauricio@gmail.com",
        login: "laruricio",
        password: "laruricogames"
    }
    axios.post('http://localhost:3000/animals',data)

    axios.get('http://localhost:3000/users').then(res => {
      this.Datas = res.data
      console.log(this.data)
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
