<template>
 <div id="app">
   <h1>{{ msg }}</h1>
   <div class="row" id="eventList">
       <h2>Event List</h2>
 </div>
 </div>
</template>


<script>
export default {
 name: "app",
 computed: {
 }
};
</script>

<style lang="css">
#app h2 {
 font-size: 2rem;
}
.datetime-label {
 color: #9e9e9e;
 font-size: .8rem;
}
</style>