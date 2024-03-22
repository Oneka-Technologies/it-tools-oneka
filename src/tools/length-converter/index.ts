import { Ruler2 } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.length-converter.title'),
  path: '/length-converter',
  description: translate('tools.length-converter.description'),
  keywords: [
    'length',
    'converter',
    'nanometers',
    'micrometers',
    'millimeters',
    'centimeters',
    'inches',
    'feet',
    'yards',
    'meters',
    'kilometers',
    'miles',
    'nautical miles',
  ],
  component: () => import('./length-converter.vue'),
  icon: Ruler2,
});
