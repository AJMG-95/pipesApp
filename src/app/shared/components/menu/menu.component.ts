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
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-download' },
      { label: 'Undo', icon: 'pi pi-refresh' },

    ];
  }

}
