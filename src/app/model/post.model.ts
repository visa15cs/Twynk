import { User } from "./user.model";

export class Post {
  id?: string;
  author: User;
  text: string;
  createdAt: string;
  likeCount: number;
  replyCount: number;
  repostCount: number;
  liked?: boolean;
  reposted?: boolean;
  parentId?: string;
  media?: string[];
  _id: string;
  isReply: boolean;
  constructor(data?: any) {
    this.id = data?._id?.toString() ?? data?.id;
    this.text = data?.text;
    this.createdAt = data?.createdAt;
    this.likeCount = data?.likeCount ?? 0;
    this.replyCount = data?.replyCount ?? 0;
    this.repostCount = data?.repostCount ?? 0;
    this.liked = data?.liked ?? false;
    this.reposted = data?.reposted ?? false;
    this.parentId = data?.parentId;
    this.media = data?.media ?? [];
    this.author = new User(data?.author);
  }

  static fromJson(data: Partial<Post>) {
    return new Post(data);
  }
}
