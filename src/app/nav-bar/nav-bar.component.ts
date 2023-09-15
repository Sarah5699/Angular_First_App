import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.scrollY;
    if (verticalOffset > 30){
      document.getElementById("nav-bar")?.classList.remove("py-4");
      document.getElementById("nav-bar")?.classList.add("py-2");
    }
    else{
      document.getElementById("nav-bar")?.classList.remove("py-2");
      document.getElementById("nav-bar")?.classList.add("py-4");
    }
  }
}
