import { EventInfoWrapper, EventsWrapper } from "./styles";
import { IArtistData } from "./types";

interface EventProps {
  artistData: IArtistData;
  index: number;
  onClick: (index: number) => void;
}

const EventList = ({ artistData, onClick, index }: EventProps) => {
  return (
    <EventsWrapper key={artistData.id} onClick={() => onClick(index)}>
      <EventInfoWrapper>{artistData?.venue?.name}</EventInfoWrapper>
    </EventsWrapper>
  );
};

export default EventList;
