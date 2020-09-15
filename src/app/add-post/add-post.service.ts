import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from './post-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  private url = 'http://localhost:8080/api/posts/';

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload): Observable<any> {
    return this.httpClient.post(this.url, postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>('http://localhost:8080/api/posts/all');
  }

  getPost(permLink: number): Observable<PostPayload> {
    return this.httpClient.get<PostPayload>(this.url + permLink);
  }


}
