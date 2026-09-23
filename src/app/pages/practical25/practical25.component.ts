import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-practical25',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './practical25.component.html',
  styleUrls: ['./practical25.component.css']
})
export class Practical25Component {
  name = '';
  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  submitted = false;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.selectedFile) {
      this.submitted = true;
      console.log('Uploading:', this.name, this.selectedFile.name);
    }
  }
}