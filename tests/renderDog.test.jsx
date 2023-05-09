import "@testing-library/jest-dom";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { MockedProvider } from "@apollo/client/testing";
import { GET_DOG } from "@apolloClient";
import Dog from "@components/Dog";
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

it("should render dog", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={THEMES}>
        <DogSearch selectDog={() => console.log("console")} />
      </ThemeProvider>
    </MockedProvider>
  );

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={THEMES}>
        <Dog dog={mocks[0].result.data.dog} />
      </ThemeProvider>
    </MockedProvider>
  );

  expect(await screen.findByText("energy")).toBeInTheDocument();
});
