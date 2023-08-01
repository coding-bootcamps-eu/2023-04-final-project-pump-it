<template>
  <article>
    <section>
      <h1>Aktive Trainingspläne</h1>
      <p>Noch kein Trainingsplan definiert</p>
    </section>
  </article>
  <div>
    <button @click="TrainingsplanErstellen">Trainingsplan anlegen</button>
  </div>
</template>

<script>
export default {
  methods: {
    TrainingsplanErstellen() {
      this.$router.push("/chosecategorie");
    },
  },
};
</script>
