// const Movie = require('../models/Movie');

// exports.getAllMovies = async (req, res) => {
//   try {
//     // TODO: Fetch all movies from the database
//     // TODO: Send a JSON response with the movies
//     // res.status(200).json(movies);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
// exports.upvoteMovie = async (req, res) => {
//   try {
//     // TODO: Retrieve the movie ID from the request parameters
//     // TODO: Update the movie's upvotes using $inc and retrieve the updated movie
//     // TODO: Send a success response with the upvoted movie details
//     // res.status(200).json({ message: 'Movie upvoted successfully', upvotedMovie: movie });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// exports.downvoteMovie = async (req, res) => {
//   try {
//     // TODO: Retrieve the movie ID from the request parameters
//     // TODO: Update the movie's downvotes using $inc and retrieve the updated movie
//     // TODO: Send a success response with the downvoted movie details
//     // res.status(200).json({ message: 'Movie downvoted successfully', downvotedMovie: movie });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
const Movie = require('../models/Movie');

exports.getAllMovies = async (req, res) => {
  try {
    // Fetch all movies from the database
    const movies = await Movie.find();

    // Send a JSON response with the movies
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.upvoteMovie = async (req, res) => {
  try {
    // Retrieve the movie ID from the request parameters
    const movieId = req.params.movieId;

    // Update the movie's upvotes using $inc and retrieve the updated movie
    const movie = await Movie.findByIdAndUpdate(
      movieId,
      { $inc: { upvotes: 1 } },
      { new: true }
    );

    // Send a success response with the upvoted movie details
    res.status(200).json({ message: 'Movie upvoted successfully', upvotedMovie: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.downvoteMovie = async (req, res) => {
  try {
    // Retrieve the movie ID from the request parameters
    const movieId = req.params.movieId;

    // Update the movie's downvotes using $inc and retrieve the updated movie
    const movie = await Movie.findByIdAndUpdate(
      movieId,
      { $inc: { downvotes: 1 } },
      { new: true }
    );

    // Send a success response with the downvoted movie details
    res.status(200).json({ message: 'Movie downvoted successfully', downvotedMovie: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
