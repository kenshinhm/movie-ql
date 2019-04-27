import {getMovies} from "./db";

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => {
            return getMovies(limit, rating);
        }
    },
};

export default resolvers;