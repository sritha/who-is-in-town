import { useEffect, useState } from "react";
import Artist from "../components/Artist";
import EventList from "../components/EventList";
import EventInfo from "../components/EventInfo";
import Favourite from "../components/Favourite";
import {
  HomeProps,
  IArtistData,
  IEventData,
  IArtist,
} from "../components/types";
import { Heading, HomeWrapper } from "../components/styles";

const API_URL = "https://rest.bandsintown.com/artists/";
const APP_ID = 123;
const FAVOURITES = "favourites";
const DEFAULT_NAME = "john";

const Home = ({ query }: HomeProps) => {
  const [artistData, setArtistData] = useState<IArtistData[] | []>([]);
  const [eventData, setEventData] = useState<IEventData>();
  const [error, setError] = useState();

  const [artist, setArtist] = useState<IArtist>({
    name: DEFAULT_NAME,
  });

  const storedItems = localStorage.getItem(FAVOURITES);

  let parsedItems = storedItems && JSON.parse(storedItems);

  if (!parsedItems) {
    parsedItems = [];
  }

  const [favourites, setFavourites] = useState<string[]>(parsedItems);
  const artistName = query || artist.name;
  useEffect(() => {
    fetch(`${API_URL}${artistName}?app_id=${APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
      })
      .catch((e) => setError(e.message));
  }, [artistName]);

  useEffect(() => {
    fetch(`${API_URL}${artistName}/events?app_id=${APP_ID}`)
      .then((response) => response.json())
      .then((data) => {
        setArtistData(data);
      })
      .catch((e) => setError(e.message));
  }, [artistName]);

  useEffect(() => {
    localStorage.setItem(FAVOURITES, JSON.stringify(favourites));
  }, [favourites]);

  const handleClick = (id: number): void => {
    setEventData({
      description: artistData[id].description,
      venue: artistData[id].venue,
      status: artistData[id]?.offers[0]?.status,
    });
  };

  const handleFavourite = (name: string) => {
    if (favourites.indexOf(name) === -1) {
      setFavourites(favourites.concat(name));
    } else {
      setFavourites(favourites.filter((item) => item !== name));
    }
  };

  return (
    <HomeWrapper>
      {!error && (
        <>
          <div>
            <Artist artist={artist} />
            <div>
              <Heading>Events</Heading>
              {artistData &&
                artistData.length > 0 &&
                artistData.map((artistData, index) => {
                  return (
                    <EventList
                      artistData={artistData}
                      index={index}
                      onClick={handleClick}
                    />
                  );
                })}
            </div>
          </div>
          {eventData && (
            <EventInfo
              eventData={eventData}
              handleFavourite={handleFavourite}
              favourites={favourites}
            />
          )}
          <ul>
            {favourites && favourites.length > 0 && (
              <Heading>Favourite Events</Heading>
            )}
            {favourites &&
              favourites.map((favourite) => (
                <Favourite key={favourite} favourite={favourite} />
              ))}
          </ul>
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
