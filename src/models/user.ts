export interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  profile: Profile;
}

export interface Profile {
  id: string;
  userId: string;
  about: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
}
