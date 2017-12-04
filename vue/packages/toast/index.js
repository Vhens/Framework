import Vue from 'vue';
import toast from './toast.vue';

const ToastConstructor = Vue.extend(toast);

const toastPool = [];

const getAnInstance = () => {
  if (toastPool.length > 0) {
    const instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

const returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

const removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
};

ToastConstructor.prototype.close = function() {
  this.show = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnAnInstance(this);
};

const Toast = (options = {}) => new Promise((resolve) => {
  const duration = options.duration || 3000;

  const instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';

  document.body.appendChild(instance.$el);
  Vue.nextTick(() => {
    instance.show = true;
    instance.$el.removeEventListener('transitionend', removeDom);
     /* eslint-disable */
    ~duration && (instance.timer = setTimeout(() => {
      if (instance.closed) {
        resolve();
        return;
      };
      instance.close();
      resolve();
    }, duration));
  });
  return instance;
});
export default Toast;
