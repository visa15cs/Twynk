import { Injectable } from "@angular/core";
import { BaseHttpService } from "../base-http/base-http.service";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Post } from "src/app/model/post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService extends BaseHttpService {
  createPost(data: any) {
    return this.http.post(`${this.url}/posts`, data).pipe(
      map((data: any) => {
        return Post.fromJson(data);
      }),
    );
  }

  getPosts() {
    return this.http.get(`${this.url}/posts`).pipe(
      map((data: []) => {
        return data.map((post) => Post.fromJson(post));
      }),
    );
  }

  likePost(id: string): Observable<Partial<Post>> {
    return this.http.post(`${this.url}/posts/like/${id}`, {}).pipe(
      map((data: any) => {
        return Post.fromJson(data);
      }),
    );
  }

  rePost(id: string): Observable<Partial<Post>> {
    return this.http.post(`${this.url}/posts/repost/${id}`, {}).pipe(
      map((data: any) => {
        return Post.fromJson(data);
      }),
    );
  }

  replyPost(id: string, text: string): Observable<Partial<Post>> {
    return this.http.post(`${this.url}/posts/reply/${id}`, { text: text }).pipe(
      map((data: any) => {
        return Post.fromJson(data);
      }),
    );
  }

  getPostById(id: string): Observable<{ parent: Post; children: Post[] }> {
    return this.http.get(`${this.url}/posts/${id}`).pipe(
      map((data: any) => ({
        parent: Post.fromJson(data.parent),
        children: data.children.map((child: any) => Post.fromJson(child)),
      })),
    );
  }
}
