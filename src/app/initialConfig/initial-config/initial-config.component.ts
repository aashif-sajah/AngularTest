import { Component } from '@angular/core';
import { InitialConfigService } from '../initial-config.service';
import { InitialConfigModule } from './initial-config.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-initial-config',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './initial-config.component.html',
  styleUrl: './initial-config.component.css'
})
export class InitialConfigComponent {

  constructor(private service: InitialConfigService) { }

  onSubmit(){
    console.log('Form submitted');
    console.log(this.configData.toString());
    this.startSimulation();
  }

  configData: InitialConfigModule =
  {
    totalTicket: 0,
    ticketReleaseRate: 0,
    consumerRetrieveRate: 0,
    ticketPoolCapacity: 0
  };

  startSimulation()
  {
    this.service.startSimulation(this.configData).subscribe(data => {
      console.log(data);
    });
  }

}

