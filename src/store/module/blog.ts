import { BlogState } from '@/types/views/blog.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as BlogApi from '@/api/blog'

const state: BlogState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<BlogState, any> = {
  author: (state: BlogState) => state.author
}

// 更改state
const mutations: MutationTree<BlogState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: BlogState, data: BlogState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return
      }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<BlogState, any> = {
  UPDATE_STATE_ASYN({ commit, state: BlogState }, data: BlogState) {
    commit('UPDATE_STATE', data)
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Blog.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
