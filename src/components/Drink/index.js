import Container_Drink from "./style";

const Drink = ({ item }) => {
  const { name, tagline, image_url, value } = item;
  return (
    <Container_Drink>
      <h4>{name}</h4>
      <br></br>
      <span>{tagline}</span>
      <img src={image_url} />
      <span> {console.log(value)}</span>
    </Container_Drink>
  );
};

export default Drink;
