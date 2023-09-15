import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
    cardClicked(imgName:string){
      console.log(imgName)
      $("#model").html(`<img src="../../assets/Images/${imgName}.png">`)
      $("#model").removeClass("d-none");
      $("#model").addClass("d-flex");
    }

    modelClicked(eInfo:any){
      if (eInfo.target.id == "model"){
        $("#model").removeClass("d-flex");
        $("#model").addClass("d-none");
      }
    }
}