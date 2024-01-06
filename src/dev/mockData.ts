import { TableProps } from "../types";

const mockData: TableProps = {
  columns: [
    {
      id: "id",
      ordinalNo: 1,
      title: "ID",
      type: "string",
    },
    {
      id: "name",
      ordinalNo: 2,
      title: "Name",
      type: "string",
    },
    {
      id: "age",
      ordinalNo: 3,
      title: "Age",
      type: "number",
    },
    {
      id: "nationality",
      ordinalNo: 4,
      title: "Nationality",
      type: "string",
    },
    {
      id: "vegetarian",
      ordinalNo: 5,
      title: "Vegetarian",
      type: "boolean",
    },
  ],
  data: [
    {
      id: "row1",
      name: "Homer Simpson",
      age: 39,
      nationality: "American",
      vegetarian: false,
    },
    {
      id: "row2",
      name: "Lionel Messi",
      age: 34,
      nationality: "Argentinian",
      vegetarian: false,
    },
    {
      id: "row3",
      name: "Bojack Horseman",
      age: 55,
      nationality: "American",
      vegetarian: false,
    },
    {
      id: "row4",
      name: "Shmoolik Kipod",
      age: 2,
      nationality: "Israeli",
      vegetarian: true,
    },
    {
      id: "row5",
      name: "Dave Grohl",
      age: 52,
      nationality: "American",
      vegetarian: false,
    },
    {
      id: "row6",
      name: "Vladimir Putin",
      age: 63,
      nationality: "Russian",
      vegetarian: true,
    },
    {
      id: "row7",
      name: "Ronaldinho",
      age: 44,
      nationality: "Brazilian",
      vegetarian: false,
    },
    {
      id: "row8",
      name: "Gandi",
      age: 78,
      nationality: "Indian",
      vegetarian: false,
    },
  ],
  onUpdateData: () => {
    throw new Error("onUpdateData function not overriden");
  },
  visibleColumns: {},
};

export default mockData;
