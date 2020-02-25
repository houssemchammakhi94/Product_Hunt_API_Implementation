import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service'
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    model: NgbDateStruct;
    date: {year: number, month: number};
   
    constructor(private api: ApiService,private calendar: NgbCalendar) {}
    posts: any;
    ngOnInit(){ 
    }

    GetProducts(): void {
        if(this.model==null)
        {
            this.model=this.calendar.getToday();    
        }
        this.api.getData(this.model)
          .subscribe(data => this.posts = data.posts); 
      }
}
