// Site-wide constants

export const COMPANY_NAME = "Precision Site Solutions";

// Employer/Client contact (Yann)
export const PHONE_YANN = "0466 074 577";
export const PHONE_YANN_HREF = "tel:0466074577";

// Worker/Candidate contact (Tobi)
export const PHONE_TOBI = "0426 613 066";
export const PHONE_TOBI_HREF = "tel:0426613066";

// Primary phone (Yann - for general/employer use)
export const PHONE_NUMBER = "0466 074 577";
export const PHONE_HREF = "tel:0466074577";

export const EMAIL = "admin@precisionsitesolutions.com.au";
export const ABN = "XX XXX XXX XXX";

export const LOCATIONS = [
  { id: "gold-coast", name: "Gold Coast", slug: "gold-coast", state: "QLD" },
  { id: "brisbane", name: "Brisbane", slug: "brisbane", state: "QLD" },
  { id: "byron-bay", name: "Byron Bay", slug: "byron-bay", state: "NSW" },
  { id: "logan", name: "Logan", slug: "logan", state: "QLD" },
  { id: "ipswich", name: "Ipswich", slug: "ipswich", state: "QLD" },
  { id: "tweed-heads", name: "Tweed Heads", slug: "tweed-heads", state: "NSW" },
] as const;

// Core 4 services
export const TRADES = [
  { id: "labourers", name: "Skilled Labourers", slug: "labourers" },
  { id: "carpenters", name: "Carpenters", slug: "carpenters" },
  { id: "building-cleaners", name: "Building Cleaners", slug: "building-cleaners" },
  { id: "demolition", name: "Demolition Crews", slug: "demolition" },
] as const;

export const DURATION_OPTIONS = [
  { value: "1-day", label: "1 Day" },
  { value: "2-3-days", label: "2-3 Days" },
  { value: "1-week", label: "1 Week" },
  { value: "2-weeks", label: "2 Weeks" },
  { value: "1-month", label: "1 Month" },
  { value: "ongoing", label: "Ongoing" },
] as const;

export const TICKETS = [
  { id: "white-card", name: "White Card (Construction Induction)" },
  { id: "working-at-heights", name: "Working at Heights" },
  { id: "ewp", name: "EWP (Elevated Work Platform)" },
  { id: "forklift", name: "Forklift Licence" },
  { id: "traffic-control", name: "Traffic Control" },
  { id: "confined-space", name: "Confined Space" },
  { id: "first-aid", name: "First Aid" },
  { id: "asbestos-awareness", name: "Asbestos Awareness" },
] as const;

export const AVAILABILITY_OPTIONS = [
  { value: "immediately", label: "Immediately / ASAP" },
  { value: "within-week", label: "Within a Week" },
  { value: "within-2-weeks", label: "Within 2 Weeks" },
  { value: "within-month", label: "Within a Month" },
  { value: "flexible", label: "Flexible" },
] as const;

export const SUBURBS = {
  "gold-coast": [
    "Southport", "Robina", "Varsity Lakes", "Helensvale", "Burleigh Heads",
    "Mermaid Waters", "Surfers Paradise", "Broadbeach", "Coomera", "Nerang",
    "Ashmore", "Bundall", "Carrara", "Mudgeeraba", "Palm Beach"
  ],
  "brisbane": [
    "Fortitude Valley", "Newstead", "South Brisbane", "Chermside", "Bowen Hills",
    "Milton", "West End", "Woolloongabba", "Spring Hill", "Brisbane CBD",
    "Toowong", "Indooroopilly", "Carindale", "Mt Gravatt", "Eight Mile Plains"
  ],
  "byron-bay": [
    "Byron Bay", "Ballina", "Lennox Head", "Mullumbimby", "Bangalow",
    "Suffolk Park", "Brunswick Heads", "Ocean Shores", "Billinudgel", "Newrybar"
  ],
  "logan": [
    "Logan Central", "Springwood", "Beenleigh", "Browns Plains", "Marsden",
    "Meadowbrook", "Slacks Creek", "Woodridge", "Underwood", "Shailer Park"
  ],
  "ipswich": [
    "Ipswich CBD", "Springfield", "Goodna", "Redbank", "Booval",
    "Brassall", "Karalee", "Raceview", "Bundamba", "Riverview"
  ],
  "tweed-heads": [
    "Tweed Heads", "Coolangatta", "Kirra", "Currumbin", "Banora Point",
    "Terranora", "Chinderah", "Kingscliff", "Cabarita Beach", "Murwillumbah"
  ],
} as const;
