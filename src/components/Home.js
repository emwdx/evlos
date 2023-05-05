import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import { useContract, useNFTs, ThirdwebNftMedia,useUnclaimedNFTs} from "@thirdweb-dev/react";



const evlosAlpha1155 = "0x1C8EaBD6Bd22B4Edb9d361561734d48DF338f71E"
const evlosAlpha721 = "0x4451483A2b03B357671993706680F6b8C4f37A69"
const evlosAlphaSSIS = "0x6128a339D088378f923769182b66c1955072d9EA"

const Home = () => {
  const { contract, isLoading } = useContract(evlosAlpha1155);
  const { data: nfts, isContractLoading, error } = useNFTs(contract);


console.log(nfts)
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to FitCoin</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>FitCoin is a school program that uses a custom cryptocurrency for rewarding students.</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="primary">Learn More</Button>



        </Col>
      </Row>
      Loaded from ThirdWeb:
      {!isLoading ?
      (<div className="gallery">
        {nfts?.map((e,i) =>
          <ContractNFT key={i} nft={e}></ContractNFT>

        )}
      </div>)
      : (<p className="loading">Loading...</p>) }


    </Container>
  );
}


const ContractNFT = ({nft}) => {
  
  return (
    <Row className="border rounded mb-4 p-3">
      <Col md={4}>
        <Image src={nft.metadata.image} className="nft-image" />

      </Col>
      <Col md={6}>
        <h2>{nft.metadata.name} </h2>

        <p>{nft.metadata.description}</p>
      </Col>
      
    </Row>
  );
}

export default Home;
