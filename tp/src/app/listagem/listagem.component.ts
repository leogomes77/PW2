import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/services/profiles.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  profileService: ProfilesService;


  profiles = [];

  constructor(profileService: ProfilesService) {
    this.profileService = profileService;
  }
  ngOnInit(): void {
    this.profiles = this.profileService.profiles;
  }

  removerProfile(indiceProfile: number) {
    this.profiles.splice(indiceProfile, 1);
  }
 

}
