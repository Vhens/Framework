import services from '../../services';

const types = {
  DETAIL_INFO: 'DETAIL_INFO',
  DEFAIL_FAILURE: 'DEFAIL_FAILURE'
};
// state
const defaultState = {
  detail: {}
};

// getters
const getters = {
  getSiteDetails: state => state.detail,
  getError: state => state.error
};

//actions
const actions = {
  // 获取详情数据
  getSiteDetail({ commit }) {
    return new Promise((resolve, reject) => {
      services.detail.detail().then(res => {
        commit(types.DETAIL_INFO, { res });
        resolve(res);
      }).catch(e => {
        reject(e);
        commit(types.DEFAIL_FAILURE, { e });
      });
    });
  }
};

// mutations
const mutations = {
  [types.DETAIL_INFO] (state, res) {
    state.detail = res;
  },
  [types.DEFAIL_FAILURE] (state, error) {
    state.error = error;
  }
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations
};
