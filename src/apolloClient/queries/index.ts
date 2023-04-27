import { gql } from "@apollo/client";

export const GET_DOG = gql`
  query getDog($breed: String!) {
    dog(breed: $breed) {
      name
      energy
      max_life_expectancy
      good_with_strangers
      good_with_other_dogs
      image_link
    }
  }
`;
