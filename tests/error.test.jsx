import "@testing-library/jest-dom";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { MockedProvider } from "@apollo/client/testing";
import { GET_DOG } from "@apolloClient";
import DogSearch from "@components/DogSearch";
import { THEMES } from "@constants";
import { fireEvent, render, screen } from "@testing-library/react";

const mocks = [
  {
    request: {
      query: GET_DOG,
      variables: {
        breed: "Affenpinscher",
      },
    },
    errors: new Error("An error occurred"),
  },
];

it("render error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider theme={THEMES}>
        <DogSearch selectDog={() => console.log("console")} />
      </ThemeProvider>
    </MockedProvider>
  );
  expect(await screen.findByPlaceholderText("search")).toBeInTheDocument();

  const input = await screen.findByPlaceholderText("search");
  fireEvent.change(input, { target: { value: "Affenpinscher" } });
  expect(input.value).toBe("Affenpinscher");

  expect(await screen.findByText("went wrong")).toBeInTheDocument();
});
