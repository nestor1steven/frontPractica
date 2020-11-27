import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  menuItems: any[];

  constructor( private headerService : HeaderService) { 
    this.menuItems = headerService.menu;
  }

  ngOnInit(): void {
  }

}
