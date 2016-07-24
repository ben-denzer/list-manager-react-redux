const myList = {
  name: '',
  lists: {
    walmart: [
      {
        item: 'shoes',
        finished: false
      },
      {
        item: 'socks',
        finished: true
      },
      {
        item: 'tools',
        finished: false
      }
    ],
    smiths: [
      {
        item: 'milk',
        finished: false
      },
      {
        item: 'bread',
        finished: true
      },
      {
        item: 'eggs',
        finished: false
      },
      {
        item: 'soda',
        finished: false
      }
    ]
  }
};

class ListApi {
  static loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], myList));
      }, 1500);
    });
  }
}

export default ListApi;
