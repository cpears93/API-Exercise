<template>
    <div id ="app">
        <task-form />
        <task-list :tasks="tasks"/>
    </div>    
</template>

<script>

import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';

import {eventBus} from './main';

export default {
    name: 'app',
    data () {
        return {
            tasks: [],
        }
    },
    methods: {
        fetchData(){
            fetch("http://localhost:3000/api/tasks")
            .then(response => response.json())
            .then(tasks => this.tasks = tasks);
        }
    },
    mounted () {
        this.fetchData();

        eventBus.$on("refresh-data", this.fetchData);
    },
    components: {
        'task-form': TaskForm,
        'task-list': TaskList
    }
}
</script>

<style>

</style>