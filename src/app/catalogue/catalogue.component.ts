import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  characters: Object;
  nextPage: string;
  prevPage: string;
  response: any;

  showLoader: boolean = true;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCharacters().subscribe(data => {
      this.characters = data
      this.prevPage = data.previous
      this.nextPage = data.next
      this.showLoader = false
    })
  }
  prev(){
    if (this.prevPage !== null) {
      this.showLoader = true
      this.response = this.data.http.get(this.prevPage)
      this.response.subscribe(data => {
        this.characters = data
        this.prevPage = data.previous
        this.nextPage = data.next
        this.showLoader = false
      })
    }
  }
  next(){
    if (this.nextPage !== null) {
      this.showLoader = true
      this.response = this.data.http.get(this.nextPage)
      this.response.subscribe(data => {
        this.characters = data
        this.prevPage = data.previous
        this.nextPage = data.next
        this.showLoader = false
      })
     }
  }
}
