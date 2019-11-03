import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.search.valueChanges.subscribe(value => {
      this.searchEmitter.emit(value);
    });
  }
  //se instanció la clase FormControl para utlizar el formulario
  search = new FormControl("");
  //comunicar el componente hijo con el padre (app)
  @Output("search") searchEmitter = new EventEmitter<string>();
}
