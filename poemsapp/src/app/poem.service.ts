import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  private poems: string[] = [];

  addPoem(poem: string) {
    this.poems.push(poem);
  }

  getPoems(): string[] {
    return this.poems;
  }
}
