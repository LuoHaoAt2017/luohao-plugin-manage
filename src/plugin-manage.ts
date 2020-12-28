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
  public getInstance(): PluginManage {
    if (!PluginManage.instance) {
      PluginManage.instance = new PluginManage();
    }
    return PluginManage.instance;
  }

  public install(host: any, opts: PluginOption) {
    // 实例化插件管理中心
    this.getInstance();

    // 注册所有的插件
    this.plugins.set(BaiduOcr.code, new BaiduOcr());

    // 挂载插件管理实例到 host 上
    if (host.prototype) {
      host.prototype.$plugins = PluginManage.instance;
    }
    window.$plugins = PluginManage.instance;
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
