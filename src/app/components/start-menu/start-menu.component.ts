import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent {
  @Output() isVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeVisible() {
    this.isVisible.emit()
  }

}
