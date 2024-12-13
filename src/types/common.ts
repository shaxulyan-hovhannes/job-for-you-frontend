import { APP_LANGUAGES, USER_ROLES } from "@/constants/common";

interface SelectOptionProps {
  id: number | string;
  value: string;
  label: string;
  title?: string;
}

interface JobItem {
  id: string;
  title: string;
  category: string;
  location: string;
  workExperience: string;
  workFormat: string;
  employmentType: string;
  employerName: string;
  employerLogo?: string;
  createdAt?: string;
  deadline?: string;
}

type Locale = keyof typeof APP_LANGUAGES;

type ParsedDateType = {
  day: number;
  month: number;
  year: number;
};

type EmployerItem = {
  id: string;
  name: string;
  logo?: string;
  location: string;
  foundedAt: string;
  activeJobs: number;
};

type UserType = keyof typeof USER_ROLES;

interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: keyof typeof USER_ROLES;
}

export type {
  SelectOptionProps,
  JobItem,
  Locale,
  ParsedDateType,
  EmployerItem,
  UserType,
  User,
};
