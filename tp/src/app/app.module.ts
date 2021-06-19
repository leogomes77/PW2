import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NewProfileComponent } from './new-profile/new-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PerfildetalhesComponent } from './perfildetalhes/perfildetalhes.component';
import { ProfilesService } from 'src/services/profiles.service';
import { ListagemComponent } from './listagem/listagem.component';

const routes : Routes = [
  {path: '',component:ListagemComponent},
  {path: 'novoPerfil' , component: NewProfileComponent},
  {path: 'PerfilDetalhes/:name/:team/:nickname/:idade/:nacionalidade/:titulos/:imagem/:twitch/:insta/:twitter',component : PerfildetalhesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NewProfileComponent,
    PerfildetalhesComponent,
    ListagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
