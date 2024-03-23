<script setup lang="ts">
import { reactive } from 'vue';
import _ from 'lodash';
import {
  convertLminToM3s, convertM3sToLmin,
  convertLhToLmin, convertLminToLh,
  convertLsToLmin, convertLminToLs,
  convertM3minToM3s, convertM3sToM3min,
  convertM3hToM3s, convertM3sToM3h,
  convertGpmToM3s, convertM3sToGpm,
  convertGphToM3s, convertM3sToGph,
  convertCfmToM3s, convertM3sToCfm,
  convertCfsToM3s, convertM3sToCfs,
  convertLdayToM3s, convertM3sToLday,
  convertM3dayToM3s, convertM3sToM3day,
  convertGallonDayToM3s, convertM3sToGallonDay,
} from './flow-converter.models';

type FlowUnit = 'L/min' | 'L/h' | 'L/s' | 'L/day' | 'm3/min' | 'm3/h' | 'm3/s' | 'm3/day' | 'gpm' | 'gph' | 'gallon/day' | 'cfm' | 'cfs';

const units = reactive<
  Record<
    FlowUnit,
    { title: string; unit: string; ref: number; toM3s: (v: number) => number; fromM3s: (v: number) => number }
  >
>({
  'L/min': {
    title: 'Liters per minute',
    unit: 'L/min',
    ref: 0,
    toM3s: convertLminToM3s,
    fromM3s: convertM3sToLmin,
  },
  'L/h': {
    title: 'Liters per hour',
    unit: 'L/h',
    ref: 0,
    toM3s: value => convertLminToM3s(convertLhToLmin(value)),
    fromM3s: value => convertLminToLh(convertM3sToLmin(value)),
  },
  'L/s': {
    title: 'Liters per second',
    unit: 'L/s',
    ref: 0,
    toM3s: value => convertLminToM3s(convertLsToLmin(value)),
    fromM3s: value => convertLminToLs(convertM3sToLmin(value)),
  },
  'L/day': {
    title: 'Liters per day',
    unit: 'L/day',
    ref: 0,
    toM3s: convertLdayToM3s,
    fromM3s: convertM3sToLday,
  },
  'm3/min': {
    title: 'Cubic meters per minute',
    unit: 'm3/min',
    ref: 0,
    toM3s: convertM3minToM3s,
    fromM3s: convertM3sToM3min,
  },
  'm3/h': {
    title: 'Cubic meters per hour',
    unit: 'm3/h',
    ref: 0,
    toM3s: convertM3hToM3s,
    fromM3s: convertM3sToM3h,
  },
  'm3/day': {
    title: 'Cubic meters per day',
    unit: 'm3/day',
    ref: 0,
    toM3s: convertM3dayToM3s,
    fromM3s: convertM3sToM3day,
  },
  'm3/s': {
    title: 'Cubic meters per second',
    unit: 'm3/s',
    ref: 0,
    toM3s: _.identity,
    fromM3s: _.identity,
  },
  'gpm': {
    title: 'Gallons per minute',
    unit: 'gpm',
    ref: 0,
    toM3s: convertGpmToM3s,
    fromM3s: convertM3sToGpm,
  },
  'gph': {
    title: 'Gallons per hour',
    unit: 'gph',
    ref: 0,
    toM3s: convertGphToM3s,
    fromM3s: convertM3sToGph,
  },
  'gallon/day': {
    title: 'Gallons per day',
    unit: 'gallon/day',
    ref: 0,
    toM3s: convertGallonDayToM3s,
    fromM3s: convertM3sToGallonDay,
  },
  'cfm': {
    title: 'Cubic feet per minute',
    unit: 'cfm',
    ref: 0,
    toM3s: convertCfmToM3s,
    fromM3s: convertM3sToCfm,
  },
  'cfs': {
    title: 'Cubic feet per second',
    unit: 'cfs',
    ref: 0,
    toM3s: convertCfsToM3s,
    fromM3s: convertM3sToCfs,
  },
});

function update(key: FlowUnit) {
  const { ref: value, toM3s } = units[key];
  const m3s = toM3s(value);
  Object.keys(units).forEach((unitKey) => {
    if (unitKey !== key) {
      units[unitKey as FlowUnit].ref = Math.round(units[unitKey as FlowUnit].fromM3s(m3s) * 1000) / 1000;
    }
  });
}

</script>

<template>
  <div>
    <n-input-group v-for="(unit, key) in units" :key="key" mb-3 w-full>
      <n-input-group-label style="width: 175px">
        {{ unit.title }}
      </n-input-group-label>
      <n-input-number
        v-model:value="unit.ref"
        style="flex: 1"
        @update:value="() => update(key as FlowUnit)"
      />
      <n-input-group-label style="width: 100px">
        {{ unit.unit }}
      </n-input-group-label>
    </n-input-group>
  </div>
</template>