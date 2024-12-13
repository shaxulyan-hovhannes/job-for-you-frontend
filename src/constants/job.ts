import { SelectOptionProps } from "@/types/common";

import { createValueMap } from "@/app/utils/common";

const JOB_CATEGORIES = [
  {
    id: 1,
    value: "all_categories",
    label: "All categories",
  },
  {
    id: 2,
    value: "information_technology",
    label: "Information Technology",
  },
  {
    id: 3,
    value: "marketing_and_advertising",
    label: "Marketing and Advertising",
  },
  {
    id: 4,
    value: "sales_and_business_development",
    label: "Sales and Business Development",
  },
  {
    id: 5,
    value: "finance_and_accounting",
    label: "Finance and Accounting",
  },
  {
    id: 6,
    value: "manufacturing_and_engineering",
    label: "Manufacturing and Engineering",
  },
  {
    id: 7,
    value: "healthcare_and_medicine",
    label: "Healthcare and Medicine",
  },
  {
    id: 8,
    value: "education_and_research",
    label: "Education and Research",
  },
  {
    id: 9,
    value: "logistics_and_transportation",
    label: "Logistics and Transportation",
  },
  {
    id: 10,
    value: "customer_support",
    label: "Customer Support",
  },
  {
    id: 11,
    value: "creative_professions",
    label: "Creative Professions",
  },
  {
    id: 12,
    value: "administrative_roles",
    label: "Administrative Roles",
  },
  {
    id: 13,
    value: "tourism_and_hospitality",
    label: "Tourism and Hospitality",
  },
  {
    id: 14,
    value: "retail",
    label: "Retail",
  },
  {
    id: 15,
    value: "legal",
    label: "Legal",
  },
  {
    id: 16,
    value: "construction_and_real_estate",
    label: "Construction and Real Estate",
  },
  {
    id: 17,
    value: "energy_and_environment",
    label: "Energy and Environment",
  },
  {
    id: 18,
    value: "arts_and_entertainment",
    label: "Arts and Entertainment",
  },
  {
    id: 19,
    value: "agriculture",
    label: "Agriculture",
  },
  {
    id: 20,
    value: "human_resources_and_recruitment",
    label: "Human Resources (HR) and Recruitment",
  },
  {
    id: 21,
    value: "industrial_design_and_fashion",
    label: "Industrial Design and Fashion",
  },
  {
    id: 22,
    value: "telecommunications",
    label: "Telecommunications",
  },
  {
    id: 23,
    value: "government_and_public_sector",
    label: "Government and Public Sector",
  },
  {
    id: 24,
    value: "sports_and_fitness",
    label: "Sports and Fitness",
  },
  {
    id: 25,
    value: "security_and_law_enforcement",
    label: "Security and Law Enforcement",
  },
  {
    id: 26,
    value: "media_and_journalism",
    label: "Media and Journalism",
  },
  {
    id: 27,
    value: "food_and_beverage",
    label: "Food and Beverage",
  },
  {
    id: 28,
    value: "transport_and_aviation",
    label: "Transport and Aviation",
  },
  {
    id: 29,
    value: "non_profit_and_ngos",
    label: "Non-Profit and NGOs",
  },
  {
    id: 30,
    value: "beauty_and_wellness",
    label: "Beauty and Wellness",
  },
  {
    id: 31,
    value: "real_estate_and_property_management",
    label: "Real Estate and Property Management",
  },
  {
    id: 32,
    value: "automotive_industry",
    label: "Automotive Industry",
  },
  {
    id: 33,
    value: "chemicals_and_pharmaceuticals",
    label: "Chemicals and Pharmaceuticals",
  },
  {
    id: 34,
    value: "event_management",
    label: "Event Management",
  },
  {
    id: 35,
    value: "luxury_and_fashion",
    label: "Luxury and Fashion",
  },
  {
    id: 36,
    value: "cleaning_and_maintenance",
    label: "Cleaning and Maintenance",
  },
  {
    id: 37,
    value: "pets_and_animal_care",
    label: "Pets and Animal Care",
  },
  {
    id: 38,
    value: "renewable_energy",
    label: "Renewable Energy",
  },
  {
    id: 39,
    value: "gaming_and_esports",
    label: "Gaming and Esports",
  },
  {
    id: 40,
    value: "robotics_and_ai",
    label: "Robotics and AI",
  },
  {
    id: 41,
    value: "architecture_and_urban_design",
    label: "Architecture and Urban Design",
  },
  {
    id: 42,
    value: "space_and_aerospace",
    label: "Space and Aerospace",
  },
  {
    id: 43,
    value: "environment_and_sustainability",
    label: "Environment and Sustainability",
  },
  {
    id: 44,
    value: "cryptocurrency_and_blockchain",
    label: "Cryptocurrency and Blockchain",
  },
  {
    id: 45,
    value: "arts_and_crafts",
    label: "Arts and Crafts",
  },
  {
    id: 46,
    value: "performing_arts",
    label: "Performing Arts",
  },
  {
    id: 47,
    value: "social_services",
    label: "Social Services",
  },
  {
    id: 48,
    value: "photography_and_videography",
    label: "Photography and Videography",
  },
  {
    id: 49,
    value: "mining_and_geology",
    label: "Mining and Geology",
  },
  {
    id: 50,
    value: "agritech_and_food_technology",
    label: "Agritech and Food Technology",
  },
  {
    id: 51,
    value: "education_technology",
    label: "Education Technology",
  },
  {
    id: 52,
    value: "handcrafts_and_trades",
    label: "Handcrafts and Trades",
  },
  {
    id: 53,
    value: "science_and_research",
    label: "Science and Research",
  },
  {
    id: 54,
    value: "insurance_and_risk_management",
    label: "Insurance and Risk Management",
  },
  {
    id: 55,
    value: "entertainment_and_media_production",
    label: "Entertainment and Media Production",
  },
  {
    id: 56,
    value: "fashion_and_textile",
    label: "Fashion and Textile",
  },
  {
    id: 57,
    value: "childcare_and_education",
    label: "Childcare and Education",
  },
] as const satisfies SelectOptionProps[];

const JOB_CATEGORIES_MAP = createValueMap(JOB_CATEGORIES, "value");

const WORK_EXPERIENCE = [
  {
    id: 1,
    value: "all_experiences",
    label: "All Experiences",
  },
  {
    id: 2,
    value: "intern",
    label: "Intern",
  },
  {
    id: 3,
    value: "junior",
    label: "Junior",
  },
  {
    id: 4,
    value: "middle",
    label: "Middle",
  },
  {
    id: 5,
    value: "senior",
    label: "Senior",
  },
  {
    id: 6,
    value: "ninja",
    label: "Ninja",
  },
  {
    id: 7,
    value: "guru",
    label: "Guru",
  },
  {
    id: 8,
    value: "not_defined",
    label: "Not Defined",
  },
];

const WORK_EXPERIENCE_MAP = createValueMap(WORK_EXPERIENCE, "value");

const WORK_FORMATS = [
  {
    id: 1,
    value: "all_formats",
    label: "All Formats",
  },
  {
    id: 2,
    value: "remote",
    label: "Remote Work",
  },
  {
    id: 3,
    value: "on_site",
    label: "On-Site",
  },
  {
    id: 4,
    value: "hybrid_format",
    label: "Hybrid Format",
  },
] as const satisfies SelectOptionProps[];

const WORK_FORMATS_MAP = createValueMap(WORK_FORMATS, "value");

const EMPLOYMENT_TYPES = [
  {
    id: 1,
    value: "all_employment_types",
    label: "All Employment Types",
  },
  {
    id: 2,
    value: "full_time",
    label: "Full Time",
  },
  {
    id: 3,
    value: "part_time",
    label: "Part Time",
  },
  {
    id: 4,
    value: "contract_based",
    label: "Contract Based",
  },
  {
    id: 5,
    value: "flexible_shifts",
    label: "Flexible Shifts",
  },
  {
    id: 6,
    value: "internship",
    label: "Internship",
  },
  {
    id: 7,
    value: "temporary",
    label: "Temporary",
  },
] as const satisfies SelectOptionProps[];

const EMPLOYMENT_TYPES_MAP = createValueMap(EMPLOYMENT_TYPES, "value");

export {
  JOB_CATEGORIES,
  JOB_CATEGORIES_MAP,
  WORK_EXPERIENCE,
  WORK_EXPERIENCE_MAP,
  WORK_FORMATS,
  WORK_FORMATS_MAP,
  EMPLOYMENT_TYPES,
  EMPLOYMENT_TYPES_MAP,
};
