function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Plugin = function Plugin() {
  _classCallCheck(this, Plugin);
};

var BaiduOcr = /*#__PURE__*/function (_Plugin) {
  _inherits(BaiduOcr, _Plugin);

  var _super = _createSuper(BaiduOcr);

  // private opts: PluginOption;
  function BaiduOcr() {
    _classCallCheck(this, BaiduOcr);

    return _super.call(this); // this.opts = opts;
  }

  _createClass(BaiduOcr, [{
    key: "list",
    value: function list() {
      return BaiduOcr.SERVICES;
    }
  }, {
    key: "mapping",
    value: function mapping(name) {
      return BaiduOcr.SERVICES.get(name);
    }
  }, {
    key: "invoke",
    value: function invoke(serviceName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return new Promise(function (resolve) {
        var _console;

        (_console = console).log.apply(_console, ["".concat(serviceName, " \u670D\u52A1\u8C03\u7528\u4E2D...")].concat(args));

        setTimeout(function () {
          resolve(true);
        }, 2000);
      });
    }
  }]);

  return BaiduOcr;
}(Plugin);

_defineProperty(BaiduOcr, "code", 'baidu_orc');

_defineProperty(BaiduOcr, "SERVICES", new Map([['idcard', '身份证'], ['bank_card', '银行卡'], ['driving_license', '驾驶证'], ['vehicle_license', '行驶证'], ['quota_invoice', '定额发票']]));

var PluginManage = /*#__PURE__*/function () {
  // 单例模式
  function PluginManage() {
    _classCallCheck(this, PluginManage);

    _defineProperty(this, "plugins", void 0);

    this.plugins = new Map();
  } // 获取插件管理中心实例


  _createClass(PluginManage, [{
    key: "getInstance",
    value: function getInstance() {
      if (!PluginManage.instance) {
        PluginManage.instance = new PluginManage();
      }

      return PluginManage.instance;
    }
  }, {
    key: "install",
    value: function install(Vue) {
      // 实例化插件管理中心
      this.getInstance(); // 注册所有的插件

      this.plugins.set(BaiduOcr.code, new BaiduOcr()); // 挂载插件管理实例到 Vue 上

      Vue.prototype.$PluginManage = PluginManage.instance;
      window.$PluginManage = PluginManage.instance;
    }
  }, {
    key: "invoke",
    value: function invoke(pluginCode, serviceName) {
      var plugin = this.plugins.get(pluginCode);

      if (plugin) {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        return plugin.invoke.apply(plugin, [serviceName].concat(args));
      } else {
        return Promise.reject(-1);
      }
    }
  }]);

  return PluginManage;
}();

_defineProperty(PluginManage, "instance", void 0);
//# sourceMappingURL=luohao-plugin.bundle.js.map
