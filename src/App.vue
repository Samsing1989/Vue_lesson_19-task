<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <nav>
        <router-link to="/">Головна</router-link> <router-link to="/friend">Друзі</router-link>
        <router-link to="/gift">Подарунки</router-link>
        <router-link to="/designation">Призначення подарунків</router-link>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  font-size: 20px;
  align-items: start;
  gap: 30px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* nav a { */
/* display: inline-block; */
/* padding: 0 1rem; */
/* border-left: 1px solid var(--color-border); */
/* } */
/* 
nav a:first-of-type {
  border: 0;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
} */

.container {
  font-size: 24px;
  display: flex;
  flex-direction: column;
}
</style>
