<script setup lang="ts">
import _ from 'lodash';
import {
  convertNanometersToMeters,
  convertMetersToNanometers,
  convertMetersToMicrometers,
  convertMicrometersToMeters,
  convertMillimetersToMeters,
  convertMetersToMillimeters,
  convertCentimetersToMeters,
  convertMetersToCentimeters,
  convertMetersToKilometers,
  convertKilometersToMeters,
  convertInchesToMeters,
  convertMetersToInches,
  convertFeetToMeters,
  convertMetersToFeet,
  convertYardsToMeters,
  convertMetersToYards,
  convertMilesToMeters,
  convertMetersToMiles,
  convertNauticalMilesToMeters,
  convertMetersToNauticalMiles,
} from './length-converter.models';

type LengthUnit = 'nanometers' | 'micrometers' | 'millimeters' | 'centimeters' | 'meters' | 'kilometers' | 'inches' | 'feet' | 'yards' | 'miles' | 'nauticalMiles';

const units = reactive<
  Record<
    string | LengthUnit,
    { title: string; unit: string; ref: number; toMeters: (v: number) => number; fromMeters: (v: number) => number }
  >
>({
  nanometers: {
    title: 'Nanometers',
    unit: 'nm',
    ref: 0,
    toMeters: convertNanometersToMeters,
    fromMeters: convertMetersToNanometers,
  },
  micrometers: {
    title: 'Micrometers',
    unit: 'µm',
    ref: 0,
    toMeters: convertMicrometersToMeters,
    fromMeters: convertMetersToMicrometers,
  },
  millimeters: {
    title: 'Millimeters',
    unit: 'mm',
    ref: 0,
    toMeters: convertMillimetersToMeters,
    fromMeters: convertMetersToMillimeters,
  },
  centimeters: {
    title: 'Centimeters',
    unit: 'cm',
    ref: 0,
    toMeters: convertCentimetersToMeters,
    fromMeters: convertMetersToCentimeters,
  },
  meters: {
    title: 'Meters',
    unit: 'm',
    ref: 0,
    toMeters: _.identity,
    fromMeters: _.identity,
  },
  kilometers: {
    title: 'Kilometers',
    unit: 'km',
    ref: 0,
    toMeters: convertKilometersToMeters,
    fromMeters: convertMetersToKilometers,
  },
  inches: {
    title: 'Inches',
    unit: 'in',
    ref: 0,
    toMeters: convertInchesToMeters,
    fromMeters: convertMetersToInches,
  },
  feet: {
    title: 'Feet',
    unit: 'ft',
    ref: 0,
    toMeters: convertFeetToMeters,
    fromMeters: convertMetersToFeet,
  },
  yards: {
    title: 'Yards',
    unit: 'yd',
    ref: 0,
    toMeters: convertYardsToMeters,
    fromMeters: convertMetersToYards,
  },
  miles: {
    title: 'Miles',
    unit: 'mi',
    ref: 0,
    toMeters: convertMilesToMeters,
    fromMeters: convertMetersToMiles,
  },
  nauticalMiles: {
    title: 'Nautical Miles',
    unit: 'nmi',
    ref: 0,
    toMeters: convertNauticalMilesToMeters,
    fromMeters: convertMetersToNauticalMiles,
  },
});

function update(key: LengthUnit) {
  const { ref: value, toMeters } = units[key];
  const meters = toMeters(value) ?? 0;
  _.chain(units)
    .omit(key)
    .forEach(({ fromMeters }, index) => {
      units[index].ref = Math.floor((fromMeters(meters) ?? 0) * 10000) / 10000;
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
        @update:value="() => update(key as LengthUnit)"
      />
      <n-input-group-label style="width: 50px">
        {{ unit }}
      </n-input-group-label>
    </n-input-group>
  </div>
</template>
