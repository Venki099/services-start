import { Component ,OnInit} from '@angular/core';
import { AccountService } from './account-servie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit {
  account:{name:string,status:string}[]=[];

  constructor(private accountservice:AccountService){}

  ngOnInit(): void {
      this.account = this.accountservice.accounts;
  }
}
