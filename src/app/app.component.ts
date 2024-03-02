import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCompra! : Array<Item>
  itemParaSerEditado! : Item
  unsubscribe : Subject<void> = new Subject<void>

  constructor(private listaService : ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra()
    this.listaService.atualizarLocalStorage()
  }

  ngDoCheck() {
  //  this.listaService.atualizarLocalStorage()  //se deixar nao apaga o local srtorage por isso foi para o onInit
  }

  editarItem(item : Item){
    this.itemParaSerEditado = item
  }

  deletarItem(id : Number) {
    const index = this.listaDeCompra.findIndex(item => item.id === id)
    this.listaDeCompra.splice(index, 1)
  }

  limparLista(){
   this.listaService.limparLocalStorage()
   this.listaDeCompra = []
   window.location.reload()


  }

}
