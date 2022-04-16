<template>
  <div>
    <h2>Activity List</h2>
    <ul>
      <li :key="activity.id" v-for="activity in activity.activityList">
        <SingleActivity :activity="activity" />
      </li>
    </ul>
  </div>
</template>

<script>
import { useActivityStore } from '@/stores/activity'
import SingleActivity from './SingleActivity.vue'
export default {
  components: { SingleActivity },
  setup() {
    const activity = useActivityStore()
    return { activity }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
