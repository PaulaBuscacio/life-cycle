import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emitindoItemParaEditar =  new EventEmitter()
  @Output() emitindoItemParaDeletar = new EventEmitter()
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

  deletarItem() {
    this.emitindoItemParaDeletar.emit(this.item.id)

  }

  deletarLista() {

  }

  ngOnDestroy(){
    console.log('item deletado ')
  }


}
