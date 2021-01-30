<template>
  <div>
    <div class="container preFadein" :class="{'fadeIn': isLoading}">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-light borderAdd mt-3 ml-3">
            <li class="breadcrumb-item"><a href="#" @click.prevent="returnPage(data.distric)"> {{ data.distric }} </a></li>
            <li class="breadcrumb-item active" aria-current="page"> {{ data.name }} </li>
          </ol>
        </nav>
      </div>
      <div class="row">
        <div class="col-md-6 my-3">
          <img :src="data.images[0].src" alt="" :key="data.id" v-if="data.images[0]" height="365px" class="d-flex mx-auto computerImage">
          <img :src="data.images[0].src" alt="" :key="data.id" v-if="data.images[0]" width="100%" class="d-flex mx-auto responsiveImage">
          <div v-else class="d-flex justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg/1200px-%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg.png" alt="" height="400px">
          </div>
        </div>
        <div class="col-md-6 my-3">
          <div class="borderAdd p-4" @click="isOpen = !isOpen">
            <h2 class="h1 mb-5"> {{ data.name }} </h2>
            <h5 class="h6 lg-fix" :class="{'ellipsis': isOpen}"> {{ data.introduction }} </h5>
            <a :href="data.facebook" target="_blank" v-if="data.facebook"> <i class="fab fa-facebook-square fa-2x"></i> </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 d-flex flex-column mx-auto">
          <h2 class="h1 text-center my-5 borderAdd p-3">圖 片 細 節</h2>
          <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel" v-if="data.images[0]">
            <div class="carousel-inner">
              <div class="carousel-item active" data-interval="2000">
                <img :src="data.images[0].src" class="d-block w-100 mb-5" alt="...">
              </div>
              <div class="carousel-item" data-interval="2000" v-for="item in data.images" :key="item.id">
                <img :src="item.src" class="d-block w-100 mb-5" alt="...">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div v-else class="d-flex justify-content-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg/1200px-%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg.png" alt="" height="400px">
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {},
      isOpen: true,
      isLoading: false
    }
  },
  methods: {
    returnPage (distric) {
      const vm = this
      setTimeout(() => {
        vm.isLoading = false
      }, 10)
      setTimeout(() => {
        vm.$router.push('/')
      }, 300)
      setTimeout(() => {
        vm.$bus.$emit('getDistric', distric)
      }, 400)
    }
  },
  created () {
    const vm = this
    vm.$bus.$on('getDetail', (item) => {
      vm.data = item
      setTimeout(() => {
        vm.isLoading = true
      }, 50)
    })
  }
}
</script>
