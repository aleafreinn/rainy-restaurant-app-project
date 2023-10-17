import styled from "@emotion/styled";
import PropTypes from "prop-types";

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  gap: 0.5rem;
  border: 2px solid white;
  border-radius: 10px;
  & > p {
    color: #ffffffcc;
    font-size: 30pt;
    margin: 0;
  }
  & > h3 {
    margin: 0;
  }
`;

const FoodItem = ({ name, desc, price }) => {
  return (
    <FoodContainer>
      <p>{name}</p>
      <div>{desc}</div>
      <h3>RM{price}</h3>
      <button>add to cart</button>
    </FoodContainer>
  );
};

FoodItem.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
};

export default FoodItem;
