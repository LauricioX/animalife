<template>
    <div class="nav__container">
      <nav>
        <button class="btn__close" @click="fechar()">
        <i class="fa-solid fa-circle-chevron-right"></i>
        </button>
        <button class="btn">
          <router-link to="/" class="d-none"><i class="fa-solid fa-dog"></i></router-link> 
        </button>
        <button class="btn">
        <router-link to="/donor" class="d-none"><i class="fa-solid fa-cat"></i></router-link>
        </button>
      </nav>
    </div>
</template>

<script>
export default {
    methods: {
        fechar(){
            document.querySelector(".btn__close").classList.toggle("roted")
            document.querySelector(".nav__container").classList.toggle("fecha")
        },
    }
}
</script>

<style scoped>
.nav__container{
  width: 60px;
  height: 100vh;
  background-color: rgb(0, 151, 71);
  position: fixed;
  z-index: 100;

  transition: .3s;
  
}
.fecha{
width: 300px;
}
nav{
  width: 100%;
  height: 100%;
  background-color: rgb(0, 138, 41);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
  gap: 20px;
}
.d-none{
  text-decoration: none;
   color: white;
   font-size: 1.2rem;

}
.btn__close{
  background-color: rgba(240, 248, 255, 0);
  border: none;
  font-size: 2.7rem;
  color: white;
  transition: 1s;
 
}
.roted{
     transform: rotate(175deg);
}
.btn{
  width: 100%;
  max-width: 140px;
  height: 40px;
  background-color: rgb(98, 189, 98);
  border: 1px solid white;
  
}
.none{
   visibility: hidden;
}
.btn__close{
  position: absolute;
  top: 20px;
  right: 10px;
}
</style>