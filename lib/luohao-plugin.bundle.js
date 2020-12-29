var name = "luohao-plugin-manage";
var version = "1.2.16";
var description = "插件管理";
var main = "lib/luohao-plugin.bundle.js";
var scripts = {
	build: "rollup --config rollup.config.js",
	start: "node ./lib/luohao-plugin.bundle.js",
	jest: "jest"
};
var repository = {
	type: "git",
	url: "git+https://github.com/LuoHaoAt2017/luohao-plugin-manage.git"
};
var author = "LuoHao";
var license = "ISC";
var bugs = {
	url: "https://github.com/LuoHaoAt2017/luohao-plugin-manage/issues"
};
var homepage = "https://github.com/LuoHaoAt2017/luohao-plugin-manage#readme";
var devDependencies = {
	"@babel/core": "^7.12.10",
	"@babel/plugin-proposal-class-properties": "^7.12.1",
	"@babel/plugin-transform-runtime": "^7.12.10",
	"@babel/preset-env": "^7.12.11",
	"@babel/preset-typescript": "^7.12.7",
	"@babel/runtime": "^7.12.5",
	"@rollup/plugin-babel": "^5.2.2",
	"@rollup/plugin-commonjs": "^17.0.0",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^11.0.1",
	"@rollup/plugin-typescript": "^8.1.0",
	"babel-loader": "^8.2.2",
	"core-js": "^2.6.12",
	rollup: "^2.35.1",
	tslib: "^2.0.3",
	typescript: "^4.1.3"
};
var dependencies = {
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	repository: repository,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies,
	dependencies: dependencies
};

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
  }], [{
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
      var $PluginManage = PluginManage.getInstance(); // 注册所有的插件

      $PluginManage.plugins.set(BaiduOcr.code, new BaiduOcr()); // 挂载插件管理实例到 Vue 上

      Vue.prototype.$PluginManage = $PluginManage;
      window.$PluginManage = $PluginManage;
    }
  }]);

  return PluginManage;
}();

_defineProperty(PluginManage, "instance", void 0);

var LuoHaoPluginManage = {};
LuoHaoPluginManage.version = pkg.version;
LuoHaoPluginManage.author = pkg.author;

LuoHaoPluginManage.install = function (Vue) {
  if (window.$plugins) {
    return;
  }

  PluginManage.install(Vue);
};

export default LuoHaoPluginManage;
