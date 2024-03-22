// Conversion factors
const L_to_m3 = 1 / 1000;
const gal_to_m3 = 0.00378541;
const ft3_to_m3 = 0.0283168;

// Base conversion: L/min
export const convertLminToM3s = (value: number) => (value * L_to_m3) / 60;
export const convertM3sToLmin = (value: number) => (value * 60) / L_to_m3;

// Other conversions
export const convertLhToLmin = (value: number) => value / 60;
export const convertLminToLh = (value: number) => value * 60;

export const convertLsToLmin = (value: number) => value * 60;
export const convertLminToLs = (value: number) => value / 60;

export const convertM3minToM3s = (value: number) => value / 60;
export const convertM3sToM3min = (value: number) => value * 60;

export const convertM3hToM3s = (value: number) => value / 3600;
export const convertM3sToM3h = (value: number) => value * 3600;

export const convertGpmToM3s = (value: number) => (value * gal_to_m3) / 60;
export const convertM3sToGpm = (value: number) => (value * 60) / gal_to_m3;

export const convertGphToM3s = (value: number) => (value * gal_to_m3) / 3600;
export const convertM3sToGph = (value: number) => (value * 3600) / gal_to_m3;

export const convertCfmToM3s = (value: number) => (value * ft3_to_m3) / 60;
export const convertM3sToCfm = (value: number) => (value * 60) / ft3_to_m3;

export const convertCfsToM3s = (value: number) => value * ft3_to_m3;
export const convertM3sToCfs = (value: number) => value / ft3_to_m3;

export const convertLdayToM3s = (value: number) => (value * L_to_m3) / 86400;
export const convertM3sToLday = (value: number) => (value * 86400) / L_to_m3;

export const convertM3dayToM3s = (value: number) => value / 86400;
export const convertM3sToM3day = (value: number) => value * 86400;

export const convertGallonDayToM3s = (value: number) => (value * gal_to_m3) / 86400;
export const convertM3sToGallonDay = (value: number) => (value * 86400) / gal_to_m3;
