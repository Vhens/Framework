import Counter from './counter/src/counter';

const Components = {
  Counter
};

const install = (Vue) => {
  Object.keys(Components).forEach((key) => {
    Vue.component(`gt${key}`, Components[key]);
  });
};

export default Object.assign({}, Components, { install });