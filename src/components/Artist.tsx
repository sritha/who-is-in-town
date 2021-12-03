import { ArtistWrapper, ImageBox, Label } from "./styles";
import { IArtist } from "./types";

interface ArtistProps {
  artist: IArtist;
}

const Artist = ({ artist }: ArtistProps) => {
  return (
    <ArtistWrapper>
      <ImageBox src={artist?.thumb_url} alt={artist?.name} />
      <div>
        <Label>
          <b>Artist Name:</b> {artist?.name}
        </Label>
        <Label>
          <b>Upcoming Events:</b> {artist?.upcoming_event_count}
        </Label>
        <Label>
          <b>Tracker Count:</b> {artist?.tracker_count}
        </Label>
      </div>
    </ArtistWrapper>
  );
};

export default Artist;
