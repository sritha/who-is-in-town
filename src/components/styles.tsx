import styled from "styled-components";

export const PageContainer = styled.div`
  border: 1px solid grey;
`;

export const Input = styled.input`
  width: 30%;
  padding: 8px;
`;

export const Heading = styled.h3`
  color: rgb(59, 59, 59);
`;

export const Label = styled.p`
  color: rgb(49, 49, 49);
`;

export const SearchBox = styled.div`
  margin: 10px;
  min-width: 100px;
`;

export const ImageBox = styled.img`
  margin: 10px;
  width: 100px;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
`;

export const ArtistWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  gap: 10px;
`;

export const EventsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const EventInfoWrapper = styled.div`
  background-color: rgb(239, 239, 239);
  border-radius: 5px;
  padding: 10px;
  margin-top: 3px;
  cursor: pointer;
  width: 200px;
`;

export const EventDetailsContainer = styled.div`
  dispaly: flex;
`;
export const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  width: 150px;
`;

export const FavoritesWrapper = styled.li`
  list-style: none;
  padding: 8px;
`;

export const FavoriteItem = styled.div`
  background-color: rgb(239, 239, 239);
  border-radius: 5px;
  padding: 10px;
`;
