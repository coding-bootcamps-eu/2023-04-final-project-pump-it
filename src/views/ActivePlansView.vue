<template>
  <header><button @click="backToHome">Zum Dashboard</button></header>
  <article>
    <section>
      <h1>Dein Trainingsplan wurde erstellt</h1>
    </section>
  </article>
  <div>
    <h2>Kategorie: Maximalkraft</h2>
    <p>Dauer: 17.07.2023 - 04.08.2023 <br />Trainingsintervall - 8 Wochen</p>
  </div>
  <div>
    <h3>Mo. 17.07.2023</h3>
    <p>Rücken und Arme</p>
  </div>

  <div><button @click="pageToCreatePlan">Plan erstellen</button></div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$router.push("/noplanactive");
    },
    pageToCreatePlan() {
      this.$router.push("/workout");
    },
  },
};
</script>
