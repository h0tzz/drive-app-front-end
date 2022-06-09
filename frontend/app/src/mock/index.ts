export const tripsMock = {
  data: [
    {
      id: 13,
      type: 'trips',
      capacity: 4,
      departure_date: '2022-06-04 00:00:00',
      arrival_date: '2022-06-04 00:00:00',
      price: 100,
      created_at: '2022-06-04T00:00:00.000000Z',
      updated_at: '2022-06-04T01:01:37.000000Z',
      relationships: {
        users: {
          id: 1,
          type: 'users',
          name: 'Yurii',
          email: 'dev@halt.ga',
        },
        places: {
          data: [
            {
              id: 1,
              type: 'places',
              title: 'Cherkasske, Tank',
              order: 1,
            },
            {
              id: 2,
              type: 'places',
              title: 'Dnipro, Most',
              order: 2,
            },
          ],
        },
      },
    },
    {
      id: 14,
      type: 'trips',
      capacity: 4,
      departure_date: '2022-06-04 00:00:00',
      arrival_date: '2022-06-04 00:00:00',
      price: 88,
      created_at: '2022-06-04T00:00:00.000000Z',
      updated_at: '2022-06-04T01:02:02.000000Z',
      relationships: {
        users: {
          id: 1,
          type: 'users',
          name: 'Yurii',
          email: 'dev@halt.ga',
        },
        places: {
          data: [
            {
              id: 1,
              type: 'places',
              title: 'Cherkasske, Tank',
              order: 1,
            },
            {
              id: 2,
              type: 'places',
              title: 'Dnipro, Most',
              order: 2,
            },
          ],
        },
      },
    },
  ],
  meta: { count: 2 },
};
