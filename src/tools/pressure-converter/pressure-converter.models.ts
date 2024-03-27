// Base unit conversion constants
const psi_to_Pa = 6894.76; // 1 psi to Pascals
const Pa_to_psi = 1 / psi_to_Pa; // 1 Pascal to psi
const hPa_to_Pa = 100;
const MPa_to_Pa = 1e6;
const GPa_to_Pa = 1e9;
const bar_to_Pa = 1e5;
const kbar_to_Pa = 1e8;
const mbar_to_Pa = 100;
const cmH2O_to_Pa = 98.0665;
const inH2O_to_Pa = 248.84;
const mmHg_to_Pa = 133.322;
const inHg_to_Pa = 3386.39;
const atm_to_Pa = 101325;
const torr_to_Pa = 133.322;

// Psi conversions
export const convertPatoPsi = (value: number) => value / Pa_to_psi;
export const convertPsiToPa = (value: number) => value * Pa_to_psi;

// Hectopascal conversions
export const convertHpaToPa = (value: number) => value * hPa_to_Pa;
export const convertPaToHpa = (value: number) => value / hPa_to_Pa;

// Megapascal conversions
export const convertMpaToPa = (value: number) => value * MPa_to_Pa;
export const convertPaToMpa = (value: number) => value / MPa_to_Pa;

// Gigapascal conversions
export const convertGpaToPa = (value: number) => value * GPa_to_Pa;
export const convertPaToGpa = (value: number) => value / GPa_to_Pa;

// Bar conversions
export const convertBarToPa = (value: number) => value * bar_to_Pa;
export const convertPaToBar = (value: number) => value / bar_to_Pa;

// Kilobar conversions
export const convertKbarToPa = (value: number) => value * kbar_to_Pa;
export const convertPaToKbar = (value: number) => value / kbar_to_Pa;

// Millibar conversions
export const convertMbarToPa = (value: number) => value * mbar_to_Pa;
export const convertPaToMbar = (value: number) => value / mbar_to_Pa;

// Centimeter of water conversions
export const convertCmH2OToPa = (value: number) => value * cmH2O_to_Pa;
export const convertPaToCmH2O = (value: number) => value / cmH2O_to_Pa;

// Inch of water conversions
export const convertInH2OToPa = (value: number) => value * inH2O_to_Pa;
export const convertPaToInH2O = (value: number) => value / inH2O_to_Pa;

// Millimeter of mercury (mmHg) conversions
export const convertMmHgToPa = (value: number) => value * mmHg_to_Pa;
export const convertPaToMmHg = (value: number) => value / mmHg_to_Pa;

// Inch of mercury (inHg) conversions
export const convertInHgToPa = (value: number) => value * inHg_to_Pa;
export const convertPaToInHg = (value: number) => value / inHg_to_Pa;

// Atm conversions
export const convertAtmToPa = (value: number) => value * atm_to_Pa;
export const convertPaToAtm = (value: number) => value / atm_to_Pa;

// Torr conversions
export const convertTorrToPa = (value: number) => value * torr_to_Pa;
export const convertPaToTorr = (value: number) => value / torr_to_Pa;