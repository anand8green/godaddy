import { render, screen, } from "@testing-library/react";
import ListItem from "./ListItem";
import { gitDataProps } from '../component/ListItem'
import { BrowserRouter } from "react-router-dom";

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

test("List Item should print Repo Name", async () => {
    render(
        <BrowserRouter>
            <ListItem{...data} />
        </BrowserRouter>
    )
    const list = await screen.findByRole("list")
    expect(list).toHaveTextContent("Ninja")


})