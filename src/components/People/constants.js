import dp from "components/Picture1.png";

const currentDate = new Date();
const day = ("0" + currentDate.getDate()).slice(-2);
const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
const year = currentDate.getFullYear();

const formatDate = `${year}-${month}-${day}`;

export const tableData = [
  {
    id: 1,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 2,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 3,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 4,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 5,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 6,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 7,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 8,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 9,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
  {
    id: 10,
    employeeName: "MapBook",
    birthDay: formatDate,
    age: 22,
    employmentDate: formatDate,
    nextServiceYearIn: formatDate,
    serviceLength: 3,
  },
];

export const peopleDetails = {
  directorGlobalOperations: [
    {
      name: "Joydeep Chakraborty",
      profilePhoto: dp,
      position: "Director-Global Operations",
    },
  ],
  directorITProjects: [
    {
      name: "Rani Parihar",
      profilePhoto: dp,
      position: "Director-IT Projects",
    },
  ],
  ITProjectManager: [
    {
      name: "Rasika Shinde",
      profilePhoto: dp,
      position: "IT - Project Manager",
    },
  ],
  employees: [
    {
      name: "employees name 1",
      profilePhoto: dp,
      employeePosition: "position 1",
      position: "Employees",
    },
    {
      name: "employees name 2",
      profilePhoto: dp,
      employeePosition: "position 2",
      position: "Employees",
    },
    {
      name: "employees name 3",
      profilePhoto: dp,
      employeePosition: "position 3",
      position: "Employees",
    },
    {
      name: "employees name 4",
      profilePhoto: dp,
      employeePosition: "position 4",
      position: "Employees",
    },
    {
      name: "employees name 5",
      profilePhoto: dp,
      employeePosition: "position 5",
      position: "Employees",
    },
    {
      name: "employees name 6",
      profilePhoto: dp,
      employeePosition: "position 6",
      position: "Employees",
    },
    {
      name: "employees name 7",
      profilePhoto: dp,
      employeePosition: "position 7",
      position: "Employees",
    },
    {
      name: "employees name 8",
      profilePhoto: dp,
      employeePosition: "position 8",
      position: "Employees",
    },
    {
      name: "employees name 9",
      profilePhoto: dp,
      employeePosition: "position 9",
      position: "Employees",
    },
    {
      name: "employees name 10",
      profilePhoto: dp,
      employeePosition: "position 10",
      position: "Employees",
    },
    {
      name: "employees name 11",
      profilePhoto: dp,
      employeePosition: "position 11",
      position: "Employees",
    },
    {
      name: "employees name 12",
      profilePhoto: dp,
      employeePosition: "position 12",
      position: "Employees",
    },
  ],
};

export const cardDetails = {
  today: [
    {
      name: "Keshav Methar",
      profilePhoto: dp,
      position: "Sr Full stack Developer",
    },
    {
      name: "Keshav Methar",
      profilePhoto: dp,
      position: "Sr Full stack Developer",
    },
    {
      name: "Keshav Methar",
      profilePhoto: dp,
      position: "Sr Full stack Developer",
    },
  ],
  tomorrow: [
    {
      name: "Keshav Methar",
      profilePhoto: dp,
      position: "Sr Full stack Developer",
    },
    {
      name: "Keshav Methar",
      profilePhoto: dp,
      position: "Sr Full stack Developer",
    },
    {
      name: "Keshav Methar",
      profilePhoto: dp,
      position: "Sr Full stack Developer",
    },
  ],
};
