<template>
  <article>
    <section>
      <h1><i>Kategorie für deinen Trainingsplan</i></h1>
    </section>
  </article>
  <div>
    <p>Kategorie</p>
  </div>
  <div>
    <p>Startpunkt :</p>
    <label for="date"></label>
    <input type="datetime-local" name="date" id="date" />
  </div>
  <div>
    <h4>Maximalgewicht-KG</h4>
    <label for="Maximalgewicht"></label>
    <input type="number" id="weight" min="0" max="1000" />
  </div>
  <button @click="createdPlan">auswählen</button>
</template>

<script scoped>
export default {
  data() {
    return {};
  },
  methods: {
    createdPlan() {
      this.$router.push("/createdplan");
    },
  },
};
</script>
