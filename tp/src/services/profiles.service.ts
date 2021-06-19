export class ProfilesService {
  profiles = [
    {
      name: 'Aleksandr Kostyliev',
      nickname: 's1mple',
      nomeEquipa: 'Navi',
      idade: '23',
      nacionalidade: 'Ucraniano',
      titulos: 'Esl Cologne 2017 , Dreamhack Masters',
      imagem:'https://img-cdn.hltv.org/playerbodyshot/QNTzHmdKTV1o6HWOQyWHdA.png?ixlib=java-2.1.0&w=400&s=b01c4fdb6b3cde55c6a7aac872bd175e',
      twitch:'https://www.twitch.tv/s1mple',
      insta: 'https://www.instagram.com/s1mpleo/',
      twitter:'https://twitter.com/s1mpleO'
    },
    {
      name: 'Nikola Kovač',
      nickname: 'NiKo',
      nomeEquipa: 'G2',
      idade: '24',
      nacionalidade: 'Bosnio',
      titulos: 'IEM New York , ELeague',
      imagem:'https://img-cdn.hltv.org/playerbodyshot/PpLtPwBBTsBUxDVlPoN9LW.png?ixlib=java-2.1.0&w=400&s=b251dbc747ccdc2e43132941f6dd219d',
      twitch:'https://www.twitch.tv/NiKo',
      insta: 'https://www.instagram.com/csgoniko/',
      twitter:'https://twitter.com/G2NiKo'
     
    },
    {
      name: 'Mathieu Herbaut',
      nickname: 'ZywOo',
      nomeEquipa: 'Vitality',
      idade: '20',
      nacionalidade: 'Francês',
      titulos: 'Blast Premier Fall, IEM Benjing ',
      imagem:'https://img-cdn.hltv.org/playerbodyshot/FU6cX0sBXlqI-UGYm_92sq.png?ixlib=java-2.1.0&w=400&s=0f5e9fdb4a183bcfb1b1fa7d88b43f08',
      twitch:'https://www.twitch.tv/cs_zywoo',
      insta: 'https://www.instagram.com/cs_zywoo/',
      twitter:'https://twitter.com/zywoo'
     
    },
    {
      name: 'Henrique Teles',
      nickname: 'HEN1',
      nomeEquipa: 'O Plano',
      idade: '25',
      nacionalidade: 'Brasileiro',
      titulos: 'IEM New York 2020 , ESL Pro League Season 12 North America',
      imagem:'https://img-cdn.hltv.org/playerbodyshot/EzvijKP3ouqz8NGwajAZhw.png?ixlib=java-2.1.0&w=400&s=17d5233ee597fd0d03afb4fa59bbd1ad',
      twitch:'https://www.twitch.tv/henriquehen1',
      insta: 'https://www.instagram.com/henriquehen1/',
      twitter:'https://twitter.com/Hen1'
     
    },
    {
      name: 'Renato Gonçalves',
      nickname: 'stadodo',
      nomeEquipa: 'SAW',
      idade: '24',
      nacionalidade: 'Português',
      titulos: 'Master League Portugl IV',
      imagem:'https://img-cdn.hltv.org/playerbodyshot/PXl_yqKMw7OnLlR8nxr1o9.png?ixlib=java-2.1.0&w=400&s=47f3544314f6c2c543eef82029925ab9',
      twitch:'https://www.twitch.tv/stadodo',
      insta: 'https://www.instagram.com/renatogoncalves10/',
      twitter:'https://twitter.com/officialstadodo'
     
    },
    {
      name: 'Nicolai Reedtz',
      nickname: 'device',
      nomeEquipa: 'Nip',
      idade: '25',
      nacionalidade: 'Dinamarques',
      titulos: 'IEM Global Challenge , 4x Major Winner , ESL One Road to Rio',
      imagem:'https://img-cdn.hltv.org/playerbodyshot/e-VpY--MZr_3XFDmj8DBd6.png?ixlib=java-2.1.0&w=400&s=f659f480569596b71f8c7d6fffc27ad7',
      twitch:'https://www.twitch.tv/device',
      insta: 'https://www.instagram.com/devveking/',
      twitter:'https://twitter.com/dev1ce' 
    }
      
      ];
    
      addProfile(newProfile: {name: string, nickname: string,nomeEquipa:string,idade:string , nacionalidade:string ,titulos:string,imagem:string,twitch: string , insta : string , twitter : string}) {
        this.profiles.push(newProfile);
      }     

      removerProfile(indiceProfile: number) {
        this.profiles.splice(indiceProfile,1);
      }
}