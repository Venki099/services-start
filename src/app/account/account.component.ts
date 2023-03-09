import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account-servie';
import { LoggingService } from '../logging-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {

  constructor(private loggingser:LoggingService,private accountservice:AccountService){}
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountservice.updatestatus(this.id,status);
    this.loggingser.logStatusChange(status);
  }
}
