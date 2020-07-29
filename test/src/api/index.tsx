import axios from 'axios';
import { Dessert } from '../types';

const bodyForGet:string = `
{
  desserts {
    Dessert
    nutritionInfo {
      calories
      fat
      carb
      protein
    }
  }
}
`;

const bodyForAdd:string = `
mutation addDessert($dessert: dessertInput!) 
{
  addDessert(dessert: $dessert) {
    Dessert
    nutritionInfo {
      calories
      fat
      carb
      protein
    }
  }
}
`;

const bodyForDeletion:string = `
mutation deleteDesserts($desserts: [dessertInput]!) 
{
  deleteDesserts(desserts: $desserts) {
    Dessert
    nutritionInfo {
      calories
      fat
      carb
      protein
    }
  }
}
`;

const bodyForReset:string = `
{
  resetDesserts {
    Dessert
    nutritionInfo {
      calories
      fat
      carb
      protein
    }
  }
}
`;

export const getDessertsApi = () => axios.post('http://localhost:5000/', { query: bodyForGet }).then(({ data }) => data);

export const addDessertsApi = (dessert: Dessert) => axios.post('http://localhost:5000/', { query: bodyForAdd, variables: { dessert } }).then(({ data }) => data);

export const resetDessertsApi = () => axios.post('http://localhost:5000/', { query: bodyForReset }).then(({ data }) => data);

export const deleteDessertApi = (desserts: Dessert[]) => axios.post('http://localhost:5000/', { query: bodyForDeletion, variables: { desserts } }).then(({ data }) => data);
