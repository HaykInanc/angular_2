import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../colors.service';

@Component({
  selector: 'app-color-container',
  templateUrl: './color-container.component.html',
  styleUrls: ['./color-container.component.sass']
})
export class ColorContainerComponent implements OnInit {
  colorBlocks:Array<object>;
  constructor(private colors:ColorsService) { }

  ngOnInit() {
    this.colors.get().subscribe(response=>this.colorBlocks = response.data);
  }

}
