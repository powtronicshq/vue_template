/* jshint esversion: 6 */

import * as types from '@/store/types/data-mutation-types';
// import * as api from '@/api/api'
// import * as ui from '@/components/notice'
// import * as service from '@/service/login'
import * as cookie from '../../utils/cookie';
import * as menusObj from '../../config/menus';

const state = {
  username: cookie.getCookie('username'), // 用户名
  token: cookie.getCookie('token'), // 通讯令牌
  uuid: cookie.getCookie('uuid'), // 用户唯一标识
  role: '' // 个人权限
};

const actions = {
  setUserName({
    commit
  }, name) {
    commit(types.SETUSERNAME, {
      name: name
    });
  },
  setToken({
    commit
  }, token) {
    commit(types.SETTOKEN, {
      token: token
    });
  },
  setUUID({
    commit
  }, uuid) {
    commit(types.SETUUID, {
      uuid: uuid
    });
  },
  setRole({
    commit
  }, {
    role
  }) {
    commit(types.SETROLE, {
      role: role
    });
  },
};

const mutations = {
  [types.SETUSERNAME](state, {
    name
  }) {
    cookie.setCookie('username', name);
    state.username = name;

  },
  [types.SETTOKEN](state, {
    token
  }) {
    cookie.setCookie('token', token);
    state.token = token;
  },
  [types.SETUUID](state, {
    uuid
  }) {
    cookie.setCookie('uuid', uuid);
    state.uuid = uuid;
  },
  [types.SETROLE](state, {
    role
  }) {

    cookie.setCookie('role', role);
    state.role = role;
  }

};




const getters = {
  username(state) {
    return state.username;
  },
  token(state) {
    return state.token;
  },
  uuid(state) {
    return state.uuid;
  },
  role(state) {
   
    return state.role;
  }

};

export default {
  state,
  getters,
  actions,
  mutations
};
