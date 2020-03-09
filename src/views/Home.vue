<script lang="tsx">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: "Home",
    setup(_, context) {
        return (): JSX.Element => (
            <div class="Home-main">
                { context.root.$t("home.welcome").toString() }
            </div>
        )
    }
});
</script>
<style scoped lang="postcss">
.Home-main {
    color: #333fff;
}
</style>