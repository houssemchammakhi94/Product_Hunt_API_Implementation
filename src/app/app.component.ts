import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  posts: any;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(): void {
    this.api.getData()
      .subscribe(data => this.posts = data.posts); 
  }
}
