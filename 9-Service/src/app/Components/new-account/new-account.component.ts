import { LoggingService } from './../../Services/logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private Logging: LoggingService){}
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    console.log('A server status changed, new status: ' + accountStatus);
    this.Logging.logStatusChange(accountStatus)
  }
}
