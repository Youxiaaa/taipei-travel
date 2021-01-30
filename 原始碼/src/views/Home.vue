<template>
  <div>
    <!-- Loading -->
    <div class="loadingAnimation" v-if="isLoading">
      <div class="text-center">
        <h3 class="text-success h4">載入中 請稍候...</h3>
        <i class="fas fa-spinner fa-spin fa-3x text-danger"></i>
      </div>
    </div>

    <section class="preFadein" :class="{'fadeIn': loadingCompleted}">
      <!-- leftSide -->
      <div class="computerleftSide d-flex align-items-center justify-content-center flex-column">
        <div class="mt-auto">
          <h1 class="h3 text-white mt-4">台 北 市 旅 遊 網</h1>
          <select v-model="currentDistric" class="form-control">
            <option value="" selected disabled>請選擇行政區</option>
            <option :value="item" v-for="item in distric" :key="item.id"> {{ item }} </option>
          </select>
        </div>
        <div class="mt-auto mb-3">
          <ul class="d-flex justify-content-center text-center p-0 mb-0">
            <li class="list-unstyled mx-2 h4"><a href="https://www.facebook.com/YuTsungChih" target="_blank"><i class="fab fa-facebook text-white"></i></a></li>
            <li class="list-unstyled mx-2 h4"><a href="https://www.instagram.com/youxiaaaaaa/" target="_blank"><i class="fab fa-instagram text-white"></i></a></li>
            <li class="list-unstyled mx-2 h4"><a href="https://github.com/Youxiaaa" target="_blank"><i class="fab fa-github-alt text-white"></i></a></li>
          </ul>
          <h2 class="h6 text-white">Copyright &copy; 2021 YoYo游</h2>
        </div>
      </div>
      <div class="leftSide d-flex align-items-center justify-content-center flex-column" :class="{'leftSideMove': sideMove}">
        <div class="leftSideBtn">
          <div class="d-flex justify-content-center mt-2">
            <h2 class="text-white" @click="sideMove = !sideMove" v-if="sideMove">&laquo;</h2>
            <h2 class="text-white" @click="sideMove = !sideMove" v-else>&raquo;</h2>
          </div>
        </div>
        <div class="mt-auto">
            <h1 class="h3 text-white mt-4">台 北 市 旅 遊 網</h1>
            <select v-model="currentDistric" class="form-control">
              <option value="" selected disabled>請選擇行政區</option>
              <option :value="item" v-for="item in distric" :key="item.id"> {{ item }} </option>
            </select>
        </div>
        <div class="mt-auto mb-3">
          <ul class="d-flex justify-content-center text-center p-0 mb-0">
            <li class="list-unstyled mx-2 h4"><a href="https://www.facebook.com/YuTsungChih" target="_blank"><i class="fab fa-facebook text-white"></i></a></li>
            <li class="list-unstyled mx-2 h4"><a href="https://www.instagram.com/youxiaaaaaa/" target="_blank"><i class="fab fa-instagram text-white"></i></a></li>
            <li class="list-unstyled mx-2 h4"><a href="https://github.com/Youxiaaa" target="_blank"><i class="fab fa-github-alt text-white"></i></a></li>
          </ul>
          <h2 class="h6 text-white">Copyright &copy; 2021 YoYo游</h2>
        </div>
      </div>
      <!-- rightSide -->
      <div class="computerrightSide">
        <div class="container">
          <div class="row">
            <div class="col-md-3 my-3" v-for="item in filterData[currentPage]" :key="item.id">
              <div class="card h-100" @click.prevent="checkDetail(item)">
                <div class="card-header p-0 d-flex justify-content-center border-0">
                  <img :src="item.images[0].src" alt="" height="170px" v-if="item.images[0]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg/1200px-%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg.png" alt="" height="170px" v-else>
                </div>
                <div class="card-body p-0 py-3 pl-2 d-flex justify-content-center flex-column">
                  <h2 class="h6 text-primary d-flex"> {{ item.name }} </h2>
                  <div>
                    <span class="badge badge-primary mr-1" v-for="items in item.category" :key="items.id" :class="{'badge-danger': items.id > 15}"> {{ items.name }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example" class="d-flex justify-content-center my-3">
            <ul class="pagination">
              <li class="page-item" :class="{'pageDisabled': currentPage === 0}">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent="currentPage = currentPage - 1">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item" :class="{'active': currentPage === (item - 1)}" v-for="item in (newPaginationpages + 1)" :key="item.id"><a class="page-link" href="#" @click.prevent="currentPage = item - 1"> {{ item }} </a></li>
              <li class="page-item" :class="{'pageDisabled': currentPage === newPaginationpages}">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="currentPage = currentPage + 1">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="rightSide">
        <!-- 遮罩 -->
        <div class="curtain" :class="{'curtainShow': sideMove}"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-3 my-3" v-for="item in filterData[currentPage]" :key="item.id">
              <div class="card" @click.prevent="checkDetail(item)">
                <div class="card-header p-0 d-flex justify-content-center">
                  <img :src="item.images[0].src" alt="" width="100%" v-if="item.images[0]">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg/1200px-%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.svg.png" alt="" height="170px" v-else>
                </div>
                <div class="card-body">
                  <h2 class="h5 text-secondary"> {{ item.name }} </h2>
                  <div>
                    <span class="badge badge-primary mr-1" v-for="items in item.category" :key="items.id" :class="{'badge-danger': items.id > 15}"> {{ items.name }} </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex mx-auto">
              <span class="d-flex align-self-center mr-2">第</span>
              <select v-model="currentPage" class="p-2">
                <option value="0"> 1 </option>
                <option :value="item" v-for="item in (newPaginationpages + 1)" :key="item.id"> {{ item + 1}} </option>
              </select>
              <span class="d-flex align-self-center ml-2">頁</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      getPage: 0,
      total: 0,
      paginationPage: 0,
      newPaginationpages: 0,
      distric: ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
      currentDistric: '',
      currentPage: 0,
      newArray: [],
      sideMove: false,
      sessionData: JSON.parse(sessionStorage.getItem('arrayData')) || [],
      loadingCompleted: false
    }
  },
  methods: {
    checkDetail (item) {
      const vm = this
      setTimeout(() => {
        vm.loadingCompleted = false
      }, 10)
      setTimeout(() => {
        vm.$router.push(`/detail/${item.id}`)
      }, 300)
      setTimeout(() => {
        vm.$bus.$emit('getDetail', item)
      }, 400)
    }
  },
  computed: {
    filterData () {
      const vm = this
      let items = []
      const newData = []
      if (vm.currentDistric !== '') {
        items = vm.newArray.filter((item) => item.address.indexOf(vm.currentDistric) !== -1)
        vm.sideMove = false
        vm.currentPage = 0
      } else {
        items = vm.newArray
        vm.sideMove = false
        vm.currentPage = 0
      }
      items.forEach((item, i) => {
        if (i % 32 === 0) {
          newData.push([])
        }
        const page = parseInt(i / 32)
        vm.newPaginationpages = page
        newData[page].push(item)
      })
      return newData
    }
  },
  created () {
    const vm = this
    vm.isLoading = true
    if (sessionStorage.getItem('arrayData') === null) {
      vm.$http.get('https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All').then((res) => {
        vm.total = res.data.total
        vm.paginationPage = parseInt((vm.total / 30) + 1)
        for (var i = 0; i < vm.paginationPage; i++) {
          setTimeout(() => {
            const api = `https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=${vm.getPage += 1}`
            vm.$http.get(api).then((res) => {
              const cache = vm.sessionData
              cache.push(res.data.data)
              sessionStorage.setItem('arrayData', JSON.stringify(cache))
            })
            // 二維陣列轉一維陣列
            vm.newArray = [].concat.apply([], vm.sessionData)
          }, 500 * i)
        }
        vm.isLoading = false
      })
    } else {
      // 二維陣列轉一維陣列
      vm.newArray = [].concat.apply([], vm.sessionData)
      vm.isLoading = false
    }
    setTimeout(() => {
      vm.loadingCompleted = true
    }, 10)
    vm.$bus.$on('getDistric', (distric) => {
      vm.currentDistric = distric
      setTimeout(() => {
        vm.loadingCompleted = true
      }, 10)
    })
  }
}
</script>
