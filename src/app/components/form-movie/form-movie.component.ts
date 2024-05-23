import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-movie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-movie.component.html',
  styleUrl: './form-movie.component.css'
})
export class FormMovieComponent {
  @Output() movieEvent = new EventEmitter<any>();

  categories = ["ficcion", "terror", "comedia"]

  mForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    year: ["", [Validators.required]],
    category: ["terror"]
  })

  constructor(private fb: FormBuilder) {

  }

  sendForm() {
    console.log("Funciona!!", this.mForm.value)

    this.movieEvent.emit(this.mForm.value)

    this.mForm.patchValue({
      name: "",
      year: ""
    })
  }
}
