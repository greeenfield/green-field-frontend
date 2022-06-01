export interface UrlMeta {
  url: string;
  thumbnail: string;
  title: string;
  description: string;
}

export interface Note {
  id: string;
  title: string;
  short_description: string;
  likes: number;
  thumbnail?: string;
  user: {
    id: string;
    username: string;
    thumbnail: string;
  };
  url_meta?: UrlMeta;
  tags: string[];
  updated_at: Date;
}
