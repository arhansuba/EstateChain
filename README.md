Copy# EstateChain

EstateChain: Revolutionizing real estate investments through blockchain-powered fractional ownership and global accessibility.

## Short Summary

EstateChain democratizes real estate investing by leveraging Stellar blockchain for secure, transparent, and fractional property ownership.

## Full Description

EstateChain tackles the longstanding challenges in real estate investing:

- High entry barriers that exclude many potential investors
- Lack of transparency in transactions and ownership
- Slow and costly transaction processes

Our solution harnesses the power of the Stellar blockchain to:

1. Enable fractional ownership through property tokenization, allowing investments of any size
2. Increase market liquidity by facilitating easy trading of property shares
3. Ensure complete transparency with all transactions and ownership records on the blockchain
4. Dramatically reduce transaction costs and times using Stellar's efficient network
5. Automate property management and income distribution through smart contracts
6. Provide real-time tracking of investments and returns

By addressing these pain points, EstateChain opens up real estate investing to a global audience, making it more accessible, efficient, and transparent than ever before.

## Technical Description

EstateChain is built on cutting-edge blockchain technology, specifically leveraging the Stellar network for its superior speed and cost-efficiency in financial transactions.

Key Stellar features utilized:
- **Fast and Low-Cost Transactions**: Enables micro-investments and frequent trading without prohibitive fees
- **Asset Tokenization**: Allows creation of tokens representing fractional property ownership
- **Smart Contracts**: Automates complex processes like rental income distribution and property sales

Our tech stack includes:
- Stellar SDK: For seamless blockchain interaction
- Next.js: Powers our responsive and dynamic frontend
- Rust: Used for developing robust and efficient smart contracts

This combination allows us to create a platform that's not just technologically advanced, but also user-friendly and scalable.

## Presentation

[EstateChain Presentation](https://www.canva.com/design/DAGTYbz3kc8/MqZyKWbhnaRndGifKUBNRQ/edit?utm_content=DAGTYbz3kc8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## Smart Contract and Integration

Our smart contract, built on Soroban (Stellar's smart contract platform), is the backbone of EstateChain. It manages critical functions such as:

1. **Property Tokenization**: `tokenize_property(property_id: u32, total_shares: u64, price_per_share: i128) -> bool`
2. **Share Purchase**: `purchase_shares(buyer: Address, property_id: u32, num_shares: u64) -> bool`
3. **Share Sale**: `sell_shares(seller: Address, property_id: u32, num_shares: u64, price: i128) -> bool`
4. **Rental Income Distribution**: `distribute_rental_income(property_id: u32, total_income: i128) -> bool`
5. **Property Valuation Updates**: `update_property_value(property_id: u32, new_value: i128) -> bool`

The frontend seamlessly integrates with these functions via the Stellar SDK, providing a smooth user experience from wallet connection to investment management.

## Demo

[Video Demo Coming Soon]

## Screenshots

[Screenshots of Key Features Coming Soon]

## Project Walkthrough

[Detailed Project Walkthrough Video Coming Soon]

## Setup and Installation

To get EstateChain running locally:

1. Clone the repository:
git clone https://github.com/arhansuba/EstateChain.git
cd EstateChain


2. Install dependencies:
npm install --legacy-peer-deps
Set up environment variables:

3. Set up environment variables:
- Create a `.env` file in the root directory
- Add the following:
  ```
  STELLAR_NETWORK=testnet
  CONTRACT_ID=your_contract_id_here
  ```

4. Start the development server:


npm run dev

5. Open `http://localhost:3000` in your browser

Note: A Stellar wallet (e.g., Freighter) is required for full functionality.

## Team

Our accomplished team brings a wealth of blockchain and hackathon experience:

- **Arhan Subaşı**
- Role: Full-stack Developer & Smart Contract Specialist
- Accolades: 5-time hackathon participant, IDEAthon winner
- Expertise: Stellar blockchain, smart contracts, full-stack development

- **Emirhan Çavuşoğlu**
- Role: Full-stack Developer & Smart Contract Specialist
- Accolades: 2-time hackathon winner, including ETHGlobal Brussels
- Expertise: React, Next.js, blockchain integration, UI/UX design

Together, we combine deep technical knowledge with proven ability to innovate rapidly, ensuring EstateChain pushes the boundaries of what's possible in decentralized real estate investment.



## License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# EstateChain
