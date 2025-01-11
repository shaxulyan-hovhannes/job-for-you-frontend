import paths from "./paths";

const APP_LANGUAGES = {
  en: "en",
  hy: "hy",
  ru: "ru",
} as const;

const HTML_INPUT_TYPES = {
  button: "button",
  checkbox: "checkbox",
  color: "color",
  date: "date",
  "datetime-local": "datetime-local",
  email: "email",
  file: "file",
  hidden: "hidden",
  image: "image",
  month: "month",
  number: "number",
  password: "password",
  radio: "radio",
  range: "range",
  reset: "reset",
  search: "search",
  submit: "submit",
  tel: "tel",
  text: "text",
  time: "time",
  url: "url",
  week: "week",
} as const;

const CANDIDATES_ROUTES = [
  {
    id: 1,
    path: paths.candidateDashboard,
    label: "Dashboard",
  },
  {
    id: 2,
    path: paths.candidateProfile,
    label: "Profile",
  },
  {
    id: 3,
    path: paths.candidateResume,
    label: "My Resume",
  },
];

export { APP_LANGUAGES, HTML_INPUT_TYPES, CANDIDATES_ROUTES };
