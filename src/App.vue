<template>
    <div class="header-container">
        <h1>LeadHit</h1>
    </div>
    <router-view></router-view>

</template>

<script>

export default {
    name: "App"
}
</script>

<style>
.header-container {
    background: rgb(132, 99, 198);
    color: honeydew;
    text-shadow: 1px 1px 11px black;
    width: auto;
}

.header-container h1 {
    margin: 10px 0px 10px 10px;
}
</style>
