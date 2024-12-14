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

export { APP_LANGUAGES, HTML_INPUT_TYPES };
