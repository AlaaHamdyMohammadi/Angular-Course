import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from './../../Services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor(private Logging: LoggingService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    console.log('A server status changed, new status: ' + status);
    this.Logging.logStatusChange(status);

  }
}
