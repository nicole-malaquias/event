import Container_Drink from "./style";

const Drink = ({ item }) => {
  const { name, tagline, image_url } = item;
  return (
    <Container_Drink>
      <h4>{name}</h4>
      <br></br>
      <span>{tagline}</span>
      <img src={image_url} />
      <button> ADD</button>
    </Container_Drink>
  );
};

export default Drink;
