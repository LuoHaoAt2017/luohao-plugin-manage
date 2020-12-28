

export interface PluginOption {

}

export abstract class Plugin {
  public abstract invoke(serviceName, ...args);
}