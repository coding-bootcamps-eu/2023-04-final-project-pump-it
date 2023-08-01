import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoplanActiveView from "@/views/NoplanActiveView.vue";
import ChoseCategorieView from "@/views/ChoseCategorieView.vue";
import CreatedPlanView from "@/views/CreatedPlanView.vue";
import ActivePlansView from "@/views/ActivePlansView.vue";
import WorkoutView from "@/views/WorkoutView.vue";
import MotivationView from "@/views/MotivationView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/noplanactive",
    name: "noplanactive",
    component: NoplanActiveView,
  },
  {
    path: "/chosecategorie",
    name: "chosecategorie",
    component: ChoseCategorieView,
  },

  {
    path: "/createdplan",
    name: "createdplan",
    component: CreatedPlanView,
  },

  {
    path: "/activeplans",
    name: "activeplans",
    component: ActivePlansView,
  },

  {
    path: "/workout",
    name: "workout",
    component: WorkoutView,
  },

  {
    path: "/motivationsite",
    name: "motivationsite",
    component: MotivationView,
  },

  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
