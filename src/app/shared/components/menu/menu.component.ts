import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {

    this.menuItems = [
      {
        label: 'Pies de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texto y Fechas',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otros personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
            ]
          },
        ],
      },
    ];


  }

}
