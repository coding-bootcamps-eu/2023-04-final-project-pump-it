<template>
  <article>
    <section>
      <h1>Wähle eine Kategorie für deinen Trainingsplan</h1>
    </section>
  </article>
  <div>
    <h2>Kategorie</h2>
    <label for="Chose">Maximalkraft</label
    ><input v-model="Chose" id="Chose" type="text" />
  </div>
  <div>
    <h3>Startpunkt</h3>
    <label for="date">Startpunkt</label>
    <input type="datetime-local" name="date" id="date" />
  </div>
  <div>
    <h4>Maximalgewicht-KG</h4>
    <label for="Maximalgewicht"></label>
    <input type="number" id="weight" min="0" max="1000" />
  </div>
</template>

<script scoped>
export default {
  data() {
    return {};
  },
};
</script>
