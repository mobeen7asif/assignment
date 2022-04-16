<template>
  <AddActivity />
  <ActivityList />

</template>

<script>
import ActivityList from './components/ActivityList.vue'
import AddActivity from './components/AddActivity.vue'
import './assets/styles/main.css'
import { onMounted } from '@vue/runtime-core'
import { useActivityStore } from '@/stores/activity'
export default {
  name: 'App',
  components: {
    ActivityList,
    AddActivity
  },
  setup() {
    const activity = useActivityStore()
    onMounted(() => {
      if (!localStorage.getItem('activities')) {
        localStorage.setItem('activities', []);
      }
      else {
        activity.setActivities(JSON.parse(localStorage.getItem('activities')));
      }
    })
    return { activity }
  },
}
</script>

<style>
</style>
