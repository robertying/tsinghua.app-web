/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  timestamptz: { input: string; output: string };
  uuid: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type FloatComparisonExp = {
  _eq?: InputMaybe<Scalars["Float"]["input"]>;
  _gt?: InputMaybe<Scalars["Float"]["input"]>;
  _gte?: InputMaybe<Scalars["Float"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Float"]["input"]>;
  _lte?: InputMaybe<Scalars["Float"]["input"]>;
  _neq?: InputMaybe<Scalars["Float"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "course" */
export type Course = {
  __typename?: "course";
  /** An array relationship */
  course_reviews: Array<CourseReview>;
  /** An aggregate relationship */
  course_reviews_aggregate: CourseReviewAggregate;
  created_at: Scalars["timestamptz"]["output"];
  englishName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  index: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  number: Scalars["String"]["output"];
  semester_id: Scalars["String"]["output"];
  /** An object relationship */
  teacher: Teacher;
  teacher_id: Scalars["String"]["output"];
  time_location: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** columns and relationships of "course" */
export type CourseCourseReviewsArgs = {
  distinct_on?: InputMaybe<Array<CourseReviewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseReviewOrderBy>>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

/** columns and relationships of "course" */
export type CourseCourseReviewsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseReviewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseReviewOrderBy>>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

/** aggregated selection of "course" */
export type CourseAggregate = {
  __typename?: "course_aggregate";
  aggregate?: Maybe<CourseAggregateFields>;
  nodes: Array<Course>;
};

export type CourseAggregateBoolExp = {
  count?: InputMaybe<CourseAggregateBoolExpCount>;
};

export type CourseAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CourseSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<CourseBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "course" */
export type CourseAggregateFields = {
  __typename?: "course_aggregate_fields";
  avg?: Maybe<CourseAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<CourseMaxFields>;
  min?: Maybe<CourseMinFields>;
  stddev?: Maybe<CourseStddevFields>;
  stddev_pop?: Maybe<CourseStddevPopFields>;
  stddev_samp?: Maybe<CourseStddevSampFields>;
  sum?: Maybe<CourseSumFields>;
  var_pop?: Maybe<CourseVarPopFields>;
  var_samp?: Maybe<CourseVarSampFields>;
  variance?: Maybe<CourseVarianceFields>;
};

/** aggregate fields of "course" */
export type CourseAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CourseSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "course" */
export type CourseAggregateOrderBy = {
  avg?: InputMaybe<CourseAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CourseMaxOrderBy>;
  min?: InputMaybe<CourseMinOrderBy>;
  stddev?: InputMaybe<CourseStddevOrderBy>;
  stddev_pop?: InputMaybe<CourseStddevPopOrderBy>;
  stddev_samp?: InputMaybe<CourseStddevSampOrderBy>;
  sum?: InputMaybe<CourseSumOrderBy>;
  var_pop?: InputMaybe<CourseVarPopOrderBy>;
  var_samp?: InputMaybe<CourseVarSampOrderBy>;
  variance?: InputMaybe<CourseVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "course" */
export type CourseArrRelInsertInput = {
  data: Array<CourseInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<CourseOnConflict>;
};

/** aggregate avg on columns */
export type CourseAvgFields = {
  __typename?: "course_avg_fields";
  index?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "course" */
export type CourseAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type CourseBoolExp = {
  _and?: InputMaybe<Array<CourseBoolExp>>;
  _not?: InputMaybe<CourseBoolExp>;
  _or?: InputMaybe<Array<CourseBoolExp>>;
  course_reviews?: InputMaybe<CourseReviewBoolExp>;
  course_reviews_aggregate?: InputMaybe<CourseReviewAggregateBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  englishName?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  number?: InputMaybe<StringComparisonExp>;
  semester_id?: InputMaybe<StringComparisonExp>;
  teacher?: InputMaybe<TeacherBoolExp>;
  teacher_id?: InputMaybe<StringComparisonExp>;
  time_location?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "course" */
export enum CourseConstraint {
  /** unique or primary key constraint on columns "id" */
  CoursePkey = "course_pkey",
}

/** input type for incrementing numeric columns in table "course" */
export type CourseIncInput = {
  index?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "course" */
export type CourseInsertInput = {
  course_reviews?: InputMaybe<CourseReviewArrRelInsertInput>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  englishName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  index?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["String"]["input"]>;
  semester_id?: InputMaybe<Scalars["String"]["input"]>;
  teacher?: InputMaybe<TeacherObjRelInsertInput>;
  teacher_id?: InputMaybe<Scalars["String"]["input"]>;
  time_location?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type CourseMaxFields = {
  __typename?: "course_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  englishName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  index?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  number?: Maybe<Scalars["String"]["output"]>;
  semester_id?: Maybe<Scalars["String"]["output"]>;
  teacher_id?: Maybe<Scalars["String"]["output"]>;
  time_location?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "course" */
export type CourseMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  englishName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  number?: InputMaybe<OrderBy>;
  semester_id?: InputMaybe<OrderBy>;
  teacher_id?: InputMaybe<OrderBy>;
  time_location?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CourseMinFields = {
  __typename?: "course_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  englishName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  index?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  number?: Maybe<Scalars["String"]["output"]>;
  semester_id?: Maybe<Scalars["String"]["output"]>;
  teacher_id?: Maybe<Scalars["String"]["output"]>;
  time_location?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "course" */
export type CourseMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  englishName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  number?: InputMaybe<OrderBy>;
  semester_id?: InputMaybe<OrderBy>;
  teacher_id?: InputMaybe<OrderBy>;
  time_location?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "course" */
export type CourseMutationResponse = {
  __typename?: "course_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "course" */
export type CourseObjRelInsertInput = {
  data: CourseInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<CourseOnConflict>;
};

/** on_conflict condition type for table "course" */
export type CourseOnConflict = {
  constraint: CourseConstraint;
  update_columns?: Array<CourseUpdateColumn>;
  where?: InputMaybe<CourseBoolExp>;
};

/** Ordering options when selecting data from "course". */
export type CourseOrderBy = {
  course_reviews_aggregate?: InputMaybe<CourseReviewAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  englishName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  number?: InputMaybe<OrderBy>;
  semester_id?: InputMaybe<OrderBy>;
  teacher?: InputMaybe<TeacherOrderBy>;
  teacher_id?: InputMaybe<OrderBy>;
  time_location?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: course */
export type CoursePkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** columns and relationships of "course_review" */
export type CourseReview = {
  __typename?: "course_review";
  content: Scalars["String"]["output"];
  /** An object relationship */
  course: Course;
  course_id: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["Int"]["output"];
  rating: Scalars["Float"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user?: Maybe<UserPublic>;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "course_review" */
export type CourseReviewAggregate = {
  __typename?: "course_review_aggregate";
  aggregate?: Maybe<CourseReviewAggregateFields>;
  nodes: Array<CourseReview>;
};

export type CourseReviewAggregateBoolExp = {
  count?: InputMaybe<CourseReviewAggregateBoolExpCount>;
};

export type CourseReviewAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CourseReviewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<CourseReviewBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "course_review" */
export type CourseReviewAggregateFields = {
  __typename?: "course_review_aggregate_fields";
  avg?: Maybe<CourseReviewAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<CourseReviewMaxFields>;
  min?: Maybe<CourseReviewMinFields>;
  stddev?: Maybe<CourseReviewStddevFields>;
  stddev_pop?: Maybe<CourseReviewStddevPopFields>;
  stddev_samp?: Maybe<CourseReviewStddevSampFields>;
  sum?: Maybe<CourseReviewSumFields>;
  var_pop?: Maybe<CourseReviewVarPopFields>;
  var_samp?: Maybe<CourseReviewVarSampFields>;
  variance?: Maybe<CourseReviewVarianceFields>;
};

/** aggregate fields of "course_review" */
export type CourseReviewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CourseReviewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "course_review" */
export type CourseReviewAggregateOrderBy = {
  avg?: InputMaybe<CourseReviewAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CourseReviewMaxOrderBy>;
  min?: InputMaybe<CourseReviewMinOrderBy>;
  stddev?: InputMaybe<CourseReviewStddevOrderBy>;
  stddev_pop?: InputMaybe<CourseReviewStddevPopOrderBy>;
  stddev_samp?: InputMaybe<CourseReviewStddevSampOrderBy>;
  sum?: InputMaybe<CourseReviewSumOrderBy>;
  var_pop?: InputMaybe<CourseReviewVarPopOrderBy>;
  var_samp?: InputMaybe<CourseReviewVarSampOrderBy>;
  variance?: InputMaybe<CourseReviewVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "course_review" */
export type CourseReviewArrRelInsertInput = {
  data: Array<CourseReviewInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<CourseReviewOnConflict>;
};

/** aggregate avg on columns */
export type CourseReviewAvgFields = {
  __typename?: "course_review_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "course_review" */
export type CourseReviewAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "course_review". All fields are combined with a logical 'AND'. */
export type CourseReviewBoolExp = {
  _and?: InputMaybe<Array<CourseReviewBoolExp>>;
  _not?: InputMaybe<CourseReviewBoolExp>;
  _or?: InputMaybe<Array<CourseReviewBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  course?: InputMaybe<CourseBoolExp>;
  course_id?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  rating?: InputMaybe<FloatComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UserPublicBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "course_review" */
export enum CourseReviewConstraint {
  /** unique or primary key constraint on columns "id" */
  CourseReviewIdKey = "course_review_id_key",
  /** unique or primary key constraint on columns "user_id", "course_id" */
  CourseReviewPkey = "course_review_pkey",
}

/** input type for incrementing numeric columns in table "course_review" */
export type CourseReviewIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
};

/** input type for inserting data into table "course_review" */
export type CourseReviewInsertInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  course?: InputMaybe<CourseObjRelInsertInput>;
  course_id?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<UserPublicObjRelInsertInput>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type CourseReviewMaxFields = {
  __typename?: "course_review_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  course_id?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "course_review" */
export type CourseReviewMaxOrderBy = {
  content?: InputMaybe<OrderBy>;
  course_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CourseReviewMinFields = {
  __typename?: "course_review_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  course_id?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "course_review" */
export type CourseReviewMinOrderBy = {
  content?: InputMaybe<OrderBy>;
  course_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "course_review" */
export type CourseReviewMutationResponse = {
  __typename?: "course_review_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<CourseReview>;
};

/** on_conflict condition type for table "course_review" */
export type CourseReviewOnConflict = {
  constraint: CourseReviewConstraint;
  update_columns?: Array<CourseReviewUpdateColumn>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

/** Ordering options when selecting data from "course_review". */
export type CourseReviewOrderBy = {
  content?: InputMaybe<OrderBy>;
  course?: InputMaybe<CourseOrderBy>;
  course_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserPublicOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: course_review */
export type CourseReviewPkColumnsInput = {
  course_id: Scalars["String"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** select columns of table "course_review" */
export enum CourseReviewSelectColumn {
  /** column name */
  Content = "content",
  /** column name */
  CourseId = "course_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Rating = "rating",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "course_review" */
export type CourseReviewSetInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  course_id?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type CourseReviewStddevFields = {
  __typename?: "course_review_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "course_review" */
export type CourseReviewStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CourseReviewStddevPopFields = {
  __typename?: "course_review_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "course_review" */
export type CourseReviewStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CourseReviewStddevSampFields = {
  __typename?: "course_review_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "course_review" */
export type CourseReviewStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "course_review" */
export type CourseReviewStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CourseReviewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CourseReviewStreamCursorValueInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  course_id?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  rating?: InputMaybe<Scalars["Float"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type CourseReviewSumFields = {
  __typename?: "course_review_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by sum() on columns of table "course_review" */
export type CourseReviewSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** update columns of table "course_review" */
export enum CourseReviewUpdateColumn {
  /** column name */
  Content = "content",
  /** column name */
  CourseId = "course_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Rating = "rating",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type CourseReviewUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CourseReviewIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CourseReviewSetInput>;
  /** filter the rows which have to be updated */
  where: CourseReviewBoolExp;
};

/** aggregate var_pop on columns */
export type CourseReviewVarPopFields = {
  __typename?: "course_review_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "course_review" */
export type CourseReviewVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CourseReviewVarSampFields = {
  __typename?: "course_review_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "course_review" */
export type CourseReviewVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CourseReviewVarianceFields = {
  __typename?: "course_review_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  rating?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "course_review" */
export type CourseReviewVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
};

/** select columns of table "course" */
export enum CourseSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  EnglishName = "englishName",
  /** column name */
  Id = "id",
  /** column name */
  Index = "index",
  /** column name */
  Name = "name",
  /** column name */
  Number = "number",
  /** column name */
  SemesterId = "semester_id",
  /** column name */
  TeacherId = "teacher_id",
  /** column name */
  TimeLocation = "time_location",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "course" */
export type CourseSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  englishName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  index?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["String"]["input"]>;
  semester_id?: InputMaybe<Scalars["String"]["input"]>;
  teacher_id?: InputMaybe<Scalars["String"]["input"]>;
  time_location?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type CourseStddevFields = {
  __typename?: "course_stddev_fields";
  index?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "course" */
export type CourseStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CourseStddevPopFields = {
  __typename?: "course_stddev_pop_fields";
  index?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "course" */
export type CourseStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CourseStddevSampFields = {
  __typename?: "course_stddev_samp_fields";
  index?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "course" */
export type CourseStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "course" */
export type CourseStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CourseStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CourseStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  englishName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  index?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  number?: InputMaybe<Scalars["String"]["input"]>;
  semester_id?: InputMaybe<Scalars["String"]["input"]>;
  teacher_id?: InputMaybe<Scalars["String"]["input"]>;
  time_location?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type CourseSumFields = {
  __typename?: "course_sum_fields";
  index?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "course" */
export type CourseSumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "course" */
export enum CourseUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  EnglishName = "englishName",
  /** column name */
  Id = "id",
  /** column name */
  Index = "index",
  /** column name */
  Name = "name",
  /** column name */
  Number = "number",
  /** column name */
  SemesterId = "semester_id",
  /** column name */
  TeacherId = "teacher_id",
  /** column name */
  TimeLocation = "time_location",
  /** column name */
  UpdatedAt = "updated_at",
}

export type CourseUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CourseIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CourseSetInput>;
  /** filter the rows which have to be updated */
  where: CourseBoolExp;
};

/** aggregate var_pop on columns */
export type CourseVarPopFields = {
  __typename?: "course_var_pop_fields";
  index?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "course" */
export type CourseVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CourseVarSampFields = {
  __typename?: "course_var_samp_fields";
  index?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "course" */
export type CourseVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CourseVarianceFields = {
  __typename?: "course_variance_fields";
  index?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "course" */
export type CourseVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "message" */
export type Message = {
  __typename?: "message";
  created_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  from_user?: Maybe<RealmUserUnion>;
  from_user_id: Scalars["uuid"]["output"];
  id: Scalars["uuid"]["output"];
  realm_id: Scalars["Int"]["output"];
  text: Scalars["String"]["output"];
  /** An object relationship */
  to_user?: Maybe<RealmUserUnion>;
  to_user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "message" */
export type MessageAggregate = {
  __typename?: "message_aggregate";
  aggregate?: Maybe<MessageAggregateFields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type MessageAggregateFields = {
  __typename?: "message_aggregate_fields";
  avg?: Maybe<MessageAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<MessageMaxFields>;
  min?: Maybe<MessageMinFields>;
  stddev?: Maybe<MessageStddevFields>;
  stddev_pop?: Maybe<MessageStddevPopFields>;
  stddev_samp?: Maybe<MessageStddevSampFields>;
  sum?: Maybe<MessageSumFields>;
  var_pop?: Maybe<MessageVarPopFields>;
  var_samp?: Maybe<MessageVarSampFields>;
  variance?: Maybe<MessageVarianceFields>;
};

/** aggregate fields of "message" */
export type MessageAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MessageSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type MessageAvgFields = {
  __typename?: "message_avg_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type MessageBoolExp = {
  _and?: InputMaybe<Array<MessageBoolExp>>;
  _not?: InputMaybe<MessageBoolExp>;
  _or?: InputMaybe<Array<MessageBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  from_user?: InputMaybe<RealmUserUnionBoolExp>;
  from_user_id?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  realm_id?: InputMaybe<IntComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
  to_user?: InputMaybe<RealmUserUnionBoolExp>;
  to_user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "message" */
export enum MessageConstraint {
  /** unique or primary key constraint on columns "id" */
  MessagePkey = "message_pkey",
}

/** input type for incrementing numeric columns in table "message" */
export type MessageIncInput = {
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "message" */
export type MessageInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  from_user?: InputMaybe<RealmUserUnionObjRelInsertInput>;
  from_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  to_user?: InputMaybe<RealmUserUnionObjRelInsertInput>;
  to_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type MessageMaxFields = {
  __typename?: "message_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  from_user_id?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  to_user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type MessageMinFields = {
  __typename?: "message_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  from_user_id?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  to_user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "message" */
export type MessageMutationResponse = {
  __typename?: "message_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "message" */
export type MessageOnConflict = {
  constraint: MessageConstraint;
  update_columns?: Array<MessageUpdateColumn>;
  where?: InputMaybe<MessageBoolExp>;
};

/** Ordering options when selecting data from "message". */
export type MessageOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  from_user?: InputMaybe<RealmUserUnionOrderBy>;
  from_user_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  to_user?: InputMaybe<RealmUserUnionOrderBy>;
  to_user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: message */
export type MessagePkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "message" */
export enum MessageSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FromUserId = "from_user_id",
  /** column name */
  Id = "id",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  Text = "text",
  /** column name */
  ToUserId = "to_user_id",
}

/** input type for updating data in table "message" */
export type MessageSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  from_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  to_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type MessageStddevFields = {
  __typename?: "message_stddev_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type MessageStddevPopFields = {
  __typename?: "message_stddev_pop_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type MessageStddevSampFields = {
  __typename?: "message_stddev_samp_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "message" */
export type MessageStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: MessageStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MessageStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  from_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
  to_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type MessageSumFields = {
  __typename?: "message_sum_fields";
  realm_id?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "message" */
export enum MessageUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FromUserId = "from_user_id",
  /** column name */
  Id = "id",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  Text = "text",
  /** column name */
  ToUserId = "to_user_id",
}

export type MessageUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MessageIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MessageSetInput>;
  /** filter the rows which have to be updated */
  where: MessageBoolExp;
};

/** aggregate var_pop on columns */
export type MessageVarPopFields = {
  __typename?: "message_var_pop_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type MessageVarSampFields = {
  __typename?: "message_var_samp_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type MessageVarianceFields = {
  __typename?: "message_variance_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: "mutation_root";
  /** delete data from the table: "course" */
  delete_course?: Maybe<CourseMutationResponse>;
  /** delete single row from the table: "course" */
  delete_course_by_pk?: Maybe<Course>;
  /** delete data from the table: "course_review" */
  delete_course_review?: Maybe<CourseReviewMutationResponse>;
  /** delete single row from the table: "course_review" */
  delete_course_review_by_pk?: Maybe<CourseReview>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<MessageMutationResponse>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<Message>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<NotificationMutationResponse>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "post" */
  delete_post?: Maybe<PostMutationResponse>;
  /** delete single row from the table: "post" */
  delete_post_by_pk?: Maybe<Post>;
  /** delete data from the table: "post_reaction" */
  delete_post_reaction?: Maybe<PostReactionMutationResponse>;
  /** delete single row from the table: "post_reaction" */
  delete_post_reaction_by_pk?: Maybe<PostReaction>;
  /** delete data from the table: "reaction_emoji" */
  delete_reaction_emoji?: Maybe<ReactionEmojiMutationResponse>;
  /** delete single row from the table: "reaction_emoji" */
  delete_reaction_emoji_by_pk?: Maybe<ReactionEmoji>;
  /** delete data from the table: "realm" */
  delete_realm?: Maybe<RealmMutationResponse>;
  /** delete single row from the table: "realm" */
  delete_realm_by_pk?: Maybe<Realm>;
  /** delete data from the table: "realm_public" */
  delete_realm_public?: Maybe<RealmPublicMutationResponse>;
  /** delete data from the table: "realm_user" */
  delete_realm_user?: Maybe<RealmUserMutationResponse>;
  /** delete single row from the table: "realm_user" */
  delete_realm_user_by_pk?: Maybe<RealmUser>;
  /** delete data from the table: "session" */
  delete_session?: Maybe<SessionMutationResponse>;
  /** delete single row from the table: "session" */
  delete_session_by_pk?: Maybe<Session>;
  /** delete data from the table: "teacher" */
  delete_teacher?: Maybe<TeacherMutationResponse>;
  /** delete single row from the table: "teacher" */
  delete_teacher_by_pk?: Maybe<Teacher>;
  /** delete data from the table: "thread" */
  delete_thread?: Maybe<ThreadMutationResponse>;
  /** delete single row from the table: "thread" */
  delete_thread_by_pk?: Maybe<Thread>;
  /** delete data from the table: "thread_reaction" */
  delete_thread_reaction?: Maybe<ThreadReactionMutationResponse>;
  /** delete single row from the table: "thread_reaction" */
  delete_thread_reaction_by_pk?: Maybe<ThreadReaction>;
  /** delete data from the table: "topic" */
  delete_topic?: Maybe<TopicMutationResponse>;
  /** delete single row from the table: "topic" */
  delete_topic_by_pk?: Maybe<Topic>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_public" */
  delete_user_public?: Maybe<UserPublicMutationResponse>;
  /** insert data into the table: "course" */
  insert_course?: Maybe<CourseMutationResponse>;
  /** insert a single row into the table: "course" */
  insert_course_one?: Maybe<Course>;
  /** insert data into the table: "course_review" */
  insert_course_review?: Maybe<CourseReviewMutationResponse>;
  /** insert a single row into the table: "course_review" */
  insert_course_review_one?: Maybe<CourseReview>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<MessageMutationResponse>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<NotificationMutationResponse>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "post" */
  insert_post?: Maybe<PostMutationResponse>;
  /** insert a single row into the table: "post" */
  insert_post_one?: Maybe<Post>;
  /** insert data into the table: "post_reaction" */
  insert_post_reaction?: Maybe<PostReactionMutationResponse>;
  /** insert a single row into the table: "post_reaction" */
  insert_post_reaction_one?: Maybe<PostReaction>;
  /** insert data into the table: "reaction_emoji" */
  insert_reaction_emoji?: Maybe<ReactionEmojiMutationResponse>;
  /** insert a single row into the table: "reaction_emoji" */
  insert_reaction_emoji_one?: Maybe<ReactionEmoji>;
  /** insert data into the table: "realm" */
  insert_realm?: Maybe<RealmMutationResponse>;
  /** insert a single row into the table: "realm" */
  insert_realm_one?: Maybe<Realm>;
  /** insert data into the table: "realm_public" */
  insert_realm_public?: Maybe<RealmPublicMutationResponse>;
  /** insert a single row into the table: "realm_public" */
  insert_realm_public_one?: Maybe<RealmPublic>;
  /** insert data into the table: "realm_user" */
  insert_realm_user?: Maybe<RealmUserMutationResponse>;
  /** insert a single row into the table: "realm_user" */
  insert_realm_user_one?: Maybe<RealmUser>;
  /** insert data into the table: "session" */
  insert_session?: Maybe<SessionMutationResponse>;
  /** insert a single row into the table: "session" */
  insert_session_one?: Maybe<Session>;
  /** insert data into the table: "teacher" */
  insert_teacher?: Maybe<TeacherMutationResponse>;
  /** insert a single row into the table: "teacher" */
  insert_teacher_one?: Maybe<Teacher>;
  /** insert data into the table: "thread" */
  insert_thread?: Maybe<ThreadMutationResponse>;
  /** insert a single row into the table: "thread" */
  insert_thread_one?: Maybe<Thread>;
  /** insert data into the table: "thread_reaction" */
  insert_thread_reaction?: Maybe<ThreadReactionMutationResponse>;
  /** insert a single row into the table: "thread_reaction" */
  insert_thread_reaction_one?: Maybe<ThreadReaction>;
  /** insert data into the table: "topic" */
  insert_topic?: Maybe<TopicMutationResponse>;
  /** insert a single row into the table: "topic" */
  insert_topic_one?: Maybe<Topic>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_public" */
  insert_user_public?: Maybe<UserPublicMutationResponse>;
  /** insert a single row into the table: "user_public" */
  insert_user_public_one?: Maybe<UserPublic>;
  /** update data of the table: "course" */
  update_course?: Maybe<CourseMutationResponse>;
  /** update single row of the table: "course" */
  update_course_by_pk?: Maybe<Course>;
  /** update multiples rows of table: "course" */
  update_course_many?: Maybe<Array<Maybe<CourseMutationResponse>>>;
  /** update data of the table: "course_review" */
  update_course_review?: Maybe<CourseReviewMutationResponse>;
  /** update single row of the table: "course_review" */
  update_course_review_by_pk?: Maybe<CourseReview>;
  /** update multiples rows of table: "course_review" */
  update_course_review_many?: Maybe<Array<Maybe<CourseReviewMutationResponse>>>;
  /** update data of the table: "message" */
  update_message?: Maybe<MessageMutationResponse>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<Message>;
  /** update multiples rows of table: "message" */
  update_message_many?: Maybe<Array<Maybe<MessageMutationResponse>>>;
  /** update data of the table: "notification" */
  update_notification?: Maybe<NotificationMutationResponse>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update multiples rows of table: "notification" */
  update_notification_many?: Maybe<Array<Maybe<NotificationMutationResponse>>>;
  /** update data of the table: "post" */
  update_post?: Maybe<PostMutationResponse>;
  /** update single row of the table: "post" */
  update_post_by_pk?: Maybe<Post>;
  /** update multiples rows of table: "post" */
  update_post_many?: Maybe<Array<Maybe<PostMutationResponse>>>;
  /** update data of the table: "post_reaction" */
  update_post_reaction?: Maybe<PostReactionMutationResponse>;
  /** update single row of the table: "post_reaction" */
  update_post_reaction_by_pk?: Maybe<PostReaction>;
  /** update multiples rows of table: "post_reaction" */
  update_post_reaction_many?: Maybe<Array<Maybe<PostReactionMutationResponse>>>;
  /** update data of the table: "reaction_emoji" */
  update_reaction_emoji?: Maybe<ReactionEmojiMutationResponse>;
  /** update single row of the table: "reaction_emoji" */
  update_reaction_emoji_by_pk?: Maybe<ReactionEmoji>;
  /** update multiples rows of table: "reaction_emoji" */
  update_reaction_emoji_many?: Maybe<
    Array<Maybe<ReactionEmojiMutationResponse>>
  >;
  /** update data of the table: "realm" */
  update_realm?: Maybe<RealmMutationResponse>;
  /** update single row of the table: "realm" */
  update_realm_by_pk?: Maybe<Realm>;
  /** update multiples rows of table: "realm" */
  update_realm_many?: Maybe<Array<Maybe<RealmMutationResponse>>>;
  /** update data of the table: "realm_public" */
  update_realm_public?: Maybe<RealmPublicMutationResponse>;
  /** update multiples rows of table: "realm_public" */
  update_realm_public_many?: Maybe<Array<Maybe<RealmPublicMutationResponse>>>;
  /** update data of the table: "realm_user" */
  update_realm_user?: Maybe<RealmUserMutationResponse>;
  /** update single row of the table: "realm_user" */
  update_realm_user_by_pk?: Maybe<RealmUser>;
  /** update multiples rows of table: "realm_user" */
  update_realm_user_many?: Maybe<Array<Maybe<RealmUserMutationResponse>>>;
  /** update data of the table: "session" */
  update_session?: Maybe<SessionMutationResponse>;
  /** update single row of the table: "session" */
  update_session_by_pk?: Maybe<Session>;
  /** update multiples rows of table: "session" */
  update_session_many?: Maybe<Array<Maybe<SessionMutationResponse>>>;
  /** update data of the table: "teacher" */
  update_teacher?: Maybe<TeacherMutationResponse>;
  /** update single row of the table: "teacher" */
  update_teacher_by_pk?: Maybe<Teacher>;
  /** update multiples rows of table: "teacher" */
  update_teacher_many?: Maybe<Array<Maybe<TeacherMutationResponse>>>;
  /** update data of the table: "thread" */
  update_thread?: Maybe<ThreadMutationResponse>;
  /** update single row of the table: "thread" */
  update_thread_by_pk?: Maybe<Thread>;
  /** update multiples rows of table: "thread" */
  update_thread_many?: Maybe<Array<Maybe<ThreadMutationResponse>>>;
  /** update data of the table: "thread_reaction" */
  update_thread_reaction?: Maybe<ThreadReactionMutationResponse>;
  /** update single row of the table: "thread_reaction" */
  update_thread_reaction_by_pk?: Maybe<ThreadReaction>;
  /** update multiples rows of table: "thread_reaction" */
  update_thread_reaction_many?: Maybe<
    Array<Maybe<ThreadReactionMutationResponse>>
  >;
  /** update data of the table: "topic" */
  update_topic?: Maybe<TopicMutationResponse>;
  /** update single row of the table: "topic" */
  update_topic_by_pk?: Maybe<Topic>;
  /** update multiples rows of table: "topic" */
  update_topic_many?: Maybe<Array<Maybe<TopicMutationResponse>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<UserMutationResponse>>>;
  /** update data of the table: "user_public" */
  update_user_public?: Maybe<UserPublicMutationResponse>;
  /** update multiples rows of table: "user_public" */
  update_user_public_many?: Maybe<Array<Maybe<UserPublicMutationResponse>>>;
};

/** mutation root */
export type MutationRootDeleteCourseArgs = {
  where: CourseBoolExp;
};

/** mutation root */
export type MutationRootDeleteCourseByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type MutationRootDeleteCourseReviewArgs = {
  where: CourseReviewBoolExp;
};

/** mutation root */
export type MutationRootDeleteCourseReviewByPkArgs = {
  course_id: Scalars["String"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeleteMessageArgs = {
  where: MessageBoolExp;
};

/** mutation root */
export type MutationRootDeleteMessageByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeleteNotificationArgs = {
  where: NotificationBoolExp;
};

/** mutation root */
export type MutationRootDeleteNotificationByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeletePostArgs = {
  where: PostBoolExp;
};

/** mutation root */
export type MutationRootDeletePostByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type MutationRootDeletePostReactionArgs = {
  where: PostReactionBoolExp;
};

/** mutation root */
export type MutationRootDeletePostReactionByPkArgs = {
  name: ReactionEmojiEnum;
  post_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeleteReactionEmojiArgs = {
  where: ReactionEmojiBoolExp;
};

/** mutation root */
export type MutationRootDeleteReactionEmojiByPkArgs = {
  name: Scalars["String"]["input"];
};

/** mutation root */
export type MutationRootDeleteRealmArgs = {
  where: RealmBoolExp;
};

/** mutation root */
export type MutationRootDeleteRealmByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type MutationRootDeleteRealmPublicArgs = {
  where: RealmPublicBoolExp;
};

/** mutation root */
export type MutationRootDeleteRealmUserArgs = {
  where: RealmUserBoolExp;
};

/** mutation root */
export type MutationRootDeleteRealmUserByPkArgs = {
  realm_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeleteSessionArgs = {
  where: SessionBoolExp;
};

/** mutation root */
export type MutationRootDeleteSessionByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeleteTeacherArgs = {
  where: TeacherBoolExp;
};

/** mutation root */
export type MutationRootDeleteTeacherByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type MutationRootDeleteThreadArgs = {
  where: ThreadBoolExp;
};

/** mutation root */
export type MutationRootDeleteThreadByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type MutationRootDeleteThreadReactionArgs = {
  where: ThreadReactionBoolExp;
};

/** mutation root */
export type MutationRootDeleteThreadReactionByPkArgs = {
  name: ReactionEmojiEnum;
  thread_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeleteTopicArgs = {
  where: TopicBoolExp;
};

/** mutation root */
export type MutationRootDeleteTopicByPkArgs = {
  name: Scalars["String"]["input"];
  realm_id: Scalars["Int"]["input"];
};

/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp;
};

/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type MutationRootDeleteUserPublicArgs = {
  where: UserPublicBoolExp;
};

/** mutation root */
export type MutationRootInsertCourseArgs = {
  objects: Array<CourseInsertInput>;
  on_conflict?: InputMaybe<CourseOnConflict>;
};

/** mutation root */
export type MutationRootInsertCourseOneArgs = {
  object: CourseInsertInput;
  on_conflict?: InputMaybe<CourseOnConflict>;
};

/** mutation root */
export type MutationRootInsertCourseReviewArgs = {
  objects: Array<CourseReviewInsertInput>;
  on_conflict?: InputMaybe<CourseReviewOnConflict>;
};

/** mutation root */
export type MutationRootInsertCourseReviewOneArgs = {
  object: CourseReviewInsertInput;
  on_conflict?: InputMaybe<CourseReviewOnConflict>;
};

/** mutation root */
export type MutationRootInsertMessageArgs = {
  objects: Array<MessageInsertInput>;
  on_conflict?: InputMaybe<MessageOnConflict>;
};

/** mutation root */
export type MutationRootInsertMessageOneArgs = {
  object: MessageInsertInput;
  on_conflict?: InputMaybe<MessageOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotificationArgs = {
  objects: Array<NotificationInsertInput>;
  on_conflict?: InputMaybe<NotificationOnConflict>;
};

/** mutation root */
export type MutationRootInsertNotificationOneArgs = {
  object: NotificationInsertInput;
  on_conflict?: InputMaybe<NotificationOnConflict>;
};

/** mutation root */
export type MutationRootInsertPostArgs = {
  objects: Array<PostInsertInput>;
  on_conflict?: InputMaybe<PostOnConflict>;
};

/** mutation root */
export type MutationRootInsertPostOneArgs = {
  object: PostInsertInput;
  on_conflict?: InputMaybe<PostOnConflict>;
};

/** mutation root */
export type MutationRootInsertPostReactionArgs = {
  objects: Array<PostReactionInsertInput>;
  on_conflict?: InputMaybe<PostReactionOnConflict>;
};

/** mutation root */
export type MutationRootInsertPostReactionOneArgs = {
  object: PostReactionInsertInput;
  on_conflict?: InputMaybe<PostReactionOnConflict>;
};

/** mutation root */
export type MutationRootInsertReactionEmojiArgs = {
  objects: Array<ReactionEmojiInsertInput>;
  on_conflict?: InputMaybe<ReactionEmojiOnConflict>;
};

/** mutation root */
export type MutationRootInsertReactionEmojiOneArgs = {
  object: ReactionEmojiInsertInput;
  on_conflict?: InputMaybe<ReactionEmojiOnConflict>;
};

/** mutation root */
export type MutationRootInsertRealmArgs = {
  objects: Array<RealmInsertInput>;
  on_conflict?: InputMaybe<RealmOnConflict>;
};

/** mutation root */
export type MutationRootInsertRealmOneArgs = {
  object: RealmInsertInput;
  on_conflict?: InputMaybe<RealmOnConflict>;
};

/** mutation root */
export type MutationRootInsertRealmPublicArgs = {
  objects: Array<RealmPublicInsertInput>;
};

/** mutation root */
export type MutationRootInsertRealmPublicOneArgs = {
  object: RealmPublicInsertInput;
};

/** mutation root */
export type MutationRootInsertRealmUserArgs = {
  objects: Array<RealmUserInsertInput>;
  on_conflict?: InputMaybe<RealmUserOnConflict>;
};

/** mutation root */
export type MutationRootInsertRealmUserOneArgs = {
  object: RealmUserInsertInput;
  on_conflict?: InputMaybe<RealmUserOnConflict>;
};

/** mutation root */
export type MutationRootInsertSessionArgs = {
  objects: Array<SessionInsertInput>;
  on_conflict?: InputMaybe<SessionOnConflict>;
};

/** mutation root */
export type MutationRootInsertSessionOneArgs = {
  object: SessionInsertInput;
  on_conflict?: InputMaybe<SessionOnConflict>;
};

/** mutation root */
export type MutationRootInsertTeacherArgs = {
  objects: Array<TeacherInsertInput>;
  on_conflict?: InputMaybe<TeacherOnConflict>;
};

/** mutation root */
export type MutationRootInsertTeacherOneArgs = {
  object: TeacherInsertInput;
  on_conflict?: InputMaybe<TeacherOnConflict>;
};

/** mutation root */
export type MutationRootInsertThreadArgs = {
  objects: Array<ThreadInsertInput>;
  on_conflict?: InputMaybe<ThreadOnConflict>;
};

/** mutation root */
export type MutationRootInsertThreadOneArgs = {
  object: ThreadInsertInput;
  on_conflict?: InputMaybe<ThreadOnConflict>;
};

/** mutation root */
export type MutationRootInsertThreadReactionArgs = {
  objects: Array<ThreadReactionInsertInput>;
  on_conflict?: InputMaybe<ThreadReactionOnConflict>;
};

/** mutation root */
export type MutationRootInsertThreadReactionOneArgs = {
  object: ThreadReactionInsertInput;
  on_conflict?: InputMaybe<ThreadReactionOnConflict>;
};

/** mutation root */
export type MutationRootInsertTopicArgs = {
  objects: Array<TopicInsertInput>;
  on_conflict?: InputMaybe<TopicOnConflict>;
};

/** mutation root */
export type MutationRootInsertTopicOneArgs = {
  object: TopicInsertInput;
  on_conflict?: InputMaybe<TopicOnConflict>;
};

/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: InputMaybe<UserOnConflict>;
};

/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: InputMaybe<UserOnConflict>;
};

/** mutation root */
export type MutationRootInsertUserPublicArgs = {
  objects: Array<UserPublicInsertInput>;
};

/** mutation root */
export type MutationRootInsertUserPublicOneArgs = {
  object: UserPublicInsertInput;
};

/** mutation root */
export type MutationRootUpdateCourseArgs = {
  _inc?: InputMaybe<CourseIncInput>;
  _set?: InputMaybe<CourseSetInput>;
  where: CourseBoolExp;
};

/** mutation root */
export type MutationRootUpdateCourseByPkArgs = {
  _inc?: InputMaybe<CourseIncInput>;
  _set?: InputMaybe<CourseSetInput>;
  pk_columns: CoursePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCourseManyArgs = {
  updates: Array<CourseUpdates>;
};

/** mutation root */
export type MutationRootUpdateCourseReviewArgs = {
  _inc?: InputMaybe<CourseReviewIncInput>;
  _set?: InputMaybe<CourseReviewSetInput>;
  where: CourseReviewBoolExp;
};

/** mutation root */
export type MutationRootUpdateCourseReviewByPkArgs = {
  _inc?: InputMaybe<CourseReviewIncInput>;
  _set?: InputMaybe<CourseReviewSetInput>;
  pk_columns: CourseReviewPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateCourseReviewManyArgs = {
  updates: Array<CourseReviewUpdates>;
};

/** mutation root */
export type MutationRootUpdateMessageArgs = {
  _inc?: InputMaybe<MessageIncInput>;
  _set?: InputMaybe<MessageSetInput>;
  where: MessageBoolExp;
};

/** mutation root */
export type MutationRootUpdateMessageByPkArgs = {
  _inc?: InputMaybe<MessageIncInput>;
  _set?: InputMaybe<MessageSetInput>;
  pk_columns: MessagePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateMessageManyArgs = {
  updates: Array<MessageUpdates>;
};

/** mutation root */
export type MutationRootUpdateNotificationArgs = {
  _set?: InputMaybe<NotificationSetInput>;
  where: NotificationBoolExp;
};

/** mutation root */
export type MutationRootUpdateNotificationByPkArgs = {
  _set?: InputMaybe<NotificationSetInput>;
  pk_columns: NotificationPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateNotificationManyArgs = {
  updates: Array<NotificationUpdates>;
};

/** mutation root */
export type MutationRootUpdatePostArgs = {
  _inc?: InputMaybe<PostIncInput>;
  _set?: InputMaybe<PostSetInput>;
  where: PostBoolExp;
};

/** mutation root */
export type MutationRootUpdatePostByPkArgs = {
  _inc?: InputMaybe<PostIncInput>;
  _set?: InputMaybe<PostSetInput>;
  pk_columns: PostPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdatePostManyArgs = {
  updates: Array<PostUpdates>;
};

/** mutation root */
export type MutationRootUpdatePostReactionArgs = {
  _inc?: InputMaybe<PostReactionIncInput>;
  _set?: InputMaybe<PostReactionSetInput>;
  where: PostReactionBoolExp;
};

/** mutation root */
export type MutationRootUpdatePostReactionByPkArgs = {
  _inc?: InputMaybe<PostReactionIncInput>;
  _set?: InputMaybe<PostReactionSetInput>;
  pk_columns: PostReactionPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdatePostReactionManyArgs = {
  updates: Array<PostReactionUpdates>;
};

/** mutation root */
export type MutationRootUpdateReactionEmojiArgs = {
  _set?: InputMaybe<ReactionEmojiSetInput>;
  where: ReactionEmojiBoolExp;
};

/** mutation root */
export type MutationRootUpdateReactionEmojiByPkArgs = {
  _set?: InputMaybe<ReactionEmojiSetInput>;
  pk_columns: ReactionEmojiPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateReactionEmojiManyArgs = {
  updates: Array<ReactionEmojiUpdates>;
};

/** mutation root */
export type MutationRootUpdateRealmArgs = {
  _inc?: InputMaybe<RealmIncInput>;
  _set?: InputMaybe<RealmSetInput>;
  where: RealmBoolExp;
};

/** mutation root */
export type MutationRootUpdateRealmByPkArgs = {
  _inc?: InputMaybe<RealmIncInput>;
  _set?: InputMaybe<RealmSetInput>;
  pk_columns: RealmPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRealmManyArgs = {
  updates: Array<RealmUpdates>;
};

/** mutation root */
export type MutationRootUpdateRealmPublicArgs = {
  _inc?: InputMaybe<RealmPublicIncInput>;
  _set?: InputMaybe<RealmPublicSetInput>;
  where: RealmPublicBoolExp;
};

/** mutation root */
export type MutationRootUpdateRealmPublicManyArgs = {
  updates: Array<RealmPublicUpdates>;
};

/** mutation root */
export type MutationRootUpdateRealmUserArgs = {
  _inc?: InputMaybe<RealmUserIncInput>;
  _set?: InputMaybe<RealmUserSetInput>;
  where: RealmUserBoolExp;
};

/** mutation root */
export type MutationRootUpdateRealmUserByPkArgs = {
  _inc?: InputMaybe<RealmUserIncInput>;
  _set?: InputMaybe<RealmUserSetInput>;
  pk_columns: RealmUserPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRealmUserManyArgs = {
  updates: Array<RealmUserUpdates>;
};

/** mutation root */
export type MutationRootUpdateSessionArgs = {
  _set?: InputMaybe<SessionSetInput>;
  where: SessionBoolExp;
};

/** mutation root */
export type MutationRootUpdateSessionByPkArgs = {
  _set?: InputMaybe<SessionSetInput>;
  pk_columns: SessionPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateSessionManyArgs = {
  updates: Array<SessionUpdates>;
};

/** mutation root */
export type MutationRootUpdateTeacherArgs = {
  _set?: InputMaybe<TeacherSetInput>;
  where: TeacherBoolExp;
};

/** mutation root */
export type MutationRootUpdateTeacherByPkArgs = {
  _set?: InputMaybe<TeacherSetInput>;
  pk_columns: TeacherPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTeacherManyArgs = {
  updates: Array<TeacherUpdates>;
};

/** mutation root */
export type MutationRootUpdateThreadArgs = {
  _inc?: InputMaybe<ThreadIncInput>;
  _set?: InputMaybe<ThreadSetInput>;
  where: ThreadBoolExp;
};

/** mutation root */
export type MutationRootUpdateThreadByPkArgs = {
  _inc?: InputMaybe<ThreadIncInput>;
  _set?: InputMaybe<ThreadSetInput>;
  pk_columns: ThreadPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateThreadManyArgs = {
  updates: Array<ThreadUpdates>;
};

/** mutation root */
export type MutationRootUpdateThreadReactionArgs = {
  _inc?: InputMaybe<ThreadReactionIncInput>;
  _set?: InputMaybe<ThreadReactionSetInput>;
  where: ThreadReactionBoolExp;
};

/** mutation root */
export type MutationRootUpdateThreadReactionByPkArgs = {
  _inc?: InputMaybe<ThreadReactionIncInput>;
  _set?: InputMaybe<ThreadReactionSetInput>;
  pk_columns: ThreadReactionPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateThreadReactionManyArgs = {
  updates: Array<ThreadReactionUpdates>;
};

/** mutation root */
export type MutationRootUpdateTopicArgs = {
  _inc?: InputMaybe<TopicIncInput>;
  _set?: InputMaybe<TopicSetInput>;
  where: TopicBoolExp;
};

/** mutation root */
export type MutationRootUpdateTopicByPkArgs = {
  _inc?: InputMaybe<TopicIncInput>;
  _set?: InputMaybe<TopicSetInput>;
  pk_columns: TopicPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTopicManyArgs = {
  updates: Array<TopicUpdates>;
};

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};

/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};

/** mutation root */
export type MutationRootUpdateUserPublicArgs = {
  _set?: InputMaybe<UserPublicSetInput>;
  where: UserPublicBoolExp;
};

/** mutation root */
export type MutationRootUpdateUserPublicManyArgs = {
  updates: Array<UserPublicUpdates>;
};

/** columns and relationships of "notification" */
export type Notification = {
  __typename?: "notification";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  payload: Scalars["String"]["output"];
  read: Scalars["Boolean"]["output"];
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "notification" */
export type NotificationAggregate = {
  __typename?: "notification_aggregate";
  aggregate?: Maybe<NotificationAggregateFields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type NotificationAggregateFields = {
  __typename?: "notification_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<NotificationMaxFields>;
  min?: Maybe<NotificationMinFields>;
};

/** aggregate fields of "notification" */
export type NotificationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<NotificationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type NotificationBoolExp = {
  _and?: InputMaybe<Array<NotificationBoolExp>>;
  _not?: InputMaybe<NotificationBoolExp>;
  _or?: InputMaybe<Array<NotificationBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  payload?: InputMaybe<StringComparisonExp>;
  read?: InputMaybe<BooleanComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "notification" */
export enum NotificationConstraint {
  /** unique or primary key constraint on columns "id" */
  NotificationPkey = "notification_pkey",
}

/** input type for inserting data into table "notification" */
export type NotificationInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  payload?: InputMaybe<Scalars["String"]["input"]>;
  read?: InputMaybe<Scalars["Boolean"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type NotificationMaxFields = {
  __typename?: "notification_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  payload?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type NotificationMinFields = {
  __typename?: "notification_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  payload?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "notification" */
export type NotificationMutationResponse = {
  __typename?: "notification_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on_conflict condition type for table "notification" */
export type NotificationOnConflict = {
  constraint: NotificationConstraint;
  update_columns?: Array<NotificationUpdateColumn>;
  where?: InputMaybe<NotificationBoolExp>;
};

/** Ordering options when selecting data from "notification". */
export type NotificationOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  payload?: InputMaybe<OrderBy>;
  read?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: notification */
export type NotificationPkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "notification" */
export enum NotificationSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Payload = "payload",
  /** column name */
  Read = "read",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "notification" */
export type NotificationSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  payload?: InputMaybe<Scalars["String"]["input"]>;
  read?: InputMaybe<Scalars["Boolean"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "notification" */
export type NotificationStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: NotificationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type NotificationStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  payload?: InputMaybe<Scalars["String"]["input"]>;
  read?: InputMaybe<Scalars["Boolean"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "notification" */
export enum NotificationUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Payload = "payload",
  /** column name */
  Read = "read",
  /** column name */
  UserId = "user_id",
}

export type NotificationUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<NotificationSetInput>;
  /** filter the rows which have to be updated */
  where: NotificationBoolExp;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "post" */
export type Post = {
  __typename?: "post";
  content: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["Int"]["output"];
  /** An object relationship */
  thread: Thread;
  thread_id: Scalars["Int"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "post" */
export type PostAggregate = {
  __typename?: "post_aggregate";
  aggregate?: Maybe<PostAggregateFields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type PostAggregateFields = {
  __typename?: "post_aggregate_fields";
  avg?: Maybe<PostAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<PostMaxFields>;
  min?: Maybe<PostMinFields>;
  stddev?: Maybe<PostStddevFields>;
  stddev_pop?: Maybe<PostStddevPopFields>;
  stddev_samp?: Maybe<PostStddevSampFields>;
  sum?: Maybe<PostSumFields>;
  var_pop?: Maybe<PostVarPopFields>;
  var_samp?: Maybe<PostVarSampFields>;
  variance?: Maybe<PostVarianceFields>;
};

/** aggregate fields of "post" */
export type PostAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type PostAvgFields = {
  __typename?: "post_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type PostBoolExp = {
  _and?: InputMaybe<Array<PostBoolExp>>;
  _not?: InputMaybe<PostBoolExp>;
  _or?: InputMaybe<Array<PostBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  thread?: InputMaybe<ThreadBoolExp>;
  thread_id?: InputMaybe<IntComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "post" */
export enum PostConstraint {
  /** unique or primary key constraint on columns "id" */
  PostPkey = "post_pkey",
}

/** input type for incrementing numeric columns in table "post" */
export type PostIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "post" */
export type PostInsertInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  thread?: InputMaybe<ThreadObjRelInsertInput>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type PostMaxFields = {
  __typename?: "post_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type PostMinFields = {
  __typename?: "post_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "post" */
export type PostMutationResponse = {
  __typename?: "post_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type PostObjRelInsertInput = {
  data: PostInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PostOnConflict>;
};

/** on_conflict condition type for table "post" */
export type PostOnConflict = {
  constraint: PostConstraint;
  update_columns?: Array<PostUpdateColumn>;
  where?: InputMaybe<PostBoolExp>;
};

/** Ordering options when selecting data from "post". */
export type PostOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  thread?: InputMaybe<ThreadOrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post */
export type PostPkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** columns and relationships of "post_reaction" */
export type PostReaction = {
  __typename?: "post_reaction";
  created_at: Scalars["timestamptz"]["output"];
  name: ReactionEmojiEnum;
  /** An object relationship */
  post: Post;
  post_id: Scalars["Int"]["output"];
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "post_reaction" */
export type PostReactionAggregate = {
  __typename?: "post_reaction_aggregate";
  aggregate?: Maybe<PostReactionAggregateFields>;
  nodes: Array<PostReaction>;
};

export type PostReactionAggregateBoolExp = {
  count?: InputMaybe<PostReactionAggregateBoolExpCount>;
};

export type PostReactionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PostReactionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<PostReactionBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "post_reaction" */
export type PostReactionAggregateFields = {
  __typename?: "post_reaction_aggregate_fields";
  avg?: Maybe<PostReactionAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<PostReactionMaxFields>;
  min?: Maybe<PostReactionMinFields>;
  stddev?: Maybe<PostReactionStddevFields>;
  stddev_pop?: Maybe<PostReactionStddevPopFields>;
  stddev_samp?: Maybe<PostReactionStddevSampFields>;
  sum?: Maybe<PostReactionSumFields>;
  var_pop?: Maybe<PostReactionVarPopFields>;
  var_samp?: Maybe<PostReactionVarSampFields>;
  variance?: Maybe<PostReactionVarianceFields>;
};

/** aggregate fields of "post_reaction" */
export type PostReactionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostReactionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "post_reaction" */
export type PostReactionAggregateOrderBy = {
  avg?: InputMaybe<PostReactionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostReactionMaxOrderBy>;
  min?: InputMaybe<PostReactionMinOrderBy>;
  stddev?: InputMaybe<PostReactionStddevOrderBy>;
  stddev_pop?: InputMaybe<PostReactionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PostReactionStddevSampOrderBy>;
  sum?: InputMaybe<PostReactionSumOrderBy>;
  var_pop?: InputMaybe<PostReactionVarPopOrderBy>;
  var_samp?: InputMaybe<PostReactionVarSampOrderBy>;
  variance?: InputMaybe<PostReactionVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "post_reaction" */
export type PostReactionArrRelInsertInput = {
  data: Array<PostReactionInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<PostReactionOnConflict>;
};

/** aggregate avg on columns */
export type PostReactionAvgFields = {
  __typename?: "post_reaction_avg_fields";
  post_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "post_reaction" */
export type PostReactionAvgOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "post_reaction". All fields are combined with a logical 'AND'. */
export type PostReactionBoolExp = {
  _and?: InputMaybe<Array<PostReactionBoolExp>>;
  _not?: InputMaybe<PostReactionBoolExp>;
  _or?: InputMaybe<Array<PostReactionBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<ReactionEmojiEnumComparisonExp>;
  post?: InputMaybe<PostBoolExp>;
  post_id?: InputMaybe<IntComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "post_reaction" */
export enum PostReactionConstraint {
  /** unique or primary key constraint on columns "name", "user_id", "post_id" */
  PostReactionPkey = "post_reaction_pkey",
}

/** input type for incrementing numeric columns in table "post_reaction" */
export type PostReactionIncInput = {
  post_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "post_reaction" */
export type PostReactionInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  name?: InputMaybe<ReactionEmojiEnum>;
  post?: InputMaybe<PostObjRelInsertInput>;
  post_id?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type PostReactionMaxFields = {
  __typename?: "post_reaction_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  post_id?: Maybe<Scalars["Int"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "post_reaction" */
export type PostReactionMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostReactionMinFields = {
  __typename?: "post_reaction_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  post_id?: Maybe<Scalars["Int"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "post_reaction" */
export type PostReactionMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "post_reaction" */
export type PostReactionMutationResponse = {
  __typename?: "post_reaction_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<PostReaction>;
};

/** on_conflict condition type for table "post_reaction" */
export type PostReactionOnConflict = {
  constraint: PostReactionConstraint;
  update_columns?: Array<PostReactionUpdateColumn>;
  where?: InputMaybe<PostReactionBoolExp>;
};

/** Ordering options when selecting data from "post_reaction". */
export type PostReactionOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_reaction */
export type PostReactionPkColumnsInput = {
  name: ReactionEmojiEnum;
  post_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** select columns of table "post_reaction" */
export enum PostReactionSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Name = "name",
  /** column name */
  PostId = "post_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "post_reaction" */
export type PostReactionSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  name?: InputMaybe<ReactionEmojiEnum>;
  post_id?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type PostReactionStddevFields = {
  __typename?: "post_reaction_stddev_fields";
  post_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "post_reaction" */
export type PostReactionStddevOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostReactionStddevPopFields = {
  __typename?: "post_reaction_stddev_pop_fields";
  post_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "post_reaction" */
export type PostReactionStddevPopOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostReactionStddevSampFields = {
  __typename?: "post_reaction_stddev_samp_fields";
  post_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "post_reaction" */
export type PostReactionStddevSampOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "post_reaction" */
export type PostReactionStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PostReactionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostReactionStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  name?: InputMaybe<ReactionEmojiEnum>;
  post_id?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type PostReactionSumFields = {
  __typename?: "post_reaction_sum_fields";
  post_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "post_reaction" */
export type PostReactionSumOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** update columns of table "post_reaction" */
export enum PostReactionUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Name = "name",
  /** column name */
  PostId = "post_id",
  /** column name */
  UserId = "user_id",
}

export type PostReactionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PostReactionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostReactionSetInput>;
  /** filter the rows which have to be updated */
  where: PostReactionBoolExp;
};

/** aggregate var_pop on columns */
export type PostReactionVarPopFields = {
  __typename?: "post_reaction_var_pop_fields";
  post_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "post_reaction" */
export type PostReactionVarPopOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostReactionVarSampFields = {
  __typename?: "post_reaction_var_samp_fields";
  post_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "post_reaction" */
export type PostReactionVarSampOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostReactionVarianceFields = {
  __typename?: "post_reaction_variance_fields";
  post_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "post_reaction" */
export type PostReactionVarianceOrderBy = {
  post_id?: InputMaybe<OrderBy>;
};

/** select columns of table "post" */
export enum PostSelectColumn {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  ThreadId = "thread_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "post" */
export type PostSetInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type PostStddevFields = {
  __typename?: "post_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type PostStddevPopFields = {
  __typename?: "post_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type PostStddevSampFields = {
  __typename?: "post_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "post" */
export type PostStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PostStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostStreamCursorValueInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type PostSumFields = {
  __typename?: "post_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "post" */
export enum PostUpdateColumn {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  ThreadId = "thread_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type PostUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PostIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostSetInput>;
  /** filter the rows which have to be updated */
  where: PostBoolExp;
};

/** aggregate var_pop on columns */
export type PostVarPopFields = {
  __typename?: "post_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type PostVarSampFields = {
  __typename?: "post_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type PostVarianceFields = {
  __typename?: "post_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

export type QueryRoot = {
  __typename?: "query_root";
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: CourseAggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "course_review" */
  course_review: Array<CourseReview>;
  /** fetch aggregated fields from the table: "course_review" */
  course_review_aggregate: CourseReviewAggregate;
  /** fetch data from the table: "course_review" using primary key columns */
  course_review_by_pk?: Maybe<CourseReview>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: MessageAggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: NotificationAggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: PostAggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_reaction" */
  post_reaction: Array<PostReaction>;
  /** fetch aggregated fields from the table: "post_reaction" */
  post_reaction_aggregate: PostReactionAggregate;
  /** fetch data from the table: "post_reaction" using primary key columns */
  post_reaction_by_pk?: Maybe<PostReaction>;
  /** fetch data from the table: "reaction_emoji" */
  reaction_emoji: Array<ReactionEmoji>;
  /** fetch aggregated fields from the table: "reaction_emoji" */
  reaction_emoji_aggregate: ReactionEmojiAggregate;
  /** fetch data from the table: "reaction_emoji" using primary key columns */
  reaction_emoji_by_pk?: Maybe<ReactionEmoji>;
  /** fetch data from the table: "realm" */
  realm: Array<Realm>;
  /** fetch aggregated fields from the table: "realm" */
  realm_aggregate: RealmAggregate;
  /** fetch data from the table: "realm" using primary key columns */
  realm_by_pk?: Maybe<Realm>;
  /** fetch data from the table: "realm_post" */
  realm_post: Array<RealmPost>;
  /** fetch aggregated fields from the table: "realm_post" */
  realm_post_aggregate: RealmPostAggregate;
  /** fetch data from the table: "realm_public" */
  realm_public: Array<RealmPublic>;
  /** fetch aggregated fields from the table: "realm_public" */
  realm_public_aggregate: RealmPublicAggregate;
  /** fetch data from the table: "realm_user" */
  realm_user: Array<RealmUser>;
  /** fetch aggregated fields from the table: "realm_user" */
  realm_user_aggregate: RealmUserAggregate;
  /** fetch data from the table: "realm_user" using primary key columns */
  realm_user_by_pk?: Maybe<RealmUser>;
  /** fetch data from the table: "realm_user_union" */
  realm_user_union: Array<RealmUserUnion>;
  /** fetch aggregated fields from the table: "realm_user_union" */
  realm_user_union_aggregate: RealmUserUnionAggregate;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: SessionAggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacher_aggregate: TeacherAggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacher_by_pk?: Maybe<Teacher>;
  /** fetch data from the table: "thread" */
  thread: Array<Thread>;
  /** fetch aggregated fields from the table: "thread" */
  thread_aggregate: ThreadAggregate;
  /** fetch data from the table: "thread" using primary key columns */
  thread_by_pk?: Maybe<Thread>;
  /** fetch data from the table: "thread_reaction" */
  thread_reaction: Array<ThreadReaction>;
  /** fetch aggregated fields from the table: "thread_reaction" */
  thread_reaction_aggregate: ThreadReactionAggregate;
  /** fetch data from the table: "thread_reaction" using primary key columns */
  thread_reaction_by_pk?: Maybe<ThreadReaction>;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: TopicAggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_public" */
  user_public: Array<UserPublic>;
  /** fetch aggregated fields from the table: "user_public" */
  user_public_aggregate: UserPublicAggregate;
};

export type QueryRootCourseArgs = {
  distinct_on?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type QueryRootCourseAggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type QueryRootCourseByPkArgs = {
  id: Scalars["String"]["input"];
};

export type QueryRootCourseReviewArgs = {
  distinct_on?: InputMaybe<Array<CourseReviewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseReviewOrderBy>>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

export type QueryRootCourseReviewAggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseReviewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseReviewOrderBy>>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

export type QueryRootCourseReviewByPkArgs = {
  course_id: Scalars["String"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type QueryRootMessageArgs = {
  distinct_on?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};

export type QueryRootMessageAggregateArgs = {
  distinct_on?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};

export type QueryRootMessageByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type QueryRootNotificationArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};

export type QueryRootNotificationAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};

export type QueryRootNotificationByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type QueryRootPostArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

export type QueryRootPostAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

export type QueryRootPostByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRootPostReactionArgs = {
  distinct_on?: InputMaybe<Array<PostReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostReactionOrderBy>>;
  where?: InputMaybe<PostReactionBoolExp>;
};

export type QueryRootPostReactionAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostReactionOrderBy>>;
  where?: InputMaybe<PostReactionBoolExp>;
};

export type QueryRootPostReactionByPkArgs = {
  name: ReactionEmojiEnum;
  post_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type QueryRootReactionEmojiArgs = {
  distinct_on?: InputMaybe<Array<ReactionEmojiSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ReactionEmojiOrderBy>>;
  where?: InputMaybe<ReactionEmojiBoolExp>;
};

export type QueryRootReactionEmojiAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReactionEmojiSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ReactionEmojiOrderBy>>;
  where?: InputMaybe<ReactionEmojiBoolExp>;
};

export type QueryRootReactionEmojiByPkArgs = {
  name: Scalars["String"]["input"];
};

export type QueryRootRealmArgs = {
  distinct_on?: InputMaybe<Array<RealmSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmOrderBy>>;
  where?: InputMaybe<RealmBoolExp>;
};

export type QueryRootRealmAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmOrderBy>>;
  where?: InputMaybe<RealmBoolExp>;
};

export type QueryRootRealmByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRootRealmPostArgs = {
  distinct_on?: InputMaybe<Array<RealmPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPostOrderBy>>;
  where?: InputMaybe<RealmPostBoolExp>;
};

export type QueryRootRealmPostAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPostOrderBy>>;
  where?: InputMaybe<RealmPostBoolExp>;
};

export type QueryRootRealmPublicArgs = {
  distinct_on?: InputMaybe<Array<RealmPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPublicOrderBy>>;
  where?: InputMaybe<RealmPublicBoolExp>;
};

export type QueryRootRealmPublicAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPublicOrderBy>>;
  where?: InputMaybe<RealmPublicBoolExp>;
};

export type QueryRootRealmUserArgs = {
  distinct_on?: InputMaybe<Array<RealmUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserOrderBy>>;
  where?: InputMaybe<RealmUserBoolExp>;
};

export type QueryRootRealmUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserOrderBy>>;
  where?: InputMaybe<RealmUserBoolExp>;
};

export type QueryRootRealmUserByPkArgs = {
  realm_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type QueryRootRealmUserUnionArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

export type QueryRootRealmUserUnionAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

export type QueryRootSessionArgs = {
  distinct_on?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};

export type QueryRootSessionAggregateArgs = {
  distinct_on?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};

export type QueryRootSessionByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type QueryRootTeacherArgs = {
  distinct_on?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};

export type QueryRootTeacherAggregateArgs = {
  distinct_on?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};

export type QueryRootTeacherByPkArgs = {
  id: Scalars["String"]["input"];
};

export type QueryRootThreadArgs = {
  distinct_on?: InputMaybe<Array<ThreadSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadOrderBy>>;
  where?: InputMaybe<ThreadBoolExp>;
};

export type QueryRootThreadAggregateArgs = {
  distinct_on?: InputMaybe<Array<ThreadSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadOrderBy>>;
  where?: InputMaybe<ThreadBoolExp>;
};

export type QueryRootThreadByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRootThreadReactionArgs = {
  distinct_on?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadReactionOrderBy>>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

export type QueryRootThreadReactionAggregateArgs = {
  distinct_on?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadReactionOrderBy>>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

export type QueryRootThreadReactionByPkArgs = {
  name: ReactionEmojiEnum;
  thread_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type QueryRootTopicArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

export type QueryRootTopicAggregateArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

export type QueryRootTopicByPkArgs = {
  name: Scalars["String"]["input"];
  realm_id: Scalars["Int"]["input"];
};

export type QueryRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type QueryRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type QueryRootUserByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type QueryRootUserPublicArgs = {
  distinct_on?: InputMaybe<Array<UserPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserPublicOrderBy>>;
  where?: InputMaybe<UserPublicBoolExp>;
};

export type QueryRootUserPublicAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserPublicOrderBy>>;
  where?: InputMaybe<UserPublicBoolExp>;
};

/** columns and relationships of "reaction_emoji" */
export type ReactionEmoji = {
  __typename?: "reaction_emoji";
  comment?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
};

/** aggregated selection of "reaction_emoji" */
export type ReactionEmojiAggregate = {
  __typename?: "reaction_emoji_aggregate";
  aggregate?: Maybe<ReactionEmojiAggregateFields>;
  nodes: Array<ReactionEmoji>;
};

/** aggregate fields of "reaction_emoji" */
export type ReactionEmojiAggregateFields = {
  __typename?: "reaction_emoji_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<ReactionEmojiMaxFields>;
  min?: Maybe<ReactionEmojiMinFields>;
};

/** aggregate fields of "reaction_emoji" */
export type ReactionEmojiAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ReactionEmojiSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "reaction_emoji". All fields are combined with a logical 'AND'. */
export type ReactionEmojiBoolExp = {
  _and?: InputMaybe<Array<ReactionEmojiBoolExp>>;
  _not?: InputMaybe<ReactionEmojiBoolExp>;
  _or?: InputMaybe<Array<ReactionEmojiBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "reaction_emoji" */
export enum ReactionEmojiConstraint {
  /** unique or primary key constraint on columns "name" */
  ReactionEmojiPkey = "reaction_emoji_pkey",
}

export enum ReactionEmojiEnum {
  ConfusedFace = "confused_face",
  Eyes = "eyes",
  GrinningFaceWithSmilingEyes = "grinning_face_with_smiling_eyes",
  PartyPopper = "party_popper",
  RedHeart = "red_heart",
  Rocket = "rocket",
  ThumbsDown = "thumbs_down",
  ThumbsUp = "thumbs_up",
}

/** Boolean expression to compare columns of type "reaction_emoji_enum". All fields are combined with logical 'AND'. */
export type ReactionEmojiEnumComparisonExp = {
  _eq?: InputMaybe<ReactionEmojiEnum>;
  _in?: InputMaybe<Array<ReactionEmojiEnum>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<ReactionEmojiEnum>;
  _nin?: InputMaybe<Array<ReactionEmojiEnum>>;
};

/** input type for inserting data into table "reaction_emoji" */
export type ReactionEmojiInsertInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type ReactionEmojiMaxFields = {
  __typename?: "reaction_emoji_max_fields";
  comment?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type ReactionEmojiMinFields = {
  __typename?: "reaction_emoji_min_fields";
  comment?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "reaction_emoji" */
export type ReactionEmojiMutationResponse = {
  __typename?: "reaction_emoji_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<ReactionEmoji>;
};

/** on_conflict condition type for table "reaction_emoji" */
export type ReactionEmojiOnConflict = {
  constraint: ReactionEmojiConstraint;
  update_columns?: Array<ReactionEmojiUpdateColumn>;
  where?: InputMaybe<ReactionEmojiBoolExp>;
};

/** Ordering options when selecting data from "reaction_emoji". */
export type ReactionEmojiOrderBy = {
  comment?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: reaction_emoji */
export type ReactionEmojiPkColumnsInput = {
  name: Scalars["String"]["input"];
};

/** select columns of table "reaction_emoji" */
export enum ReactionEmojiSelectColumn {
  /** column name */
  Comment = "comment",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "reaction_emoji" */
export type ReactionEmojiSetInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "reaction_emoji" */
export type ReactionEmojiStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ReactionEmojiStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ReactionEmojiStreamCursorValueInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "reaction_emoji" */
export enum ReactionEmojiUpdateColumn {
  /** column name */
  Comment = "comment",
  /** column name */
  Name = "name",
}

export type ReactionEmojiUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ReactionEmojiSetInput>;
  /** filter the rows which have to be updated */
  where: ReactionEmojiBoolExp;
};

/** columns and relationships of "realm" */
export type Realm = {
  __typename?: "realm";
  admin_id: Scalars["uuid"]["output"];
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  invitation_code?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  private: Scalars["Boolean"]["output"];
  /** An array relationship */
  topics: Array<Topic>;
  /** An aggregate relationship */
  topics_aggregate: TopicAggregate;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** columns and relationships of "realm" */
export type RealmTopicsArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

/** columns and relationships of "realm" */
export type RealmTopicsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

/** aggregated selection of "realm" */
export type RealmAggregate = {
  __typename?: "realm_aggregate";
  aggregate?: Maybe<RealmAggregateFields>;
  nodes: Array<Realm>;
};

/** aggregate fields of "realm" */
export type RealmAggregateFields = {
  __typename?: "realm_aggregate_fields";
  avg?: Maybe<RealmAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<RealmMaxFields>;
  min?: Maybe<RealmMinFields>;
  stddev?: Maybe<RealmStddevFields>;
  stddev_pop?: Maybe<RealmStddevPopFields>;
  stddev_samp?: Maybe<RealmStddevSampFields>;
  sum?: Maybe<RealmSumFields>;
  var_pop?: Maybe<RealmVarPopFields>;
  var_samp?: Maybe<RealmVarSampFields>;
  variance?: Maybe<RealmVarianceFields>;
};

/** aggregate fields of "realm" */
export type RealmAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RealmSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type RealmAvgFields = {
  __typename?: "realm_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "realm". All fields are combined with a logical 'AND'. */
export type RealmBoolExp = {
  _and?: InputMaybe<Array<RealmBoolExp>>;
  _not?: InputMaybe<RealmBoolExp>;
  _or?: InputMaybe<Array<RealmBoolExp>>;
  admin_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  invitation_code?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  private?: InputMaybe<BooleanComparisonExp>;
  topics?: InputMaybe<TopicBoolExp>;
  topics_aggregate?: InputMaybe<TopicAggregateBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "realm" */
export enum RealmConstraint {
  /** unique or primary key constraint on columns "name" */
  RealmNameKey = "realm_name_key",
  /** unique or primary key constraint on columns "id" */
  RealmPkey = "realm_pkey",
}

/** input type for incrementing numeric columns in table "realm" */
export type RealmIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "realm" */
export type RealmInsertInput = {
  admin_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  invitation_code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  topics?: InputMaybe<TopicArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type RealmMaxFields = {
  __typename?: "realm_max_fields";
  admin_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  invitation_code?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type RealmMinFields = {
  __typename?: "realm_min_fields";
  admin_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  invitation_code?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "realm" */
export type RealmMutationResponse = {
  __typename?: "realm_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Realm>;
};

/** on_conflict condition type for table "realm" */
export type RealmOnConflict = {
  constraint: RealmConstraint;
  update_columns?: Array<RealmUpdateColumn>;
  where?: InputMaybe<RealmBoolExp>;
};

/** Ordering options when selecting data from "realm". */
export type RealmOrderBy = {
  admin_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invitation_code?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  private?: InputMaybe<OrderBy>;
  topics_aggregate?: InputMaybe<TopicAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: realm */
export type RealmPkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** columns and relationships of "realm_post" */
export type RealmPost = {
  __typename?: "realm_post";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  /** An array relationship */
  reactions: Array<PostReaction>;
  /** An aggregate relationship */
  reactions_aggregate: PostReactionAggregate;
  /** An object relationship */
  realm?: Maybe<RealmPublic>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  thread?: Maybe<Thread>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** An object relationship */
  user?: Maybe<RealmUserUnion>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** columns and relationships of "realm_post" */
export type RealmPostReactionsArgs = {
  distinct_on?: InputMaybe<Array<PostReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostReactionOrderBy>>;
  where?: InputMaybe<PostReactionBoolExp>;
};

/** columns and relationships of "realm_post" */
export type RealmPostReactionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostReactionOrderBy>>;
  where?: InputMaybe<PostReactionBoolExp>;
};

/** aggregated selection of "realm_post" */
export type RealmPostAggregate = {
  __typename?: "realm_post_aggregate";
  aggregate?: Maybe<RealmPostAggregateFields>;
  nodes: Array<RealmPost>;
};

export type RealmPostAggregateBoolExp = {
  count?: InputMaybe<RealmPostAggregateBoolExpCount>;
};

export type RealmPostAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RealmPostSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RealmPostBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "realm_post" */
export type RealmPostAggregateFields = {
  __typename?: "realm_post_aggregate_fields";
  avg?: Maybe<RealmPostAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<RealmPostMaxFields>;
  min?: Maybe<RealmPostMinFields>;
  stddev?: Maybe<RealmPostStddevFields>;
  stddev_pop?: Maybe<RealmPostStddevPopFields>;
  stddev_samp?: Maybe<RealmPostStddevSampFields>;
  sum?: Maybe<RealmPostSumFields>;
  var_pop?: Maybe<RealmPostVarPopFields>;
  var_samp?: Maybe<RealmPostVarSampFields>;
  variance?: Maybe<RealmPostVarianceFields>;
};

/** aggregate fields of "realm_post" */
export type RealmPostAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RealmPostSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "realm_post" */
export type RealmPostAggregateOrderBy = {
  avg?: InputMaybe<RealmPostAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RealmPostMaxOrderBy>;
  min?: InputMaybe<RealmPostMinOrderBy>;
  stddev?: InputMaybe<RealmPostStddevOrderBy>;
  stddev_pop?: InputMaybe<RealmPostStddevPopOrderBy>;
  stddev_samp?: InputMaybe<RealmPostStddevSampOrderBy>;
  sum?: InputMaybe<RealmPostSumOrderBy>;
  var_pop?: InputMaybe<RealmPostVarPopOrderBy>;
  var_samp?: InputMaybe<RealmPostVarSampOrderBy>;
  variance?: InputMaybe<RealmPostVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "realm_post" */
export type RealmPostArrRelInsertInput = {
  data: Array<RealmPostInsertInput>;
};

/** aggregate avg on columns */
export type RealmPostAvgFields = {
  __typename?: "realm_post_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "realm_post" */
export type RealmPostAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "realm_post". All fields are combined with a logical 'AND'. */
export type RealmPostBoolExp = {
  _and?: InputMaybe<Array<RealmPostBoolExp>>;
  _not?: InputMaybe<RealmPostBoolExp>;
  _or?: InputMaybe<Array<RealmPostBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  reactions?: InputMaybe<PostReactionBoolExp>;
  reactions_aggregate?: InputMaybe<PostReactionAggregateBoolExp>;
  realm?: InputMaybe<RealmPublicBoolExp>;
  realm_id?: InputMaybe<IntComparisonExp>;
  thread?: InputMaybe<ThreadBoolExp>;
  thread_id?: InputMaybe<IntComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<RealmUserUnionBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** input type for inserting data into table "realm_post" */
export type RealmPostInsertInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  reactions?: InputMaybe<PostReactionArrRelInsertInput>;
  realm?: InputMaybe<RealmPublicObjRelInsertInput>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  thread?: InputMaybe<ThreadObjRelInsertInput>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<RealmUserUnionObjRelInsertInput>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type RealmPostMaxFields = {
  __typename?: "realm_post_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "realm_post" */
export type RealmPostMaxOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RealmPostMinFields = {
  __typename?: "realm_post_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "realm_post" */
export type RealmPostMinOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "realm_post". */
export type RealmPostOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  reactions_aggregate?: InputMaybe<PostReactionAggregateOrderBy>;
  realm?: InputMaybe<RealmPublicOrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread?: InputMaybe<ThreadOrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<RealmUserUnionOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** select columns of table "realm_post" */
export enum RealmPostSelectColumn {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  ThreadId = "thread_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** aggregate stddev on columns */
export type RealmPostStddevFields = {
  __typename?: "realm_post_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "realm_post" */
export type RealmPostStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RealmPostStddevPopFields = {
  __typename?: "realm_post_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "realm_post" */
export type RealmPostStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RealmPostStddevSampFields = {
  __typename?: "realm_post_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "realm_post" */
export type RealmPostStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "realm_post" */
export type RealmPostStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RealmPostStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RealmPostStreamCursorValueInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type RealmPostSumFields = {
  __typename?: "realm_post_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "realm_post" */
export type RealmPostSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type RealmPostVarPopFields = {
  __typename?: "realm_post_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "realm_post" */
export type RealmPostVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RealmPostVarSampFields = {
  __typename?: "realm_post_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "realm_post" */
export type RealmPostVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RealmPostVarianceFields = {
  __typename?: "realm_post_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "realm_post" */
export type RealmPostVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "realm_public" */
export type RealmPublic = {
  __typename?: "realm_public";
  admin_id?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  private?: Maybe<Scalars["Boolean"]["output"]>;
  /** An array relationship */
  threads: Array<Thread>;
  /** An aggregate relationship */
  threads_aggregate: ThreadAggregate;
  /** An array relationship */
  topics: Array<Topic>;
  /** An aggregate relationship */
  topics_aggregate: TopicAggregate;
  /** An array relationship */
  users: Array<RealmUserUnion>;
  /** An aggregate relationship */
  users_aggregate: RealmUserUnionAggregate;
};

/** columns and relationships of "realm_public" */
export type RealmPublicThreadsArgs = {
  distinct_on?: InputMaybe<Array<ThreadSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadOrderBy>>;
  where?: InputMaybe<ThreadBoolExp>;
};

/** columns and relationships of "realm_public" */
export type RealmPublicThreadsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ThreadSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadOrderBy>>;
  where?: InputMaybe<ThreadBoolExp>;
};

/** columns and relationships of "realm_public" */
export type RealmPublicTopicsArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

/** columns and relationships of "realm_public" */
export type RealmPublicTopicsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

/** columns and relationships of "realm_public" */
export type RealmPublicUsersArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

/** columns and relationships of "realm_public" */
export type RealmPublicUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

/** aggregated selection of "realm_public" */
export type RealmPublicAggregate = {
  __typename?: "realm_public_aggregate";
  aggregate?: Maybe<RealmPublicAggregateFields>;
  nodes: Array<RealmPublic>;
};

/** aggregate fields of "realm_public" */
export type RealmPublicAggregateFields = {
  __typename?: "realm_public_aggregate_fields";
  avg?: Maybe<RealmPublicAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<RealmPublicMaxFields>;
  min?: Maybe<RealmPublicMinFields>;
  stddev?: Maybe<RealmPublicStddevFields>;
  stddev_pop?: Maybe<RealmPublicStddevPopFields>;
  stddev_samp?: Maybe<RealmPublicStddevSampFields>;
  sum?: Maybe<RealmPublicSumFields>;
  var_pop?: Maybe<RealmPublicVarPopFields>;
  var_samp?: Maybe<RealmPublicVarSampFields>;
  variance?: Maybe<RealmPublicVarianceFields>;
};

/** aggregate fields of "realm_public" */
export type RealmPublicAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RealmPublicSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type RealmPublicAvgFields = {
  __typename?: "realm_public_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "realm_public". All fields are combined with a logical 'AND'. */
export type RealmPublicBoolExp = {
  _and?: InputMaybe<Array<RealmPublicBoolExp>>;
  _not?: InputMaybe<RealmPublicBoolExp>;
  _or?: InputMaybe<Array<RealmPublicBoolExp>>;
  admin_id?: InputMaybe<UuidComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  private?: InputMaybe<BooleanComparisonExp>;
  threads?: InputMaybe<ThreadBoolExp>;
  threads_aggregate?: InputMaybe<ThreadAggregateBoolExp>;
  topics?: InputMaybe<TopicBoolExp>;
  topics_aggregate?: InputMaybe<TopicAggregateBoolExp>;
  users?: InputMaybe<RealmUserUnionBoolExp>;
  users_aggregate?: InputMaybe<RealmUserUnionAggregateBoolExp>;
};

/** input type for incrementing numeric columns in table "realm_public" */
export type RealmPublicIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "realm_public" */
export type RealmPublicInsertInput = {
  admin_id?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  threads?: InputMaybe<ThreadArrRelInsertInput>;
  topics?: InputMaybe<TopicArrRelInsertInput>;
  users?: InputMaybe<RealmUserUnionArrRelInsertInput>;
};

/** aggregate max on columns */
export type RealmPublicMaxFields = {
  __typename?: "realm_public_max_fields";
  admin_id?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type RealmPublicMinFields = {
  __typename?: "realm_public_min_fields";
  admin_id?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "realm_public" */
export type RealmPublicMutationResponse = {
  __typename?: "realm_public_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<RealmPublic>;
};

/** input type for inserting object relation for remote table "realm_public" */
export type RealmPublicObjRelInsertInput = {
  data: RealmPublicInsertInput;
};

/** Ordering options when selecting data from "realm_public". */
export type RealmPublicOrderBy = {
  admin_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  private?: InputMaybe<OrderBy>;
  threads_aggregate?: InputMaybe<ThreadAggregateOrderBy>;
  topics_aggregate?: InputMaybe<TopicAggregateOrderBy>;
  users_aggregate?: InputMaybe<RealmUserUnionAggregateOrderBy>;
};

/** select columns of table "realm_public" */
export enum RealmPublicSelectColumn {
  /** column name */
  AdminId = "admin_id",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Private = "private",
}

/** input type for updating data in table "realm_public" */
export type RealmPublicSetInput = {
  admin_id?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type RealmPublicStddevFields = {
  __typename?: "realm_public_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type RealmPublicStddevPopFields = {
  __typename?: "realm_public_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type RealmPublicStddevSampFields = {
  __typename?: "realm_public_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "realm_public" */
export type RealmPublicStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RealmPublicStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RealmPublicStreamCursorValueInput = {
  admin_id?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type RealmPublicSumFields = {
  __typename?: "realm_public_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type RealmPublicUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RealmPublicIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RealmPublicSetInput>;
  /** filter the rows which have to be updated */
  where: RealmPublicBoolExp;
};

/** aggregate var_pop on columns */
export type RealmPublicVarPopFields = {
  __typename?: "realm_public_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type RealmPublicVarSampFields = {
  __typename?: "realm_public_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type RealmPublicVarianceFields = {
  __typename?: "realm_public_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** select columns of table "realm" */
export enum RealmSelectColumn {
  /** column name */
  AdminId = "admin_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  InvitationCode = "invitation_code",
  /** column name */
  Name = "name",
  /** column name */
  Private = "private",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "realm" */
export type RealmSetInput = {
  admin_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  invitation_code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type RealmStddevFields = {
  __typename?: "realm_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type RealmStddevPopFields = {
  __typename?: "realm_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type RealmStddevSampFields = {
  __typename?: "realm_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "realm" */
export type RealmStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RealmStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RealmStreamCursorValueInput = {
  admin_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  invitation_code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type RealmSumFields = {
  __typename?: "realm_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "realm" */
export enum RealmUpdateColumn {
  /** column name */
  AdminId = "admin_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  InvitationCode = "invitation_code",
  /** column name */
  Name = "name",
  /** column name */
  Private = "private",
  /** column name */
  UpdatedAt = "updated_at",
}

export type RealmUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RealmIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RealmSetInput>;
  /** filter the rows which have to be updated */
  where: RealmBoolExp;
};

/** columns and relationships of "realm_user" */
export type RealmUser = {
  __typename?: "realm_user";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  realm_id: Scalars["Int"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
  user_id: Scalars["uuid"]["output"];
  username: Scalars["String"]["output"];
};

/** aggregated selection of "realm_user" */
export type RealmUserAggregate = {
  __typename?: "realm_user_aggregate";
  aggregate?: Maybe<RealmUserAggregateFields>;
  nodes: Array<RealmUser>;
};

/** aggregate fields of "realm_user" */
export type RealmUserAggregateFields = {
  __typename?: "realm_user_aggregate_fields";
  avg?: Maybe<RealmUserAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<RealmUserMaxFields>;
  min?: Maybe<RealmUserMinFields>;
  stddev?: Maybe<RealmUserStddevFields>;
  stddev_pop?: Maybe<RealmUserStddevPopFields>;
  stddev_samp?: Maybe<RealmUserStddevSampFields>;
  sum?: Maybe<RealmUserSumFields>;
  var_pop?: Maybe<RealmUserVarPopFields>;
  var_samp?: Maybe<RealmUserVarSampFields>;
  variance?: Maybe<RealmUserVarianceFields>;
};

/** aggregate fields of "realm_user" */
export type RealmUserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RealmUserSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type RealmUserAvgFields = {
  __typename?: "realm_user_avg_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "realm_user". All fields are combined with a logical 'AND'. */
export type RealmUserBoolExp = {
  _and?: InputMaybe<Array<RealmUserBoolExp>>;
  _not?: InputMaybe<RealmUserBoolExp>;
  _or?: InputMaybe<Array<RealmUserBoolExp>>;
  avatar_url?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  realm_id?: InputMaybe<IntComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "realm_user" */
export enum RealmUserConstraint {
  /** unique or primary key constraint on columns "realm_id", "user_id" */
  RealmUserPkey = "realm_user_pkey",
  /** unique or primary key constraint on columns "username" */
  RealmUserUsernameKey = "realm_user_username_key",
}

/** input type for incrementing numeric columns in table "realm_user" */
export type RealmUserIncInput = {
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "realm_user" */
export type RealmUserInsertInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type RealmUserMaxFields = {
  __typename?: "realm_user_max_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type RealmUserMinFields = {
  __typename?: "realm_user_min_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "realm_user" */
export type RealmUserMutationResponse = {
  __typename?: "realm_user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<RealmUser>;
};

/** on_conflict condition type for table "realm_user" */
export type RealmUserOnConflict = {
  constraint: RealmUserConstraint;
  update_columns?: Array<RealmUserUpdateColumn>;
  where?: InputMaybe<RealmUserBoolExp>;
};

/** Ordering options when selecting data from "realm_user". */
export type RealmUserOrderBy = {
  avatar_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: realm_user */
export type RealmUserPkColumnsInput = {
  realm_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** select columns of table "realm_user" */
export enum RealmUserSelectColumn {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  Status = "status",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "realm_user" */
export type RealmUserSetInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type RealmUserStddevFields = {
  __typename?: "realm_user_stddev_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type RealmUserStddevPopFields = {
  __typename?: "realm_user_stddev_pop_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type RealmUserStddevSampFields = {
  __typename?: "realm_user_stddev_samp_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "realm_user" */
export type RealmUserStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RealmUserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RealmUserStreamCursorValueInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type RealmUserSumFields = {
  __typename?: "realm_user_sum_fields";
  realm_id?: Maybe<Scalars["Int"]["output"]>;
};

/** columns and relationships of "realm_user_union" */
export type RealmUserUnion = {
  __typename?: "realm_user_union";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  /** An object relationship */
  realm?: Maybe<RealmPublic>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "realm_user_union" */
export type RealmUserUnionAggregate = {
  __typename?: "realm_user_union_aggregate";
  aggregate?: Maybe<RealmUserUnionAggregateFields>;
  nodes: Array<RealmUserUnion>;
};

export type RealmUserUnionAggregateBoolExp = {
  count?: InputMaybe<RealmUserUnionAggregateBoolExpCount>;
};

export type RealmUserUnionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RealmUserUnionBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "realm_user_union" */
export type RealmUserUnionAggregateFields = {
  __typename?: "realm_user_union_aggregate_fields";
  avg?: Maybe<RealmUserUnionAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<RealmUserUnionMaxFields>;
  min?: Maybe<RealmUserUnionMinFields>;
  stddev?: Maybe<RealmUserUnionStddevFields>;
  stddev_pop?: Maybe<RealmUserUnionStddevPopFields>;
  stddev_samp?: Maybe<RealmUserUnionStddevSampFields>;
  sum?: Maybe<RealmUserUnionSumFields>;
  var_pop?: Maybe<RealmUserUnionVarPopFields>;
  var_samp?: Maybe<RealmUserUnionVarSampFields>;
  variance?: Maybe<RealmUserUnionVarianceFields>;
};

/** aggregate fields of "realm_user_union" */
export type RealmUserUnionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "realm_user_union" */
export type RealmUserUnionAggregateOrderBy = {
  avg?: InputMaybe<RealmUserUnionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RealmUserUnionMaxOrderBy>;
  min?: InputMaybe<RealmUserUnionMinOrderBy>;
  stddev?: InputMaybe<RealmUserUnionStddevOrderBy>;
  stddev_pop?: InputMaybe<RealmUserUnionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<RealmUserUnionStddevSampOrderBy>;
  sum?: InputMaybe<RealmUserUnionSumOrderBy>;
  var_pop?: InputMaybe<RealmUserUnionVarPopOrderBy>;
  var_samp?: InputMaybe<RealmUserUnionVarSampOrderBy>;
  variance?: InputMaybe<RealmUserUnionVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "realm_user_union" */
export type RealmUserUnionArrRelInsertInput = {
  data: Array<RealmUserUnionInsertInput>;
};

/** aggregate avg on columns */
export type RealmUserUnionAvgFields = {
  __typename?: "realm_user_union_avg_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "realm_user_union" */
export type RealmUserUnionAvgOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "realm_user_union". All fields are combined with a logical 'AND'. */
export type RealmUserUnionBoolExp = {
  _and?: InputMaybe<Array<RealmUserUnionBoolExp>>;
  _not?: InputMaybe<RealmUserUnionBoolExp>;
  _or?: InputMaybe<Array<RealmUserUnionBoolExp>>;
  avatar_url?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  realm?: InputMaybe<RealmPublicBoolExp>;
  realm_id?: InputMaybe<IntComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** input type for inserting data into table "realm_user_union" */
export type RealmUserUnionInsertInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  realm?: InputMaybe<RealmPublicObjRelInsertInput>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type RealmUserUnionMaxFields = {
  __typename?: "realm_user_union_max_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "realm_user_union" */
export type RealmUserUnionMaxOrderBy = {
  avatar_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RealmUserUnionMinFields = {
  __typename?: "realm_user_union_min_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "realm_user_union" */
export type RealmUserUnionMinOrderBy = {
  avatar_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "realm_user_union" */
export type RealmUserUnionObjRelInsertInput = {
  data: RealmUserUnionInsertInput;
};

/** Ordering options when selecting data from "realm_user_union". */
export type RealmUserUnionOrderBy = {
  avatar_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  realm?: InputMaybe<RealmPublicOrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** select columns of table "realm_user_union" */
export enum RealmUserUnionSelectColumn {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  Status = "status",
  /** column name */
  UserId = "user_id",
  /** column name */
  Username = "username",
}

/** aggregate stddev on columns */
export type RealmUserUnionStddevFields = {
  __typename?: "realm_user_union_stddev_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "realm_user_union" */
export type RealmUserUnionStddevOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RealmUserUnionStddevPopFields = {
  __typename?: "realm_user_union_stddev_pop_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "realm_user_union" */
export type RealmUserUnionStddevPopOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RealmUserUnionStddevSampFields = {
  __typename?: "realm_user_union_stddev_samp_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "realm_user_union" */
export type RealmUserUnionStddevSampOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "realm_user_union" */
export type RealmUserUnionStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RealmUserUnionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RealmUserUnionStreamCursorValueInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type RealmUserUnionSumFields = {
  __typename?: "realm_user_union_sum_fields";
  realm_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "realm_user_union" */
export type RealmUserUnionSumOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate var_pop on columns */
export type RealmUserUnionVarPopFields = {
  __typename?: "realm_user_union_var_pop_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "realm_user_union" */
export type RealmUserUnionVarPopOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RealmUserUnionVarSampFields = {
  __typename?: "realm_user_union_var_samp_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "realm_user_union" */
export type RealmUserUnionVarSampOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RealmUserUnionVarianceFields = {
  __typename?: "realm_user_union_variance_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "realm_user_union" */
export type RealmUserUnionVarianceOrderBy = {
  realm_id?: InputMaybe<OrderBy>;
};

/** update columns of table "realm_user" */
export enum RealmUserUpdateColumn {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  Status = "status",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
  /** column name */
  Username = "username",
}

export type RealmUserUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RealmUserIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RealmUserSetInput>;
  /** filter the rows which have to be updated */
  where: RealmUserBoolExp;
};

/** aggregate var_pop on columns */
export type RealmUserVarPopFields = {
  __typename?: "realm_user_var_pop_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type RealmUserVarSampFields = {
  __typename?: "realm_user_var_samp_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type RealmUserVarianceFields = {
  __typename?: "realm_user_variance_fields";
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_pop on columns */
export type RealmVarPopFields = {
  __typename?: "realm_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type RealmVarSampFields = {
  __typename?: "realm_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type RealmVarianceFields = {
  __typename?: "realm_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "session" */
export type Session = {
  __typename?: "session";
  active_at: Scalars["timestamptz"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "session" */
export type SessionAggregate = {
  __typename?: "session_aggregate";
  aggregate?: Maybe<SessionAggregateFields>;
  nodes: Array<Session>;
};

/** aggregate fields of "session" */
export type SessionAggregateFields = {
  __typename?: "session_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<SessionMaxFields>;
  min?: Maybe<SessionMinFields>;
};

/** aggregate fields of "session" */
export type SessionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SessionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "session". All fields are combined with a logical 'AND'. */
export type SessionBoolExp = {
  _and?: InputMaybe<Array<SessionBoolExp>>;
  _not?: InputMaybe<SessionBoolExp>;
  _or?: InputMaybe<Array<SessionBoolExp>>;
  active_at?: InputMaybe<TimestamptzComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "session" */
export enum SessionConstraint {
  /** unique or primary key constraint on columns "id" */
  SessionPkey = "session_pkey",
}

/** input type for inserting data into table "session" */
export type SessionInsertInput = {
  active_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type SessionMaxFields = {
  __typename?: "session_max_fields";
  active_at?: Maybe<Scalars["timestamptz"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type SessionMinFields = {
  __typename?: "session_min_fields";
  active_at?: Maybe<Scalars["timestamptz"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "session" */
export type SessionMutationResponse = {
  __typename?: "session_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Session>;
};

/** on_conflict condition type for table "session" */
export type SessionOnConflict = {
  constraint: SessionConstraint;
  update_columns?: Array<SessionUpdateColumn>;
  where?: InputMaybe<SessionBoolExp>;
};

/** Ordering options when selecting data from "session". */
export type SessionOrderBy = {
  active_at?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: session */
export type SessionPkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "session" */
export enum SessionSelectColumn {
  /** column name */
  ActiveAt = "active_at",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "session" */
export type SessionSetInput = {
  active_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "session" */
export type SessionStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: SessionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SessionStreamCursorValueInput = {
  active_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "session" */
export enum SessionUpdateColumn {
  /** column name */
  ActiveAt = "active_at",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "user_id",
}

export type SessionUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SessionSetInput>;
  /** filter the rows which have to be updated */
  where: SessionBoolExp;
};

export type SubscriptionRoot = {
  __typename?: "subscription_root";
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: CourseAggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "course_review" */
  course_review: Array<CourseReview>;
  /** fetch aggregated fields from the table: "course_review" */
  course_review_aggregate: CourseReviewAggregate;
  /** fetch data from the table: "course_review" using primary key columns */
  course_review_by_pk?: Maybe<CourseReview>;
  /** fetch data from the table in a streaming manner: "course_review" */
  course_review_stream: Array<CourseReview>;
  /** fetch data from the table in a streaming manner: "course" */
  course_stream: Array<Course>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: MessageAggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: NotificationAggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table in a streaming manner: "notification" */
  notification_stream: Array<Notification>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: PostAggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_reaction" */
  post_reaction: Array<PostReaction>;
  /** fetch aggregated fields from the table: "post_reaction" */
  post_reaction_aggregate: PostReactionAggregate;
  /** fetch data from the table: "post_reaction" using primary key columns */
  post_reaction_by_pk?: Maybe<PostReaction>;
  /** fetch data from the table in a streaming manner: "post_reaction" */
  post_reaction_stream: Array<PostReaction>;
  /** fetch data from the table in a streaming manner: "post" */
  post_stream: Array<Post>;
  /** fetch data from the table: "reaction_emoji" */
  reaction_emoji: Array<ReactionEmoji>;
  /** fetch aggregated fields from the table: "reaction_emoji" */
  reaction_emoji_aggregate: ReactionEmojiAggregate;
  /** fetch data from the table: "reaction_emoji" using primary key columns */
  reaction_emoji_by_pk?: Maybe<ReactionEmoji>;
  /** fetch data from the table in a streaming manner: "reaction_emoji" */
  reaction_emoji_stream: Array<ReactionEmoji>;
  /** fetch data from the table: "realm" */
  realm: Array<Realm>;
  /** fetch aggregated fields from the table: "realm" */
  realm_aggregate: RealmAggregate;
  /** fetch data from the table: "realm" using primary key columns */
  realm_by_pk?: Maybe<Realm>;
  /** fetch data from the table: "realm_post" */
  realm_post: Array<RealmPost>;
  /** fetch aggregated fields from the table: "realm_post" */
  realm_post_aggregate: RealmPostAggregate;
  /** fetch data from the table in a streaming manner: "realm_post" */
  realm_post_stream: Array<RealmPost>;
  /** fetch data from the table: "realm_public" */
  realm_public: Array<RealmPublic>;
  /** fetch aggregated fields from the table: "realm_public" */
  realm_public_aggregate: RealmPublicAggregate;
  /** fetch data from the table in a streaming manner: "realm_public" */
  realm_public_stream: Array<RealmPublic>;
  /** fetch data from the table in a streaming manner: "realm" */
  realm_stream: Array<Realm>;
  /** fetch data from the table: "realm_user" */
  realm_user: Array<RealmUser>;
  /** fetch aggregated fields from the table: "realm_user" */
  realm_user_aggregate: RealmUserAggregate;
  /** fetch data from the table: "realm_user" using primary key columns */
  realm_user_by_pk?: Maybe<RealmUser>;
  /** fetch data from the table in a streaming manner: "realm_user" */
  realm_user_stream: Array<RealmUser>;
  /** fetch data from the table: "realm_user_union" */
  realm_user_union: Array<RealmUserUnion>;
  /** fetch aggregated fields from the table: "realm_user_union" */
  realm_user_union_aggregate: RealmUserUnionAggregate;
  /** fetch data from the table in a streaming manner: "realm_user_union" */
  realm_user_union_stream: Array<RealmUserUnion>;
  /** fetch data from the table: "session" */
  session: Array<Session>;
  /** fetch aggregated fields from the table: "session" */
  session_aggregate: SessionAggregate;
  /** fetch data from the table: "session" using primary key columns */
  session_by_pk?: Maybe<Session>;
  /** fetch data from the table in a streaming manner: "session" */
  session_stream: Array<Session>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacher_aggregate: TeacherAggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacher_by_pk?: Maybe<Teacher>;
  /** fetch data from the table in a streaming manner: "teacher" */
  teacher_stream: Array<Teacher>;
  /** fetch data from the table: "thread" */
  thread: Array<Thread>;
  /** fetch aggregated fields from the table: "thread" */
  thread_aggregate: ThreadAggregate;
  /** fetch data from the table: "thread" using primary key columns */
  thread_by_pk?: Maybe<Thread>;
  /** fetch data from the table: "thread_reaction" */
  thread_reaction: Array<ThreadReaction>;
  /** fetch aggregated fields from the table: "thread_reaction" */
  thread_reaction_aggregate: ThreadReactionAggregate;
  /** fetch data from the table: "thread_reaction" using primary key columns */
  thread_reaction_by_pk?: Maybe<ThreadReaction>;
  /** fetch data from the table in a streaming manner: "thread_reaction" */
  thread_reaction_stream: Array<ThreadReaction>;
  /** fetch data from the table in a streaming manner: "thread" */
  thread_stream: Array<Thread>;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: TopicAggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
  /** fetch data from the table in a streaming manner: "topic" */
  topic_stream: Array<Topic>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_public" */
  user_public: Array<UserPublic>;
  /** fetch aggregated fields from the table: "user_public" */
  user_public_aggregate: UserPublicAggregate;
  /** fetch data from the table in a streaming manner: "user_public" */
  user_public_stream: Array<UserPublic>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};

export type SubscriptionRootCourseArgs = {
  distinct_on?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type SubscriptionRootCourseAggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type SubscriptionRootCourseByPkArgs = {
  id: Scalars["String"]["input"];
};

export type SubscriptionRootCourseReviewArgs = {
  distinct_on?: InputMaybe<Array<CourseReviewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseReviewOrderBy>>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

export type SubscriptionRootCourseReviewAggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseReviewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseReviewOrderBy>>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

export type SubscriptionRootCourseReviewByPkArgs = {
  course_id: Scalars["String"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type SubscriptionRootCourseReviewStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<CourseReviewStreamCursorInput>>;
  where?: InputMaybe<CourseReviewBoolExp>;
};

export type SubscriptionRootCourseStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<CourseStreamCursorInput>>;
  where?: InputMaybe<CourseBoolExp>;
};

export type SubscriptionRootMessageArgs = {
  distinct_on?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};

export type SubscriptionRootMessageAggregateArgs = {
  distinct_on?: InputMaybe<Array<MessageSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<MessageOrderBy>>;
  where?: InputMaybe<MessageBoolExp>;
};

export type SubscriptionRootMessageByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootMessageStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<MessageStreamCursorInput>>;
  where?: InputMaybe<MessageBoolExp>;
};

export type SubscriptionRootNotificationArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};

export type SubscriptionRootNotificationAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};

export type SubscriptionRootNotificationByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootNotificationStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<NotificationStreamCursorInput>>;
  where?: InputMaybe<NotificationBoolExp>;
};

export type SubscriptionRootPostArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

export type SubscriptionRootPostAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostOrderBy>>;
  where?: InputMaybe<PostBoolExp>;
};

export type SubscriptionRootPostByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type SubscriptionRootPostReactionArgs = {
  distinct_on?: InputMaybe<Array<PostReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostReactionOrderBy>>;
  where?: InputMaybe<PostReactionBoolExp>;
};

export type SubscriptionRootPostReactionAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<PostReactionOrderBy>>;
  where?: InputMaybe<PostReactionBoolExp>;
};

export type SubscriptionRootPostReactionByPkArgs = {
  name: ReactionEmojiEnum;
  post_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type SubscriptionRootPostReactionStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PostReactionStreamCursorInput>>;
  where?: InputMaybe<PostReactionBoolExp>;
};

export type SubscriptionRootPostStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<PostStreamCursorInput>>;
  where?: InputMaybe<PostBoolExp>;
};

export type SubscriptionRootReactionEmojiArgs = {
  distinct_on?: InputMaybe<Array<ReactionEmojiSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ReactionEmojiOrderBy>>;
  where?: InputMaybe<ReactionEmojiBoolExp>;
};

export type SubscriptionRootReactionEmojiAggregateArgs = {
  distinct_on?: InputMaybe<Array<ReactionEmojiSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ReactionEmojiOrderBy>>;
  where?: InputMaybe<ReactionEmojiBoolExp>;
};

export type SubscriptionRootReactionEmojiByPkArgs = {
  name: Scalars["String"]["input"];
};

export type SubscriptionRootReactionEmojiStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ReactionEmojiStreamCursorInput>>;
  where?: InputMaybe<ReactionEmojiBoolExp>;
};

export type SubscriptionRootRealmArgs = {
  distinct_on?: InputMaybe<Array<RealmSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmOrderBy>>;
  where?: InputMaybe<RealmBoolExp>;
};

export type SubscriptionRootRealmAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmOrderBy>>;
  where?: InputMaybe<RealmBoolExp>;
};

export type SubscriptionRootRealmByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type SubscriptionRootRealmPostArgs = {
  distinct_on?: InputMaybe<Array<RealmPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPostOrderBy>>;
  where?: InputMaybe<RealmPostBoolExp>;
};

export type SubscriptionRootRealmPostAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPostOrderBy>>;
  where?: InputMaybe<RealmPostBoolExp>;
};

export type SubscriptionRootRealmPostStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<RealmPostStreamCursorInput>>;
  where?: InputMaybe<RealmPostBoolExp>;
};

export type SubscriptionRootRealmPublicArgs = {
  distinct_on?: InputMaybe<Array<RealmPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPublicOrderBy>>;
  where?: InputMaybe<RealmPublicBoolExp>;
};

export type SubscriptionRootRealmPublicAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPublicOrderBy>>;
  where?: InputMaybe<RealmPublicBoolExp>;
};

export type SubscriptionRootRealmPublicStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<RealmPublicStreamCursorInput>>;
  where?: InputMaybe<RealmPublicBoolExp>;
};

export type SubscriptionRootRealmStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<RealmStreamCursorInput>>;
  where?: InputMaybe<RealmBoolExp>;
};

export type SubscriptionRootRealmUserArgs = {
  distinct_on?: InputMaybe<Array<RealmUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserOrderBy>>;
  where?: InputMaybe<RealmUserBoolExp>;
};

export type SubscriptionRootRealmUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserOrderBy>>;
  where?: InputMaybe<RealmUserBoolExp>;
};

export type SubscriptionRootRealmUserByPkArgs = {
  realm_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type SubscriptionRootRealmUserStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<RealmUserStreamCursorInput>>;
  where?: InputMaybe<RealmUserBoolExp>;
};

export type SubscriptionRootRealmUserUnionArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

export type SubscriptionRootRealmUserUnionAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

export type SubscriptionRootRealmUserUnionStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<RealmUserUnionStreamCursorInput>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

export type SubscriptionRootSessionArgs = {
  distinct_on?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};

export type SubscriptionRootSessionAggregateArgs = {
  distinct_on?: InputMaybe<Array<SessionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<SessionOrderBy>>;
  where?: InputMaybe<SessionBoolExp>;
};

export type SubscriptionRootSessionByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootSessionStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<SessionStreamCursorInput>>;
  where?: InputMaybe<SessionBoolExp>;
};

export type SubscriptionRootTeacherArgs = {
  distinct_on?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};

export type SubscriptionRootTeacherAggregateArgs = {
  distinct_on?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};

export type SubscriptionRootTeacherByPkArgs = {
  id: Scalars["String"]["input"];
};

export type SubscriptionRootTeacherStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<TeacherStreamCursorInput>>;
  where?: InputMaybe<TeacherBoolExp>;
};

export type SubscriptionRootThreadArgs = {
  distinct_on?: InputMaybe<Array<ThreadSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadOrderBy>>;
  where?: InputMaybe<ThreadBoolExp>;
};

export type SubscriptionRootThreadAggregateArgs = {
  distinct_on?: InputMaybe<Array<ThreadSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadOrderBy>>;
  where?: InputMaybe<ThreadBoolExp>;
};

export type SubscriptionRootThreadByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type SubscriptionRootThreadReactionArgs = {
  distinct_on?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadReactionOrderBy>>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

export type SubscriptionRootThreadReactionAggregateArgs = {
  distinct_on?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadReactionOrderBy>>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

export type SubscriptionRootThreadReactionByPkArgs = {
  name: ReactionEmojiEnum;
  thread_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type SubscriptionRootThreadReactionStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ThreadReactionStreamCursorInput>>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

export type SubscriptionRootThreadStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<ThreadStreamCursorInput>>;
  where?: InputMaybe<ThreadBoolExp>;
};

export type SubscriptionRootTopicArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

export type SubscriptionRootTopicAggregateArgs = {
  distinct_on?: InputMaybe<Array<TopicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<TopicOrderBy>>;
  where?: InputMaybe<TopicBoolExp>;
};

export type SubscriptionRootTopicByPkArgs = {
  name: Scalars["String"]["input"];
  realm_id: Scalars["Int"]["input"];
};

export type SubscriptionRootTopicStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<TopicStreamCursorInput>>;
  where?: InputMaybe<TopicBoolExp>;
};

export type SubscriptionRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type SubscriptionRootUserByPkArgs = {
  id: Scalars["uuid"]["input"];
};

export type SubscriptionRootUserPublicArgs = {
  distinct_on?: InputMaybe<Array<UserPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserPublicOrderBy>>;
  where?: InputMaybe<UserPublicBoolExp>;
};

export type SubscriptionRootUserPublicAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserPublicSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<UserPublicOrderBy>>;
  where?: InputMaybe<UserPublicBoolExp>;
};

export type SubscriptionRootUserPublicStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserPublicStreamCursorInput>>;
  where?: InputMaybe<UserPublicBoolExp>;
};

export type SubscriptionRootUserStreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};

/** columns and relationships of "teacher" */
export type Teacher = {
  __typename?: "teacher";
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  courses_aggregate: CourseAggregate;
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** columns and relationships of "teacher" */
export type TeacherCoursesArgs = {
  distinct_on?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

/** columns and relationships of "teacher" */
export type TeacherCoursesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

/** aggregated selection of "teacher" */
export type TeacherAggregate = {
  __typename?: "teacher_aggregate";
  aggregate?: Maybe<TeacherAggregateFields>;
  nodes: Array<Teacher>;
};

/** aggregate fields of "teacher" */
export type TeacherAggregateFields = {
  __typename?: "teacher_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<TeacherMaxFields>;
  min?: Maybe<TeacherMinFields>;
};

/** aggregate fields of "teacher" */
export type TeacherAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TeacherSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "teacher". All fields are combined with a logical 'AND'. */
export type TeacherBoolExp = {
  _and?: InputMaybe<Array<TeacherBoolExp>>;
  _not?: InputMaybe<TeacherBoolExp>;
  _or?: InputMaybe<Array<TeacherBoolExp>>;
  courses?: InputMaybe<CourseBoolExp>;
  courses_aggregate?: InputMaybe<CourseAggregateBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "teacher" */
export enum TeacherConstraint {
  /** unique or primary key constraint on columns "id" */
  TeacherPkey = "teacher_pkey",
}

/** input type for inserting data into table "teacher" */
export type TeacherInsertInput = {
  courses?: InputMaybe<CourseArrRelInsertInput>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type TeacherMaxFields = {
  __typename?: "teacher_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type TeacherMinFields = {
  __typename?: "teacher_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "teacher" */
export type TeacherMutationResponse = {
  __typename?: "teacher_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Teacher>;
};

/** input type for inserting object relation for remote table "teacher" */
export type TeacherObjRelInsertInput = {
  data: TeacherInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<TeacherOnConflict>;
};

/** on_conflict condition type for table "teacher" */
export type TeacherOnConflict = {
  constraint: TeacherConstraint;
  update_columns?: Array<TeacherUpdateColumn>;
  where?: InputMaybe<TeacherBoolExp>;
};

/** Ordering options when selecting data from "teacher". */
export type TeacherOrderBy = {
  courses_aggregate?: InputMaybe<CourseAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: teacher */
export type TeacherPkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** select columns of table "teacher" */
export enum TeacherSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "teacher" */
export type TeacherSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "teacher" */
export type TeacherStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TeacherStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TeacherStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "teacher" */
export enum TeacherUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
}

export type TeacherUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TeacherSetInput>;
  /** filter the rows which have to be updated */
  where: TeacherBoolExp;
};

/** columns and relationships of "thread" */
export type Thread = {
  __typename?: "thread";
  content: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["Int"]["output"];
  /** An array relationship */
  posts: Array<RealmPost>;
  /** An aggregate relationship */
  posts_aggregate: RealmPostAggregate;
  /** An array relationship */
  reactions: Array<ThreadReaction>;
  /** An aggregate relationship */
  reactions_aggregate: ThreadReactionAggregate;
  /** An object relationship */
  realm?: Maybe<RealmPublic>;
  realm_id: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  /** An object relationship */
  topic?: Maybe<Topic>;
  topic_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user?: Maybe<RealmUserUnion>;
  user_id: Scalars["uuid"]["output"];
};

/** columns and relationships of "thread" */
export type ThreadPostsArgs = {
  distinct_on?: InputMaybe<Array<RealmPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPostOrderBy>>;
  where?: InputMaybe<RealmPostBoolExp>;
};

/** columns and relationships of "thread" */
export type ThreadPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmPostSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmPostOrderBy>>;
  where?: InputMaybe<RealmPostBoolExp>;
};

/** columns and relationships of "thread" */
export type ThreadReactionsArgs = {
  distinct_on?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadReactionOrderBy>>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

/** columns and relationships of "thread" */
export type ThreadReactionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<ThreadReactionOrderBy>>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

/** aggregated selection of "thread" */
export type ThreadAggregate = {
  __typename?: "thread_aggregate";
  aggregate?: Maybe<ThreadAggregateFields>;
  nodes: Array<Thread>;
};

export type ThreadAggregateBoolExp = {
  count?: InputMaybe<ThreadAggregateBoolExpCount>;
};

export type ThreadAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ThreadSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<ThreadBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "thread" */
export type ThreadAggregateFields = {
  __typename?: "thread_aggregate_fields";
  avg?: Maybe<ThreadAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<ThreadMaxFields>;
  min?: Maybe<ThreadMinFields>;
  stddev?: Maybe<ThreadStddevFields>;
  stddev_pop?: Maybe<ThreadStddevPopFields>;
  stddev_samp?: Maybe<ThreadStddevSampFields>;
  sum?: Maybe<ThreadSumFields>;
  var_pop?: Maybe<ThreadVarPopFields>;
  var_samp?: Maybe<ThreadVarSampFields>;
  variance?: Maybe<ThreadVarianceFields>;
};

/** aggregate fields of "thread" */
export type ThreadAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ThreadSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "thread" */
export type ThreadAggregateOrderBy = {
  avg?: InputMaybe<ThreadAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ThreadMaxOrderBy>;
  min?: InputMaybe<ThreadMinOrderBy>;
  stddev?: InputMaybe<ThreadStddevOrderBy>;
  stddev_pop?: InputMaybe<ThreadStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ThreadStddevSampOrderBy>;
  sum?: InputMaybe<ThreadSumOrderBy>;
  var_pop?: InputMaybe<ThreadVarPopOrderBy>;
  var_samp?: InputMaybe<ThreadVarSampOrderBy>;
  variance?: InputMaybe<ThreadVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "thread" */
export type ThreadArrRelInsertInput = {
  data: Array<ThreadInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ThreadOnConflict>;
};

/** aggregate avg on columns */
export type ThreadAvgFields = {
  __typename?: "thread_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  topic_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "thread" */
export type ThreadAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "thread". All fields are combined with a logical 'AND'. */
export type ThreadBoolExp = {
  _and?: InputMaybe<Array<ThreadBoolExp>>;
  _not?: InputMaybe<ThreadBoolExp>;
  _or?: InputMaybe<Array<ThreadBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  posts?: InputMaybe<RealmPostBoolExp>;
  posts_aggregate?: InputMaybe<RealmPostAggregateBoolExp>;
  reactions?: InputMaybe<ThreadReactionBoolExp>;
  reactions_aggregate?: InputMaybe<ThreadReactionAggregateBoolExp>;
  realm?: InputMaybe<RealmPublicBoolExp>;
  realm_id?: InputMaybe<IntComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  topic?: InputMaybe<TopicBoolExp>;
  topic_id?: InputMaybe<IntComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<RealmUserUnionBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "thread" */
export enum ThreadConstraint {
  /** unique or primary key constraint on columns "id" */
  ThreadPkey = "thread_pkey",
}

/** input type for incrementing numeric columns in table "thread" */
export type ThreadIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  topic_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "thread" */
export type ThreadInsertInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  posts?: InputMaybe<RealmPostArrRelInsertInput>;
  reactions?: InputMaybe<ThreadReactionArrRelInsertInput>;
  realm?: InputMaybe<RealmPublicObjRelInsertInput>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  topic?: InputMaybe<TopicObjRelInsertInput>;
  topic_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<RealmUserUnionObjRelInsertInput>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type ThreadMaxFields = {
  __typename?: "thread_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  topic_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "thread" */
export type ThreadMaxOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ThreadMinFields = {
  __typename?: "thread_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  topic_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "thread" */
export type ThreadMinOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "thread" */
export type ThreadMutationResponse = {
  __typename?: "thread_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Thread>;
};

/** input type for inserting object relation for remote table "thread" */
export type ThreadObjRelInsertInput = {
  data: ThreadInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ThreadOnConflict>;
};

/** on_conflict condition type for table "thread" */
export type ThreadOnConflict = {
  constraint: ThreadConstraint;
  update_columns?: Array<ThreadUpdateColumn>;
  where?: InputMaybe<ThreadBoolExp>;
};

/** Ordering options when selecting data from "thread". */
export type ThreadOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  posts_aggregate?: InputMaybe<RealmPostAggregateOrderBy>;
  reactions_aggregate?: InputMaybe<ThreadReactionAggregateOrderBy>;
  realm?: InputMaybe<RealmPublicOrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  topic?: InputMaybe<TopicOrderBy>;
  topic_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<RealmUserUnionOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: thread */
export type ThreadPkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** columns and relationships of "thread_reaction" */
export type ThreadReaction = {
  __typename?: "thread_reaction";
  created_at: Scalars["timestamptz"]["output"];
  name: ReactionEmojiEnum;
  /** An object relationship */
  thread: Thread;
  thread_id: Scalars["Int"]["output"];
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "thread_reaction" */
export type ThreadReactionAggregate = {
  __typename?: "thread_reaction_aggregate";
  aggregate?: Maybe<ThreadReactionAggregateFields>;
  nodes: Array<ThreadReaction>;
};

export type ThreadReactionAggregateBoolExp = {
  count?: InputMaybe<ThreadReactionAggregateBoolExpCount>;
};

export type ThreadReactionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<ThreadReactionBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "thread_reaction" */
export type ThreadReactionAggregateFields = {
  __typename?: "thread_reaction_aggregate_fields";
  avg?: Maybe<ThreadReactionAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<ThreadReactionMaxFields>;
  min?: Maybe<ThreadReactionMinFields>;
  stddev?: Maybe<ThreadReactionStddevFields>;
  stddev_pop?: Maybe<ThreadReactionStddevPopFields>;
  stddev_samp?: Maybe<ThreadReactionStddevSampFields>;
  sum?: Maybe<ThreadReactionSumFields>;
  var_pop?: Maybe<ThreadReactionVarPopFields>;
  var_samp?: Maybe<ThreadReactionVarSampFields>;
  variance?: Maybe<ThreadReactionVarianceFields>;
};

/** aggregate fields of "thread_reaction" */
export type ThreadReactionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ThreadReactionSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "thread_reaction" */
export type ThreadReactionAggregateOrderBy = {
  avg?: InputMaybe<ThreadReactionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ThreadReactionMaxOrderBy>;
  min?: InputMaybe<ThreadReactionMinOrderBy>;
  stddev?: InputMaybe<ThreadReactionStddevOrderBy>;
  stddev_pop?: InputMaybe<ThreadReactionStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ThreadReactionStddevSampOrderBy>;
  sum?: InputMaybe<ThreadReactionSumOrderBy>;
  var_pop?: InputMaybe<ThreadReactionVarPopOrderBy>;
  var_samp?: InputMaybe<ThreadReactionVarSampOrderBy>;
  variance?: InputMaybe<ThreadReactionVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "thread_reaction" */
export type ThreadReactionArrRelInsertInput = {
  data: Array<ThreadReactionInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ThreadReactionOnConflict>;
};

/** aggregate avg on columns */
export type ThreadReactionAvgFields = {
  __typename?: "thread_reaction_avg_fields";
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "thread_reaction" */
export type ThreadReactionAvgOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "thread_reaction". All fields are combined with a logical 'AND'. */
export type ThreadReactionBoolExp = {
  _and?: InputMaybe<Array<ThreadReactionBoolExp>>;
  _not?: InputMaybe<ThreadReactionBoolExp>;
  _or?: InputMaybe<Array<ThreadReactionBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<ReactionEmojiEnumComparisonExp>;
  thread?: InputMaybe<ThreadBoolExp>;
  thread_id?: InputMaybe<IntComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "thread_reaction" */
export enum ThreadReactionConstraint {
  /** unique or primary key constraint on columns "name", "user_id", "thread_id" */
  ThreadReactionPkey = "thread_reaction_pkey",
}

/** input type for incrementing numeric columns in table "thread_reaction" */
export type ThreadReactionIncInput = {
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "thread_reaction" */
export type ThreadReactionInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  name?: InputMaybe<ReactionEmojiEnum>;
  thread?: InputMaybe<ThreadObjRelInsertInput>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type ThreadReactionMaxFields = {
  __typename?: "thread_reaction_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "thread_reaction" */
export type ThreadReactionMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ThreadReactionMinFields = {
  __typename?: "thread_reaction_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  thread_id?: Maybe<Scalars["Int"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "thread_reaction" */
export type ThreadReactionMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "thread_reaction" */
export type ThreadReactionMutationResponse = {
  __typename?: "thread_reaction_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<ThreadReaction>;
};

/** on_conflict condition type for table "thread_reaction" */
export type ThreadReactionOnConflict = {
  constraint: ThreadReactionConstraint;
  update_columns?: Array<ThreadReactionUpdateColumn>;
  where?: InputMaybe<ThreadReactionBoolExp>;
};

/** Ordering options when selecting data from "thread_reaction". */
export type ThreadReactionOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  thread?: InputMaybe<ThreadOrderBy>;
  thread_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: thread_reaction */
export type ThreadReactionPkColumnsInput = {
  name: ReactionEmojiEnum;
  thread_id: Scalars["Int"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** select columns of table "thread_reaction" */
export enum ThreadReactionSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Name = "name",
  /** column name */
  ThreadId = "thread_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "thread_reaction" */
export type ThreadReactionSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  name?: InputMaybe<ReactionEmojiEnum>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type ThreadReactionStddevFields = {
  __typename?: "thread_reaction_stddev_fields";
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "thread_reaction" */
export type ThreadReactionStddevOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ThreadReactionStddevPopFields = {
  __typename?: "thread_reaction_stddev_pop_fields";
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "thread_reaction" */
export type ThreadReactionStddevPopOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ThreadReactionStddevSampFields = {
  __typename?: "thread_reaction_stddev_samp_fields";
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "thread_reaction" */
export type ThreadReactionStddevSampOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "thread_reaction" */
export type ThreadReactionStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ThreadReactionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ThreadReactionStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  name?: InputMaybe<ReactionEmojiEnum>;
  thread_id?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type ThreadReactionSumFields = {
  __typename?: "thread_reaction_sum_fields";
  thread_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "thread_reaction" */
export type ThreadReactionSumOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** update columns of table "thread_reaction" */
export enum ThreadReactionUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Name = "name",
  /** column name */
  ThreadId = "thread_id",
  /** column name */
  UserId = "user_id",
}

export type ThreadReactionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ThreadReactionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ThreadReactionSetInput>;
  /** filter the rows which have to be updated */
  where: ThreadReactionBoolExp;
};

/** aggregate var_pop on columns */
export type ThreadReactionVarPopFields = {
  __typename?: "thread_reaction_var_pop_fields";
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "thread_reaction" */
export type ThreadReactionVarPopOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ThreadReactionVarSampFields = {
  __typename?: "thread_reaction_var_samp_fields";
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "thread_reaction" */
export type ThreadReactionVarSampOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ThreadReactionVarianceFields = {
  __typename?: "thread_reaction_variance_fields";
  thread_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "thread_reaction" */
export type ThreadReactionVarianceOrderBy = {
  thread_id?: InputMaybe<OrderBy>;
};

/** select columns of table "thread" */
export enum ThreadSelectColumn {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  Title = "title",
  /** column name */
  TopicId = "topic_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "thread" */
export type ThreadSetInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  topic_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type ThreadStddevFields = {
  __typename?: "thread_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  topic_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "thread" */
export type ThreadStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ThreadStddevPopFields = {
  __typename?: "thread_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  topic_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "thread" */
export type ThreadStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ThreadStddevSampFields = {
  __typename?: "thread_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  topic_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "thread" */
export type ThreadStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "thread" */
export type ThreadStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ThreadStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ThreadStreamCursorValueInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  topic_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type ThreadSumFields = {
  __typename?: "thread_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  topic_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "thread" */
export type ThreadSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** update columns of table "thread" */
export enum ThreadUpdateColumn {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  Title = "title",
  /** column name */
  TopicId = "topic_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type ThreadUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ThreadIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ThreadSetInput>;
  /** filter the rows which have to be updated */
  where: ThreadBoolExp;
};

/** aggregate var_pop on columns */
export type ThreadVarPopFields = {
  __typename?: "thread_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  topic_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "thread" */
export type ThreadVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ThreadVarSampFields = {
  __typename?: "thread_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  topic_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "thread" */
export type ThreadVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ThreadVarianceFields = {
  __typename?: "thread_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
  topic_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "thread" */
export type ThreadVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  topic_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** columns and relationships of "topic" */
export type Topic = {
  __typename?: "topic";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  /** An object relationship */
  realm?: Maybe<RealmPublic>;
  realm_id: Scalars["Int"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "topic" */
export type TopicAggregate = {
  __typename?: "topic_aggregate";
  aggregate?: Maybe<TopicAggregateFields>;
  nodes: Array<Topic>;
};

export type TopicAggregateBoolExp = {
  count?: InputMaybe<TopicAggregateBoolExpCount>;
};

export type TopicAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TopicSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<TopicBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "topic" */
export type TopicAggregateFields = {
  __typename?: "topic_aggregate_fields";
  avg?: Maybe<TopicAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<TopicMaxFields>;
  min?: Maybe<TopicMinFields>;
  stddev?: Maybe<TopicStddevFields>;
  stddev_pop?: Maybe<TopicStddevPopFields>;
  stddev_samp?: Maybe<TopicStddevSampFields>;
  sum?: Maybe<TopicSumFields>;
  var_pop?: Maybe<TopicVarPopFields>;
  var_samp?: Maybe<TopicVarSampFields>;
  variance?: Maybe<TopicVarianceFields>;
};

/** aggregate fields of "topic" */
export type TopicAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TopicSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "topic" */
export type TopicAggregateOrderBy = {
  avg?: InputMaybe<TopicAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TopicMaxOrderBy>;
  min?: InputMaybe<TopicMinOrderBy>;
  stddev?: InputMaybe<TopicStddevOrderBy>;
  stddev_pop?: InputMaybe<TopicStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TopicStddevSampOrderBy>;
  sum?: InputMaybe<TopicSumOrderBy>;
  var_pop?: InputMaybe<TopicVarPopOrderBy>;
  var_samp?: InputMaybe<TopicVarSampOrderBy>;
  variance?: InputMaybe<TopicVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "topic" */
export type TopicArrRelInsertInput = {
  data: Array<TopicInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<TopicOnConflict>;
};

/** aggregate avg on columns */
export type TopicAvgFields = {
  __typename?: "topic_avg_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "topic" */
export type TopicAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "topic". All fields are combined with a logical 'AND'. */
export type TopicBoolExp = {
  _and?: InputMaybe<Array<TopicBoolExp>>;
  _not?: InputMaybe<TopicBoolExp>;
  _or?: InputMaybe<Array<TopicBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  realm?: InputMaybe<RealmPublicBoolExp>;
  realm_id?: InputMaybe<IntComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "topic" */
export enum TopicConstraint {
  /** unique or primary key constraint on columns "id" */
  TopicIdKey = "topic_id_key",
  /** unique or primary key constraint on columns "realm_id", "name" */
  TopicPkey = "topic_pkey",
}

/** input type for incrementing numeric columns in table "topic" */
export type TopicIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "topic" */
export type TopicInsertInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  realm?: InputMaybe<RealmPublicObjRelInsertInput>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type TopicMaxFields = {
  __typename?: "topic_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by max() on columns of table "topic" */
export type TopicMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TopicMinFields = {
  __typename?: "topic_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** order by min() on columns of table "topic" */
export type TopicMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "topic" */
export type TopicMutationResponse = {
  __typename?: "topic_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Topic>;
};

/** input type for inserting object relation for remote table "topic" */
export type TopicObjRelInsertInput = {
  data: TopicInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<TopicOnConflict>;
};

/** on_conflict condition type for table "topic" */
export type TopicOnConflict = {
  constraint: TopicConstraint;
  update_columns?: Array<TopicUpdateColumn>;
  where?: InputMaybe<TopicBoolExp>;
};

/** Ordering options when selecting data from "topic". */
export type TopicOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  realm?: InputMaybe<RealmPublicOrderBy>;
  realm_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: topic */
export type TopicPkColumnsInput = {
  name: Scalars["String"]["input"];
  realm_id: Scalars["Int"]["input"];
};

/** select columns of table "topic" */
export enum TopicSelectColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "topic" */
export type TopicSetInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type TopicStddevFields = {
  __typename?: "topic_stddev_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "topic" */
export type TopicStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TopicStddevPopFields = {
  __typename?: "topic_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "topic" */
export type TopicStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TopicStddevSampFields = {
  __typename?: "topic_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "topic" */
export type TopicStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "topic" */
export type TopicStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: TopicStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TopicStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  realm_id?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type TopicSumFields = {
  __typename?: "topic_sum_fields";
  id?: Maybe<Scalars["Int"]["output"]>;
  realm_id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "topic" */
export type TopicSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** update columns of table "topic" */
export enum TopicUpdateColumn {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  RealmId = "realm_id",
  /** column name */
  UpdatedAt = "updated_at",
}

export type TopicUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TopicIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TopicSetInput>;
  /** filter the rows which have to be updated */
  where: TopicBoolExp;
};

/** aggregate var_pop on columns */
export type TopicVarPopFields = {
  __typename?: "topic_var_pop_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "topic" */
export type TopicVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TopicVarSampFields = {
  __typename?: "topic_var_samp_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "topic" */
export type TopicVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TopicVarianceFields = {
  __typename?: "topic_variance_fields";
  id?: Maybe<Scalars["Float"]["output"]>;
  realm_id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "topic" */
export type TopicVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  realm_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: "user";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  /** An array relationship */
  realm_users: Array<RealmUserUnion>;
  /** An aggregate relationship */
  realm_users_aggregate: RealmUserUnionAggregate;
  role: Scalars["String"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  university_id: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  username: Scalars["String"]["output"];
};

/** columns and relationships of "user" */
export type UserRealmUsersArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

/** columns and relationships of "user" */
export type UserRealmUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<RealmUserUnionSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<RealmUserUnionOrderBy>>;
  where?: InputMaybe<RealmUserUnionBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: "user_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};

/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  avatar_url?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  realm_users?: InputMaybe<RealmUserUnionBoolExp>;
  realm_users_aggregate?: InputMaybe<RealmUserUnionAggregateBoolExp>;
  role?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  university_id?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "id" */
  UserIdKey = "user_id_key",
  /** unique or primary key constraint on columns "id" */
  UserPkey = "user_pkey",
  /** unique or primary key constraint on columns "university_id" */
  UserUniversityIdKey = "user_university_id_key",
  /** unique or primary key constraint on columns "username" */
  UserUsernameKey = "user_username_key",
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = "users_email_key",
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  realm_users?: InputMaybe<RealmUserUnionArrRelInsertInput>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  university_id?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: "user_max_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  university_id?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: "user_min_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  university_id?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: "user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  avatar_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  realm_users_aggregate?: InputMaybe<RealmUserUnionAggregateOrderBy>;
  role?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  university_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars["uuid"]["input"];
};

/** columns and relationships of "user_public" */
export type UserPublic = {
  __typename?: "user_public";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "user_public" */
export type UserPublicAggregate = {
  __typename?: "user_public_aggregate";
  aggregate?: Maybe<UserPublicAggregateFields>;
  nodes: Array<UserPublic>;
};

/** aggregate fields of "user_public" */
export type UserPublicAggregateFields = {
  __typename?: "user_public_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<UserPublicMaxFields>;
  min?: Maybe<UserPublicMinFields>;
};

/** aggregate fields of "user_public" */
export type UserPublicAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserPublicSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "user_public". All fields are combined with a logical 'AND'. */
export type UserPublicBoolExp = {
  _and?: InputMaybe<Array<UserPublicBoolExp>>;
  _not?: InputMaybe<UserPublicBoolExp>;
  _or?: InputMaybe<Array<UserPublicBoolExp>>;
  avatar_url?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** input type for inserting data into table "user_public" */
export type UserPublicInsertInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type UserPublicMaxFields = {
  __typename?: "user_public_max_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type UserPublicMinFields = {
  __typename?: "user_public_min_fields";
  avatar_url?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "user_public" */
export type UserPublicMutationResponse = {
  __typename?: "user_public_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<UserPublic>;
};

/** input type for inserting object relation for remote table "user_public" */
export type UserPublicObjRelInsertInput = {
  data: UserPublicInsertInput;
};

/** Ordering options when selecting data from "user_public". */
export type UserPublicOrderBy = {
  avatar_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** select columns of table "user_public" */
export enum UserPublicSelectColumn {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Status = "status",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "user_public" */
export type UserPublicSetInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "user_public" */
export type UserPublicStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserPublicStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserPublicStreamCursorValueInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserPublicUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserPublicSetInput>;
  /** filter the rows which have to be updated */
  where: UserPublicBoolExp;
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Role = "role",
  /** column name */
  Status = "status",
  /** column name */
  UniversityId = "university_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  university_id?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  university_id?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Role = "role",
  /** column name */
  Status = "status",
  /** column name */
  UniversityId = "university_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  /** filter the rows which have to be updated */
  where: UserBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type GetCourseQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetCourseQuery = {
  __typename?: "query_root";
  course_by_pk?: {
    __typename?: "course";
    id: string;
    name: string;
    time_location: string;
    semester_id: string;
    number: string;
    index: number;
    teacher: { __typename?: "teacher"; id: string; name: string };
    course_reviews_aggregate: {
      __typename?: "course_review_aggregate";
      aggregate?: {
        __typename?: "course_review_aggregate_fields";
        count: number;
        avg?: {
          __typename?: "course_review_avg_fields";
          rating?: number | null;
        } | null;
      } | null;
    };
  } | null;
};

export type GetCoursesQueryVariables = Exact<{
  query: Scalars["String"]["input"];
}>;

export type GetCoursesQuery = {
  __typename?: "query_root";
  course: Array<{
    __typename?: "course";
    id: string;
    name: string;
    semester_id: string;
    teacher: { __typename?: "teacher"; id: string; name: string };
    course_reviews_aggregate: {
      __typename?: "course_review_aggregate";
      aggregate?: {
        __typename?: "course_review_aggregate_fields";
        avg?: {
          __typename?: "course_review_avg_fields";
          rating?: number | null;
        } | null;
      } | null;
    };
  }>;
};

export type GetCourseCountQueryVariables = Exact<{
  semesterId: Scalars["String"]["input"];
}>;

export type GetCourseCountQuery = {
  __typename?: "query_root";
  course_aggregate: {
    __typename?: "course_aggregate";
    aggregate?: {
      __typename?: "course_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetCourseReviewsQueryVariables = Exact<{
  courseId: Scalars["String"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type GetCourseReviewsQuery = {
  __typename?: "query_root";
  my_course_review?: {
    __typename?: "course_review";
    id: number;
    rating: number;
    content: string;
    created_at: string;
    updated_at: string;
    user?: {
      __typename?: "user_public";
      id?: string | null;
      username?: string | null;
      avatar_url?: string | null;
    } | null;
  } | null;
  course_review: Array<{
    __typename?: "course_review";
    id: number;
    rating: number;
    content: string;
    created_at: string;
    updated_at: string;
    user?: {
      __typename?: "user_public";
      id?: string | null;
      username?: string | null;
      avatar_url?: string | null;
    } | null;
  }>;
};

export type AddCourseReviewMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  courseId: Scalars["String"]["input"];
  rating: Scalars["Float"]["input"];
  content: Scalars["String"]["input"];
}>;

export type AddCourseReviewMutation = {
  __typename?: "mutation_root";
  insert_course_review_one?: {
    __typename?: "course_review";
    id: number;
  } | null;
};

export type UpdateCourseReviewMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  courseId: Scalars["String"]["input"];
  rating: Scalars["Float"]["input"];
  content: Scalars["String"]["input"];
}>;

export type UpdateCourseReviewMutation = {
  __typename?: "mutation_root";
  update_course_review_by_pk?: {
    __typename?: "course_review";
    id: number;
  } | null;
};

export type DeleteCourseReviewMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  courseId: Scalars["String"]["input"];
}>;

export type DeleteCourseReviewMutation = {
  __typename?: "mutation_root";
  delete_course_review_by_pk?: {
    __typename?: "course_review";
    id: number;
  } | null;
};

export type GetMessageContactsQueryVariables = Exact<{
  realmId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type GetMessageContactsQuery = {
  __typename?: "query_root";
  message: Array<{
    __typename?: "message";
    id: string;
    from_user?: {
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
      username?: string | null;
      avatar_url?: string | null;
      realm?: {
        __typename?: "realm_public";
        id?: number | null;
        name?: string | null;
      } | null;
    } | null;
    to_user?: {
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
      username?: string | null;
      avatar_url?: string | null;
      realm?: {
        __typename?: "realm_public";
        id?: number | null;
        name?: string | null;
      } | null;
    } | null;
  }>;
};

export type GetMessageQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetMessageQuery = {
  __typename?: "query_root";
  message_by_pk?: {
    __typename?: "message";
    id: string;
    from_user?: {
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
      username?: string | null;
      realm?: {
        __typename?: "realm_public";
        id?: number | null;
        name?: string | null;
      } | null;
    } | null;
    to_user?: {
      __typename?: "realm_user_union";
      user_id?: string | null;
    } | null;
  } | null;
};

export type GetMessagesQueryVariables = Exact<{
  realmId: Scalars["Int"]["input"];
  userId1: Scalars["uuid"]["input"];
  userId2: Scalars["uuid"]["input"];
}>;

export type GetMessagesQuery = {
  __typename?: "query_root";
  message: Array<{
    __typename?: "message";
    id: string;
    from_user_id: string;
    to_user_id: string;
    text: string;
    created_at: string;
  }>;
};

export type AddMessageMutationVariables = Exact<{
  realmId: Scalars["Int"]["input"];
  fromUserId: Scalars["uuid"]["input"];
  toUserId: Scalars["uuid"]["input"];
  text: Scalars["String"]["input"];
}>;

export type AddMessageMutation = {
  __typename?: "mutation_root";
  insert_message_one?: { __typename?: "message"; id: string } | null;
};

export type GetNotificationsQueryVariables = Exact<{
  userId: Scalars["uuid"]["input"];
}>;

export type GetNotificationsQuery = {
  __typename?: "query_root";
  notification: Array<{
    __typename?: "notification";
    id: string;
    payload: string;
    read: boolean;
    created_at: string;
  }>;
};

export type GetNewNotificationCountQueryVariables = Exact<{
  userId: Scalars["uuid"]["input"];
}>;

export type GetNewNotificationCountQuery = {
  __typename?: "query_root";
  notification_aggregate: {
    __typename?: "notification_aggregate";
    aggregate?: {
      __typename?: "notification_aggregate_fields";
      count: number;
    } | null;
  };
};

export type AddNotificationMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  payload: Scalars["String"]["input"];
}>;

export type AddNotificationMutation = {
  __typename?: "mutation_root";
  insert_notification_one?: { __typename?: "notification"; id: string } | null;
};

export type MarkNotificationAsReadMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type MarkNotificationAsReadMutation = {
  __typename?: "mutation_root";
  update_notification_by_pk?: {
    __typename?: "notification";
    id: string;
  } | null;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetPostQuery = {
  __typename?: "query_root";
  realm_post: Array<{
    __typename?: "realm_post";
    id?: number | null;
    user?: {
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
      username?: string | null;
    } | null;
    thread?: {
      __typename?: "thread";
      id: number;
      title: string;
      realm?: {
        __typename?: "realm_public";
        id?: number | null;
        name?: string | null;
      } | null;
      user?: {
        __typename?: "realm_user_union";
        realm_id?: number | null;
        user_id?: string | null;
      } | null;
      topic?: { __typename?: "topic"; id: number; name: string } | null;
    } | null;
  }>;
};

export type AddPostMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  threadId: Scalars["Int"]["input"];
  content: Scalars["String"]["input"];
}>;

export type AddPostMutation = {
  __typename?: "mutation_root";
  insert_post_one?: { __typename?: "post"; id: number } | null;
};

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars["Int"]["input"];
  content: Scalars["String"]["input"];
}>;

export type UpdatePostMutation = {
  __typename?: "mutation_root";
  update_post_by_pk?: { __typename?: "post"; id: number } | null;
};

export type GetThreadReactionsQueryVariables = Exact<{
  threadId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type GetThreadReactionsQuery = {
  __typename?: "query_root";
  thread_by_pk?: {
    __typename?: "thread";
    id: number;
    my_reactions: Array<{
      __typename?: "thread_reaction";
      thread_id: number;
      user_id: string;
      name: ReactionEmojiEnum;
    }>;
    confused_face_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    eyes_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    grinning_face_with_smiling_eyes_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    party_popper_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    red_heart_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    rocket_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    thumbs_down_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    thumbs_up_reactions: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
    posts: Array<{
      __typename?: "realm_post";
      id?: number | null;
      my_reactions: Array<{
        __typename?: "post_reaction";
        post_id: number;
        user_id: string;
        name: ReactionEmojiEnum;
      }>;
      confused_face_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
      eyes_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
      grinning_face_with_smiling_eyes_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
      party_popper_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
      red_heart_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
      rocket_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
      thumbs_down_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
      thumbs_up_reactions: {
        __typename?: "post_reaction_aggregate";
        aggregate?: {
          __typename?: "post_reaction_aggregate_fields";
          count: number;
        } | null;
      };
    }>;
  } | null;
};

export type AddThreadReactionMutationVariables = Exact<{
  name: ReactionEmojiEnum;
  threadId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type AddThreadReactionMutation = {
  __typename?: "mutation_root";
  insert_thread_reaction_one?: {
    __typename?: "thread_reaction";
    user_id: string;
    thread_id: number;
    name: ReactionEmojiEnum;
  } | null;
};

export type DeleteThreadReactionMutationVariables = Exact<{
  name: ReactionEmojiEnum;
  threadId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type DeleteThreadReactionMutation = {
  __typename?: "mutation_root";
  delete_thread_reaction_by_pk?: {
    __typename?: "thread_reaction";
    user_id: string;
    thread_id: number;
    name: ReactionEmojiEnum;
  } | null;
};

export type AddPostReactionMutationVariables = Exact<{
  name: ReactionEmojiEnum;
  postId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type AddPostReactionMutation = {
  __typename?: "mutation_root";
  insert_post_reaction_one?: {
    __typename?: "post_reaction";
    user_id: string;
    post_id: number;
    name: ReactionEmojiEnum;
  } | null;
};

export type DeletePostReactionMutationVariables = Exact<{
  name: ReactionEmojiEnum;
  postId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type DeletePostReactionMutation = {
  __typename?: "mutation_root";
  delete_post_reaction_by_pk?: {
    __typename?: "post_reaction";
    user_id: string;
    post_id: number;
    name: ReactionEmojiEnum;
  } | null;
};

export type GetRealmQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetRealmQuery = {
  __typename?: "query_root";
  realm_public: Array<{
    __typename?: "realm_public";
    id?: number | null;
    name?: string | null;
    description?: string | null;
    private?: boolean | null;
    topics: Array<{ __typename?: "topic"; id: number; name: string }>;
    threads: Array<{
      __typename?: "thread";
      id: number;
      realm_id: number;
      title: string;
      updated_at: string;
      topic?: { __typename?: "topic"; id: number; name: string } | null;
      user?: {
        __typename?: "realm_user_union";
        realm_id?: number | null;
        user_id?: string | null;
        username?: string | null;
        avatar_url?: string | null;
      } | null;
      posts: Array<{
        __typename?: "realm_post";
        id?: number | null;
        user?: {
          __typename?: "realm_user_union";
          realm_id?: number | null;
          user_id?: string | null;
          username?: string | null;
          avatar_url?: string | null;
        } | null;
      }>;
      posts_aggregate: {
        __typename?: "realm_post_aggregate";
        aggregate?: {
          __typename?: "realm_post_aggregate_fields";
          max?: {
            __typename?: "realm_post_max_fields";
            updated_at?: string | null;
          } | null;
        } | null;
      };
    }>;
  }>;
};

export type GetPublicRealmsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPublicRealmsQuery = {
  __typename?: "query_root";
  realm_public: Array<{
    __typename?: "realm_public";
    id?: number | null;
    name?: string | null;
    description?: string | null;
    users_aggregate: {
      __typename?: "realm_user_union_aggregate";
      aggregate?: {
        __typename?: "realm_user_union_aggregate_fields";
        count: number;
      } | null;
    };
  }>;
};

export type GetRealmDetailsQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetRealmDetailsQuery = {
  __typename?: "query_root";
  realm_public: Array<{
    __typename?: "realm_public";
    id?: number | null;
    name?: string | null;
    description?: string | null;
    private?: boolean | null;
  }>;
};

export type GetRealmDetailsInvitationCodeQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetRealmDetailsInvitationCodeQuery = {
  __typename?: "query_root";
  realm_by_pk?: {
    __typename?: "realm";
    id: number;
    admin_id: string;
    name: string;
    description: string;
    private: boolean;
    invitation_code?: string | null;
    topics: Array<{ __typename?: "topic"; id: number; name: string }>;
  } | null;
};

export type AddRealmMutationVariables = Exact<{
  adminId: Scalars["uuid"]["input"];
  name: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  private: Scalars["Boolean"]["input"];
  invitationCode?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type AddRealmMutation = {
  __typename?: "mutation_root";
  insert_realm_one?: { __typename?: "realm"; id: number } | null;
};

export type UpdateRealmMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
  description: Scalars["String"]["input"];
  private: Scalars["Boolean"]["input"];
  invitationCode?: InputMaybe<Scalars["String"]["input"]>;
  topics: Array<TopicInsertInput> | TopicInsertInput;
}>;

export type UpdateRealmMutation = {
  __typename?: "mutation_root";
  update_realm_by_pk?: { __typename?: "realm"; id: number } | null;
  insert_topic?: {
    __typename?: "topic_mutation_response";
    affected_rows: number;
  } | null;
};

export type GetSessionMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
  activeAt: Scalars["timestamptz"]["input"];
}>;

export type GetSessionMutation = {
  __typename?: "mutation_root";
  update_session_by_pk?: {
    __typename?: "session";
    id: string;
    user_id: string;
  } | null;
};

export type GetSessionsQueryVariables = Exact<{
  userId: Scalars["uuid"]["input"];
}>;

export type GetSessionsQuery = {
  __typename?: "query_root";
  session: Array<{
    __typename?: "session";
    id: string;
    description: string;
    created_at: string;
    active_at: string;
  }>;
};

export type AddSessionMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
  userId: Scalars["uuid"]["input"];
  description: Scalars["String"]["input"];
  activeAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
}>;

export type AddSessionMutation = {
  __typename?: "mutation_root";
  insert_session_one?: { __typename?: "session"; id: string } | null;
};

export type DeleteSessionMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type DeleteSessionMutation = {
  __typename?: "mutation_root";
  delete_session_by_pk?: { __typename?: "session"; id: string } | null;
};

export type GetThreadQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetThreadQuery = {
  __typename?: "query_root";
  thread_by_pk?: {
    __typename?: "thread";
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    realm?: {
      __typename?: "realm_public";
      id?: number | null;
      name?: string | null;
    } | null;
    topic?: { __typename?: "topic"; id: number; name: string } | null;
    user?: {
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
      username?: string | null;
      status?: string | null;
      avatar_url?: string | null;
    } | null;
    posts: Array<{
      __typename?: "realm_post";
      id?: number | null;
      content?: string | null;
      created_at?: string | null;
      updated_at?: string | null;
      user?: {
        __typename?: "realm_user_union";
        realm_id?: number | null;
        user_id?: string | null;
        username?: string | null;
        status?: string | null;
        avatar_url?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetHottestThreadsQueryVariables = Exact<{ [key: string]: never }>;

export type GetHottestThreadsQuery = {
  __typename?: "query_root";
  thread: Array<{
    __typename?: "thread";
    id: number;
    title: string;
    created_at: string;
    realm?: {
      __typename?: "realm_public";
      id?: number | null;
      name?: string | null;
    } | null;
    posts_aggregate: {
      __typename?: "realm_post_aggregate";
      aggregate?: {
        __typename?: "realm_post_aggregate_fields";
        count: number;
      } | null;
    };
    reactions_aggregate: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
  }>;
};

export type GetNewestThreadsQueryVariables = Exact<{ [key: string]: never }>;

export type GetNewestThreadsQuery = {
  __typename?: "query_root";
  thread: Array<{
    __typename?: "thread";
    id: number;
    title: string;
    created_at: string;
    realm?: {
      __typename?: "realm_public";
      id?: number | null;
      name?: string | null;
    } | null;
    posts_aggregate: {
      __typename?: "realm_post_aggregate";
      aggregate?: {
        __typename?: "realm_post_aggregate_fields";
        count: number;
      } | null;
    };
    reactions_aggregate: {
      __typename?: "thread_reaction_aggregate";
      aggregate?: {
        __typename?: "thread_reaction_aggregate_fields";
        count: number;
      } | null;
    };
  }>;
};

export type AddThreadMutationVariables = Exact<{
  realmId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
  topicId?: InputMaybe<Scalars["Int"]["input"]>;
  title: Scalars["String"]["input"];
  content: Scalars["String"]["input"];
}>;

export type AddThreadMutation = {
  __typename?: "mutation_root";
  insert_thread_one?: { __typename?: "thread"; id: number } | null;
};

export type UpdateThreadMutationVariables = Exact<{
  threadId: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
  content: Scalars["String"]["input"];
}>;

export type UpdateThreadMutation = {
  __typename?: "mutation_root";
  update_thread_by_pk?: { __typename?: "thread"; id: number } | null;
};

export type GetUserQueryVariables = Exact<{
  realmId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type GetUserQuery = {
  __typename?: "query_root";
  user_by_pk?: {
    __typename?: "user";
    id: string;
    university_id: string;
    email: string;
    role: string;
    created_at: string;
    realm_ids: Array<{
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
    }>;
    realm_users: Array<{
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
      username?: string | null;
      status?: string | null;
      avatar_url?: string | null;
      created_at?: string | null;
      realm?: {
        __typename?: "realm_public";
        id?: number | null;
        name?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetUserRealmsQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetUserRealmsQuery = {
  __typename?: "query_root";
  user_by_pk?: {
    __typename?: "user";
    id: string;
    realm_users: Array<{
      __typename?: "realm_user_union";
      realm_id?: number | null;
      user_id?: string | null;
      realm?: {
        __typename?: "realm_public";
        id?: number | null;
        name?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetRealmUserDetailsQueryVariables = Exact<{
  realmId: Scalars["Int"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type GetRealmUserDetailsQuery = {
  __typename?: "query_root";
  realm_user_union: Array<{
    __typename?: "realm_user_union";
    realm_id?: number | null;
    user_id?: string | null;
    username?: string | null;
    status?: string | null;
    avatar_url?: string | null;
    realm?: {
      __typename?: "realm_public";
      id?: number | null;
      name?: string | null;
    } | null;
  }>;
};

export type AddOrUpdateUserMutationVariables = Exact<{
  universityId: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
}>;

export type AddOrUpdateUserMutation = {
  __typename?: "mutation_root";
  insert_user_one?: {
    __typename?: "user";
    id: string;
    university_id: string;
    email: string;
  } | null;
};

export type UpdateUsernameMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  username: Scalars["String"]["input"];
}>;

export type UpdateUsernameMutation = {
  __typename?: "mutation_root";
  update_user_by_pk?: {
    __typename?: "user";
    id: string;
    username: string;
  } | null;
};

export type UpdateRealmUsernameMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  realmId: Scalars["Int"]["input"];
  username: Scalars["String"]["input"];
}>;

export type UpdateRealmUsernameMutation = {
  __typename?: "mutation_root";
  insert_realm_user_one?: {
    __typename?: "realm_user";
    user_id: string;
    realm_id: number;
    username: string;
  } | null;
};

export type UpdateUserAvatarMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  avatarUrl: Scalars["String"]["input"];
}>;

export type UpdateUserAvatarMutation = {
  __typename?: "mutation_root";
  update_user_by_pk?: {
    __typename?: "user";
    id: string;
    avatar_url?: string | null;
  } | null;
};

export type UpdateRealmUserAvatarMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  realmId: Scalars["Int"]["input"];
  avatarUrl: Scalars["String"]["input"];
}>;

export type UpdateRealmUserAvatarMutation = {
  __typename?: "mutation_root";
  insert_realm_user_one?: {
    __typename?: "realm_user";
    user_id: string;
    realm_id: number;
    avatar_url?: string | null;
  } | null;
};

export type UpdateUserStatusMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  status: Scalars["String"]["input"];
}>;

export type UpdateUserStatusMutation = {
  __typename?: "mutation_root";
  update_user_by_pk?: {
    __typename?: "user";
    id: string;
    status?: string | null;
  } | null;
};

export type UpdateRealmUserStatusMutationVariables = Exact<{
  userId: Scalars["uuid"]["input"];
  realmId: Scalars["Int"]["input"];
  status: Scalars["String"]["input"];
}>;

export type UpdateRealmUserStatusMutation = {
  __typename?: "mutation_root";
  update_realm_user_by_pk?: {
    __typename?: "realm_user";
    user_id: string;
    realm_id: number;
    status?: string | null;
  } | null;
};

export type GetRealmUserByUsernameQueryVariables = Exact<{
  username: Scalars["String"]["input"];
}>;

export type GetRealmUserByUsernameQuery = {
  __typename?: "query_root";
  realm_user_union: Array<{
    __typename?: "realm_user_union";
    username?: string | null;
  }>;
};

export const GetCourseDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCourse" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "course_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teacher" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "time_location" },
                },
                { kind: "Field", name: { kind: "Name", value: "semester_id" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "index" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "course_reviews_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avg" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "rating" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCourseQuery, GetCourseQueryVariables>;
export const GetCoursesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCourses" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "query" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "course" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "name" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_ilike" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "query" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "teacher" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "name" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_ilike",
                                            },
                                            value: {
                                              kind: "Variable",
                                              name: {
                                                kind: "Name",
                                                value: "query",
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "semester_id" },
                          value: { kind: "EnumValue", value: "desc" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "updated_at" },
                          value: { kind: "EnumValue", value: "desc" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teacher" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "semester_id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "course_reviews_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avg" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "rating" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCoursesQuery, GetCoursesQueryVariables>;
export const GetCourseCountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCourseCount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "semesterId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "course_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "semester_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "semesterId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCourseCountQuery, GetCourseCountQueryVariables>;
export const GetCourseReviewsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCourseReviews" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "courseId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "my_course_review" },
            name: { kind: "Name", value: "course_review_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "course_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "courseId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "user_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar_url" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "updated_at" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "course_review" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "updated_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "course_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "courseId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_neq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar_url" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "updated_at" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCourseReviewsQuery,
  GetCourseReviewsQueryVariables
>;
export const AddCourseReviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddCourseReview" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "courseId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "rating" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_course_review_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "course_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "courseId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "rating" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "rating" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddCourseReviewMutation,
  AddCourseReviewMutationVariables
>;
export const UpdateCourseReviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateCourseReview" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "courseId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "rating" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_course_review_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "course_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "courseId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "rating" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "rating" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCourseReviewMutation,
  UpdateCourseReviewMutationVariables
>;
export const DeleteCourseReviewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteCourseReview" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "courseId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delete_course_review_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "course_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "courseId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "user_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteCourseReviewMutation,
  DeleteCourseReviewMutationVariables
>;
export const GetMessageContactsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMessageContacts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "message" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "realmId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "from_user_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "userId" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "to_user_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "userId" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "from_user_id" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "to_user_id" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "created_at" },
                          value: { kind: "EnumValue", value: "desc" },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "distinct_on" },
                value: {
                  kind: "ListValue",
                  values: [
                    { kind: "EnumValue", value: "from_user_id" },
                    { kind: "EnumValue", value: "to_user_id" },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "from_user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar_url" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "to_user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar_url" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetMessageContactsQuery,
  GetMessageContactsQueryVariables
>;
export const GetMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "message_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "from_user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "to_user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMessageQuery, GetMessageQueryVariables>;
export const GetMessagesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMessages" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId1" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId2" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "message" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "realmId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "from_user_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "userId1",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "to_user_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "userId2",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "from_user_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "userId2",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "to_user_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "userId1",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "created_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "from_user_id" },
                },
                { kind: "Field", name: { kind: "Name", value: "to_user_id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMessagesQuery, GetMessagesQueryVariables>;
export const AddMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromUserId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toUserId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "text" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_message_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "realmId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "from_user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fromUserId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "to_user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "toUserId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "text" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "text" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddMessageMutation, AddMessageMutationVariables>;
export const GetNotificationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNotifications" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notification" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "created_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "payload" } },
                { kind: "Field", name: { kind: "Name", value: "read" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNotificationsQuery,
  GetNotificationsQueryVariables
>;
export const GetNewNotificationCountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNewNotificationCount" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "notification_aggregate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "read" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: false },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "count" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNewNotificationCountQuery,
  GetNewNotificationCountQueryVariables
>;
export const AddNotificationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddNotification" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "payload" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_notification_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "payload" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "payload" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddNotificationMutation,
  AddNotificationMutationVariables
>;
export const MarkNotificationAsReadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "MarkNotificationAsRead" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_notification_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "read" },
                      value: { kind: "BooleanValue", value: true },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  MarkNotificationAsReadMutation,
  MarkNotificationAsReadMutationVariables
>;
export const GetPostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "realm_post" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "thread" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "realm_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user_id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topic" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const AddPostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddPost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "threadId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_post_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "thread_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "threadId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddPostMutation, AddPostMutationVariables>;
export const UpdatePostDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdatePost" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_post_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "postId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const GetThreadReactionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetThreadReactions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "threadId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "thread_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "threadId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "my_reactions" },
                  name: { kind: "Name", value: "reactions" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "user_id" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "userId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "thread_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "confused_face_reactions" },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "confused_face",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "eyes_reactions" },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "EnumValue", value: "eyes" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "grinning_face_with_smiling_eyes_reactions",
                  },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "grinning_face_with_smiling_eyes",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "party_popper_reactions" },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "party_popper",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "red_heart_reactions" },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "red_heart",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "rocket_reactions" },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "EnumValue", value: "rocket" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "thumbs_down_reactions" },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "thumbs_down",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "thumbs_up_reactions" },
                  name: { kind: "Name", value: "reactions_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "thumbs_up",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "posts" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "created_at" },
                            value: { kind: "EnumValue", value: "asc" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "my_reactions" },
                        name: { kind: "Name", value: "reactions" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "user_id" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "userId",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "post_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: {
                          kind: "Name",
                          value: "confused_face_reactions",
                        },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "confused_face",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "eyes_reactions" },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "eyes",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: {
                          kind: "Name",
                          value: "grinning_face_with_smiling_eyes_reactions",
                        },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value:
                                            "grinning_face_with_smiling_eyes",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: {
                          kind: "Name",
                          value: "party_popper_reactions",
                        },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "party_popper",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "red_heart_reactions" },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "red_heart",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "rocket_reactions" },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "rocket",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "thumbs_down_reactions" },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "thumbs_down",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "thumbs_up_reactions" },
                        name: { kind: "Name", value: "reactions_aggregate" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "where" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "name" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "EnumValue",
                                          value: "thumbs_up",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetThreadReactionsQuery,
  GetThreadReactionsQueryVariables
>;
export const AddThreadReactionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddThreadReaction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "reaction_emoji_enum" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "threadId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_thread_reaction_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "thread_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "threadId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: {
                        kind: "EnumValue",
                        value: "thread_reaction_pkey",
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "created_at" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                { kind: "Field", name: { kind: "Name", value: "thread_id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddThreadReactionMutation,
  AddThreadReactionMutationVariables
>;
export const DeleteThreadReactionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteThreadReaction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "reaction_emoji_enum" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "threadId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delete_thread_reaction_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "thread_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "threadId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "user_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                { kind: "Field", name: { kind: "Name", value: "thread_id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteThreadReactionMutation,
  DeleteThreadReactionMutationVariables
>;
export const AddPostReactionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddPostReaction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "reaction_emoji_enum" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_post_reaction_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "post_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "postId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: { kind: "EnumValue", value: "post_reaction_pkey" },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "created_at" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                { kind: "Field", name: { kind: "Name", value: "post_id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddPostReactionMutation,
  AddPostReactionMutationVariables
>;
export const DeletePostReactionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeletePostReaction" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "reaction_emoji_enum" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "postId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delete_post_reaction_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "post_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "postId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "user_id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                { kind: "Field", name: { kind: "Name", value: "post_id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeletePostReactionMutation,
  DeletePostReactionMutationVariables
>;
export const GetRealmDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetRealm" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "realm_public" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "private" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "topics" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "created_at" },
                            value: { kind: "EnumValue", value: "asc" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "threads" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: {
                                  kind: "Name",
                                  value: "posts_aggregate",
                                },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "max" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "updated_at",
                                            },
                                            value: {
                                              kind: "EnumValue",
                                              value: "desc_nulls_last",
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "updated_at" },
                                value: { kind: "EnumValue", value: "desc" },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "created_at" },
                                value: { kind: "EnumValue", value: "desc" },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "topic" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "realm_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "username" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar_url" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "posts" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "order_by" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "id" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "updated_at",
                                      },
                                      value: {
                                        kind: "EnumValue",
                                        value: "desc",
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "created_at",
                                      },
                                      value: {
                                        kind: "EnumValue",
                                        value: "desc",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "distinct_on" },
                            value: {
                              kind: "ListValue",
                              values: [{ kind: "EnumValue", value: "id" }],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "limit" },
                            value: { kind: "IntValue", value: "4" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "realm_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "user_id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "username" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "avatar_url" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "posts_aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "max" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updated_at",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updated_at" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetRealmQuery, GetRealmQueryVariables>;
export const GetPublicRealmsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPublicRealms" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "realm_public" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "private" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: false },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_neq" },
                            value: { kind: "IntValue", value: "1" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "users_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPublicRealmsQuery,
  GetPublicRealmsQueryVariables
>;
export const GetRealmDetailsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetRealmDetails" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "realm_public" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "private" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRealmDetailsQuery,
  GetRealmDetailsQueryVariables
>;
export const GetRealmDetailsInvitationCodeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetRealmDetailsInvitationCode" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "realm_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "admin_id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "private" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "invitation_code" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "topics" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRealmDetailsInvitationCodeQuery,
  GetRealmDetailsInvitationCodeQueryVariables
>;
export const AddRealmDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddRealm" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "adminId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "private" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "invitationCode" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_realm_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "admin_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "adminId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "private" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "private" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "invitation_code" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "invitationCode" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddRealmMutation, AddRealmMutationVariables>;
export const UpdateRealmDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateRealm" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "private" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "invitationCode" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "topics" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: { kind: "Name", value: "topic_insert_input" },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_realm_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "private" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "private" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "invitation_code" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "invitationCode" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_topic" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "topics" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: { kind: "EnumValue", value: "topic_pkey" },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "name" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affected_rows" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateRealmMutation, UpdateRealmMutationVariables>;
export const GetSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GetSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "activeAt" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "timestamptz" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_session_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "active_at" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "activeAt" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSessionMutation, GetSessionMutationVariables>;
export const GetSessionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSessions" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "session" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "active_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "active_at" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSessionsQuery, GetSessionsQueryVariables>;
export const AddSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "activeAt" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "timestamptz" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_session_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "active_at" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "activeAt" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: { kind: "EnumValue", value: "session_pkey" },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [
                          { kind: "EnumValue", value: "description" },
                          { kind: "EnumValue", value: "active_at" },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddSessionMutation, AddSessionMutationVariables>;
export const DeleteSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "delete_session_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteSessionMutation,
  DeleteSessionMutationVariables
>;
export const GetThreadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetThread" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "thread_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "realm" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "topic" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "content" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar_url" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                { kind: "Field", name: { kind: "Name", value: "updated_at" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "posts" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "created_at" },
                            value: { kind: "EnumValue", value: "asc" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "realm_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "username" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatar_url" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "created_at" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updated_at" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetThreadQuery, GetThreadQueryVariables>;
export const GetHottestThreadsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetHottestThreads" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "thread" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "private" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "BooleanValue", value: false },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "posts_aggregate" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "count" },
                                value: { kind: "EnumValue", value: "desc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "reactions_aggregate" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "count" },
                                value: { kind: "EnumValue", value: "desc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "3" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "realm" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "posts_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "reactions_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetHottestThreadsQuery,
  GetHottestThreadsQueryVariables
>;
export const GetNewestThreadsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetNewestThreads" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "thread" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "private" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "BooleanValue", value: false },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "created_at" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "3" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "realm" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "posts_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "reactions_aggregate" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNewestThreadsQuery,
  GetNewestThreadsQueryVariables
>;
export const AddThreadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddThread" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "topicId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_thread_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "realmId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "topic_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "topicId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "title" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddThreadMutation, AddThreadMutationVariables>;
export const UpdateThreadDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateThread" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "threadId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "title" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "content" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_thread_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "threadId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "title" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "content" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "content" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateThreadMutation,
  UpdateThreadMutationVariables
>;
export const GetUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "university_id" },
                },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "role" } },
                { kind: "Field", name: { kind: "Name", value: "created_at" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "realm_ids" },
                  name: { kind: "Name", value: "realm_users" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "realm_users" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "realm_id" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "realmId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatar_url" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "created_at" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserRealmsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserRealms" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "realm_users" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "user_id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "realm" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserRealmsQuery, GetUserRealmsQueryVariables>;
export const GetRealmUserDetailsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetRealmUserDetails" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "realm_user_union" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "realmId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "realm_id" } },
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "realm" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "avatar_url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRealmUserDetailsQuery,
  GetRealmUserDetailsQueryVariables
>;
export const AddOrUpdateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddOrUpdateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "universityId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_user_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "university_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "universityId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "username" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "universityId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: {
                        kind: "EnumValue",
                        value: "user_university_id_key",
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "email" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "university_id" },
                },
                { kind: "Field", name: { kind: "Name", value: "email" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddOrUpdateUserMutation,
  AddOrUpdateUserMutationVariables
>;
export const UpdateUsernameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUsername" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "username" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_user_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "username" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "username" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateUsernameMutation,
  UpdateUsernameMutationVariables
>;
export const UpdateRealmUsernameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateRealmUsername" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "username" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_realm_user_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "realmId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "username" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "username" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: { kind: "EnumValue", value: "realm_user_pkey" },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "username" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                { kind: "Field", name: { kind: "Name", value: "realm_id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateRealmUsernameMutation,
  UpdateRealmUsernameMutationVariables
>;
export const UpdateUserAvatarDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUserAvatar" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "avatarUrl" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_user_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "avatar_url" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "avatarUrl" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "avatar_url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateUserAvatarMutation,
  UpdateUserAvatarMutationVariables
>;
export const UpdateRealmUserAvatarDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateRealmUserAvatar" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "avatarUrl" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insert_realm_user_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "realmId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "avatar_url" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "avatarUrl" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: { kind: "EnumValue", value: "realm_user_pkey" },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "avatar_url" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                { kind: "Field", name: { kind: "Name", value: "realm_id" } },
                { kind: "Field", name: { kind: "Name", value: "avatar_url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateRealmUserAvatarMutation,
  UpdateRealmUserAvatarMutationVariables
>;
export const UpdateUserStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUserStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_user_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "status" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateUserStatusMutation,
  UpdateUserStatusMutationVariables
>;
export const UpdateRealmUserStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateRealmUserStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "uuid" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "realmId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "update_realm_user_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "user_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "realm_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "realmId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "status" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "user_id" } },
                { kind: "Field", name: { kind: "Name", value: "realm_id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateRealmUserStatusMutation,
  UpdateRealmUserStatusMutationVariables
>;
export const GetRealmUserByUsernameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetRealmUserByUsername" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "username" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "realm_user_union" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "username" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "username" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "username" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetRealmUserByUsernameQuery,
  GetRealmUserByUsernameQueryVariables
>;
