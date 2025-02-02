import { JobItem, EmployerItem } from "@/types/common";

import {
  JOB_CATEGORIES_MAP,
  WORK_FORMATS_MAP,
  EMPLOYMENT_TYPES_MAP,
  WORK_EXPERIENCE_MAP,
} from "./job";
import { LOCATIONS_MAP } from "./locations";

const JOBS: JobItem[] = [
  {
    id: "675008070bbb281ce029214c",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.not_defined,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-1",
    employerLogo:
      "https://cdn.staff.am/staff.am/upload/1/0/6/5/1065d734.jpg.webp",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750ae921a91da398a1841dc",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.junior,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-2",
    employerLogo: "https://job.am/upload/logo/t_16557556logo.png",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750b16464c6a64dc3f01529",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.middle,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-1",
    employerLogo:
      "https://cdn.staff.am/staff.am/upload/9/4/f/5/94f5b7ef.png.webp",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750b16f868b4e34eac62b7f",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.senior,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-2",
    employerLogo: "https://job.am/upload/logo/t_4776471logo.png",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750c3c23670031a7eecb8dd",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.ninja,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-1",
    employerLogo: "https://job.am/upload/logo/t_21326769logo.png",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750c3ca954259e512e1ede6",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.guru,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-2",
    employerLogo: "https://job.am/upload/logo/t_no-logo.svg",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750c3e44f47f5a6f42c8b88",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.intern,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-1",
    employerLogo: "https://job.am/upload/logo/t_26766469logo.png",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750c3ea95165e2ab19da99a",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.junior,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-2",
    employerLogo: "",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750c40ac3e4775763b65930",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.middle,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-1",
    employerLogo: "",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
  {
    id: "6750c410fbf48510ad040d00",
    title: "Frontend Developer",
    category: JOB_CATEGORIES_MAP.information_technology,
    location: LOCATIONS_MAP.yerevan,
    workExperience: WORK_EXPERIENCE_MAP.senior,
    workFormat: WORK_FORMATS_MAP.on_site,
    employmentType: EMPLOYMENT_TYPES_MAP.full_time,
    employerName: "Company-2",
    employerLogo: "",
    createdAt: "12/5/2024",
    deadline: "12/25/2024",
  },
];

// id: string;
// name: string;
// location: string;
// foundedAt: string;
// activeJobs: number;

const EMPLOYERS: EmployerItem[] = [
  {
    id: "6755ba4c40c716050e137b91",
    name: "Company-1",
    logo: "https://cdn.staff.am/staff.am/upload/1/0/6/5/1065d734.jpg.webp",
    location: LOCATIONS_MAP.yerevan,
    foundedAt: "10/18/2015",
    activeJobs: 20,
  },
  {
    id: "6755ba532195af5802fe36f4",
    name: "Company-2",
    logo: "https://job.am/upload/logo/t_16557556logo.png",
    location: LOCATIONS_MAP.gyumri,
    foundedAt: "1/10/2018",
    activeJobs: 17,
  },
  {
    id: "6755ba5acd2312cfcc6be967",
    name: "Company-3",
    logo: "https://cdn.staff.am/staff.am/upload/9/4/f/5/94f5b7ef.png.webp",
    location: LOCATIONS_MAP.vanadzor,
    foundedAt: "5/8/2013",
    activeJobs: 14,
  },
  {
    id: "6755ba66f4ad74b62923fe3c",
    name: "Company-4",
    logo: "https://job.am/upload/logo/t_4776471logo.png",
    location: LOCATIONS_MAP.abovyan,
    foundedAt: "2/10/2020",
    activeJobs: 12,
  },
  {
    id: "6755ba6df9cc3e495121c005",
    name: "Company-5",
    logo: "https://job.am/upload/logo/t_21326769logo.png",
    location: LOCATIONS_MAP.yerevan,
    foundedAt: "9/13/2017",
    activeJobs: 10,
  },
  {
    id: "6755ba73be55d8ccd0bd3eb4",
    name: "Company-6",
    logo: "https://job.am/upload/logo/t_no-logo.svg",
    location: LOCATIONS_MAP.hrazdan,
    foundedAt: "4/17/2023",
    activeJobs: 8,
  },
  {
    id: "6755ba7a7b75d141f958a83a",
    name: "Company-7",
    logo: "https://job.am/upload/logo/t_26766469logo.png",
    location: LOCATIONS_MAP.kapan,
    foundedAt: "2/1/2008",
    activeJobs: 6,
  },
  {
    id: "6755ba8226e164249e852ede",
    name: "Company-8",
    location: LOCATIONS_MAP.armavir,
    foundedAt: "1/10/2010",
    activeJobs: 2,
  },
  {
    id: "6755ba88c5ad74e4363e02fd",
    name: "Company-9",
    location: LOCATIONS_MAP.masis,
    foundedAt: "5/18/2015",
    activeJobs: 0,
  },
  {
    id: "6755ba921c9dbd3c284d2d3a",
    name: "Company-9",
    location: LOCATIONS_MAP.sevan,
    foundedAt: "6/2/2024",
    activeJobs: 0,
  },
];

export { JOBS, EMPLOYERS };
