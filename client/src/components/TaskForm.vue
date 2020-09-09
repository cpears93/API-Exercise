<template lang="html">
        <div id="task-list">
            <h2>Task List!</h2>
            <ul>
                <li v-for="task in tasks">{{task.task}} by {{task.complete}}</li>
            </ul>
        </div>            
</template>

<script>
export default {
    name: "task-list",
    props: ["tasks"]
}
</script>

<style lang ="css" scoped>
</style>