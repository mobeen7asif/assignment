<template>

  <span style="cursor:pointer" @click="updateActivity(activity)" :class="{ done: activity.isFinished }"> {{ activity.text }}
  </span>
  <button @click="deleteActivity(activity.id)">Delete</button>

</template>

<script>
import { useActivityStore } from '@/stores/activity'
export default {
  props: ['activity'],
  setup() {
    const activityStore = useActivityStore()

    function deleteActivity(id) {
      activityStore.deleteActivity(id)
    }
    function updateActivity(activity) {
      activityStore.updateActivity(activity.id, 'isFinished', !activity.isFinished)
    }

    return {
      deleteActivity,
      activityStore,
      updateActivity
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.done {
  text-decoration: line-through
}
</style>
