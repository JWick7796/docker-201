import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  baseURL = "http://localhost:3000/comments";

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseURL);
  }

  saveComments(values): Observable<any> {
    return this.http.post(this.baseURL, values);
  }
}
