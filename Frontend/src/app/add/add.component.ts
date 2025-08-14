// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add',
//   templateUrl: './add.component.html',
//   styleUrls: ['./add.component.css']
// })
// export class AddComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entity } from '../model/entity.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

private url = 'http://localhost:8080/api/employee';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  create(entity: Entity) {

    this.http.post(this.url, entity).toPromise();
    this.router.navigate(["view"]);
  }

}
