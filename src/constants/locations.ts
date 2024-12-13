import { SelectOptionProps } from "@/types/common";

import { createValueMap } from "@/app/utils/common";

const LOCATIONS = [
  {
    id: 1,
    value: "all_cities",
    label: "All cities",
  },
  {
    id: 2,
    value: "yerevan",
    label: "Yerevan",
  },
  {
    id: 3,
    value: "gyumri",
    label: "Gyumri",
  },
  {
    id: 4,
    value: "vanadzor",
    label: "Vanadzor",
  },
  {
    id: 5,
    value: "abovyan",
    label: "Abovyan",
  },
  {
    id: 6,
    value: "vagharshapat",
    label: "Vagharshapat",
  },
  {
    id: 7,
    value: "hrazdan",
    label: "Hrazdan",
  },
  {
    id: 8,
    value: "kapan",
    label: "Kapan",
  },
  {
    id: 9,
    value: "armavir",
    label: "Armavir",
  },
  {
    id: 10,
    value: "charentsavan",
    label: "Charentsavan",
  },
  {
    id: 11,
    value: "masis",
    label: "Masis",
  },
  {
    id: 12,
    value: "artashat",
    label: "Artashat",
  },
  {
    id: 13,
    value: "sevan",
    label: "Sevan",
  },
  {
    id: 14,
    value: "ijevan",
    label: "Ijevan",
  },
  {
    id: 15,
    value: "gavar",
    label: "Gavar",
  },
  {
    id: 16,
    value: "artik",
    label: "Artik",
  },
  {
    id: 17,
    value: "goris",
    label: "Goris",
  },
  {
    id: 18,
    value: "ararat",
    label: "Ararat",
  },
  {
    id: 19,
    value: "dilijan",
    label: "Dilijan",
  },
  {
    id: 20,
    value: "ashtarak",
    label: "Ashtarak",
  },
  {
    id: 21,
    value: "sisian",
    label: "Sisian",
  },
  {
    id: 22,
    value: "spitak",
    label: "Spitak",
  },
  {
    id: 23,
    value: "vardenis",
    label: "Vardenis",
  },
  {
    id: 24,
    value: "yeghvard",
    label: "Yeghvard",
  },
  {
    id: 25,
    value: "alaverdi",
    label: "Alaverdi",
  },
  {
    id: 26,
    value: "stepanavan",
    label: "Stepanavan",
  },
  {
    id: 27,
    value: "martuni",
    label: "Martuni",
  },
  {
    id: 28,
    value: "vedi",
    label: "Vedi",
  },
  {
    id: 29,
    value: "byureghavan",
    label: "Byureghavan",
  },
  {
    id: 30,
    value: "nor_hachn",
    label: "Nor Hachn",
  },
  {
    id: 31,
    value: "metsamor",
    label: "Metsamor",
  },
  {
    id: 32,
    value: "tashir",
    label: "Tashir",
  },
  {
    id: 33,
    value: "yeghegnadzor",
    label: "Yeghegnadzor",
  },
  {
    id: 34,
    value: "berd",
    label: "Berd",
  },
  {
    id: 35,
    value: "kajaran",
    label: "Kajaran",
  },
  {
    id: 36,
    value: "aparan",
    label: "Aparan",
  },
  {
    id: 37,
    value: "chambarak",
    label: "Chambarak",
  },
  {
    id: 38,
    value: "vayk",
    label: "Vayk",
  },
  {
    id: 39,
    value: "maralik",
    label: "Maralik",
  },
  {
    id: 40,
    value: "noyemberyan",
    label: "Noyemberyan",
  },
  {
    id: 41,
    value: "meghri",
    label: "Meghri",
  },
  {
    id: 42,
    value: "jermuk",
    label: "Jermuk",
  },
  {
    id: 43,
    value: "talin",
    label: "Talin",
  },
  {
    id: 44,
    value: "akhtala",
    label: "Akhtala",
  },
  {
    id: 45,
    value: "ayrum",
    label: "Ayrum",
  },
  {
    id: 46,
    value: "tumanyan",
    label: "Tumanyan",
  },
  {
    id: 47,
    value: "tsaghkadzor",
    label: "Tsaghkadzor",
  },
] as const satisfies SelectOptionProps[];

const LOCATIONS_MAP = createValueMap(LOCATIONS, "value");

export { LOCATIONS, LOCATIONS_MAP };
