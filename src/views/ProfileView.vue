<template>
  <h1>hallo</h1>
</template>

<script>
import Datepicker from "vue3-datepicker";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      selectedDate: null,
      confirmedDate: null,
      showCalendar: false,
    };
  },
  methods: {
    openCalendar() {
      this.showCalendar = true;
    },
    updateSelectedDate(newDate) {
      // Wird ausgelöst, wenn ein Datum ausgewählt wird
      this.selectedDate = newDate;
    },
    confirmDate() {
      // Wird ausgelöst, wenn der Kalender geschlossen wird
      this.confirmedDate = this.selectedDate;
      this.showCalendar = false; // Kalender schließen nach Bestätigung
    },
  },
};
</script>

<style>
/* Hier kannst du deine App-Styles hinzufügen */
.app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  color: blue;
}

/* Styles für das Kalender Popup-Fenster */
.calendar-popup {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 9999;
}
</style>
