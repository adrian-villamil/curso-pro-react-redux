import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = ({ name, image, abilities }) => {

  const getAbilities = (abilities) => {
    return abilities.map(ability => ability.ability.name).join(', ');
  };

  return <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
    <Meta description={getAbilities(abilities)} />
  </Card>
};

export default PokemonCard;