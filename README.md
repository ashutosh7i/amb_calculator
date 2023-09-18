# AMB Calculator

This is a simple Average Monthly Balance (AMB) calculator web application implemented in React. It allows you to calculate the total closing balance, average monthly balance, and whether the average monthly balance is maintained based on the provided values.

## What is Average Monthly Balance (AMB)?

Average Monthly Balance (AMB) is a financial metric used by banks to calculate the average amount of money maintained in a bank account over a month. It is an essential criterion for various types of bank accounts, especially savings accounts. AMB is calculated by adding the closing balance of an account for each day of a month and then dividing it by the number of days in that month.

## How AMB is Calculated

1. **Collect Daily Closing Balances**: For each day of the month, collect the closing balance of the bank account.

2. **Sum the Closing Balances**: Add up all the daily closing balances for the month.

3. **Calculate Average**: Divide the sum of closing balances by the number of days in the month.

   **AMB = (Sum of Daily Closing Balances) / (Number of Days in the Month)**

## Features

- Input the daily closing balance for each day of the month.
- Calculate the total closing balance for the month.
- Calculate the average monthly balance.
- Determine if the average monthly balance is maintained as per the provided AMB requirement.

## Usage

1. Input the required Average Monthly Balance (AMB) in the "AMB required" textarea.

2. Input the daily closing balances for each day of the month in the corresponding textareas (1 to 31).

3. The application will automatically calculate and display the total closing balance, average monthly balance, and whether the AMB is maintained.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/amb_calculator.git

2. Change to the project directory:
cd amb-calculator

3. Install dependencies:
npm install

4. Start the development server:
npm start

5. Open your browser and navigate to http://localhost:3000 to use the AMB calculator.

## Vanilla JavaScript Version
A vanilla JavaScript version of this calculator is also available in the repository. You can find it in the vanillaJs_Version file.

### keep Hacking🚀✨