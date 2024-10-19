import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import axios from 'axios';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
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

  async onSubmit(): Promise<void>{
    console.log( this.form.value)
    const { type, id } = this.form.value;
    console.log(id)
    //const response = await axios.post('http://localhost:8090/api',this.form.value);
 

      const data=
        {
          firstName: "Jhon",
          middleName: "Michael",
          lastName: "Doe",
          secondLastName: "Smith",
          phone: "+1-555-1234",
          address: "1234 Elm Street, Apt 5B",
          cityOfResidence: "New York"
      }
      
      this.router.navigate(['/customer'], { state: { userData: data } });
    
   
   
  }
}
