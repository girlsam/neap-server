exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({
          name: 'Tanzania Peaberry Coffee',
          roaster: 'Tasmanian Devil Roasters',
          origin: 'Mt. Kilimanjaro',
          roast: 'medium',
          caffeine: 45,
          decaf: 'false',
          price: 8,
          quantity: 10
        }),
        knex('coffee').insert({
          name: 'Hawaii Knoa Coffee',
          roaster: 'Surfer Dude Coffee Roaster',
          origin: 'Hawaii',
          roast: 'dark',
          caffeine: 90,
          decaf: 'false',
          price: 10,
          quantity: 9
        }),
        knex('coffee').insert({
          name: 'Java Arabica Coffee',
          roaster: 'Java Time Roasters',
          origin: 'Indonesia',
          roast: 'dark',
          caffeine: 80,
          decaf: 'false',
          price: 8,
          quantity: 12
        }),
        knex('coffee').insert({
          name: 'Sumatra Linton Coffee',
          roaster: 'Lake Roasters',
          origin: 'Lake Toba',
          roast: 'dark',
          caffeine: 10,
          decaf: 'true',
          price: 9,
          quantity: 12
        }),
        knex('coffee').insert({
          name: 'Sulawesi Toraja Coffee',
          roaster: 'Hard To Pronounce Roasters',
          origin: 'The Jungle',
          roast: 'dark',
          caffeine: 5,
          decaf: 'true',
          price: 10,
          quantity: 12
        }),
        knex('coffee').insert({
          name: 'Mocha Java Coffee',
          roaster: 'Dark Roasters',
          origin: 'Yemen',
          roast: 'dark',
          caffeine: 90,
          decaf: 'false',
          price: 8,
          quantity: 10
        }),
        knex('coffee').insert({
          name: 'Ethiopian Harrar Coffee',
          roaster: 'African Roasters',
          origin: 'Ethiopia',
          roast: 'dark',
          caffeine: 110,
          decaf: 'false',
          price: 10,
          quantity: 8
        }),
        knex('coffee').insert({
          name: 'Ethiopian Yirgacheffe Coffee',
          roaster: 'Yirgi Roasters',
          origin: 'Ethiopia',
          roast: 'dark',
          caffeine: 100,
          decaf: 'false',
          price: 9,
          quantity: 10
        }),
        knex('coffee').insert({
          name: 'Jamaica Blue Mountain Coffee',
          roaster: 'Island Roasters',
          origin: 'Jamaica',
          roast: 'light',
          caffeine: 10,
          decaf: 'true',
          price: 10,
          quantity: 10
        }),
        knex('coffee').insert({
          name: 'Kenya AA Coffe',
          roaster: 'Plateau Roasters',
          origin: 'Kenya',
          roast: 'medium',
          caffeine: 120,
          decaf: 'false',
          price: 11,
          quantity: 10
        })
      ]);
    });
};
