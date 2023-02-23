import { importTypes } from '@rancher/auto-import';
import { IPlugin } from '@shell/core/types';

// Init the package
export default function(plugin: IPlugin) {
  // Auto-import model, detail, edit from the folders
  importTypes(plugin);

  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // Load a product
  plugin.addProduct(require('./config/manager'));
  plugin.addProduct(require('./config/harvester-manager'));
  plugin.addProduct(require('./config/multi-cluster-apps'));
  plugin.addProduct(require('./config/auth'));
  plugin.addProduct(require('./config/settings'));
}
