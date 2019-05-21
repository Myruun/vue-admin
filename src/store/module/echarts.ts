import { EchartsState } from '@/types/views/echarts.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as EchartsApi from '@/api/echarts'

const state: EchartsState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<EchartsState, any> = {
  author: (state: EchartsState) => state.author
}

// 更改state
const mutations: MutationTree<EchartsState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: EchartsState, data: EchartsState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<EchartsState, any> = {
  UPDATE_STATE_ASYN({ commit, state: EchartsState }, data: EchartsState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Echarts.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

