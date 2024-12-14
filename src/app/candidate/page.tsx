import { redirect } from "next/navigation";

import paths from "@/constants/paths";

export default function CandidateAccount(): never {
  redirect(paths.candidateDashboard);
}
