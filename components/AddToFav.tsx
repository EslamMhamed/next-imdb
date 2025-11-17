type AddToFavProps = {
  movieId: string;
  title: string;
  image: string;
  overview: string;
  releaseDate: string;
  voteCount: string;
};

function AddToFav({
  movieId,
  title,
  image,
  overview,
  releaseDate,
  voteCount,
}: AddToFavProps) {
  return <div>AddToFav</div>;
}

export default AddToFav;
