export default interface IUnityConfig {
  /**
   * The url to the build json file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @type {string}
   */
  loaderUrl: string;

  /**
   * The url to the build data file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @type {string}
   */
  dataUrl: string;

  /**
   * The url to the framework file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @type {string}
   */
  frameworkUrl: string;

  /**
   * The url to the unity code file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @type {string}
   */
  codeUrl: string;

  /**
   * The url where the streaming assets can be found. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @type {string}
   */
  streamingAssetsUrl?: string;

  /**
   * The applications company name.
   * @type {string}
   */
  companyName?: string;

  /**
   * The applications product name.
   * @type {string}
   */
  productName?: string;

  /**
   * The applications product version.
   * @type {string}
   */
  productVersion?: string;

  /**
   * Unity Module injection.
   * @type {Object}
   */
  modules?: Object;
}
