export interface PackagesDB {
  title: string;
  duration: string;
  amount: string;
  status: string;
}

export const PACKAGESDB: PackagesDB[] = [
  {
    title: "Gold",
    duration: "6 Months",
    amount: "Rs 1000",
    status: "Active",
  },
  {
    title: "Silver",
    duration: "6 Months",
    amount: "Rs 500",
    status: "Active",
  },

  {
    title: "Bronze",
    duration: "6 Months",
    amount: "Rs 300",
    status: "Active",
  },
];
