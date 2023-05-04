<script>
    import { senatorIndex } from "../stores.js";
    import senate from "../senate-data.json";

    var boundsCheck = null; 
    var incrementDisabled = false;
    var decrementDisabled = false;

    // bounds checker
    senatorIndex.subscribe((value) => {
        if (value == senate.length-1) {
            incrementDisabled = true;
        } else if (value == 0) {
            decrementDisabled = true; 
        } else {
            incrementDisabled = false;
            decrementDisabled= false; 
        }

        boundsCheck = value;
  });

    function increment() {
            senatorIndex.update((n) => n + 1);
    }

    function decrement() {
        senatorIndex.update((n) => n - 1);
    }

    function random() {
        senatorIndex.set(Math.floor(Math.random() * 103));
    }
</script>

<div class="nav-buttons center-screen">
    <button on:click={decrement} disabled={decrementDisabled}>Previous</button>
    <button on:click={increment} disabled={incrementDisabled}>Next</button>
    <button on:click={random}>Random</button>
</div>

<style>
    .nav-buttons {
        margin: 10px;
    }

    .center-screen {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>
