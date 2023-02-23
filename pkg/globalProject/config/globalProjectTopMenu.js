import { IF_HAVE } from '@shell/store/type-map';

export const NAME = 'globalProject';

export function init(plugin, store) {
  const {
    product,
  } = plugin.DSL(store, NAME);

  product({
    ifHave:              IF_HAVE.ADMIN,
    inStore:             'management',
    icon:                'groups',
    labelKey:            'globalProject',
    removable:           false,
    showClusterSwitcher: false,
    category:            'configuration',
    to:                  {
      name:   'c-cluster-product-resource',
      params: {
        cluster:  'local',
        product:  'explorer',
        resource: 'management.fzyun.io.globalproject',
      },
    },
  });

}
