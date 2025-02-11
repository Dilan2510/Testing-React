import { getHeroById } from "./08-imp-exp";


export const getElemtByIdPromise = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("No existe el heroe " + id);
      }
    }, 1000);
  });
};

