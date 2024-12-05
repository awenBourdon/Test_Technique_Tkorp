import { gql } from '@apollo/client';

// Fetchs all persons
export const GET_PERSONS = gql`
  query GetPersons {
    persons {
      id
      firstName
      lastName
    }
  }
`;

// Fetchs a specific person by its id
export const GET_PERSON_BY_ID = gql`
  query GetPersonById($id: Int!) {
    person(id: $id) {
      id
      firstName
      lastName
      email
      phoneNumber
    }
  }
`;