import { Component } from '@angular/core';
import { NASAService } from '../nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  imageData: any;
  constructor(private NASAService: NASAService) {}
  ngOnInit() {
    this.NASAService.getImageOfTheDay().subscribe((data) => {
      this.imageData = data;
    });
  }
}
