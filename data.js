/* data.js — Issue types, categories, and troubleshooting definitions */

const CATEGORIES = [
  {
    id: "bathroom_toilet",
    label: "Bathroom & Toilet",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h6M9 10h6M7 2h10M7 2v14a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V2M12 20v2M8 22h8"/></svg>`,
    issues: [
      { code: "RC-027A", label: "Shower not working" },
      { code: "RC-028A", label: "Shower leaking" },
      { code: "RC-029R", label: "Toilet not flushing / not working", urgent: true },
      { code: "RC-030A", label: "Toilet blocked" },
      { code: "RC-031A", label: "Toilet leaking" },
      { code: "RC-026A", label: "Bath issue" },
      { code: "RC-024A", label: "Leaking / broken tap" },
      { code: "RC-025A", label: "Sink blocked" },
      { code: "RC-103G", label: "Floor tiles damaged" },
      { code: "RC-104G", label: "Wall tiles damaged" }
    ]
  },
  {
    id: "kitchen",
    label: "Kitchen",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 2v4M10 2v4M14 2v4"/></svg>`,
    issues: [
      { code: "RC-120G", label: "Kitchen units damaged" },
      { code: "RC-121G", label: "Cupboards broken" },
      { code: "RC-124G", label: "Worktop damaged" },
      { code: "RC-025A", label: "Sink blocked" },
      { code: "RC-024A", label: "Leaking / broken tap" }
    ]
  },
  {
    id: "water_leaks",
    label: "Water Leaks",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"/></svg>`,
    issues: [
      { code: "RC-020R", label: "Severe water leak / flooding", urgent: true },
      { code: "RC-021A", label: "Suspected water leak" },
      { code: "RC-004A", label: "Radiator leaking" },
      { code: "RC-008R", label: "Boiler leaking", urgent: true },
      { code: "RC-028A", label: "Shower leaking" },
      { code: "RC-031A", label: "Toilet leaking" }
    ]
  },
  {
    id: "no_heating",
    label: "No Heating",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 18h18M6 6v12M10 6v12M14 6v12M18 6v12M3 12h18"/><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="2"/></svg>`,
    issues: [
      { code: "RC-001R", label: "No heating", urgent: true },
      { code: "RC-002A", label: "Heating intermittent" },
      { code: "RC-003A", label: "Radiator(s) not heating properly" },
      { code: "RC-011A", label: "Thermostat not working" }
    ]
  },
  {
    id: "no_hot_water",
    label: "No Hot Water",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10h10M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 8V6a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2"/><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="2"/></svg>`,
    issues: [
      { code: "RC-009R", label: "No hot water", urgent: true },
      { code: "RC-010A", label: "Hot water intermittent" },
      { code: "RC-006R", label: "Boiler not working", urgent: true },
      { code: "RC-007A", label: "Boiler pressure issue" }
    ]
  },
  {
    id: "no_power",
    label: "No Power",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/><line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="2"/></svg>`,
    issues: [
      { code: "RC-040R", label: "No electricity to entire property", urgent: true },
      { code: "RC-041A", label: "Partial loss of power" },
      { code: "RC-042A", label: "Fuse box tripping" },
      { code: "RC-043A", label: "Electric socket not working" },
      { code: "RC-047R", label: "Exposed wiring", urgent: true }
    ]
  },
  {
    id: "roof",
    label: "Roof",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/></svg>`,
    issues: [
      { code: "RC-180A", label: "Roof issue" },
      { code: "RC-181G", label: "Guttering issue" },
      { code: "RC-182G", label: "Chimney issue" }
    ]
  },
  {
    id: "exterior_garden",
    label: "Exterior & Garden",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2zM12 18v4M9 15h6"/></svg>`,
    issues: [
      { code: "RC-183A", label: "External wall issue" },
      { code: "RC-184G", label: "Fences / boundaries" },
      { code: "RC-185G", label: "Garden issue" },
      { code: "RC-186G", label: "Conservatory issue" },
      { code: "RC-033A", label: "Drain blocked (external)" }
    ]
  },
  {
    id: "communal_area",
    label: "Communal Area",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>`,
    issues: [
      { code: "RC-187R", label: "Stairs / handrails unsafe", urgent: true },
      { code: "RC-044A", label: "Communal light not working" },
      { code: "RC-061R", label: "Communal door lock broken", urgent: true }
    ]
  },
  {
    id: "general_repair",
    label: "General Repair",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    issues: [
      { code: "RC-100G", label: "Flooring damaged" },
      { code: "RC-101G", label: "Carpet damaged" },
      { code: "RC-102G", label: "Lino damaged" },
      { code: "RC-105G", label: "Ceiling damage" },
      { code: "RC-106G", label: "Wall cracks / plaster damage" },
      { code: "RC-108G", label: "Skirting / trims damaged" },
      { code: "RC-123G", label: "Shelves loose / broken" },
      { code: "RC-140A", label: "Damp / mould / condensation" },
      { code: "RC-143A", label: "Ventilation issue" },
      { code: "RC-144A", label: "Extractor fan (ventilation-related)" },
      { code: "RC-005G", label: "Radiator loose / damaged" }
    ]
  },
  {
    id: "fire_safety",
    label: "Fire Safety",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/></svg>`,
    issues: [
      { code: "RC-048R", label: "Fire alarm issue", urgent: true },
      { code: "RC-049R", label: "Heat detector issue", urgent: true },
      { code: "RC-065R", label: "Fire door issue", urgent: true },
      { code: "RC-014R", label: "Carbon monoxide alarm issue", urgent: true, emergency: true },
      { code: "RC-012R", label: "Gas smell / suspected leak", urgent: true, emergency: true }
    ]
  },
  {
    id: "locks_security",
    label: "Locks & Security",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    issues: [
      { code: "RC-061R", label: "Door lock broken", urgent: true },
      { code: "RC-062A", label: "Door handle broken" },
      { code: "RC-068A", label: "Window handle / lock issue" }
    ]
  },
  {
    id: "windows_doors",
    label: "Windows & Doors",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18M12 9v12"/></svg>`,
    issues: [
      { code: "RC-060A", label: "Door not closing" },
      { code: "RC-063A", label: "Internal door damaged" },
      { code: "RC-064R", label: "External door damaged", urgent: true },
      { code: "RC-066A", label: "Window not opening" },
      { code: "RC-067A", label: "Window not closing" },
      { code: "RC-069R", label: "Broken glass", urgent: true }
    ]
  },
  {
    id: "appliances",
    label: "Appliances",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M5 10h14M12 6h.01M9 16h6M9 18h6"/></svg>`,
    issues: [
      { code: "RC-080G", label: "Cooker not working" },
      { code: "RC-081G", label: "Oven not working" },
      { code: "RC-082G", label: "Hob not working" },
      { code: "RC-083G", label: "Extractor fan not working" },
      { code: "RC-084G", label: "Fridge not working" },
      { code: "RC-085G", label: "Freezer not working" },
      { code: "RC-086G", label: "Washing machine not working" },
      { code: "RC-013A", label: "Gas appliance not working" }
    ]
  },
  {
    id: "pest_control",
    label: "Pest Control",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><circle cx="12" cy="12" r="7" stroke-dasharray="2 2"/></svg>`,
    issues: [
      { code: "RC-160A", label: "Rats / mice" },
      { code: "RC-162A", label: "Cockroaches" },
      { code: "RC-163A", label: "Bed bugs" },
      { code: "RC-164A", label: "Insects / wasps" },
      { code: "RC-165A", label: "Rubbish removal / other pest" }
    ]
  },
  {
    id: "other",
    label: "Other",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
    issues: [
      { code: "RC-999G", label: "Other issue (please describe)" }
    ]
  }
];

/* Categorisation helpers to maintain troubleshooting compatibility */
const PEST_CODES = ["RC-160A", "RC-162A", "RC-163A", "RC-164A", "RC-165A"];
const HEATING_CODES = ["RC-001R", "RC-002A", "RC-003A", "RC-006R", "RC-007A", "RC-009R", "RC-010A", "RC-011A"];
const ELECTRICAL_CODES = ["RC-040R", "RC-041A", "RC-042A", "RC-043A", "RC-044A", "RC-045A", "RC-046G", "RC-047R"];
