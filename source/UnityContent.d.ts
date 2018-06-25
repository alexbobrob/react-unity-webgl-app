import IUnityConfig from "./interfaces/IUnityConfig";
import UnityComponent from "./components/Unity";
import "./Types";
export default class UnityContent {
    /**
     * the relative path to the build json file generated by Unity.
     * @type {string}
     * @private
     */
    buildJsonPath: string;
    /**
     * the relative path to the unity loader javascript file.
     * @type {string}
     * @public
     */
    unityLoaderJsPath: string;
    /**
     * The Unity component binded to this content.
     * @type {UnityComponent}
     * @private
     */
    private unityComponent?;
    /**
     * The Unity instance binded to this content.
     * @type {UnityInstance}
     * @private
     */
    private unityInstance?;
    /**
     * the Unity configuration that will be used to start the player.
     * @type {IUnityConfig}
     * @public
     */
    unityConfig: IUnityConfig;
    /**
     * The registered Unity Events.
     * @type {IUnityEvent[]}
     * @public
     */
    private unityEvents;
    /**
     * Creates a new Unity content object. This object can be used
     * @param {string} buildJsonPath the relative path to the build json file generated by Unity.
     * @param {string} unityLoaderJsPath the relative path to the unity loader javascript file.
     * @param {IUnityConfig} unityConfig the Unity configuration that will be used to start the player.
     */
    constructor(buildJsonPath: string, unityLoaderJsPath: string, unityConfig?: IUnityConfig);
    /**
     * Binds a unity component to this content.
     * @param unityComponentInstance the unity component that will be binded to this content.
     * @public
     */
    setComponentInstance(unityComponentInstance: UnityComponent): void;
    /**
     * Binds a unity player to this content.
     * @param unityPlayerInstance the unity component that will be binded to this content.
     * @public
     */
    setUnityInstance(unityInstance: UnityInstance): void;
    /**
     * Sets the unity players fullscreen mode.
     * @param {boolean} fullscreen
     */
    setFullscreen(fullscreen: boolean): void;
    /**
     * Sends an event to the Unity player that will trigger a function.
     * @param {string} gameObjectName the name of the game object in your Unity scene.
     * @param {string} methodName the name of the public method on the game object.
     * @param {any} parameter an optional parameter to pass along to the method.
     * @public
     */
    send(gameObjectName: string, methodName: string, parameter?: any): void;
    /**
     * Registers an event listener for the Unity player. These can be
     * system events like when the player is initialized or loader and
     * your custom events from Unity.
     * @param {string} eventName the event name
     * @param {Function} eventCallback the event function
     * @returns {any} The Function
     * @public
     */
    on(eventName: string, eventCallback: Function): any;
    /**
     * Triggers an event that has been registered by the on
     * function.
     * @param {string} eventName the event name
     * @param {Function} eventValue the event value
     * @public
     */
    triggerUnityEvent(eventName: string, eventValue?: any): void;
}
//# sourceMappingURL=UnityContent.d.ts.map