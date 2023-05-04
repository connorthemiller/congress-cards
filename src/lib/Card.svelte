<script>
  import Tooltip from "./Tooltip.svelte";
  import { tooltip } from './tooltip';
  import { senatorIndex } from "../stores.js";
  import senate from "../senate-data.json";
  import { set_dynamic_element_data } from "svelte/internal";

  let senatorData;

  senatorIndex.subscribe((value) => {
    senatorData = senate[value];
    //console.log(senatorData);
  });

  var description = "description";
</script>

<div class="card rcorners">
  <div class="title">
    {senatorData.short_title +
      " " +
      senatorData.first_name +
      " " +
      senatorData.last_name}
    <div title="party affiliation" use:tooltip style="float: right; padding-right: 10px;">{senatorData.party}</div>
  </div>
<Tooltip title="seniority, 1 star = 5 years, rounding up"><div class="star-group">
      {#each { length: Math.ceil(senatorData.seniority / 5) } as star, i}
        <i class="material-icons star starcolor">star</i>
      {/each}
    </div>
  </Tooltip>
  <Tooltip title="google image result"><div class="image">
    <img src={senatorData.google_entity_image} alt="Image of senator" />
  </div></Tooltip>
 
  <div class="description">
    <strong>[ {senatorData.title}]</strong><br />
    <div title="google entity description" use:tooltip style="height: 80px; overflow:hidden;">{senatorData.google_entity_description}</div>
    <hr color="black">
    
    <div style="float: right;">
      <!-- Unfortunately this is not dynamic  -->
      <strong title="these values are computed from cspan and govtrack ids - they are essentially random." use:tooltip>ATK/{Math.round(senatorData.cspan_id * .01)*10 } DEF/{Math.round(senatorData.govtrack_id*.01)*10}</strong> 
    </div>
  
  </div>


</div>

<style>
  body {
    font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
  }

  h1 {
    font-style: italic;
    color: #373fff;
  }

  .card {
    /* position: absolute; */
    margin: auto;
    max-width: 410px;
    width: 95%;
    height: 610px;
    background: #A68432;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .title {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 5px;
    max-width: 371px;
    width: 95%;
    height: 33px;
    background: #C2A350;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    color: black;
    font-weight: bold;
    text-align: left;
    padding-top: 15px;
    padding-left: 10px;
  }

  .image {
    position: relative;
    margin: 5px auto;
    max-width: 334px;
    width: 95%;
    height: 334px;
    background: #a0cdee;
    overflow: hidden;
  }

  .description {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    position: relative;
    max-width: 371px;
    width: 95%;
    height: 155px;

    background: #C2A350;
    border: 2px solid #7C5920;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px;
    overflow: hidden;
  }

  .star-group {
    text-align: right;
    margin-right: 20px;
  }

  img {
    margin: auto;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    left: -1000%;
    right: -1000%;
    top: -1000%;
    bottom: -1000%;
  }

  hr {
    color: #7C5920;
  }

  .material-icons.starcolor { color: #E0E900; }

  .rcorners {
  border-radius: 10px;
  border: 10px solid #393941;
}
</style>
