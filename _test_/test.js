/* eslint-disable */
  
  const { getitems }  = require('../data/items'); 
  
  jest.mock("../data/items", () => {
    const items = jest.requireActual("../data/items");
  
    return {
      __esModule: true,
      getitems: jest.fn(() => {
        return {
          itemsFound: true,
          items: 
            {
              name: "testtest",
              email: "test@hotmail.com",
              items: 
              [
                  {
                      name: "chips",
                      expirationDate: "2022-05-04"
                  }
              ]
            }
          
        };
      }),
      foo: "mocked foo",
    };
    
  });
  
  test('Should get a expired item', async () => {
      const item = await getitems();
      expect(item.itemsFound).toBe(true);
  });
  
