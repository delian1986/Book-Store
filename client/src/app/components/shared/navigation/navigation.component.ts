import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements DoCheck {
  email: string;
  isAuth: boolean = false;

  constructor(
    private authService:AuthService,
  ) {

  }

  ngDoCheck() {
    this.email = this.authService.getEmail();
    this.isAuth=this.authService.isAuth();
  }

  logout(){
    localStorage.clear();

  }

}
