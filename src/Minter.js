import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // This line is necessary
import { connectWallet, getCurrentWalletConnected, mintNFT } from "./utils/interact.js";
import logo from './images/CEnetSymbol.png';
import styles from './Minter.module.css' // Scoped CSS module
import { FaEthereum } from 'react-icons/fa'; // Example of using react-icons
import cenetLogo from './images/cenetsoftware.png';

import ImagePicker from './utils/ImagePicker.js';

				

		  
							

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
 
  useEffect(async () => {
    const {address, status} = await getCurrentWalletConnected();

    setWallet(address)
    setStatus(status); 

    addWalletListener();
}, []);

function addWalletListener() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
        setStatus("👆🏽 Your wallet is connected. We are ready to mint.");
      } else {
        setWallet("");
        setStatus("🦊 Connect your Metamask wallet by clicking on the Connect Wallet button.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install Metamask, a virtual Ethereum wallet, in your
          browser.
        </a>
      </p>
    );
	 
  }
}

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(url, name, description, receiverAddress);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
    }
  };

  return (
    <section className={styles.minter}>
                  {/* Navigation buttons */}
                  <div className={styles.navigationButtons}>
                <Link to="/" className={styles.navButton}>Home</Link>
                <Link to="/help" className={styles.navButton}>Help</Link>
            </div>
      <header className={styles.walletHeader}>
      
        <button onClick={connectWalletPressed} className={styles.walletButton}>
          {walletAddress.length > 0 ? (
            `Connected: ${String(walletAddress).substring(0, 6)}...${String(walletAddress).substring(38)}`
          ) : (
            "Connect Wallet"
          )}
        </button>
      </header>

      <div className={styles.formContainer}>
        <h1 className={styles.title}>Mint and assign Credential/Badge</h1>
        <p className={styles.instructions}>
          Select the badge image, add a name, description and the receiver wallet address. Then press "Mint Badge"
        </p>
        
        <form className={styles.mintForm}>

        <ImagePicker onImageSelected={(url) => setURL(url)} />


          <div className={styles.formField}>
            <label htmlFor="microCertName" className={styles.formLabel}>
              MicroCert Name:
            </label>
            <input
              id="microCertName"
              type="text"
              placeholder="e.g. Environment Award L3"
              onChange={(event) => setName(event.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="description" className={styles.formLabel}>
              Description:
            </label>
            <input
              id="description"
              type="text"
              placeholder="e.g. Awarded to students who have completed the Environment Level 3 course."
              onChange={(event) => setDescription(event.target.value)}
              className={styles.formInput}
            />
          </div>
          <div className={styles.formField}>
  <label htmlFor="receiverAddress" className={styles.formLabel}>
    Receiver Wallet Address:
  </label>
  <input
    id="receiverAddress"
    type="text"
    placeholder="e.g. 0x123..."
    onChange={(event) => setReceiverAddress(event.target.value)}
    className={styles.formInput}
  />
</div>

          <button onClick={onMintPressed} className={styles.mintButton}>
            Mint Cert
          </button>
        </form>
      </div>

      <footer className={styles.statusFooter}>
      <p className={styles.statusMessage}>{status}</p>

  <img src={cenetLogo} alt="CEnet Software" className={styles.logo} />
</footer>
    </section>
  );
};

export default Minter;