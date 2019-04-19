import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { State, select } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  email: string;

  constructor(
    public authService: AuthService,
    private store: State<AppState>
  ) {
    debugger
    this.store.pipe(select(state => state.auth.email))
    .subscribe(data => this.email = data);

  }

  ngOnInit() {
  }

}
