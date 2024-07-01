# sCrypt Smart Contract Demo

This repository was forked and cloned from [Timechain Labs' smart-contract-demo] (https://github.com/timechainlabs/smart-contract-demo) as part of the TSOC 24 workshop on sCrypt smart contracts.

## Overview

This project demonstrates how to work with sCrypt smart contracts. It includes example contract files and deployment scripts. The project originally included the following files:

- `demo.ts` - A demo contract
- `root.ts` - A root contract
- `deploy.ts` - Script to deploy `demo.ts`
- `deploy-root.ts` - Script to deploy `root.ts`

During the workshop, we examined these files to understand how the contracts and deployment scripts work. Additionally, we created new files:

- `multiplier.ts` - A custom contract
- `deploy-multiplier.ts` - Script to deploy `multiplier.ts`

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/GayathriPCh/sCrypt-smart-contract-tssoc.git
    cd sCrypt-smart-contract-tssoc
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

### Compiling Contracts

Before deploying any contracts, you need to compile them. Run the following command:

```bash
npm run compile
```

### Deploying Contracts

You can deploy the contracts using the respective deployment scripts. Here are the commands for each contract:

- Deploy `demo.ts`:
    ```bash
    npm run deploy
    ```

- Deploy `root.ts`:
    ```bash
    npm run deploy-root
    ```

- Deploy `multiplier.ts`:
    ```bash
    npm run deploy-multiplier
    ```

## Learning Outcomes

- Understanding the structure of sCrypt smart contracts.
- Learning how to compile and deploy sCrypt contracts.
- Creating and deploying a custom contract (`multiplier.ts`).

