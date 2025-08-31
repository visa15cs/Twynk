import { User } from "./user.model";

export class Profile {
  bio: string;
  profilePicture: string;
  user: User;

  constructor(data?: any) {
    this.bio = data?.bio ?? "";
    this.profilePicture = data?.profilePicture ?? "";
    this.user = User.fromJson(data?.user ?? {});
  }

  static fromJson(data: Profile): Profile {
    return new Profile(data);
  }
}
