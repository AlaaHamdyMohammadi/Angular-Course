import { Component, OnInit } from '@angular/core';
import { AccountsService } from './Services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService],
})
export class AppComponent implements OnInit{
  title = '9-Service';

  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountsService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }

}
