import  heroes  from "../data/heroes";

export const getHeroById = (id) => {
  return heroes.find((res) => res.id === id);
};

export const getHeroByOwner = (owner) => {
  return heroes.filter((res) => res.owner === owner);
};
