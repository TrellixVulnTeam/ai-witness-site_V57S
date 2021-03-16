import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-res-image',
  templateUrl: './res-image.component.html',
  styleUrls: ['./res-image.component.css']
})
export class ResImageComponent implements OnInit {

  constructor(public router: Router ) { }

  ngOnInit(): void {
  }


  goToIntro=  () => {
    this.router.navigateByUrl('/intro');
  };
  goToApp=  () => {
    this.router.navigateByUrl('/description');
  };
  goToAbout=  () => {
    this.router.navigateByUrl('/about');
  };

}
