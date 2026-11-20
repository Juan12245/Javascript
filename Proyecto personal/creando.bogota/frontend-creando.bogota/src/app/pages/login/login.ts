import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../servies/auth';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private fb = inject (FormBuilder)
  private AuthService = inject (AuthService)

  cargando: boolean = false
  error : string =``


  form = this.fb.group ({

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

  ingresar(){
    if (this.form.invalid){
      this.form.markAllAsTouched()
        return
      
    }
    this.cargando = true
    this.error =""

this.AuthService.ingresar (this.form.value as any)
.subscribe ({
  next: (response) => {
console.log (response)
  },
  error: (error) =>{
  console.log(`Error en el componente ingresar`, error)
}
})

  }
}
