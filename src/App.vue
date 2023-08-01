<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/noplanactive">Plan</router-link> |
    <router-link to="/chosecategorie">Categorie</router-link> |
    <router-link to="/createdplan">Created</router-link> |
    <router-link to="/activeplans">Active</router-link> |
    <router-link to="/workout">Workout</router-link> |
    <router-link to="/motivationsite">Motivation</router-link> |
    <router-link to="/about">About me</router-link>
    <div>
      <header>
        <img src="" alt="Logo" />
      </header>
    </div>
  </nav>
  <router-view />
</template>
