import { Component } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';
import 'rxjs/add/operator/do';

const q = gql`
  {Address{_id}}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private apollo: Apollo
  ) {
    this.apollo.watchQuery<any>({
      query: q,
      pollInterval: 1000
    })
    .subscribe(console.log, (err) => {
      console.error('caught error:', err);
    });
  }
}
