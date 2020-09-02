export default {
    namespaced: true,
  // 局部状态
  state: {
    name: "拉布拉多",
    age: 1
  },
  // 局部读取
  getters: {
    desc: state => "宠物：" + state.name
  },
  // 局部变化
  mutations: {
    increment(state, payload) {
      state.age += payload.num;
    }
  },
  // 局部动作
  actions: {
    grow(context, payload) {
      setTimeout(() => {
        context.commit("increment", payload);
      }, 1000);
    }
  }
};