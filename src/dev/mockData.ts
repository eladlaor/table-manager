import { TableProps, Types } from "../types";

const mockData: TableProps = {
  columns: [
    {
      id: "id",
      ordinalNo: 1,
      title: "ID",
      type: Types.String,
    },
    {
      id: "name",
      ordinalNo: 2,
      title: "Name",
      type: Types.String,
    },
    {
      id: "age",
      ordinalNo: 3,
      title: "Age",
      type: Types.Number,
    },
    {
      id: "nationality",
      ordinalNo: 4,
      title: "Nationality",
      type: Types.String,
    },
    {
      id: "cartoon",
      ordinalNo: 5,
      title: "Is a Cartoon?",
      type: Types.Boolean,
    },
  ],
  data: [
    {
      id: "1",
      name: "Homer Simpson",
      age: 39,
      nationality: "American",
      cartoon: true,
    },
    {
      id: "2",
      name: "Lionel Messi",
      age: 34,
      nationality: "Argentinian",
      cartoon: false,
    },
    {
      id: "3",
      name: "Bojack Horseman",
      age: 55,
      nationality: "American",
      cartoon: true,
    },
    {
      id: "4",
      name: "Shmoolik Kipod",
      age: 2,
      nationality: "Israeli",
      cartoon: true,
    },
    {
      id: "5",
      name: "Dave Grohl",
      age: 52,
      nationality: "American",
      cartoon: false,
    },
    {
      id: "6",
      name: "Vladimir Putin",
      age: 63,
      nationality: "Russian",
      cartoon: false,
    },
    {
      id: "7",
      name: "Ronaldinho",
      age: 44,
      nationality: "Brazilian",
      cartoon: false,
    },
    {
      id: "8",
      name: "Gandi",
      age: 78,
      nationality: "Indian",
      cartoon: false,
    },
  ],
  onUpdateData: () => {
    throw new Error("onUpdateData function not overriden");
  },
  visibleColumns: {},
};

export default mockData;
