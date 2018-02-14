import { Component, OnInit } from '@angular/core';
import { IAboutService } from './iabout.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pt-hacker-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private nlClicks = 0;
  private rxClicks = 0;

  email: string;

  constructor(private aboutService: IAboutService) { }

  ngOnInit(): void {
    this.email = this.aboutService.getContactEmail();
  }

  /**
   * Rxjs Way of adding button clicks
   * @param event Observable<MouseEvent>
   */
  rxClick(event: Observable<MouseEvent>): void {

    event.scan((count: number) => count + 1, 0)
      .subscribe((count: number) => {
        this.rxClicks = count;
      });

    // Capturing only the altkeys
    // e.filter(x => x.altKey).subscribe(x => {
    //   console.log(x);
    // });
  }

  /**
   *  Normal way of adding button clicks
   */
  nlClick(): void {
    this.nlClicks++;
  }

  runMe(): void {
    this.email = 'dummy@example.com';
  }
}
