import { WebsiteState } from '@/types/views/website.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as WebsiteApi from '@/api/website'

const state: WebsiteState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<WebsiteState, any> = {
  author: (state: WebsiteState) => state.author
}

// 更改state
const mutations: MutationTree<WebsiteState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: WebsiteState, data: WebsiteState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return
      }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<WebsiteState, any> = {
  UPDATE_STATE_ASYN({ commit, state: WebsiteState }, data: WebsiteState) {
    commit('UPDATE_STATE', data)
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Website.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
