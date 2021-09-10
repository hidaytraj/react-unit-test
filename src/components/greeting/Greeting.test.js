import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Output from "../output/Output";
import Greeting from "./Greeting";


describe(`Greeting Component`, () => {
    test(`Should have 'hello' word`, () => {
        render(<Greeting />);
        const helloTextElement = screen.getByText("Hello");
        expect(helloTextElement).toBeInTheDocument();
    });

    test(`renders "good to see you" if buttton was NOT clicked`, () => {
        // Arrange
        render(<Greeting />);
        // Assert
        const outputElement = screen.getByText("good to see you", {exact: false});
        expect(outputElement).toBeInTheDocument();
    });

    test(`renders "changed" if button was clicked`, () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText("changed", {exact: false});
        expect(outputElement).toBeInTheDocument();

    });


    test(`doesn't not render "good to see you" if the button was clicked`, () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.queryByText("good to see you", { exact: false})

        // check if its null
        expect(outputElement).toBeNull();

    });
})
