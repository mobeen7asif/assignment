import { defineStore } from 'pinia'

export const useActivityStore = defineStore('activity', {
  state: () => ({
    activities: [],
    nextId: 1
  }),
  getters: {
    activityList(state) {
      return state.activities
    }
  },
  actions: {
    setActivities(data) {
      this.activities = data
    },
    addActivity(text) {
      this.activities.push({ text, id: this.nextId++, isFinished: false })
      localStorage.setItem('activities', JSON.stringify(this.activities))
    },
    deleteActivity(id) {
      this.activities = this.activities.filter(item => item.id != id);
      localStorage.setItem('activities', JSON.stringify(this.activities))
    },
    updateActivity(id, key, value) {
      let index = this.activities.findIndex(item => item.id == id);
      let activity = this.activities[index]
      activity[key] = value
      this.activities[index] = activity
      localStorage.setItem('activities', this.activities)
    },
  },
})