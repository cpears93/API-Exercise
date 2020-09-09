<template lang="html">
        <form v-on submit.prevent="handleSubmit">
            <label for =task>Task:</label>
            <input type="text" name="task" v-model="task" />

            <label for =task>Complete:</label>
            <input type="text" name="complete" v-model="complete" 
            
            <input type="submit" value="Save" />
	    </form>   
</template>

<script>
import {eventBus} from '../main';
export default {
    name: 'task-form',
    data(){
        return {
            task: "",
            complete: ""
        }
    },
    methods: {
        handleSubmit(){
            const url = `http://localhost:3000/api/${this.type}`;
            const payload = {
                task: this.task,
                complete: this.complete
            };

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'application/json' }
			}).then(response => {
				eventBus.$emit("refresh-data");
				this.name = this.brand = this.type = "";
			});
		}
	}
}
</script>

<style lang="css" scoped>
</style>