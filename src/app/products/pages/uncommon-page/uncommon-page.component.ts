import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Antonio Jesús';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }


  changeClient(): void {
    this.name = this.name == 'Antonio Jesús' ? 'Sandra' : 'Antonio Jesús';
    this.gender = this.gender == 'male' ? 'female' : 'male';
  }


  //i18nPlural
  public clients: string[] = []
  public clientsMap = {
    '=0': 'No hay clientes esperando.',
    '=1': 'Hay un cliente esperando.',
    'other': 'Hay # clientes esperando.'
  };
  nextClient(): void {
    let array = ['Sandra', 'Antonio Jesús', 'Nerea', 'Adrián', 'Ezequiel', 'Alba', 'Estrella'];
    if (this.clients.length < 1) {
      let numb = Math.floor(Math.random() * 5);
      for (let i = 0; i < numb; i++) {
        this.clients[i] = array[i]
      }
    }
    this.clients.shift();
  }

  // Json Pipe && KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value: any) => console.log('tap: ', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hay data en la promesa');
    }, 3500)
  })

}
