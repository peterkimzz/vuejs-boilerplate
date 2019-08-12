import axios from '../../plugins/axios'

export default {
  namespaced: true,
  state: {
    token: ''
  },
  getters: {
    GET_TOKEN: state => state.token || ''
  },
  mutations: {
    LOGIN(state, { token, user_id }) {
      state.token = token
      state.user_id = user_id
    }
  },
  actions: {
    LOGIN({ commit }, { id, password }) {
      return new Promise((resolve, reject) => {
        const options = {
          method: 'post',
          url: 'user/login',
          data: {
            user_id: id,
            passwd: password
          }
        }

        axios(options)
          .then(res => {
            const { data } = res.data
            const { token, user_id } = data

            localStorage.setItem('token', token)
            localStorage.setItem('user_id', user_id)

            commit('LOGIN', data)

            resolve()
          })
          .catch(err => reject(err))
      })
    }
  }
}
