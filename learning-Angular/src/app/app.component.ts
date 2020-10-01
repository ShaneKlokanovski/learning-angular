import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-Angular';

}

let name: string;

name = 'Peter';

//name = 2


let otherName = 'Fadi';

//othername = 3


let isTypescriptAwesome: boolean;

isTypescriptAwesome = false;



function doAThing(): void{
  return;
}


let somethingRandom: any;
//we will address this after the break
somethingRandom = 1000;
console.log(somethingRandom);
somethingRandom = 'now I\'m a string!';


interface Content{
  id: number;
  body: string;
  type: string;
  imageUrl: string;
}

const newsArticles: Content = {
  id: 0,
  body: 'This just in! Things and stuff!',
  type: 'news',
  imageUrl: 'https://e7.pngegg.com/pngimages/596/63/png-clipart-youtube-penguin-meme-peekaboo-pingu-72-television-meme.png'
};

function displayTheBody(c: Content): void{
  console.log(c.body);
}


displayTheBody(newsArticles);
