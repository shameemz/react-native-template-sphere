import { Platform } from 'react-native';

import BaseComponent from './../Com/SampleComponent';

class SampleComponent extends BaseComponent {
  constructor(props, context) {
    super(props, context);
    this.messages = {
      title: 'Bienvenue sur le site français du desktop',
      text:
        'Seul le messages a été écrasé depuis le site français, la méthode render est toujours utilisée depuis .com (site).',
    };
    this.instructions = Platform.select({
      web: 'Remarque: le rechargement se produira à chaque modification de vos fichiers / répertoires',
    });
  }
}

export default SampleComponent;
