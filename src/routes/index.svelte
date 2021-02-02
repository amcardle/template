<script lang="ts">
  import ExampleComponent from "../components/ExampleComponent.svelte";
</script>

<main>
  <h1>Template</h1>
  <ExampleComponent />
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
