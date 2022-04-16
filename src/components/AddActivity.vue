<template>

  <div class="form">
    <label>Add new Activity</label>
    <input type="text" v-model="newActivityText" name="title">
    <button @click="addActivity">Add</button>
  </div>


</template>

<script>
import { useActivityStore } from '@/stores/activity'
import { ref } from 'vue';
export default {
  props: [],
  setup() {
    const activity = useActivityStore()
    const newActivityText = ref('')

    function addActivity() {
      console.log(newActivityText.value)
      activity.addActivity(newActivityText.value)
      newActivityText.value = ''
    }
    return {
      newActivityText,
      addActivity,
      activity
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
