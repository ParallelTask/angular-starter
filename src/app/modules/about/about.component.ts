import { Component, OnInit } from '@angular/core';
import { IAboutService } from './iabout.service';

@Component({
  selector: 'pt-hacker-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  email: string;

  constructor(private aboutService: IAboutService) { }

  ngOnInit(): void {
    this.email = this.aboutService.getContactEmail();
  }

  runMe(): void {
    this.email = 'dummy@example.com';
  }
}
