import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private http = inject(HttpClient)



registrar (usuario:User) : Observable<any> {
    return this.http.post(
        `http://localhost:3000/api/auth/registrar`,
        usuario
    )
}

ingresar (credenciales: Pick <User, "email" | "password">) : Observable<any> {
    return this.http.post(
        `http://localhost:3000/api/auth/login`,
        credenciales
    )
}


}