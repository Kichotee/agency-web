import { createStore } from 'vuex'

export default createStore({
  state: {
    cards:[{
      offer: 'web design and development', 
      text: 'Create amazing web interfaces with ',
      img:require('../assets/silky-web-design.png')
    }, {
      offer: 'Social media Marketing', 
      text: 'we use data driven tested methods to ensure your page captures your target audience perfectly ',
      img:require('../assets/3d-fluency-account-1.png')
    },
    {
      offer: 'Analytics', 
      text: 'we use data driven tested methods to ensure your page captures your target audience perfectly ',
      img:require('../assets/silky-web-design.png')
    },
    {
      offer: 'Analytics', 
      text: 'we use data driven tested methods to ensure your page captures your target audience perfectly ',
      img:require('../assets/3d-fluency-account-1.png')
    }
  
  ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
