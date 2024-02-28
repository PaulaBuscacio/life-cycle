import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item
  @Output() emitindoItemParaEditar =  new EventEmitter()
  faPen = faPen
  faTrash = faTrash

  constructor(private listaDeComprasService : ListaDeCompraService) { }

  ngOnInit(): void {}

  ngOnChanges() {}

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item)

  }

  marcarComprado(){
    this.listaDeComprasService.mudarComprado(this.item)

  }


}
