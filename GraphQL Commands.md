# COMMANDS TO APPLY IN GRAPHQL PLAYGROUND OR IN CLIENT SIDE

# PERSON

## Create a person :

    mutation {
      createPerson(createPersonInput: {
        lastName: "Hello"
        firstName: "Hello"
        email: "hello@example.com"
        phoneNumber : "555-555-555"
      }) {
        id
        lastName
        firstName
        email
        phoneNumber
      }
    }

## Get all persons :

    query {
      persons{
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }

## Get a specific person by id : 

    query {
      person(id: 1 ) {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }

## Update a specific person by id :   

mutation {
  updatePerson(id: 1, updatePersonInput: {
    lastName: "John"
    firstName: "Doe updated"
    email: "john@doe.com"
    phoneNumber: "555-555-1234"
  }) {
    id
    lastName
    firstName
    email
    phoneNumber
  }
}

## Delete a person by id : 

    mutation {
      deletePerson(id: 1)
    }

# ANIMAL

## Create a animal :

    mutation {
      createAnimal(createAnimalInput: {
        name: "Hello"
        color: "Hello"
        species: "Hello"
        breed: "Hello"
        weight:54
        ownerId: 55
        dateOfBirth: "2022/12/12"
        }){
        id
        name
        color
        species
        breed
        weight
        ownerId
        dateOfBirth
      }
    }

## Get all animals :

    query {
      animals {
        id
        name
        color
        species
        breed
        weight
        owner {
          id
          lastName
          firstName
        }
      }
    }

## Get a specific animal by id :

    query {
      animal(id: 1 ) {
        id
        name
        color
        species
        breed
        weight
        owner {
          id
          lastName
          firstName
        }
      }
    }

## Update a specific animal by id :

mutation {
  updateAnimal(id: 1, updateAnimalInput: {
    name: "hello"
    color: "hello"
    species: "hello"
    breed: "hello"
    weight: 60
    ownerId: 55
    dateOfBirth: "2021/01/01"
  }) {
    id
    name
    color
    species
    breed
    weight
    owner {
      id
      lastName
      firstName
    }
    dateOfBirth
  }
}


## Delete a animal by id : 

    mutation {
      deleteAnimal(id: 1)
    }
