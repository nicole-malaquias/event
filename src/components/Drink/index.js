import Container_Drink from "./style";

const Drink = ({ item }) => {
  const { name, tagline, image_url } = item;
  return (
    <Container_Drink>
      <h4>{name}</h4>
      <span>{tagline}</span>
      <img src={image_url} />
    </Container_Drink>
  );
};

export default Drink;
