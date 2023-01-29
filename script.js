const salaries = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};

const team = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];

const calculateSalary = (specialization) => {
  const { salary, tax } = salaries[specialization];
  const taxAmount = (Number(tax.replace("%", "")) / 100) * salary;
  return salary + taxAmount;
};

const teamSalaries = team.map(({ specialization }) => ({
  specialization,
  salary: calculateSalary(specialization),
}));

const totalSalary = teamSalaries.reduce(
  (accumulate, { salary }) => accumulate + salary,
  0
);

console.log(teamSalaries);

console.log(totalSalary);
