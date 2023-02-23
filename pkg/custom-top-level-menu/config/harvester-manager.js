import { IF_HAVE } from '@shell/store/type-map';
import { CAPI } from '@shell/config/types';
import { HARVESTER, MULTI_CLUSTER } from '@shell/store/features';
import { NAME, harvesterClustersLocation } from '@shell/config/product/harvester-manager';

export function init(plugin, store) {
  const {
    product,
  } = plugin.DSL(store, NAME);

  product({
    ifHave:              IF_HAVE.ADMIN,
    ifHaveType:          CAPI.RANCHER_CLUSTER,
    ifFeature:           [MULTI_CLUSTER, HARVESTER],
    inStore:             'management',
    icon:                'harvester',
    removable:           false,
    showClusterSwitcher: false,
    weight:              100,
    to:                  harvesterClustersLocation,
  });
}
