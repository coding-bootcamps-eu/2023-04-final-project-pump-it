import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import TrainingsView from "@/views/TrainingsView.vue";
import MotivationView from "@/views/MotivationView.vue";
import PedometerView from "@/views/PedometerView.vue";
import WorkoutView from "@/views/WorkoutView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },

  {
    path: "/pedometer",
    name: "pedometer",
    component: PedometerView,
  },

  {
    path: "/training",
    name: "training",
    component: TrainingsView,
  },

  {
    path: "/workout",
    name: "workout",
    component: WorkoutView,
  },

  {
    path: "/motivation",
    name: "motivation",
    component: MotivationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
