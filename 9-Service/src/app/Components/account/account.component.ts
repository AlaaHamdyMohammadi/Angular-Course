import { Component, Input} from '@angular/core';
import { LoggingService } from './../../Services/logging.service';
import { AccountsService } from 'src/app/Services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private Logging: LoggingService,
    private accountServ: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountServ.updateStatus(this.id, status)
    console.log('A server status changed, new status: ' + status);
    //this.Logging.logStatusChange(status);
    this.accountServ.statusUpdated.emit(status);
  }
}
