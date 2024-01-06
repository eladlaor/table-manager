import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("renders the correct number of pages", () => {
    const totalItems = 50;
    const itemsPerPage = 10;
    render(
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={jest.fn()}
      />
    );

    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(5);
  });

  it("calls paginate function with correct page number", () => {
    const mockPaginate = jest.fn();
    render(
      <Pagination
        itemsPerPage={10}
        totalItems={50}
        paginate={mockPaginate}
      />
    );

    const secondPageButton = screen.getByText("2");
    fireEvent.click(secondPageButton);

    expect(mockPaginate).toHaveBeenCalledWith(2);
  });
});
