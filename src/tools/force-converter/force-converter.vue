<script setup lang="ts">
import _ from 'lodash';
import {
  convertGramsToNewtons,
  convertKilogramsToNewtons,
  convertMetricTonToNewtons,
  convertUSTonToNewtons,
  convertNewtonsToGrams,
  convertNewtonsToKilograms,
  convertNewtonsToMetricTon,
  convertNewtonsToUSTon,
  convertDeciNewtonsToNewtons,
  convertKiloNewtonsToNewtons,
  convertMegaNewtonsToNewtons,
  convertNewtonsToDeciNewtons,
  convertNewtonsToKiloNewtons,
  convertNewtonsToMegaNewtons,
  convertPoundsToNewtons,
  convertNewtonsToPounds,
  convertKipsToNewtons,
  convertNewtonsToKips
} from './force-converter.models';

type ForceUnit = 'grams' | 'kilograms' | 'metricTon' | 'usTon' | 'newtons' | 'deciNewtons' | 'kiloNewtons' | 'megaNewtons' | 'pounds' | 'kips';

const units = reactive<
  Record<
    string | ForceUnit,
    { title: string; unit: string; ref: number; toNewtons: (v: number) => number; fromNewtons: (v: number) => number }
  >
>({
  grams: {
    title: 'Grams',
    unit: 'g',
    ref: 0,
    toNewtons: convertGramsToNewtons,
    fromNewtons: convertNewtonsToGrams,
  },
  kilograms: {
    title: 'Kilograms',
    unit: 'kg',
    ref: 0,
    toNewtons: convertKilogramsToNewtons,
    fromNewtons: convertNewtonsToKilograms,
  },
  metricTon: {
    title: 'Metric Ton',
    unit: 't',
    ref: 0,
    toNewtons: convertMetricTonToNewtons,
    fromNewtons: convertNewtonsToMetricTon,
  },
  usTon: {
    title: 'US Ton',
    unit: 'us tn',
    ref: 0,
    toNewtons: convertUSTonToNewtons,
    fromNewtons: convertNewtonsToUSTon,
  },
  newtons: {
    title: 'Newtons',
    unit: 'N',
    ref: 0,
    toNewtons: _.identity,
    fromNewtons: _.identity,
  },
  deciNewtons: {
    title: 'DeciNewtons',
    unit: 'dN',
    ref: 0,
    toNewtons: convertDeciNewtonsToNewtons,
    fromNewtons: convertNewtonsToDeciNewtons,
  },
  kiloNewtons: {
    title: 'KiloNewtons',
    unit: 'kN',
    ref: 0,
    toNewtons: convertKiloNewtonsToNewtons,
    fromNewtons: convertNewtonsToKiloNewtons,
  },
  megaNewtons: {
    title: 'MegaNewtons',
    unit: 'MN',
    ref: 0,
    toNewtons: convertMegaNewtonsToNewtons,
    fromNewtons: convertNewtonsToMegaNewtons,
  },
  pounds: {
    title: 'Pounds',
    unit: 'lb',
    ref: 0,
    toNewtons: convertPoundsToNewtons,
    fromNewtons: convertNewtonsToPounds,
  },
  kips: {
    title: 'Kips',
    unit: 'klb',
    ref: 0,
    toNewtons: convertKipsToNewtons,
    fromNewtons: convertNewtonsToKips,
  },
});

function update(key: ForceUnit) {
  const { ref: value, toNewtons } = units[key];
  const newtons = toNewtons(value) ?? 0;
  _.chain(units)
    .omit(key)
    .forEach(({ fromNewtons }, index) => {
      units[index].ref = Math.floor((fromNewtons(newtons) ?? 0) * 1000) / 1000;
    })
    .value();
}
</script>

<template>
  <div>
    <n-input-group v-for="[key, { title, unit, ref }] in Object.entries(units)" :key="key" mb-3 w-full>
      <n-input-group-label style="width: 100px">
        {{ title }}
      </n-input-group-label>
      <n-input-number
        v-model:value="units[key].ref"
        style="flex: 1"
        @update:value="() => update(key as ForceUnit)"
      />
      <n-input-group-label style="width: 50px">
        {{ unit }}
      </n-input-group-label>
    </n-input-group>
  </div>
</template>
