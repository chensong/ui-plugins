import { IF_HAVE } from '@shell/store/type-map';
import { CAPI } from '@shell/config/types';
import { MULTI_CLUSTER } from '@shell/store/features';
import { BLANK_CLUSTER } from '@shell/store';
import { NAME } from '@shell/config/product/manager';

export function init(plugin, store) {
  const {
    product,
  } = plugin.DSL(store, NAME);

  product({
    ifHave:              IF_HAVE.ADMIN,
    ifHaveType:          CAPI.RANCHER_CLUSTER,
    ifFeature:           MULTI_CLUSTER,
    inStore:             'management',
    icon:                'cluster-management',
    removable:           false,
    showClusterSwitcher: false,
    to:                  {
      name:   'c-cluster-product-resource',
      params: {
        cluster:  BLANK_CLUSTER,
        product:  NAME,
        resource: CAPI.RANCHER_CLUSTER,
      },
    },
  });
}
