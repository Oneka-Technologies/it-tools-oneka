import { Ruler2 } from '@vicons/tabler';// Placeholder icon, adjust as necessary
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.pressure-converter.title'),
  path: '/pressure-converter',
  description: translate('tools.pressure-converter.description'),
  keywords: [
    'pressure',
    'converter',
    'Pa',
    'hPa',
    'MPa',
    'GPa',
    'bar',
    'kbar',
    'mbar',
    'psi',
    'kpsi',
    'cmH2O',
    'inH2O',
    'mmHg',
    'inHg',
    'atm',
    'torr',
  ],
  component: () => import('./pressure-converter.vue'),
  icon: Ruler2,
});
