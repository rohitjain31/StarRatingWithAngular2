import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.css']
})
export class RatingComponent implements OnInit {

  text;
  rateState = 'default';
  total = [1,2,3,4,5];
  hideStar  = [];
  showStar=[];
  constructor() { }

  ngOnInit() {
  }

  addValueToShowStar(){
    for(let i = 0; i< this.showStar.length;i++){
        this.showStar[i] = i+1;
      }
  }

  addValueToHideStar(){
    for(let i = 0; i< this.hideStar.length;i++){
        this.hideStar[i] = i+this.showStar.length+1;
      }
  }

  rateInStar(){
    if(this.text < 6 && this.text >= 0){
      this.rateState = 'state';
      this.showStar.length = this.text;
      this.addValueToShowStar();

      this.hideStar.length = this.total.length - this.text;
      this.addValueToHideStar();
      this.text = "";
    }
    else{
      alert("Please provide value between 1 to 5");
      this.text = "";
    }
  }

  editStars(inputVal){
    //console.log(x);
    this.rateState = 'state';
    this.showStar.length = inputVal;
    this.addValueToShowStar();

    this.hideStar.length = this.total.length - inputVal;
    this.addValueToHideStar();

    this.text = inputVal;
  }
}
