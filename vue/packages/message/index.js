/* eslint-disable */
import Vue from 'vue';
import message from './message.vue';
import merge from '../../utils/merge';

let CONFIRM_TEXT = '确定';
let CANCEL_TEXT = '取消';

let defaultConfig = {
  title: '提示',
  message: '',
  type: '',
  showInput: false,
  showClose: true,
  modalFade: false,
  lockScroll: false,
  closeOnClickModal: true,
  inputValue: null,
  inputPlaceholder: '',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
  confirmButtonClass: '',
  cancelButtonClass: ''
};

let MessageConstructor = Vue.extend(message);

let currentMsg, instance;
let msg = [];

const defaultCallback = action => {
  if (currentMsg) {
    let callback = currentMsg.callback;
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action);
      } else {
        callback(action);
      }
    }
    if (currentMsg.resolve) {
      let $type = currentMsg.options.$type;
      if ($type === 'confirm' || $type === 'prompt') {
        if (action === 'confirm') {
          if (instance.showInput) {
            currentMsg.resolve({
              value: instance.inputValue,
              action
            });
          } else {
            currentMsg.resolve(action);
          }
        } else if (action === 'cancel' && currentMsg.reject) {
          // currentMsg.reject(action);
        }
      } else {
        currentMsg.resolve(action);
      }
    }
  }
};

let initInstance = function () {
  instance = new MessageConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};

let showNextMsg = function () {
  if (!instance) {
    initInstance();
  }

  if (!instance.value || instance.closeTimer) {
    if (msg.length > 0) {
      currentMsg = msg.shift();

      let options = currentMsg.options;
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape'].forEach(prop => {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      document.body.appendChild(instance.$el);

      Vue.nextTick(() => {
        instance.value = true;
      });
    }
  }
};

let Message = function (options, callback) {
  if (typeof options === 'string') {
    options = {
      title: options
    };
    if (arguments[1]) {
      options.message = arguments[1];
    }
    if (arguments[2]) {
      options.type = arguments[2];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) { // eslint-disable-line
      msg.push({
        options: merge({}, defaultConfig, Message.defaultConfig || {}, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });

      showNextMsg();
    });
  } else {
    msg.push({
      options: merge({}, defaultConfig, Message.defaultConfig || {}, options),
      callback: callback
    });

    showNextMsg();
  }
};

Message.setdefaultConfig = function (defaultConfig) {
  Message.defaultConfig = defaultConfig;
};

Message.alert = function (title, message, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return Message(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

Message.confirm = function (title, message, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return Message(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

Message.prompt = function (title, message, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return Message(merge({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt'
  }, options));
};

Message.close = function () {
  if (!instance) return;
  instance.value = false;
  msg = [];
  currentMsg = null;
};

export default Message;
