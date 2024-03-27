<script setup lang="ts">
import { reactive } from 'vue';
import _ from 'lodash';
import {
  convertPatoPsi, convertPsiToPa,
  convertHpaToPa, convertPaToHpa,
  convertMpaToPa, convertPaToMpa,
  convertGpaToPa, convertPaToGpa,
  convertBarToPa, convertPaToBar,
  convertKbarToPa, convertPaToKbar,
  convertMbarToPa, convertPaToMbar,
  convertCmH2OToPa, convertPaToCmH2O,
  convertInH2OToPa, convertPaToInH2O,
  convertMmHgToPa, convertPaToMmHg,
  convertInHgToPa, convertPaToInHg,
  convertAtmToPa, convertPaToAtm,
  convertTorrToPa, convertPaToTorr,
} from './pressure-converter.models';

type PressureUnit = 'Pa' | 'hPa' | 'MPa' | 'GPa' | 'bar' | 'kbar' | 'mbar' | 'psi' | 'kpsi' | 'cmH2O' | 'inH2O' | 'mmHg' | 'inHg';

const units = reactive<
  Record<
    PressureUnit,
    { title: string; unit: string; ref: number; toPa: (v: number) => number; fromPa: (v: number) => number }
  >
>({
  'Pa': {
    title: 'Pascals',
    unit: 'Pa',
    ref: 0,
    toPa: _.identity,
    fromPa: _.identity,
  },
  'hPa': {
    title: 'Hectopascals',
    unit: 'hPa',
    ref: 0,
    toPa: convertHpaToPa,
    fromPa: convertPaToHpa,
  },
  'MPa': {
    title: 'Megapascals',
    unit: 'MPa',
    ref: 0,
    toPa: convertMpaToPa,
    fromPa: convertPaToMpa,
  },
  'GPa': {
    title: 'Gigapascals',
    unit: 'GPa',
    ref: 0,
    toPa: convertGpaToPa,
    fromPa: convertPaToGpa,
  },
  'bar': {
    title: 'Bars',
    unit: 'bar',
    ref: 0,
    toPa: convertBarToPa,
    fromPa: convertPaToBar,
  },
  'kbar': {
    title: 'Kilobars',
    unit: 'kbar',
    ref: 0,
    toPa: convertKbarToPa,
    fromPa: convertPaToKbar,
  },
  'mbar': {
    title: 'Millibars',
    unit: 'mbar',
    ref: 0,
    toPa: convertMbarToPa,
    fromPa: convertPaToMbar,
  },
  'psi': {
    title: 'Pounds per square inch',
    unit: 'psi',
    ref: 0,
    toPa: convertPatoPsi,
    fromPa: convertPsiToPa,
  },
  'kpsi': {
    title: 'Kilopounds per square inch',
    unit: 'kpsi',
    ref: 0,
    toPa: value => convertPatoPsi(value) * 1000,
    fromPa: value => convertPsiToPa(value) / 1000,
  },
  'cmH2O': {
    title: 'Centimeters of water',
    unit: 'cmH2O',
    ref: 0,
    toPa: convertCmH2OToPa,
    fromPa: convertPaToCmH2O,
  },
  'inH2O': {
    title: 'Inches of water',
    unit: 'inH2O',
    ref: 0,
    toPa: convertInH2OToPa,
    fromPa: convertPaToInH2O,
  },
  'mmHg': {
    title: 'Millimeters of mercury',
    unit: 'mmHg',
    ref: 0,
    toPa: convertMmHgToPa,
    fromPa: convertPaToMmHg,
  },
  'inHg': {
    title: 'Inches of mercury',
    unit: 'inHg',
    ref: 0,
    toPa: convertInHgToPa,
    fromPa: convertPaToInHg,
  },
  'atm': {
    title: 'Atmospheres',
    unit: 'atm',
    ref: 0,
    toPa: convertAtmToPa,
    fromPa: convertPaToAtm,
  },
  'torr': {
    title: 'Torr',
    unit: 'torr',
    ref: 0,
    toPa: convertTorrToPa,
    fromPa: convertPaToTorr,
  },
});

function update(key: PressureUnit) {
  const { ref: value, toPa } = units[key];
  const pa = toPa(value);
  Object.keys(units).forEach((unitKey) => {
    if (unitKey !== key) {
      units[unitKey as PressureUnit].ref = Math.round(units[unitKey as PressureUnit].fromPa(pa) * 10000) / 10000;
    }
  });
}
</script>

<template>
  <div>
    <n-input-group v-for="(unit, key) in units" :key="key" mb-3 w-full>
      <n-input-group-label style="width: 190px">
        {{ unit.title }}
      </n-input-group-label>
      <n-input-number
        v-model:value="unit.ref"
        style="flex: 1"
        @update:value="() => update(key as PressureUnit)"
      />
      <n-input-group-label style="width: 90px">
        {{ unit.unit }}
      </n-input-group-label>
    </n-input-group>
  </div>
</template>
