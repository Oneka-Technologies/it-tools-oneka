// Basic conversion factor: 1 kgf (kilogram-force) on Earth = 9.80665 Newtons
const kgfToN = 9.80665;

export const convertGramsToNewtons = (grams: number) => grams / 1000 * kgfToN;
export const convertKilogramsToNewtons = (kilograms: number) => kilograms * kgfToN;
export const convertMetricTonToNewtons = (metricTon: number) => metricTon * 1000 * kgfToN;
export const convertUSTonToNewtons = (usTon: number) => usTon * 907.185 * kgfToN;

export const convertNewtonsToGrams = (newtons: number) => newtons / kgfToN * 1000;
export const convertNewtonsToKilograms = (newtons: number) => newtons / kgfToN;
export const convertNewtonsToMetricTon = (newtons: number) => newtons / (1000 * kgfToN);
export const convertNewtonsToUSTon = (newtons: number) => newtons / (907.185 * kgfToN);

// For direct force units, conversion is straightforward
export const convertDeciNewtonsToNewtons = (deciNewtons: number) => deciNewtons / 10;
export const convertKiloNewtonsToNewtons = (kiloNewtons: number) => kiloNewtons * 1000;
export const convertMegaNewtonsToNewtons = (megaNewtons: number) => megaNewtons * 1e6;

export const convertNewtonsToDeciNewtons = (newtons: number) => newtons * 10;
export const convertNewtonsToKiloNewtons = (newtons: number) => newtons / 1000;
export const convertNewtonsToMegaNewtons = (newtons: number) => newtons / 1e6;

// Pounds (lbf) to Newtons, considering 1 lbf = 4.4482216152605 N
export const convertPoundsToNewtons = (pounds: number) => pounds * 4.4482216152605;
export const convertNewtonsToPounds = (newtons: number) => newtons / 4.4482216152605;

// Kip (klbs, 1 kip = 1000 pounds-force)
export const convertKipsToNewtons = (kips: number) => kips * 1000 * 4.4482216152605;
export const convertNewtonsToKips = (newtons: number) => newtons / (1000 * 4.4482216152605);
