import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service'


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    constructor(private api: ApiService) {}
    posts: any;
    ngOnInit(){
        this.GetProducts();
    }
    GetProducts(): void {
        this.api.getData()
          .subscribe(data => this.posts = data.posts); 
          console.log(this.posts);
      }
}
