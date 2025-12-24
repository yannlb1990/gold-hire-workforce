// Site-wide constants

export const PHONE_NUMBER = "1300 XXX XXX";
export const PHONE_HREF = "tel:1300XXXXXX";
export const EMAIL = "enquiries@thegoldhirecompany.com.au";
export const ABN = "XX XXX XXX XXX";

export const LOCATIONS = [
  { id: "gold-coast", name: "Gold Coast", slug: "gold-coast", state: "QLD" },
  { id: "brisbane", name: "Brisbane", slug: "brisbane", state: "QLD" },
  { id: "byron-bay", name: "Byron Bay", slug: "byron-bay", state: "NSW" },
  { id: "logan", name: "Logan", slug: "logan", state: "QLD" },
  { id: "ipswich", name: "Ipswich", slug: "ipswich", state: "QLD" },
  { id: "tweed-heads", name: "Tweed Heads", slug: "tweed-heads", state: "NSW" },
] as const;

export const TRADES = [
  { id: "carpenters", name: "Carpenters", slug: "carpenters" },
  { id: "labourers", name: "Labourers", slug: "labourers" },
  { id: "demolition", name: "Demolition", slug: "demolition" },
  { id: "fitout-crews", name: "Fitout Crews", slug: "fitout-crews" },
  { id: "plasterers", name: "Plasterers", slug: "plasterers" },
  { id: "concreters", name: "Concreters", slug: "concreters" },
  { id: "steel-fixers", name: "Steel Fixers", slug: "steel-fixers" },
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
