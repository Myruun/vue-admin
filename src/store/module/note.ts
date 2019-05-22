import { NoteState } from '@/types/views/note.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as NoteApi from '@/api/note'

const state: NoteState = {
  author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<NoteState, any> = {
  author: (state: NoteState) => state.author
}

// 更改state
const mutations: MutationTree<NoteState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: NoteState, data: NoteState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        return
      }
      // state[key] = data[key]
    }
  }
}

const actions: ActionTree<NoteState, any> = {
  UPDATE_STATE_ASYN({ commit, state: NoteState }, data: NoteState) {
    commit('UPDATE_STATE', data)
  }
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Note.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
