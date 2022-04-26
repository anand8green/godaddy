import { render, screen } from "@testing-library/react";

import { gitDataProps } from './ListItem'
import { BrowserRouter } from "react-router-dom";
import ListDetailsItem from "./ListDetailsItem";

const data: gitDataProps = {
    id: 1,
    name: "Ninja",
    full_name: "Ninja GoDaddy",
    description: "A new Tech",
    forks: 2,
    language: "Java",
    watchers: 2,
    git_url: "godaddy.com"
}


test("List Details should print Repo full name", async () => {

    render(
        <BrowserRouter>
            <ListDetailsItem{...data} />
        </BrowserRouter>
    )

    const fullName = await screen.findByRole("list")
    expect(fullName).toHaveTextContent("Ninja GoDaddy")

})