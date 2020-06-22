import * as cities from './../../public/cities.json';

// If we ever modify cities.json, we will have an error : 
test('Cities data is correct', () =>{
    expect(cities).toMatchSnapshot();
});
