import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    memoList : []
  },
  mutations: {
    updateMemoList(state,playload) {
      state.memoList = playload
    }
  },
  actions: {
    async updateMemoList(context) {

      try {
        let {status,data} = await axios.get('http://localhost:8000/api/v1/memo/find/skip/0/limit/100')
        console.log(status)
        console.log(data);

        context.commit('updateMemoList',data.d);

      }
      catch(e) {
        console.log(e);
      }

    }


  },
  modules: {
  }
})
