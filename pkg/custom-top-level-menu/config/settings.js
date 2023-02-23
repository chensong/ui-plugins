import { IF_HAVE } from '@shell/store/type-map';
import { MANAGEMENT, HELM } from '@shell/config/types';
import { NAME } from '@shell/config/product/settings';

export function init(plugin, store) {
  const {
    product,
  } = plugin.DSL(store, NAME);

  product({
    ifHave:              IF_HAVE.ADMIN,
    ifHaveType:          new RegExp(`${ MANAGEMENT.SETTING }|${ MANAGEMENT.FEATURE }`, 'i'),
    inStore:             'management',
    icon:                'globe',
    removable:           false,
    showClusterSwitcher: false,
    category:            'configuration',
    weight:              100,
  });
}
