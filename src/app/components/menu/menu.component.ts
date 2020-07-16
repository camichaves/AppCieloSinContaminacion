import {Component, Input, OnInit, Output} from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{

  @Input() categoria;
  constructor(private navController: NavController,
              private menuController: MenuController) { }
  ngOnInit(): void {
    console.log('Inicio menu');
  }
}
