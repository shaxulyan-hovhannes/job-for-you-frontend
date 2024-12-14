"use client";

import React, { useState } from "react";

import CandidateSignupForm from "./candidate-signup-form";
import EmployerteSignupForm from "./employer-signup-form";

import { UserType } from "@/types/common";

import { USER_ROLES } from "@/constants/users";

export default function SignupComponent() {
  const [selectedUserType, setSelectedUserTypes] = useState<UserType>(
    USER_ROLES.candidate
  );

  const handleSetCandidateType = () =>
    setSelectedUserTypes(USER_ROLES.candidate);
  const handleSetEmployerType = () => setSelectedUserTypes(USER_ROLES.employer);

  return (
    <section className="signup-section">
      <div className="signup-section-title">
        Welcome! Lets Create Your Profile
      </div>
      <div className={"select-user-type-tabs"}>
        <div
          className={`select-user-type-tabs-item ${
            selectedUserType === USER_ROLES.candidate
              ? "select-user-type-tabs-item--selected"
              : ""
          }`}
          onClick={handleSetCandidateType}
        >
          Candidate
        </div>
        <div
          className={`select-user-type-tabs-item ${
            selectedUserType === USER_ROLES.employer
              ? "select-user-type-tabs-item--selected"
              : ""
          }`}
          onClick={handleSetEmployerType}
        >
          Employer
        </div>
      </div>
      {selectedUserType === USER_ROLES.candidate ? (
        <CandidateSignupForm />
      ) : (
        <EmployerteSignupForm />
      )}
    </section>
  );
}
