import { Component, OnInit } from '@angular/core';
import { PoemService } from '../poem.service';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {
  poems: string[] = [];
  newPoem: string = '';

  constructor(private poemService: PoemService) { }

  ngOnInit() {
    this.poems = this.poemService.getPoems();
  }

  addPoem() {
    if (this.newPoem.trim()) {
      this.poemService.addPoem(this.newPoem);
      this.newPoem = '';
    }
  }
}
