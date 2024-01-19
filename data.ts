export interface Idata {
  task: string;
  status: string;
  due: Date;
  notes: string;
}

export const DATA: Idata[] = [
  {
    task: "This is task 1",
    status: "online",
    due: new Date("2023/10/15"),
    notes: "This is a note for task 1",
  },
  {
    task: "This is task 2",
    status: "offline",
    due: new Date("2023/10/15"),
    notes: "This is a note for task 2",
  },
  {
    task: "This is task 3",
    status: "online",
    due: new Date("2023/10/15"),
    notes: "This is a note for task 3",
  },
  {
    task: "This is task 4",
    status: "online",
    due: new Date("2023/10/15"),
    notes: "This is a note for task 4",
  },
  {
    task: "This is task 5",
    status: "online",
    due: new Date("2023/10/15"),
    notes: "This is a note for task 5",
  },
  {
    task: "This is task 6",
    status: "ofline",
    due: new Date("2023/10/15"),
    notes: "",
  },
  {
    task: "This is task 7",
    status: "online",
    due: new Date("2023/10/15"),
    notes: "This is a note for task 7",
  },
  {
    task: "This is task 8",
    status: "ofline",
    due: new Date("2023/10/15"),
    notes: "This is a note for task 8",
  },
  {
    task: "This is task 9",
    status: "online",
    due: new Date("2023/10/15"),
    notes: "",
  },
];
