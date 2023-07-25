<template>
  <h1>
    App wird gestartet!
    <p>
      1. Wenn kein Account besteht, wird dem nutzer eine Begrüßung
      angezeigt!"Herzlich willkommen in deinem persönlichen Pump-it Tagebuch!"
      bei bestehendem account <i>" Willkommen {{ name }}"</i>
    </p>
  </h1>
  <form @submit.prevent="saveData" v-if="hasProfile === false">
    <div>
      <label for="name">Name</label
      ><input v-model="name" id="name" type="text" />
    </div>
    <div>
      <label for="age">Alter</label
      ><input v-model="age" id="age" type="number" min="0" max="99" />
    </div>
    <div>
      <label for="gender">Geschlecht</label>
      <select v-model="gender" id="gender">
        <option value="male">Männlich</option>
        <option value="female">Weiblich</option>
      </select>
    </div>
    <div>
      <button>Speichern</button>
    </div>
  </form>
  <p v-else>Willkommen {{ name }}</p>
</template>

<script>
export default {
  data() {
    return {
      hasProfile: false,
      name: "",
      age: 0,
      gender: "",
    };
  },
  methods: {
    saveData() {
      const userData = {
        name: this.name,
        age: this.age,
        gender: this.gender,
      };
      console.log(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
    },
  },
  created() {
    if (localStorage.getItem("userData")) {
      this.hasProfile = true;
      const userData = JSON.parse(localStorage.getItem("userData"));
      this.name = userData.name;
      this.age = userData.age;
      this.gender = userData.gender;
    }
  },
};
</script>
