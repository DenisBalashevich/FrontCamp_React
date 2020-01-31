import * as request from '../utils/request-helper';

async function getMovie(id) {
    const response = await request.GET(`movies/${id}`);
    return response;
}

async function getMovies(params) {
    const response = await request.GET('movies', params);
    return response;
}

export default {
    getMovie,
    getMovies
}
