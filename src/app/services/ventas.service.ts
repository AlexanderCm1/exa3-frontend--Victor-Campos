import { Injectable } from '@angular/core';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Rol } from '../models/rol';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Global } from './global';

@Injectable({
    providedIn: 'root'
  })
export class VentasService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }
    getProducto(nomproc:string):Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'venta/producto/'+nomproc,{headers:headers});
    }
    getProductos():Observable<any>{
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this._http.get(this.url+'venta/producto',{headers:headers});
    }
}