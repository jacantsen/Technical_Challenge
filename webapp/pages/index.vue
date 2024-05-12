<template>
    <div>
      <h1>Movie Search</h1>
      <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="Search for a movie...">
        <button @click="search">Search</button>
      </div>
      <div class="movie-container">
        <div v-for="(movie, index) in movies" :key="index" class="movie">
          <h2>{{ movie.title }}</h2>
          <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
            <span v-else>No poster available</span>
          <p>Popularity: {{ movie.popularity }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
const movies = ref<any[]>([]);
  let searchQuery: string = '';

  async function search() {
    const data:any  = await useFetch(`/api/${searchQuery}`);
    console.log(data.data.value[0])
    if (data) {
        movies.value = data.data._value;
    console.log(movies)
  } else {
    movies.value = [];
  }
  }

</script>  
  <style scoped>
  h1 {
    text-align: center;
  }
  
  .search-container {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .movie-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .movie {
    width: 300px;
    margin-bottom: 20px;
  }
  
  .movie img {
    width: 100%;
    height: auto;
  }
  
  .movie h2 {
    margin-top: 0;
  }
  
  .movie h3 {
    margin-bottom: 5px;
  }
  
  .movie ul {
    padding-left: 20px;
  }
  </style>
  