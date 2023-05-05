import React from 'react';
import { Row, Col, Image, Badge } from 'react-bootstrap';

const RewardNFT = ({ title, cost, description, imageURL, isRedeemed }) => {
  return (
    <Row className="border rounded mb-4 p-3">
      <Col md={4}>
      <Image src={imageURL} alt={title} className="nft-image" />

      </Col>
      <Col md={8}>
        <h2>{title} {isRedeemed && <Badge variant="warning">Redeemed</Badge>}</h2>
        <p><strong>Cost:</strong> {cost} Evlos Alpha</p>
        <p>{description}</p>
      </Col>
    </Row>
  );
}

export default RewardNFT;
