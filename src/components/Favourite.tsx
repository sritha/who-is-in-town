import { FavoritesWrapper, FavoriteItem } from "./styles";

interface FavouriteProps {
  favourite: string;
}

const Favourite = ({ favourite }: FavouriteProps) => {
  return (
    <FavoritesWrapper key={favourite}>
      <FavoriteItem>{favourite}</FavoriteItem>
    </FavoritesWrapper>
  );
};

export default Favourite;
