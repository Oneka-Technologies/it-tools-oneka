import { Scale } from '@vicons/tabler'; // Assuming Scale is a suitable icon for force measurement
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.force-converter.title'),
  path: '/force-converter',
  description: translate('tools.force-converter.description'),
  keywords: [
    'force',
    'converter',
    'gram',
    'kilogram',
    'metric ton',
    'US ton',
    'Newton',
    'deciNewton',
    'kiloNewton',
    'MegaNewton',
    'pounds',
    'kip',
  ],
  component: () => import('./force-converter.vue'),
  icon: Scale,
});
