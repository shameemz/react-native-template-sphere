import { Platform } from 'react-native';

import BaseComponent from './../Com/SampleComponent';

class SampleComponent extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.messages = {
      title: 'Bienvenue sur le site français du mobile',
      message: 'Seul le messages a été écrasé depuis le site français, la méthode render est toujours utilisée depuis .com (site / app).',
    };
    this.instructions = Platform.select({
      ios: 'Appuyez sur Cmd + R pour recharger, \n' +
      'Cmd + D ou secouer pour le menu de dev',
      android: 'Appuyez deux fois sur R sur votre clavier pour recharger, \n' +
              'Secouez ou appuyez sur le bouton de menu pour le menu de dev',
      web: 'Remarque: le rechargement se produira à chaque modification de vos fichiers / répertoires',
    });
  }
}

export default SampleComponent;
