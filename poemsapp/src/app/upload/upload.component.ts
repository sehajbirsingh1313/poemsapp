import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  template: `
    <h2 style = "text-align: center">“Poetry is the rhythmical creation of beauty in words.” — Edgar Allan Poe</h2>
    <div class="upload-form">
      <form (submit)="submitForm()">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" [(ngModel)]="poem.title" required>
        </div>
        <div class="form-group">
          <label for="image">Image:</label>
          <input type="file" id="image" name="image" (change)="handleImageUpload($event)" accept="image/*" required>
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea id="content" name="content" [(ngModel)]="poem.content" required></textarea>
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  `,
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Output() poemUploaded = new EventEmitter<{ title: string; content: string; image: string }>();

  poem: { title: string; content: string, image: File | null } = { title: '', content: '', image: null };

  submitForm() {
    if (this.poem.title && this.poem.content && this.poem.image) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageBase64 = reader.result as string;
        this.poemUploaded.emit({ title: this.poem.title, content: this.poem.content, image: imageBase64 });
        this.poem = { title: '', content: '', image: null }; // Reset the form
      };
      reader.readAsDataURL(this.poem.image);
    } else {
      console.log('Please fill in all the required fields.');
    }
  }

  handleImageUpload(event: any) {
    const file = event.target.files ? event.target.files[0] : null;
    this.poem.image = file;
  }
}
