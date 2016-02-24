CountryIndicators = new Mongo.Collection("countryIndicators");
CountryIndicators.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

GenderSplitSchema = new SimpleSchema({
  total: {
    type: Number,
    decimal: true,
    optional: true
  },
  male: {
    type: Number,
    decimal: true,
    optional: true
  },
  female: {
    type: Number,
    decimal: true,
    optional: true
  },
})

ECCESchema = new SimpleSchema({
  Net_Enrolment_Ratio: {
    label: "Net Enrolment Ratio",
    type: GenderSplitSchema,
  },
  Gross_Enrolment_Ratio: {
    label: "Gross Enrolment Ratio",
    type: GenderSplitSchema,
  },
  Student_Teacher_Ratio: {
    label: "Student/Teacher Ratio",
    type: Number,
    decimal: true,
    optional: true,
  },
  Number_ECCE_Centres_which_meet_National_Minimum_Quality_Standards: {
      label: "Number (% ) ECCE Centres which meet National Minimum Quality Standards",
      type: Number,
      decimal: true,
      optional: true,
    },
  Implementation_of_quality_ECCE_curriculum: {
    label: "Implementation of quality ECCE curriculum",
    type: Boolean,
    optional: true,
  },
  Existence_of_National_ECCE_Policy_and_Planning_Framework: {
    label: "Existence of National ECCE Policy and Planning Framework",
    type: Boolean,
    optional: true,
  },
  EMIS_inclusive_of_ECCE_data: {
    label: "EMIS inclusive of ECCE data",
    type: Boolean,
    optional: true,
  }
});

FormalEducationSchema = new SimpleSchema({
  Net_enrolment_ratio: {
    label: "Net enrolment ratio (NER)",
    type: GenderSplitSchema,
  },
  Gross_enrolment_ratio: {
    label: "Gross enrolment ratio (GER)",
    type: GenderSplitSchema,
  },
  Percentage_new_entrance_to_1st_year_primary_with_ecce_experience: {
    label: "Percentage new entrance to 1st year primary with ecce experience",
    type: GenderSplitSchema,
  },
  Repetition_rate: {
    label: "Repetition rate (RR)",
    type: GenderSplitSchema,
  },
  Drop_out_rate: {
    label: "Drop-out rate (DR)",
    type: GenderSplitSchema,
  },
  Promotion_rate: {
    label: "Promotion rate (PR)",
    type: GenderSplitSchema,
  },
  Transition_rate_primary_secondary: {
    label: "Transition rate (primary/secondary)",
    type: GenderSplitSchema,
  },
  Percentage_schools_with_effective_access_to_IT: {
    label: "Percentage schools with effective access to IT",
    type: Number,
    decimal: true,
    optional: true,
  },
  Percentage_out_of_school_children_returning_to_formal_schooling: {
    label: "Percentage out-of-school children returning to formal schooling",
    type: GenderSplitSchema,
  },
  Literacy_rate: {
    label: "Literacy rate",
    type: GenderSplitSchema,
  },
  Numeracy_rate: {
    label: "Numeracy rate",
    type: GenderSplitSchema,
  },
  Student_teacher_ratio: {
    label: "Student teacher ratio (STR)",
    type: Number,
    decimal: true,
    optional: true,
  },
  Student_classroom_ratio: {
    label: "Student classroom ratio (SCR)",
    type: Number,
    decimal: true,
    optional: true,
  },
  Student_Computer_Ratio: {
    label: "Student Computer Ratio (SComR)",
    type: Number,
    decimal: true,
    optional: true,
  },
  Percentage_schools_with_clean_water_and_sanitation: {
      label: "Percentage schools with clean water and sanitation",
      type: Number,
      decimal: true,
      optional: true,
    },
  Percentage_school_leavers_leaving_with_at_least_a_national_or_regional_qualifications: {
    label: "Percentage school leavers leaving with at least a national or regional qualifications",
    type: GenderSplitSchema,
  },
  Frequency_of_curriculum_review: {
    label: "Frequency of curriculum review (in years)",
    type: Number,
    decimal: true,
    optional: true,
  },
  Compulsory_education_policy_developed_and_implemented: {
      label: "Compulsory education policy developed and implemented",
      type: Boolean,
      optional: true,
    },
  Language_policy_developed: {
    label: "Language policy developed",
    type: Boolean,
    optional: true,
  },
})

TVETSchema = new SimpleSchema({
  Gross_enrolment_ratio: {
    label: "Gross enrolment ratio in TVET programs (VGER) – ISCED2",
    type: GenderSplitSchema,
  },
  Percentage_TVET_training_providers_registered_with_NAA: {
    label: "Percentage TVET training providers registered with National Accreditation Authority",
    type: Number,
    decimal: true,
    optional: true,
  },
  Percentage_TVET_courses_professionally_assessed_validated: {
    label: "Percentage TVET courses professionally assessed/validated by NAA or IAA",
    type: Number,
    decimal: true,
    optional: true,
  },
  Number_of_courses_with_strong_industry_links: {
    label: "Number of courses supported by strong industry links or partnerships through sponsorship or guarantee of employment",
    type: Number,
    decimal: true,
    optional: true,
  },
  Number_of_TVET_courses_that_are_competency_based: {
    label: "Number of TVET courses that are competency-based (work-based skills)",
    type: Number,
    decimal: true,
    optional: true,
  },
  Number_of_graduates_with_national_TVET_qualifications: {
    label: "Number of graduates with national TVET qualifications",
    type: GenderSplitSchema,
  },
  Number_of_TVET_graduates_who_are_gainfully_employed: {
    label: "Number of TVET graduates who are gainfully employed",
    type: GenderSplitSchema,
  },
  Number_of_industry_stakeholders_engaged: {
    label: "Number of industry stakeholders/employers engaged in development of policies for skills development",
    type: Number,
    decimal: true,
    optional: true,
  },
})

NFESchema = new SimpleSchema({
  Adult_literacy_rate: {
    label: "Adult literacy rate (ALR)",
    type: GenderSplitSchema,
  },
  Participation_Rate: {
    label: "Participation Rate",
    type: GenderSplitSchema,
  },
  Participants_instructor_ratio: {
    label: "Participants/instructor ratio",
    type: Number,
    decimal: true,
    optional: true,
  },
  Existence_of_NFE_policy: {
    label: "Existence of NFE policy",
    type: Boolean,
    optional: true,
  },
  Percentage_of_NFE_providers_promoting_gender_equality: {
    label: "Percentage of NFE providers promoting gender equality",
    type: Number,
    decimal: true,
    optional: true,
  },
  Number_of_NGOs_delivering_NFE_programs: {
    label: "Number of NGOs delivering NFE programs",
    type: Number,
    decimal: true,
    optional: true,
  },
  Existence_of_pathways: {
    label: "Existence of pathways between formal, non-formal and informal education",
    type: Boolean,
    optional: true,
  },
})

TeacherSchema = new SimpleSchema({
  Percentage_of_Qualified_Untrained_teachers: {
    label: "Percentage of Qualified/Untrained teachers as per national minimum standards",
    type: GenderSplitSchema,
  },
  Existence_of_beginning_teacher_induction_programs: {
    label: "Existence of beginning teacher induction/mentoring programs in relation to teacher professional standards",
    type: Number,
    decimal: true,
    optional: true,
  },
  Percentage_teachers_undertook_professional_development: {
    label: "Percentage teachers/school principals that undertook targeted professional development within the past 2 years",
    type: GenderSplitSchema,
  },
  Percentage_teachers_assessed_as_requiring_additional_advice: {
    label: "Percentage teachers assessed as requiring additional advice or guidance under the teacher performance management system",
    type: GenderSplitSchema,
  },
  Percentage_teachers_teaching_outside_areas_of_specialization: {
    label: "Percentage teachers teaching outside areas or levels of curriculum specialization",
    type: GenderSplitSchema,
  },
  Percentage_foreign_staff: {
    label: "Percentage teaching positions filled by staff from outside the country",
    type: Number,
    decimal: true,
    optional: true,
  },
  Percentage_teaching_positions_unfilled: {
    label: "Percentage teaching positions unfilled by end o term 1",
    type: Number,
    decimal: true,
    optional: true,
  },
  Percentage_teachers_leaving_before_retirement_age: {
    label: "Percentage teachers leaving the profession prior to retirement age",
    type: GenderSplitSchema,
  },
  Percentage_ECCE_teachers_under_government_employment: {
    label: "Percentage ECCE teachers under government employment",
    type: GenderSplitSchema,
  },
  Mandatory_Disability_Inclusive_Education: {
    label: "Teacher training curriculum that includes mandatory course on Disability-Inclusive Education",
    type: Boolean,
    optional: true,
  },
});

SGASchema = new SimpleSchema({
  Existence_of_mid_term_strategy_to_ensure_achievement_of_sector_plans: {
    label: "Existence of mid-term strategy to ensure achievement of sector plans",
    type: Boolean,
    optional: true,
  },
  Percentage_policy_and_planning_staff_involved_in_ongoing_training: {
    label: "Percentage policy and planning staff involved in ongoing training and professional development",
    type: GenderSplitSchema,
  },
  Clear_outline_of_obligations_by_donors_executing_agencies: {
    label: "Clear outline of obligations by donors/executing agencies in line with individual arrangements and international declarations",
    type: Boolean,
    optional: true,
  },
  Percentage_national_budget_allocated_to_education: {
    label: "Percentage national budget (development and recurrent) allocated to education sector",
    type: Number,
    decimal: true,
    optional: true,
  },
  Percentage_GDP_allocated_to_education: {
    label: "Percentage wealth of a country (GDP or GNI) allocated to education (per capita)",
    type: Number,
    decimal: true,
    optional: true,
  },
  Existence_of_EMIS: {
    label: "Existence of EMIS that is able to support evidence-based decision making and planning for improvement of education systems",
    type: Boolean,
    optional: true,
  },
  Percentage_qualified_personnel_to_operate_EMIS: {
    label: "Percentage of qualified and trained personnel to operate and support EMIS",
    type: Number,
    decimal: true,
    optional: true,
  },
  PEDF_aligned_with_national_ME_system: {
    label: "PEDF M&E framework aligned with national M&E system",
    type: Boolean,
    optional: true,
  },
  National_annual_education_statistics_report: {
    label: "National annual education statistics report published and disseminated",
    type: Boolean,
    optional: true,
  },
  Existence_of_communication_strategy_to_support_education_outcomes: {
    label: "Existence of communication strategy and agreements with other agencies to support education outcomes",
    type: Boolean,
    optional: true,
  },
  Reduction_in_irregularities_to_assure_transparency_and_accountability: {
    label: "Reduction in irregularities to assure transparency and accountability",
    type: Boolean,
    optional: true,
  },
});

CountryIndicatorsSchema = new SimpleSchema({
  country: {
    type: String,
  },
  year: {
    type: Number,
    min: 2000,
    max: 2020,
  },
  ecce: {
    type: ECCESchema
  },
  formalEducation: {
    type: FormalEducationSchema
  },
  tvet: {
    type: TVETSchema
  },
  nfe: {
    type: NFESchema
  },
  teachers: {
    type: TeacherSchema
  },
  sga: {
    type: SGASchema
  }
});

CountryIndicators.attachSchema(CountryIndicatorsSchema);
