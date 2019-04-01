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
