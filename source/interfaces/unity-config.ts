import { IWebGLContextAttributes } from "./webgl-context-attributes";

export interface IUnityConfig {
  /**
   * The url to the build json file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @public
   * @readonly
   * @type {string}
   */
  readonly loaderUrl: string;

  /**
   * The url to the build data file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @public
   * @readonly
   * @type {string}
   */
  readonly dataUrl: string;

  /**
   * The url to the framework file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @public
   * @readonly
   * @type {string}
   */
  readonly frameworkUrl: string;

  /**
   * The url to the unity code file generated by Unity. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @public
   * @readonly
   * @type {string}
   */
  readonly codeUrl: string;

  /**
   * The url to the framework file generated by Unity. When using a relative
   * url, keep in mind this is relative from the path where your html file is
   * served. This is set to the memory file when memory is stored in an external
   * file, otherwise it is set to an empty string.
   * @public
   * @readonly
   * @type {string}
   */
  readonly memoryUrl?: string;

  /**
   * The url to the unity code file generated by Unity. When using a relative
   * url, keep in mind this is relative from the path where your html file is
   * served. This is set to the JSON file containing debug symbols when the
   * current build is using debug symbols, otherwise it is set to an empty
   * string.
   * @public
   * @readonly
   * @type {string}
   */
  readonly symbolsUrl?: string;

  /**
   * The url where the streaming assets can be found. When using a relative url,
   * keep in mind this is relative from the path where your html file is served.
   * @public
   * @readonly
   * @type {string}
   */
  readonly streamingAssetsUrl?: string;

  /**
   * The applications company name.
   * @public
   * @readonly
   * @type {string}
   */
  readonly companyName?: string;

  /**
   * The applications product name.
   * @public
   * @readonly
   * @type {string}
   */
  readonly productName?: string;

  /**
   * The applications product version.
   * @public
   * @readonly
   * @type {string}
   */
  readonly productVersion?: string;

  /**
   * This object allow you to configure WebGLRenderingContext creation options
   * which will be pass additional context attributes to the Unity canvas.
   * @public
   * @readonly
   * @type {IWebGLContextAttributes}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
   */
  readonly webglContextAttributes?: IWebGLContextAttributes;
}
