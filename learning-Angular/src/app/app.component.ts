import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  awesomesauce = '<h1>This is a header!</h1>';
  gameList: Content[];
  constructor() {
    this.awesomesauce = 'Changed in the constructor!';
    this.gameList = [{
      id: 0,
      title: 'Modern Warfare 2',
      genre: 'FPS',
      body: 'This game lived for too long',
      imageUrl: 'mancunion.com/2018/03/21/call-duty-modern-warfare-2-rumours-gather-steam'
    }, {
      id: 1,
      title: 'Far Cry 5',
      genre: 'FPS',
      body: 'Are we on an island again? Find out by playing!',
      imageUrl: 'https://cdn-ext.fanatical.com/production/product/original/e3bad177-02df-4808-a12e-126b163a06a4.jpeg?w=1200'
    }, {
      id: 2,
      title: 'Dark Souls',
      genre: 'Action-RPG',
      body: 'Praise the sun!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg'
    }, {
      id: 3,
      title: 'Need for Speed: Heat',
      genre: 'Racer',
      imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg?t=1598622029'
    }, {
      id: 4,
      title: 'Super Mario 3D All Stars',
      genre: '3D Platformer',
      body: 'Time to find those weird checkerred cube in sunshine',
      imageUrl: 'https://i.ytimg.com/vi/CPJcaGWoO2c/maxresdefault.jpg'
    }];
  }
}


export interface Content{
  readonly id: number;
  title: string;
  body?: string;
  genre: string;
  imageUrl: string;
}

