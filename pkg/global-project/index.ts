import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';
import NewHomeComponent from './pages/NewHomeComponent.vue';

// Init the package
export default function(plugin: IPlugin) {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Load a product
  plugin.addProduct(require('./config/globalProject'));
  plugin.addProduct(require('./config/globalProjectTopMenu'));

  plugin.addRoute({
    name:      'home',
    path:      '/home',
    component: NewHomeComponent,
  });
}
