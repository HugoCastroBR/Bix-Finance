import { getTransactionTypeData, getLineData, getIndustryData, getStateData, getIndustryTransactionData } from "@/app/utils/chartData";
import { Transaction } from "@/app/utils/types";

const mockTransactions: Transaction[] = [
  {
    date: 1682698259192,
    amount: "5565",
    transaction_type: "deposit",
    currency: "brl",
    account: "Baker Hughes",
    industry: "Oil and Gas Equipment",
    state: "TX",
  },
  {
    date: 1673216606378,
    amount: "3716",
    transaction_type: "deposit",
    currency: "brl",
    account: "General Mills",
    industry: "Food Consumer Products",
    state: "MN",
  },
  {
    date: 1671293734303,
    amount: "1480",
    transaction_type: "withdraw",
    currency: "brl",
    account: "Wynn Resorts",
    industry: "Hotels",
    state: "NV",
  },
  {
    date: 1661438596457,
    amount: "6894",
    transaction_type: "deposit",
    currency: "brl",
    account: "Hyatt Hotels",
    industry: "Hotels",
    state: "IL",
  },
];

describe('Transaction Data Functions', () => {
  test('getTransactionTypeData should return correct transaction type data', () => {
    const result = getTransactionTypeData(mockTransactions);
    expect(result.labels).toEqual(['Deposit', 'Withdraw']);
    expect(result.datasets[0].data).toEqual([3, 1]); 
  });

  test('getLineData should return correct line data for transactions', () => {
    const result = getLineData(mockTransactions);
    expect(result.labels).toEqual([
      '4/28/2023', // Baker Hughes (date: 1682698259192)
      '1/8/2023', // General Mills (date: 1673216606378)
      '12/17/2022', // Wynn Resorts (date: 1671293734303)
      '8/25/2022', // Hyatt Hotels (date: 1661438596457)
    ]);
    expect(result.datasets[0].data).toEqual([5565, 3716, 1480, 6894]);
  });

  test('getIndustryData should return correct industry data', () => {
    const result = getIndustryData(mockTransactions);
    expect(result.labels).toEqual(['Oil and Gas Equipment', 'Food Consumer Products', 'Hotels']);
    expect(result.datasets[0].data).toEqual([5565, 3716, 6894 + 1480]); // Total Hotels: 6894 + 1480
  });

  test('getStateData should return correct state data', () => {
    const result = getStateData(mockTransactions);
    expect(result.labels).toEqual(['TX', 'MN', 'NV', 'IL']);
    expect(result.datasets[0].data).toEqual([1, 1, 1, 1]); 
  });

  test('getIndustryTransactionData should return correct industry transaction data', () => {
    const result = getIndustryTransactionData(mockTransactions);
    expect(result.labels).toEqual(['Oil and Gas Equipment', 'Food Consumer Products', 'Hotels']);
    expect(result.datasets[0].data).toEqual([1, 1, 2]); 
  });
});
