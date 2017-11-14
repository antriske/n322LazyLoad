import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  myItems: any = [
      { item: "first one",
        desc: [
            {price: '$1.45'},
            {description: 'this one is fine'},
        ]
      },
      { item: "second one",
          desc: [
              {price: '$2.22'},
              {description: 'this one is fine'},
          ]},
      { item: "third one",
          desc: [
              {price: '$3.33'},
              {description: 'this one is fine'},
          ]}
];


  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
