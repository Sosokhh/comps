import { Injectable } from '@angular/core';



@Injectable()
export class CardsService {
  cards = [
    {
      name: 'American Cocker Spaniel',
      breed: 'dog',
      img: 'https://www.hepper.com/wp-content/uploads/2023/08/american-cocker-spaniel-in-the-grass_Rin-Seiko-Shutterstock.jpg',
      description: `The American Cocker Spaniel is a beloved breed known for its friendly and gentle nature. They are a small to medium-sized dog with a distinctive coat and expressive eyes. American Cocker Spaniels make excellent family pets and are known for their affectionate and playful personalities. They are often used as therapy dogs and excel in obedience training.`
    }, {
      name: 'Bengal Tiger',
      breed: 'Panthera tigris tigris',
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Adult_male_Royal_Bengal_tiger.jpg',
      description: `The Bengal Tiger is the most numerous tiger subspecies. They are known for their distinctive orange coat with black stripes and are native to the Indian subcontinent. Bengal Tigers are apex predators and play a crucial role in maintaining the ecosystem.`,
    },
    {
      name: 'Bald Eagle',
      breed: 'Haliaeetus leucocephalus',
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/About_to_Launch_%2826075320352%29.jpg',
      description: `The Bald Eagle is a bird of prey found in North America and is the national bird and symbol of the United States. These majestic eagles are known for their distinctive white head and tail. They are strong and skilled hunters, primarily feeding on fish and waterfowl.`
    },
    {
      name: 'African Elephant',
      breed: 'Loxodonta africana',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/640px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
      description: `The African Elephant is the largest land animal on Earth. They are known for their enormous size, large ears, and long trunks. African Elephants are herbivores and play a vital role in shaping the ecosystems of the African savannahs and forests.`,
    },  {
      name: 'Killer Whale',
      breed: 'Orcinus orca',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1200px-Killerwhales_jumping.jpg',
      description: `The Killer Whale, also known as the Orca, is a top predator in the ocean. They are highly intelligent and social animals, often found in pods. Killer Whales have a diverse diet that includes fish, seals, and even other marine mammals.`,
    },  {
      name: 'Red Fox',
      breed: 'Vulpes vulpes',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Vulpes_vulpes_ssp_fulvus.jpg',
      description: `The Red Fox is a small, adaptable carnivore found in various habitats across the Northern Hemisphere. They are known for their red fur and bushy tail. Red Foxes are skilled hunters and scavengers, and their diet includes small mammals, birds, and fruits.`
    }
  ]

  constructor() { }
}
