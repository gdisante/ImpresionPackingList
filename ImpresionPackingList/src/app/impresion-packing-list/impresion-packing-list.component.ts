import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import {FlexLayoutModule, BREAKPOINT, MediaObserver , MediaChange} from '@angular/flex-layout';

@Component({
  selector: 'app-impresion-packing-list',
  templateUrl: './impresion-packing-list.component.html',
  styleUrls: ['./impresion-packing-list.component.scss']
})
export class ImpresionPackingListComponent implements OnInit {

  opened = true;
  over = 'side';
  expandHeight = '42px';
  collapseHeight = '42px';
  displayMode = 'flat';


  watcher: Subscription;

  constructor(media: MediaObserver) {
      }

  ngOnInit() {
  }

}


