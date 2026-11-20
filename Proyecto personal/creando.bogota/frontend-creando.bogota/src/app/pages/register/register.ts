import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../servies/auth';
import { email } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  private fb = inject (FormBuilder)
  private AuthService = inject (AuthService)

  cargando: boolean = false
  error : string =``


  form = this.fb.group ({
name: [
  ``,
  [
  Validators.required, 
  Validators.minLength(3)
]
],
email: [
  ``, [
  Validators.required, 
  Validators.email
]
],
password: [
  ``, [
  Validators.required, 
  Validators.minLength(5)
]
]

  })

  registrar(){
    if (this.form.invalid){
      this.form.markAllAsTouched()
        return
      
    }
    this.cargando = true
    this.error =""

this.AuthService.registrar (this.form.value as any)
.subscribe ({
  next: (response) => {
console.log (response)
  },
  error: (error) =>{
  console.log(`Error en el componente regisstrar`, error)
}
})

  }
}
