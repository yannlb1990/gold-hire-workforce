export const MONEY_PAGE_LOCATIONS = {
  "gold-coast": {
    name: "Gold Coast",
    slug: "gold-coast",
    suburbs: [
      "Surfers Paradise", "Broadbeach", "Southport", "Nerang", "Robina",
      "Burleigh Heads", "Palm Beach", "Coolangatta", "Coomera", "Helensvale",
      "Varsity Lakes", "Mudgeeraba", "Carrara", "Ashmore", "Labrador"
    ],
  },
  "brisbane": {
    name: "Brisbane",
    slug: "brisbane",
    suburbs: [
      "CBD", "South Brisbane", "Fortitude Valley", "West End", "Newstead",
      "Toowong", "Chermside", "Carindale", "Springfield", "Ipswich Road",
      "Eagle Farm", "Northgate", "Cannon Hill", "Woolloongabba", "Milton"
    ],
  },
  "byron-bay": {
    name: "Byron Bay",
    slug: "byron-bay",
    suburbs: [
      "Byron Bay", "Bangalow", "Mullumbimby", "Brunswick Heads", "Lennox Head",
      "Suffolk Park", "Ewingsdale", "Tyagarah", "Myocum", "Ocean Shores"
    ],
  },
  "logan": {
    name: "Logan",
    slug: "logan",
    suburbs: [
      "Logan Central", "Springwood", "Underwood", "Shailer Park", "Daisy Hill",
      "Beenleigh", "Browns Plains", "Marsden", "Loganholme", "Meadowbrook"
    ],
  },
  "ipswich": {
    name: "Ipswich",
    slug: "ipswich",
    suburbs: [
      "Ipswich CBD", "Springfield", "Goodna", "Redbank Plains", "Ripley",
      "Brassall", "Booval", "Bundamba", "Yamanto", "Rosewood"
    ],
  },
  "tweed-heads": {
    name: "Tweed Heads",
    slug: "tweed-heads",
    suburbs: [
      "Tweed Heads", "Tweed Heads South", "Banora Point", "Terranora",
      "Chinderah", "Kingscliff", "Cabarita Beach", "Pottsville", "Murwillumbah"
    ],
  },
} as const;

export const MONEY_PAGE_TRADES = {
  "labourers": {
    name: "Skilled Labourers",
    slug: "labourers",
    singularName: "Labourer",
  },
  "demolition": {
    name: "Demolition Crews",
    slug: "demolition",
    singularName: "Demolition Worker",
  },
  "carpenters": {
    name: "Carpenters",
    slug: "carpenters",
    singularName: "Carpenter",
  },
  "building-cleaners": {
    name: "Building Cleaners",
    slug: "building-cleaners",
    singularName: "Building Cleaner",
  },
  "landscaping": {
    name: "Landscaping Workers",
    slug: "landscaping",
    singularName: "Landscaping Worker",
  },
  "maintenance": {
    name: "Maintenance Ground Workers",
    slug: "maintenance",
    singularName: "Maintenance Worker",
  },
} as const;

export type MoneyPageLocationSlug = keyof typeof MONEY_PAGE_LOCATIONS;
export type MoneyPageTradeSlug = keyof typeof MONEY_PAGE_TRADES;
