import { Plugin } from '../typings';

export default class BaiduOcr extends Plugin {

  public static code: String = 'baidu_orc';

  private static SERVICES: Map<String, String> = new Map([
    ['idcard', '身份证'],
    ['bank_card', '银行卡'],
    ['driving_license', '驾驶证'],
    ['vehicle_license', '行驶证'],
    ['quota_invoice', '定额发票'],
  ])

  list() {
    return BaiduOcr.SERVICES;
  }

  mapping(name: String) {
    return BaiduOcr.SERVICES.get(name);
  }

  invoke(serviceName, ...args) {
    return new Promise((resolve) => {
      console.log(`${serviceName} 服务调用中...`, ...args);
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
}