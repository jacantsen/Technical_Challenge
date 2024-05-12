# Movie Search App

This is a simple movie search application that fetches movie data from the TMDB (The Movie Database) API and displays the matching movie titles along with their details.

## Frontend

### Installation
1. Navigate to the `webapp` directory:
    ```bash
    cd webapp
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Usage
1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and visit `http://localhost:3000` to access the application.

## Backend

### Installation
1. Navigate to the `webservice` directory:
    ```bash
    cd webservice
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Usage
1. Start the backend server:
    ```bash
    node server.js
    ```

2. The backend server will be running on `http://localhost:8080`.

3. The frontend will communicate with the backend server to fetch movie data from the TMDB API.

## How it works
1. Enter a movie name in the search box.
2. Click on the "Search" button.
3. The application will fetch data from the TMDB API.
4. Matching movie titles along with their details will be displayed.
