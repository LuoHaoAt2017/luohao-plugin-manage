import pkg from '../package.json';
import PluginManage from './plugin-manage';

const LuoHaoPluginManage = {};
LuoHaoPluginManage.version = pkg.version;
LuoHaoPluginManage.author = pkg.author;
LuoHaoPluginManage.install = function(Vue) {
  if(window.$plugins) {
    return;
  }
  PluginManage.install(Vue);
}

export default LuoHaoPluginManage;