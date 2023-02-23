import {
  STATE, NAME as NAME_COL, AGE,
} from '@shell/config/table-headers';
import { NAME } from '@shell/config/product/explorer';

export function init(plugin, store) {
  const {
    basicType,
    headers,
    weightGroup,
  } = plugin.DSL(store, NAME);

  const MENU_GROUP = 'globalProject';

  const UI_PLUGIN = 'catalog.cattle.io.uiplugin';
  const GLOBAL_PROJECT = 'management.fzyun.io.globalproject';

  basicType([
    GLOBAL_PROJECT,
    UI_PLUGIN,
  ], MENU_GROUP);
  weightGroup(MENU_GROUP, 99, true);

  headers(UI_PLUGIN, [
    STATE,
    NAME_COL,
    {
      name:     'version',
      label:    'Version',
      value:    'version',
      getValue: row => row.version,
    },
    {
      name:     'cacheState',
      label:    'Cache State',
      value:    'status.cacheState',
      getValue: row => row.status?.cacheState,
    },
    AGE,
  ]);

  headers(GLOBAL_PROJECT, [
    STATE,
    NAME_COL,
    {
      name:     'name',
      labelKey: 'globalProject.tableHeaders.name',
      value:    'spec.name',
      getValue: row => row.spec.name,
    },
    {
      name:     'memberCount',
      labelKey: 'globalProject.tableHeaders.memberCount',
      value:    'spec.users.length',
      getValue: row => row.spec.users?.length,
    },
    {
      name:     'clusterCount',
      labelKey: 'globalProject.tableHeaders.clusterCount',
      value:    'spec.spec.clusters.length',
      getValue: row => row.spec.clusters?.length,
    },
    {
      name:     'clusters',
      labelKey: 'globalProject.tableHeaders.clusters',
      value:    'spec.clusters',
      getValue: row => row.spec.clusters,
    },
    AGE,
  ]);
}
