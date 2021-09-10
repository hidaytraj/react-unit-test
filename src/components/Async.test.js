import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe(`Async Component `, () => {

    test(`render posts if request succeeds`, async () => {


        // creates a dummy function
        // not communicating multitimes with server
        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            json: async() => [{id: 'p1', title: 'First post'}]
        });

 
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');

        expect(listItemElements).not.toHaveLength(0);
    })
})