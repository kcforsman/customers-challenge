export interface NewCustomerFormInput<t> {
  firstName: t;
  lastName: t;
  email: t;
}

export interface UpdateCustomerFormInput<t> extends NewCustomerFormInput<t> {
  id: number;
}

export interface Customer extends UpdateCustomerFormInput<string> {
  // for simplicity uses integers as an id for actual entity 
  // would prefer a custom unique id that likely leverages uuid
  // Defaulting to Typescript Date Object
  // Depending on needs likely would want to use a different library
  // Possibly luxon
  createdAt: Date;
  // this could be an optional field if we want to track whether 
  // or not a row has been updated before
  // for the sake of this exercise, simply setting it to 
  // the same value as createdAt for a new row
  updatedAt: Date;
}