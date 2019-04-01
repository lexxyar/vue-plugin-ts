// Import Vue
import _Vue from 'vue';

// Declare export interface
export interface ImyPlugin {
    one: string;
    two: string;
}

// Declare plugin class with implementing interface
class ClMyPlugin implements ImyPlugin {
    public one: string = '1';
    public two: string = '2';
}

// Set plugin function as exported
export default function myPlugin(Vue: typeof _Vue): void {
    // Declare $myPlugin inside Vue as global variable
    Vue.prototype.$myPlugin = new ClMyPlugin();
}

// Declare module with Vue interface as our plugin
declare module 'vue/types/vue' {
    interface Vue {
        $myPlugin: ImyPlugin;
    }
}
