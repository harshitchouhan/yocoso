export interface TestTypesDB {
  title: string;
  noOfTests: string;
  status: string;
}

export const TESTSTYPESDB: TestTypesDB[] = [
  {
    title: "Mock",
    noOfTests: "5",
    status: "Active",
  },
  {
    title: "Sectional",
    noOfTests: "15",
    status: "Active",
  },
  {
    title: "Topic",
    noOfTests: "50",
    status: "Active",
  },
  {
    title: "Custom Test 1",
    noOfTests: "0",
    status: "Inactive",
  },
  {
    title: "Custom Test 2",
    noOfTests: "0",
    status: "Inactive",
  },
];
