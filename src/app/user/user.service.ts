import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverURL: string = 'https://jsonplaceholder.typicode.com';
  constructor(private _http: HttpClient) { }

  getUserDataFromServer(): Observable<any> {
    const API = `${this.serverURL}/users`;
    return this._http.get(API).pipe(
      map((response: Object[]) => {
        return response.map((adhoc:any) => {
          return {
            "id": adhoc.id,
            "name": adhoc.name,
            "username": adhoc.username,
            "email": adhoc.email,
          }
        })
      })
    );
  }
  postDataToServer(dataToSave): Observable<any> {
    const API = `${this.serverURL}/users`;
    return this._http.post(API, dataToSave)
  }
}
