import { WaterDropOutlined } from '@vicons/material'; // Placeholder icon, adjust as necessary
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.flow-converter.title'),
  path: '/flow-converter',
  description: translate('tools.flow-converter.description'),
  keywords: [
    'flow',
    'converter',
    'L/min',
    'L/h',
    'L/s',
    'L/day',
    'm3/min',
    'm3/h',
    'm3/s',
    'm3/day',
    'gpm',
    'gph',
    'gallon/day',
    'cfm',
    'cfs',
  ],

  component: () => import('./flow-converter.vue'),
  icon: WaterDropOutlined,
});
