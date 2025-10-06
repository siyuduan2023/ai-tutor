import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Drink } from '../../drink';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-drink',
  imports: [ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-drink.html',
  styleUrl: './add-drink.css'
})
export class AddDrink {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly drinkService = inject(Drink);

  protected readonly addDrinkForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
  });

  protected onSubmit() {
    const rawValue = this.addDrinkForm.getRawValue();

    if (rawValue.name) {
      // Now, inside this block, TypeScript knows 'rawValue.name' is a string.
      const newDrinkData = {
        name: rawValue.name,
        description: rawValue.description || '' // Use the description, or a fallback empty string
      };
  
      console.log('Form Submitted!', newDrinkData);
      this.drinkService.addDrink(newDrinkData);
      this.router.navigate(['/drink']);
    }
  }
}
