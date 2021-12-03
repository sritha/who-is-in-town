export interface HomeProps {
  query: string;
}

export interface IArtist {
  name: string;
  thumb_url?: string;
  upcoming_event_count?: number;
  tracker_count?: number;
}

export interface IArtistData {
  id: number;
  description?: string;
  status?: string;
  artist: {
    name: string;
    thumb_url: string;
  };
  venue: {
    name: string;
    city: string;
    country: string;
  };
  offers: [{ status: string }];
}

export interface IEventData {
  description?: string;
  status?: string;
  venue: {
    name: string;
    city: string;
    country: string;
    location?: string;
  };
}
