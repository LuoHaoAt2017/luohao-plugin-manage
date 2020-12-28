import pkg from '../package.json';
import PluginManage from './plugin-manage';

const LuoHaoPluginManage = {};
LuoHaoPluginManage.version = pkg.version;
LuoHaoPluginManage.author = pkg.author;
LuoHaoPluginManage.install = function(Vue) {
  if(window.$plugins) {
    return;
  }
  const instance = PluginManage.getInstance();
  instance.install(Vue);
}
