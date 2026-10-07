export const GLOBAL_PROMO = {
  text: "Second pair of ZEISS lenses at 50% off",
  badgeText: "50% Off 2nd Pair",
  description: "Buy any frame with ZEISS lenses and get 50% off your second pair of ZEISS lenses of equal or lesser value.",
  applicableBrands: ["zeiss"],
};

/** Ray-Ban Meta Gen-2 Wayfarer limited-time offer — 20% off */
export const RAYBAN_META_PROMO = {
  text: "20% Off Ray-Ban Meta Gen-2 Wayfarers",
  badgeText: "20% OFF",
  originalPrice: 39800,
  discountedPrice: 31840,
  description: "Get 20% off on your favourite Ray-Ban Meta Gen-2 (Wayfarers only). Limited time only.",
  /** Hours before the popup re-appears for returning users */
  sessionDurationHours: 24,
  /** localStorage key used to persist the last-shown timestamp */
  storageKey: "cso_rayban_meta_promo_last_shown",
};

/** Oakley Meta AI Glasses limited-time offer — up to 20% off */
export const OAKLEY_META_PROMO = {
  text: "Up to 20% Off Oakley Meta AI Glasses",
  badgeText: "UP TO 20% OFF",
  hstn: {
    name: "Oakley Meta HSTN",
    discountPercent: 20,
    originalPrice: 41800,
    discountedPrice: 33440,
    saving: 8360,
    badgeText: "20% OFF",
  },
  vanguard: {
    name: "Oakley Meta Vanguard",
    discountPercent: 10,
    originalPrice: 52300,
    discountedPrice: 47070,
    saving: 5230,
    badgeText: "10% OFF",
  },
  description: "Get 20% off on Oakley Meta HSTN and 10% off on Oakley Meta Vanguard AI smart glasses. Limited time only.",
  sessionDurationHours: 24,
  storageKey: "cso_oakley_meta_promo_last_shown",
};


