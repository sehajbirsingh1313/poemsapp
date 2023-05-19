import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  uploadedPoems: { title: string; content: string; image: string }[] = [];

  displayPoem(poem: { title: string; content: string; image: string }) {
    this.uploadedPoems.push(poem);
  }

  getBase64ImageSrc(imageBase64: string): string {
    return imageBase64;
  }
}
