# VueJs plugin using TypeScript

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Create plugin

1. Create `plugin.ts` inside `src/plugins` directory
2. Import Vue
```typescript
import _Vue from 'vue';
```
3. Declare export interface
```typescript
export interface ImyPlugin {
   one: string;
   two: string;
}
```
4. Declare plugin class with implementing interface
```typescript
class ClMyPlugin implements ImyPlugin {
   public one: string = '1';
   public two: string = '2';
}
```
5. Set plugin function as exported
```typescript
export default function myPlugin(Vue: typeof _Vue): void {
   // Declare $myPlugin inside Vue as global variable
   Vue.prototype.$myPlugin = new ClMyPlugin();
}
```
6. Declare module with Vue interface as our plugin
```typescript
declare module 'vue/types/vue' {
   interface Vue {
       $myPlugin: ImyPlugin;
   }
}
```

## Full code `src/plugins/plugin.ts`
```typescript
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

```

## Include your plugin in `src/main.ts` file
```typescript
// Import plugin
import myPlugin from './plugins/plugin';

// Use plugin
Vue.use(myPlugin);
```

## Fill free to use your plugin via Vue global variable in `src/components/my_component.vue` file 
```vue
<template>
    <div class="home">
        {{value}}
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component()
    export default class Home extends Vue {
        public value: string = this.$myPlugin.two;
    }
</script>
```