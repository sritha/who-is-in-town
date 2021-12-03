import { Button, EventDetailsContainer, Heading, Label } from "./styles";
import { IEventData } from "./types";

interface EventInfoProps {
  eventData: IEventData;
  handleFavourite: (name: string) => void;
  favourites: string[];
}

const EventInfo = ({
  eventData,
  handleFavourite,
  favourites,
}: EventInfoProps) => {
  return (
    <EventDetailsContainer>
      <Heading>Event Details</Heading>
      <Label>
        <b>Name: </b> {eventData.venue.name}
      </Label>
      {eventData.description && (
        <Label>
          <b>Description:</b> {eventData.description}
        </Label>
      )}
      <Label>
        <b>Status:</b> {eventData?.status}
      </Label>
      <Label>
        <b>City:</b> {eventData.venue.city}
      </Label>
      <Label>
        <b>Location:</b> {eventData.venue.location}
      </Label>
      <Label>
        <b>Country:</b> {eventData.venue.country}
      </Label>
      <Button onClick={() => handleFavourite(eventData.venue.name)}>
        {!favourites.includes(eventData.venue.name) ? (
          <Label>Add to Favourites</Label>
        ) : (
          <Label>Remove from Favourites</Label>
        )}
      </Button>
    </EventDetailsContainer>
  );
};

export default EventInfo;
