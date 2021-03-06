//Workflow -> api -> actions -> reducers
import axios from 'axios';

const API = axios.create({ baseURL: 'https://movie-stack.herokuapp.com/'});

//Need for token verification (specific user) to do action below
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
}

return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchMovies = () => API.get('/movies');
export const createMovie = (newMovie) => API.post('/movies', newMovie);
export const deleteMovie = (id) => API.delete(`/movies/${id}`);
export const updateMovie = (id, updatedMovie) => API.patch(`/movies/${id}`, updatedMovie);

export const fetchMovieLists = (id) => API.get(`/movie-lists/${id}`);
export const fetchMovieList = (id) => API.get(`/movie-lists/list/${id}`);
export const createMovieList = (newMovieList) => API.post('/movie-lists', newMovieList);
export const deleteMovieList = (id) => API.delete(`/movie-lists/${id}`);

export const fetchListOfMovies = (id) => API.get(`/movie-list/${id}`);

export const fetchUsers = () => API.get('/user-info');
export const fetchUser = (id) => API.get(`/user-info/${id}`);
export const updateUser = (id, updatedUser) => API.patch(`/user-info/${id}`, updatedUser);