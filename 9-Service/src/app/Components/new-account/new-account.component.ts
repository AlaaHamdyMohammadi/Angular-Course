import { AccountsService } from 'src/app/Services/accounts.service';
import { LoggingService } from './../../Services/logging.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private Logging: LoggingService, private account: AccountsService){
    this.account.statusUpdated.subscribe((status: string) => alert('New Status: ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    console.log('A server status changed, new status: ' + accountStatus);
    //this.Logging.logStatusChange(accountStatus)
    this.account.addAccount(accountName, accountStatus)
  }
}
