import { Component } from '@angular/core';
import {Link} from '../shared/models/link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  links: Link[] = [
    {
      title: 'Pokédex de Kanto',
      url: '/kanto',
    }
  ];

}
