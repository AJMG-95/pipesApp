import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'antonio jesús';
  public nameUpper: string = 'ANTONIO JESÚS';
  public fullName: string = 'AntOniO jeSÚs';


}
