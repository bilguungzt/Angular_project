import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
  standalone: false,
})
export class TaskDetailComponent {
  @Input() task: any;
  @Output() taskUpdated = new EventEmitter<any>();
  editMode = false;
  editedTask: any = {};
  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode === true) {
      this.editedTask = Object.assign({}, this.task);
    }
  }

  saveChange() {
    this.taskUpdated.emit(this.editedTask);
    this.editMode = false;
  }
  cancelEdit() {
    this.editMode = false;
  }
}
