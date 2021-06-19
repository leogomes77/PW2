import { Component,EventEmitter,Input, Output } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-perfildetalhes',
  templateUrl: './perfildetalhes.component.html',
  styleUrls: ['./perfildetalhes.component.css']
})
export class PerfildetalhesComponent {

   faTwitter = faTwitter;
   faTwitch = faTwitch;
   faInsta = faInstagram;

   @Output()
   profileFeito = new EventEmitter<number>();
 
   @Input() profile: {name: string,index : number, nickname: string,nomeEquipa: string,idade: string,nacionalidade : string , titulos : string , imagem : string , twitch : string , insta : string , twitter : string};
    
   profileDetalhes : {name: string, team : string , nickname : string , idade : string, nacionalidade : string , titulos : string , imagem : string , twitch : string , insta : string , twitter : string};

    constructor(private activeRoute:ActivatedRoute) {

    }
    
    remover(): void{
      this.profileFeito.emit(this.profile.index);
    }
    
    ngOnInit(){
    this.profileDetalhes = {
      name: this.activeRoute.snapshot.params['name'],
      team: this.activeRoute.snapshot.params['team'], 
      nickname: this.activeRoute.snapshot.params['nickaname'],
      idade: this.activeRoute.snapshot.params['idade'],
      nacionalidade: this.activeRoute.snapshot.params['nacionalidade'],
      titulos: this.activeRoute.snapshot.params['titulos'],
      imagem: this.activeRoute.snapshot.params['imagem'],
      twitch: this.activeRoute.snapshot.params['twitch'],
      insta: this.activeRoute.snapshot.params['insta'],
      twitter: this.activeRoute.snapshot.params['twitter'],
      
    }

    this.activeRoute.params.subscribe((params: Params) => {
      this.profileDetalhes = {
        name: params['name'],
        team: params['team'], 
        nickname: params['nickname'],
        idade: params['idade'],
        nacionalidade: params['nacionalidade'],
        titulos: params['titulos'],
        imagem: params['imagem'],
        twitch: params['twitch'],
        insta: params['twitter'],
        twitter: params['insta'],
      }
   })
  }  
}
