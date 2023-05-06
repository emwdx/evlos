import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import RewardNFT from './components/RewardNFT';
import fetchSheetData from './fetchSheetData';
import { ConnectWallet, useBalance, useTokenBalance, useContract, useAddress } from "@thirdweb-dev/react";
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

const EVLOS_ALPHA_CONTRACT_ADDRESS = "0x09D5FDd1E3452D81093428CAd130117cAe24c8D9"

function App() {
  const [rewardNFTData, setRewardNFTData] = useState([]);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [transactionInProgress, setTransactionInProgress] = useState(false);

  const { contract, isLoading } = useContract(EVLOS_ALPHA_CONTRACT_ADDRESS,'token');
  const address = useAddress();

  const { data, isBalanceLoading, error } = useTokenBalance(
    contract,address
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSheetData();
      setRewardNFTData(data);
    };

    fetchData();
  }, []);

  const handleTransfer = async () => {
    if (!recipientAddress || !transferAmount) {
      alert("Please fill in both fields.");
      return;
    }
    setTransactionInProgress(true);
    try {
      await contract.erc20.transfer(recipientAddress, transferAmount);
      alert(`Successfully sent ${transferAmount} EVLOS_ALPHA to ${recipientAddress}`);
    } catch (err) {
      console.error(err);
      alert("Failed to send EVLOS_ALPHA.");
    } finally {
      setTransactionInProgress(false);
    }
  };

  return (
    <div className="App">
<Container>
<Home />
</Container>

      <Container>
        <Row>
          <Col> <ConnectWallet /></Col>
        </Row>
          
        {data ? (
          <Row>
            <Col>
              Your current balance is {data.displayValue} Evlos Alpha.
            </Col>
          </Row>
        ) : ("No balance reported.")}

        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Recipient Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="0x..."
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  step="any"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleTransfer} disabled={transactionInProgress}>
                Send EvlosAlpha
              </Button>
              {transactionInProgress && (
                <Spinner animation="border" role="status">
                <span className="sr-only" style={{ position: 'absolute', clip: 'rect(1px, 1px, 1px, 1px)' }}>
                  Transaction in progress...
                </span>
              </Spinner>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
<hr></hr>
      <Container>
        The available rewards below are being loaded from Google Sheets:
        {rewardNFTData.map((nft, index) => (
          <RewardNFT key={index} {...nft} />
        ))}
      </Container>
    </div>
  );
}

export default App;

//mainwallet: 0x56b5dB0ddD7E6Af6f021778D0783628A8b25e36a
//secondwallet: 0x11380F06cBF330491c8979E1937DfC6C509EE469