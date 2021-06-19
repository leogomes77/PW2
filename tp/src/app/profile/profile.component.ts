import { Component,EventEmitter,Input,Output } from '@angular/core';
import { ProfilesService } from 'src/services/profiles.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

  constructor (private router : Router) {

  }

  @Output()
  profileFeito = new EventEmitter<number>();

  @Input() profile: {name: string,index : number, nickname: string,nomeEquipa: string,idade: string,nacionalidade : string , titulos : string , imagem : string , twitch : string , insta : string , twitter : string};

  @Output() profileDet : {index : number}; 
  
  navegar(){
    this.router.navigate(['/PerfilDetalhes',this.profile.name,this.profile.nomeEquipa,this.profile.nickname,this.profile.idade,this.profile.nacionalidade,this.profile.titulos,this.profile.imagem,this.profile.twitch,this.profile.insta,this.profile.twitter],)
  }

  remover(): void{
    this.profileFeito.emit(this.profile.index);
  }
  
}
