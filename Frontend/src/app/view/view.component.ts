import { Component, OnInit } from '@angular/core';
import { Entity } from '../model/entity.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  url: string = "http://localhost:8080/api/employee";
  entities: Entity | any;
  divStatus = false;
  entity: Entity | any = new Entity();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.read();
  }

  read() {
    this.http.get<Entity>(this.url).subscribe(
      (response) => {this.entities = response;}
    );
  }

  edit(entity: Entity) {
    this.divStatus = true;
    this.entity = entity;
  }

  update(entity: Entity) {
    this.divStatus = false;
    this.http.put(this.url + "/" + entity.id, entity).toPromise();
  }

  delete(entity: Entity) {
    this.http.delete(this.url + "/" + entity.id).toPromise();
  }

}




