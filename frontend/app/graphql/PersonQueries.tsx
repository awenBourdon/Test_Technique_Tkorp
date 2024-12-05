import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
  query GetPersons {
    persons {
      id
      firstName
      lastName
    }
  }
`;


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