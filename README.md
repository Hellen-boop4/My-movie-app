# 🎬 My Movie App (React)

This is a beginner-friendly **React Movie App** where you can:
- Add movies and rate with your own preference
- one cam add their own preferred movies
i have used all the prefered react states 
--did a bit of styling in my app.css to make the app more stylish and appealing

---


---I have updated my code to use react hooks 


readme on checkpoint React Router Checkpoint

## 🎬 Movie App

A simple React Movie Application built for learning and demonstration purposes.
This project allows users to **view**, **filter**, **add**, and **explore detailed information** about movies, including watching their **trailers** through embedded YouTube videos.

---

### 🚀 Features

#### 🏠 Home Page

* Displays a list of all movies in the app.
* Each movie card shows:

  * Poster image
  * Title
  * Rating
  * “View Details” button

#### 🔍 Filter

* Users can filter movies:

  * **By title:** Search for a movie name.
  * **By rating:** Display only movies equal to or above a selected rating.

#### ➕ Add Movie

* Add your own custom movie to the list by filling in:

  * Title
  * Description
  * Poster URL
  * Rating
  * Trailer embed link (YouTube URL)

#### 🎥 Movie Description Page

* When a user clicks on a movie card, they are taken to a **description page** that includes:

  * The movie’s title
  * Its description
  * Rating
  * An embedded **YouTube trailer video**
  * A **Back to Home** button for easy navigation

---

### 🧩 Component Overview

| Component               | Purpose                                                                   |
| ----------------------- | ------------------------------------------------------------------------- |
| **App.js**              | Main component that holds all routes and global states (movies, filters). |
| **MovieList.js**        | Displays all movie cards and links each one to its detail page.           |
| **MovieDescription.js** | Displays a single movie’s details and trailer using the route parameter.  |
| **AddMovie.js**         | Form that allows users to add new movies to the list dynamically.         |
| **Filter.js**           | Provides input fields to filter movies by title or rating.                |

---

### ⚙️ How Routing Works

This project uses **React Router v6** for navigation:

* `/` → Home page (movie list, filter, add movie)
* `/movie/:id` → Movie description and trailer page

When a user clicks a movie card:

```jsx
<Link to={`/movie/${movie.id}`}>
  <button>View Details</button>
</Link>
```

The `:id` part in the URL corresponds to the movie’s unique `id`.
`MovieDescription` then retrieves that ID using `useParams()` and finds the correct movie from the movie list.

---

### 🧠 How State Management Works

The app uses **React’s useState** hook to manage data:

* `movies` → List of all movie objects.
* `filterTitle` → Text to filter by title.
* `filterRate` → Number to filter by rating.

When you add a new movie, the app updates the `movies` array dynamically:

```js
setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
```

---

### 📺 Embedding Trailers

The app uses **YouTube embed links** instead of normal video links.
Example:

The embed link is used inside an `<iframe>` in the MovieDescription component to display the trailer directly on the page.

All styling is handled in `App.css`.






