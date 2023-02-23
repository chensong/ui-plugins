import { IF_HAVE } from '@shell/store/type-map';
import { MANAGEMENT } from '@shell/config/types';
import { MULTI_CLUSTER } from '@shell/store/features';
import { NAME } from '@shell/config/product/auth';

export function init(plugin, store) {
  const {
    product,
  } = plugin.DSL(store, NAME);

  product({
    ifHave:              IF_HAVE.ADMIN,
    ifHaveType:          new RegExp(`${ MANAGEMENT.USER }|${ MANAGEMENT.AUTH_CONFIG }`, 'i'),
    ifHaveVerb:          'PUT',
    ifFeature:           MULTI_CLUSTER,
    inStore:             'management',
    icon:                'user',
    removable:           false,
    showClusterSwitcher: false,
    category:            'configuration',
  });
}
