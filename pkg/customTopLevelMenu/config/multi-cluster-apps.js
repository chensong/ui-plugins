import { IF_HAVE } from '@shell/store/type-map';
import { LEGACY } from '@shell/store/features';
import { NAME } from '@shell/config/product/multi-cluster-apps';

export function init(plugin, store) {
  const {
    product,
  } = plugin.DSL(store, NAME);

  product({
    ifHave:                IF_HAVE.ADMIN,
    icon:                  'marketplace',
    category:              'legacy',
    inStore:               'management',
    ifFeature:             LEGACY,
    removable:             false,
    showClusterSwitcher:   false,
    showWorkspaceSwitcher: false,
  });
}
