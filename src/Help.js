import React from 'react';
import { Link } from 'react-router-dom'; // This line is necessary
import './Help.css'; // Make sure this path matches the location of your CSS file

const Help = () => {
    return (
        <div className="help-container">
                        {/* Navigation buttons */}
                        <div className="navigation-buttons">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="/minter" className="nav-button">Minter</Link>
            </div>
            <h1 className="help-title">Help & Information</h1>

            <section className="help-section">
    <h2 className="section-title">Mission</h2>
    <p>
        CEnet is pioneering a transformative micro-credentials system tailored for Catholic Education across Australia. This groundbreaking initiative employs EVM-compatible blockchain technology, incorporating Soul Bound Tokens (SBTs) and the latest Web3 technologies. Our goal is to revolutionize the way educational accomplishments are acknowledged, managed, and authenticated, enhancing their accessibility, security, and verifiability.
    </p>
    <p>
        To achieve this vision, we are embracing a collaborative approach, inviting the broad CEnet community, including Dioceses and schools, to contribute to the development of this innovative product. This collaborative effort is not just about building a system; it's about fostering a community of contributors and stakeholders who are invested in the future of education.
    </p>
    <p>
        Participants who contribute to this project will be acknowledged with unique badges, such as "Badge Designer" and "WEB3 Tester," as a token of appreciation for their contributions. Join us in this exciting venture to shape the future of educational credentials, making them more reliable and accessible for everyone involved in Catholic Education in Australia.
    </p>
</section>

            <section className="help-section">
                <h2 className="section-title">Terms</h2>
                <dl className="terms-list">
                <dt>Alchemy</dt>
                <dd>A blockchain developer platform that provides tools and services to simplify the process of building, deploying, and scaling decentralized applications (DApps).</dd>

                <dt>Blockchain</dt>
                <dd>A decentralized digital ledger that records transactions across multiple computers ensuring transparency, security, and immutability.</dd>

                <dt>EVM Compatible</dt>
                <dd>Compatibility with the Ethereum Virtual Machine, ensuring that a blockchain can run smart contracts and decentralized applications (DApps) developed for Ethereum.</dd>

                <dt>Interplanetary File System (IPFS)</dt>
                <dd>A protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices.</dd>

                <dt>NFT (Non-Fungible Token)</dt>
                <dd>Unique blockchain-based tokens representing ownership of unique items or assets, each with a distinct value.</dd>

                <dt>Pinata</dt>
                <dd>A service that simplifies the process of uploading, managing, and deploying files to the Interplanetary File System (IPFS), making it easier for users to access and share decentralized content.</dd>

                <dt>SBT (Soul Bound Token)</dt>
                <dd>Non-transferable tokens representing personal credentials, achievements, or affiliations, ideal for educational credentials.</dd>

                <dt>Smart Contracts</dt>
                <dd>Self-executing contracts with the terms of the agreement directly written into code, automating the execution of contracts without intermediaries.</dd>

                <dt>Wallets</dt>
                <dd>Digital tools that allow users to store, send, and receive digital assets like cryptocurrencies and tokens.</dd>

                <dt>Web3</dt>
                <dd>A term that refers to the third generation of the internet, where websites and apps process information in a decentralized manner, often using blockchain technology.</dd>
                </dl>
            </section>

            <section className="help-section">
    <h2 className="section-title">Minting and Assigning a Badge</h2>
    <p>
        To mint and assign a badge, please follow the steps outlined below. This process leverages the functionality provided on the "Mint" page of our platform, utilizing the MetaMask wallet for transactions. If you have not yet installed MetaMask, detailed instructions are available on this Help page under the "Install and Use of the MetaMask Wallet" section.
    </p>
    <ol>
        <li>Navigate to the "Mint" page on our platform.</li>
        <li>Connect your MetaMask wallet. If you do not have a MetaMask wallet, please refer to the guidance provided on this Help page for installation and setup.</li>
        <li>Select the image you wish to use for the badge. This will be the visual representation of the badge you are minting.</li>
        <li>Provide a name for the badge. This should be a concise title that reflects the achievement or recognition the badge represents.</li>
        <li>Add a description for the badge. This should detail what the badge signifies and any criteria for its receipt.</li>
        <li>Enter the MetaMask wallet address of the badge's recipient. This ensures the badge is assigned to the correct individual.</li>
        <li>Click on the "Mint Badge" button to complete the process. The badge will then be minted and assigned to the specified recipient's wallet address.</li>
    </ol>
    <p>
        By following these steps, you can easily mint and assign badges, leveraging blockchain technology to authenticate and securely record the issuance of these digital recognitions.
    </p>
</section>


            <section className="help-section">
                <h2 className="section-title">Install and Use of the MetaMask Wallet</h2>
                <div className="sub-section">
                    <h3>How to Install</h3>
                    <ol>
                        <li>Visit the MetaMask website (<a href="https://metamask.io" target="_blank" rel="noopener noreferrer">MetaMask.io</a>) and select the appropriate version for your browser.</li>
                        <li>Click "Download" and follow the installation instructions to add MetaMask to your browser.</li>
                        <li>Open MetaMask and select "Create a Wallet" to set up a new wallet. Agree to the terms and create a password.</li>
                        <li>Write down your secret recovery phrase provided by MetaMask and keep it in a secure place. This phrase is crucial for wallet recovery.</li>
                    </ol>
                </div>
                <div className="sub-section">
                    <h3>How to Use</h3>
                    <ol>
                        <li>To connect your wallet to a blockchain application, click the "Connect Wallet" button on the application's website and select MetaMask.</li>
                        <li>Use MetaMask to send and receive digital assets by navigating to the "Send" or "Receive" options within the wallet interface.</li>
                        <li>Manage your digital assets and interact with smart contracts directly from the MetaMask dashboard.</li>
                    </ol>
                </div>
            </section>

            <p className="additional-info">For further assistance, please refer to the detailed guides provided within the MetaMask help center or contact MetaMask Support.</p>
        </div>
    );
};

export default Help;
