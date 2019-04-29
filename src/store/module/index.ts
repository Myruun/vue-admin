import { IndexState } from '@/types/views/index.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as IndexApi from '@/api/index'

const state: IndexState = {
  isCollapse: true
}

// 强制使用getter获取state
const getters: GetterTree<IndexState, any> = {
  isCollapse: (state: IndexState) => state.isCollapse
}

// 更改state
const mutations: MutationTree<IndexState> = {
  // 更新state都用该方法
  SET_AUTHOR(state: IndexState, data: boolean) {
    state.isCollapse = data
  }
}

const actions: ActionTree<IndexState, any> = {
  UPDATE_STATE_ASYN({ commit }, data: IndexState) {
    commit('UPDATE_STATE', data)
  },
  GET_DATA_ASYN() {
    // IndexApi.getData()
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
