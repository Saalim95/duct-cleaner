export const rules = {
  exitPoints: [
    "0-10 Feet Off the Ground",
    "10+ Feet Off the Ground",
    "Rooftop",
  ],
  numFurnaces: ["1", "2", "3+"] as const,
  locations: ["Basement", "Attic", "Main Floor", "Garage"] as const,
  furnaceLocations: [
    { label: "Side by Side", value: "side_by_side" },
    { label: "Different Location", value: "different" },
  ] as const,
  dryerVentOptions: [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ] as const,
};
