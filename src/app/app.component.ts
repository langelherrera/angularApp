import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CustomerComponent } from './customer/customer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularAPp';
  fb= inject(FormBuilder);
  router = inject(Router);
  
  form: FormGroup=this.fb.group({
    type:['',[Validators.required]],
    id:['',
      [
        Validators.required,
        Validators.minLength(8), 
        Validators.maxLength(11), 
        Validators.pattern(/^([0-9])*$/)
      ]
    ]
  });
  
 

  formatDocumentNumber() {
    let documentNumber = this.form.get('id')?.value.replace(/\D/g, ''); 
    this.form.get('id')?.setValue(documentNumber, { emitEvent: false });
  }

  getFormattedDocumentNumber(): string {
    const documentNumber = this.form.get('id')?.value;
    return documentNumber ? new Intl.NumberFormat().format(Number(documentNumber)) : '';
  }

  onSubmit(): void{
    console.log( this.form.value)
    this.router.navigate(['/customer'], { state: { userData: this.form.value } });
  }
}
