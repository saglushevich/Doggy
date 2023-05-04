import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { MockedProvider } from "@apollo/client/testing";
import { GET_DOG } from "@apolloClient";
import DogSearch from "@components/DogSearch";
import { THEMES } from "@constants";
import { render, screen } from "@testing-library/react";

const mocks = [
  {
    request: {
      query: GET_DOG,
      variables: {
        breed: "Affenpinscher",
      },
    },
    result: {
      data: {
        dog: {
          name: "Affenpinscher",
          good_with_other_dogs: 3,
          good_with_strangers: 5,
          image_link: "https://api-ninjas.com/images/dogs/affenpinscher.jpg",
          max_life_expectancy: 15,
        },
      },
    },
  },
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={THEMES}>
        <DogSearch selectDog={() => console.log("console")} />
      </ThemeProvider>
    </MockedProvider>
  );
  expect(await screen.findByPlaceholderText("search")).toBeInTheDocument();
});
