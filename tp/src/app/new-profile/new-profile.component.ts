import { Component,EventEmitter ,Output } from '@angular/core';
import { ProfilesService } from 'src/services/profiles.service';


@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent {

  profileService: ProfilesService;

  constructor(profileService: ProfilesService) {
    this.profileService = profileService;
  }

  onCreateProfile(profileName: string, profileNick: string , profileEquipa : string, profileIdade : string , profileNacionalidade : string , profileTitulos : string , profileImagem : string ,profileTwitch : string , profileInsta: string , profileTwitter: string ) {
    this.profileService.addProfile({name: profileName, nickname: profileNick, nomeEquipa: profileEquipa,nacionalidade: profileNacionalidade,titulos:profileTitulos, idade:profileIdade ,imagem:profileImagem , twitch: profileTwitch, insta : profileInsta , twitter: profileTwitter});
  }

}
