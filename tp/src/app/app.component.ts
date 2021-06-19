import { Component, OnInit } from '@angular/core';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { ProfilesService } from 'src/services/profiles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  faCrosshair = faCrosshairs;


}
