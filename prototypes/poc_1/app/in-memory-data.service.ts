export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice', description: 'This is the default description for a hero'},
      {id: 12, name: 'Narco', description: 'This is the default description for a hero'},
      {id: 13, name: 'Bombasto', description: 'This is the default description for a hero'},
      {id: 14, name: 'Celeritas', description: 'This is the default description for a hero'},
      {id: 15, name: 'Magneta', description: 'This is the default description for a hero'},
      {id: 16, name: 'RubberMan', description: 'This is the default description for a hero'},
      {id: 17, name: 'Dynama', description: 'This is the default description for a hero'},
      {id: 18, name: 'Dr IQ', description: 'This is the default description for a hero'},
      {id: 19, name: 'Magma', description: 'This is the default description for a hero'},
      {id: 20, name: 'Tornado', description: 'This is the default description for a hero'}
    ];
    return {heroes};
  }
}
