import { gql } from "@apollo/client";

export const GET_ANIMALS = gql`
  query GetAnimals {
    animals {
      id
      name
      species
      breed
      color
      weight
      ownerId
    }
  }
`;

export const GET_ANIMAL_BY_ID = gql`
  query GetAnimal($id: Int!) {
    animal(id: $id) {
      id
      name
      species
      breed
      color
      weight
      owner {
        id
        firstName
        lastName
      }
    }
  }
`;