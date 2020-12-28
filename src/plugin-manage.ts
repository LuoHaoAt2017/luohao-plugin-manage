import { PluginOption, Plugin } from './typings';
import BaiduOcr from './plugins/baidu-ocr';

// 插件管理中心
export default class PluginManage {

  private plugins: Map<String, Plugin>;

  private static instance: PluginManage;

  // 单例模式
  private constructor() {
    this.plugins = new Map();
  }

  // 获取插件管理中心实例
  public static getInstance(): PluginManage {
    if (!PluginManage.instance) {
      PluginManage.instance = new PluginManage();
    }
    return PluginManage.instance;
  }

  public static install(Vue: any) {
    // 实例化插件管理中心
    const $PluginManage = PluginManage.getInstance();

    // 注册所有的插件
    $PluginManage.plugins.set(BaiduOcr.code, new BaiduOcr());

    // 挂载插件管理实例到 Vue 上
    Vue.prototype.$PluginManage = $PluginManage;
    window.$PluginManage = $PluginManage;
  }

  public invoke(pluginCode, serviceName, ...args): Promise<any> {
    const plugin: Plugin | undefined = this.plugins.get(pluginCode);
    if (plugin) {
      return plugin.invoke(serviceName, ...args);
    } else {
      return Promise.reject(-1);
    }
  }
}
