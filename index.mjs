const ledger = [
  { month: 1, paidBy: "andres", amount: 100 },
  { month: 2, paidBy: "andres", amount: 100 },
  { month: 3, paidBy: "andres", amount: 100 },
  { month: 4, paidBy: "andres", amount: 100 },
  { month: 5, paidBy: "andres", amount: 100 },
  { month: 6, paidBy: "andres", amount: 100 },
  { month: 7, paidBy: "andres", amount: 100 },
  { month: 8, paidBy: "andres", amount: 100 },
  { month: 9, paidBy: "andres", amount: 100 },
  { month: 10, paidBy: "andres", amount: 100 },
  { month: 11, paidBy: "andres", amount: 100 },
  { month: 12, paidBy: "andres", amount: 0 },

  { month: 1, paidBy: "laura", amount: 100 },
  { month: 2, paidBy: "laura", amount: 100 },
  { month: 3, paidBy: "laura", amount: 100 },
  { month: 4, paidBy: "laura", amount: 100 },
  { month: 5, paidBy: "laura", amount: 100 },
  { month: 6, paidBy: "laura", amount: 100 },
  { month: 7, paidBy: "laura", amount: 100 },
  { month: 8, paidBy: "laura", amount: 100 },
  { month: 9, paidBy: "laura", amount: 100 },
  { month: 10, paidBy: "laura", amount: 100 },
  { month: 11, paidBy: "laura", amount: 100 },
  { month: 12, paidBy: "laura", amount: 0 },

  { month: 1, paidBy: "luz", amount: 100 },
  { month: 2, paidBy: "luz", amount: 100 },
  { month: 3, paidBy: "luz", amount: 100 },
  { month: 4, paidBy: "luz", amount: 100 },
  { month: 5, paidBy: "luz", amount: 100 },
  { month: 6, paidBy: "luz", amount: 100 },
  { month: 7, paidBy: "luz", amount: 100 },
  { month: 8, paidBy: "luz", amount: 100 },
  { month: 9, paidBy: "luz", amount: 100 },
  { month: 10, paidBy: "luz", amount: 100 },
  { month: 11, paidBy: "luz", amount: 100 },
  { month: 12, paidBy: "luz", amount: 0 },

  { month: 1, paidBy: "diana", amount: 100 },
  { month: 2, paidBy: "diana", amount: 100 },
  { month: 3, paidBy: "diana", amount: 100 },
  { month: 4, paidBy: "diana", amount: 100 },
  { month: 5, paidBy: "diana", amount: 100 },
  { month: 6, paidBy: "diana", amount: 100 },
  { month: 7, paidBy: "diana", amount: 100 },
  { month: 8, paidBy: "diana", amount: 100 },
  { month: 9, paidBy: "diana", amount: 100 },
  { month: 10, paidBy: "diana", amount: 100 },
  { month: 11, paidBy: "diana", amount: 100 },
  { month: 12, paidBy: "diana", amount: 0 },

  { month: 1, paidBy: "juan", amount: 100 },
  { month: 2, paidBy: "juan", amount: 0 },
  { month: 3, paidBy: "juan", amount: 0 },
  { month: 4, paidBy: "juan", amount: 0 },
  { month: 5, paidBy: "juan", amount: 0 },
  { month: 6, paidBy: "juan", amount: 0 },
  { month: 7, paidBy: "juan", amount: 0 },
  { month: 8, paidBy: "juan", amount: 0 },
  { month: 9, paidBy: "juan", amount: 0 },
  { month: 10, paidBy: "juan", amount: 0 },
  { month: 11, paidBy: "juan", amount: 0 },
  { month: 12, paidBy: "juan", amount: 0 },

  { month: 1, paidBy: "karen", amount: 100 },
  { month: 2, paidBy: "karen", amount: 100 },
  { month: 3, paidBy: "karen", amount: 100 },
  { month: 4, paidBy: "karen", amount: 100 },
  { month: 5, paidBy: "karen", amount: 100 },
  { month: 6, paidBy: "karen", amount: 100 },
  { month: 7, paidBy: "karen", amount: 100 },
  { month: 8, paidBy: "karen", amount: 100 },
  { month: 9, paidBy: "karen", amount: 100 },
  { month: 10, paidBy: "karen", amount: 100 },
  { month: 11, paidBy: "karen", amount: 100 },
  { month: 12, paidBy: "karen", amount: 0 },
];

function App() {
  const installmentsTbody = document.querySelector("#installments tbody");

  const groupped = Object.groupBy(ledger, ({ paidBy }) => paidBy);

  Object.keys(groupped).forEach((key) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.classList.add("participant");
    th.textContent = key;
    tr.appendChild(th);

    groupped[key].forEach(({ amount }) => {
      const td = document.createElement("td");
      td.innerHTML = amount > 0 ? "✅" : "";
      td.classList.add("row", amount > 0 ? "paid" : "not-paid");
      tr.appendChild(td);
    });
    installmentsTbody.appendChild(tr);
  });
}

App();
