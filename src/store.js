//import Vue from 'vue'
//import Vuex from 'vuex'



import {createStore} from 'vuex';

const store = createStore({
state:{
  count: 0,
  customInput: "",
  //showButton: true
},
getters:{
  getCount(state){      
    return state.count;     
   }
},

actions:{
  
  async SetValue({commit}){   
    return Promise.resolve(commit('SetValue'))
  },


  
async SetValueInput({commit}, payload){   
    return Promise.resolve(commit('SetValueInput' , payload))    
  },

  IncreaseChangeCount ({commit}) {
    commit("IncreaseChangeCount");  
  },

  // async IncreaseChangeCount({commit}, payload){   
  //   return Promise.resolve(commit('IncreaseChangeCount', payload))    
  // },

  async DecreaseChangeCount({commit}, payload){   
      return Promise.resolve(commit('DecreaseChangeCount', payload))    
  },

  async ResetValue({commit}){    
    return Promise.resolve(commit('ResetValue'))   
  }
},

mutations:{


  SetValue(state){
    state.count = state.customInput
 // console.log(typeof state.count)
  },

  SetValueInput(state, payload){           
      state.customInput = payload
   //   console.log(state.customInput)
   //   console.log(typeof state.customInput)
  },

  IncreaseChangeCount(state){

     state.count++;
  },

  // IncreaseChangeCount(state,payload){           
  //   return state.count += payload        
  // },

  DecreaseChangeCount(state,payload){           
    return   state.count -= payload 
  },
  
  ResetValue(state){          
    return state.count = 0;        
  }
}
})
export default store










// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     count: 0
//   },
//   getters: {
//     parity: state => state.count % 2 === 0 ? 'even' : 'odd'
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     }
//   },
//   actions: {
//     increment: ({ commit }) => commit('increment'),
//     decrement: ({ commit }) => commit('decrement'),
//     incrementIfOdd: ({ commit, getters }) => getters.parity === 'odd' ? commit('increment') : false,
//     incrementAsync: ({ commit }) => {
//       setTimeout(() => { commit('increment') }, 1000);
//     }
//   }
// });