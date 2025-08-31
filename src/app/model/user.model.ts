export class User {
  email: string;
  username: string;
  name: string;

  constructor(data?) {
    if (data) {
      this.email = data.email;
      this.username = data.username;
      this.name = data.name;
    }
  }

  static fromJson(data: User): User {
    return new User(data);
  }
}
