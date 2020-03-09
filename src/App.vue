<script lang="tsx">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "App",
    setup() {
        return (): JSX.Element => (
            <div class="App-main">
                <router-view />
            </div>
        )
    }
});
</script>
<style scoped lang="postcss">
.App-main {
    background-color: #fff000;
}
</style>