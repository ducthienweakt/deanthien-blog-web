import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private httpClient: HttpClient){}

  posts:any[] = [];
  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts() {
    return this.httpClient.get(`${environment.apiUrl}/posts`).subscribe((result:any)=>{
      this.posts = result.data;
    });
  }
}
