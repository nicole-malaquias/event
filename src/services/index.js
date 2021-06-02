import axios from "axios";
const Catalogo = axios.get("https://api.punkapi.com/v2/beers").then((r) => r);

export default Catalogo;
