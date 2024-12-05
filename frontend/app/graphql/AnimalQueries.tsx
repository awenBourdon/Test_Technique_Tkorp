import { gql } from "@apollo/client";

// Fetchs all animals
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

// Fetchs a specific animal by its id
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