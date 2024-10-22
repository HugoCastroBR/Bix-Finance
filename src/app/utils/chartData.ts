import { Transaction } from "./types";

export const getTransactionTypeData = (transactions: Transaction[]) => {
  if (!transactions) {
    return {
      labels: ['Deposit', 'Withdraw'],
      datasets: [
        {
          label: 'Transaction Type',
          data: [0, 0],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    };
  }

  return {
    labels: ['Deposit', 'Withdraw'],
    datasets: [
      {
        label: 'Transaction Type',
        data: [
          transactions.filter((t) => t.transaction_type === 'deposit').length,
          transactions.filter((t) => t.transaction_type === 'withdraw').length,
        ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };
};

export const getLineData = (transactions: Transaction[]) => {
  if (!transactions) {
    return {
      labels: [],
      datasets: [
        {
          label: 'Transaction Amount',
          data: [],
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
      ],
    };
  }

  const labels = transactions.map((t) => new Date(t.date).toLocaleDateString());
  const uniqueLabels = Array.from(new Set(labels));

  return {
    labels: uniqueLabels,
    datasets: [
      {
        label: 'Transaction Amount',
        data: uniqueLabels.map(label =>
          transactions
            .filter(t => new Date(t.date).toLocaleDateString() === label)
            .reduce((acc, cur) => acc + parseFloat(cur.amount), 0)
        ),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };
};

export const getIndustryData = (transactions: Transaction[]) => {
  if (!transactions) {
    return {
      labels: [],
      datasets: [
        {
          label: 'Transaction by Industry',
          data: [],
          backgroundColor: 'rgba(255, 206, 86, 0.6)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
      ],
    };
  }

  const industryLabels = Array.from(new Set(transactions.map((t) => t.industry)));

  return {
    labels: industryLabels,
    datasets: [
      {
        label: 'Transaction by Industry',
        data: industryLabels.map(
          (industry) =>
            transactions
              .filter((t) => t.industry === industry)
              .reduce((acc, cur) => acc + parseFloat(cur.amount), 0)
        ),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };
};

export const getStateData = (transactions: Transaction[]) => {
  if (!transactions) {
    return {
      labels: [],
      datasets: [
        {
          label: 'Transactions by State',
          data: [],
          backgroundColor: 'rgba(255, 159, 64, 0.6)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        },
      ],
    };
  }
  const stateLabels = Array.from(new Set(transactions.map((t) => t.state)));

  return {
    labels: stateLabels,
    datasets: [
      {
        label: 'Transactions by State',
        data: stateLabels.map(
          (state) => transactions.filter((t) => t.state === state).length
        ),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };
};

export const getIndustryTransactionData = (transactions: Transaction[]) => {
  if (!transactions) {
    return {
      labels: [],
      datasets: [
        {
          label: 'Transactions by Industry',
          data: [],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  }
  const industryLabels = Array.from(new Set(transactions.map((t) => t.industry)));
  console.log('loading industry data', industryLabels);
  return {
    labels: industryLabels,
    datasets: [
      {
        label: 'Transactions by Industry',
        data: industryLabels.map(
          (industry) =>
            transactions.filter((t) => t.industry === industry).length
        ),
        backgroundColor: industryLabels.map((_, index) => {
          const colors = [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ];
          return colors[index % colors.length];
        }),
        borderColor: industryLabels.map((_, index) => {
          const colors = [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ];
          return colors[index % colors.length];
        }),
        borderWidth: 1,
      },
    ],
  };
};