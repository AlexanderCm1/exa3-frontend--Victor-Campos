import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../services/ventas.service';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  providers: [VentasService]
})
export class VentasComponent implements OnInit {


  public productos:Producto[];
  public nomproc:any;

  constructor(
    private _ventasService:VentasService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }


  getProductos(){
    this._ventasService.getProductos().subscribe(
      ({productos}:any) =>{
        this.productos = productos;
      },
      error =>{

      }
    )
  }

  buscarProducto(nombre:string){
    console.log(nombre)
    this._ventasService.getProducto(nombre).subscribe(
      response =>{
        console.log(response);
      },
      error =>{

      }

    )
  }

}
