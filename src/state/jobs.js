const job = {
  id: 'Jdm4X9wm',
  objective: 'Mid-Level Ruby on Rails + React Developer',
  type: 'full-time-employment',
  organizations: [
    {
      id: 482366,
      name: 'Planet Argon',
      picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1602909816/origin/bio/organizations/mcfeie2fkfnkyvdtusy0.png',
    },
  ],
  locations: [
    'United States',
  ],
  remote: true,
  external: false,
  deadline: '2020-11-22T04:30:00.000Z',
  status: 'open',
  compensation: {
    data: {
      code: 'range',
      currency: 'USD$',
      minAmount: 60000.0,
      maxAmount: 90000.0,
      periodicity: 'yearly',
    },
    visible: true,
  },
  skills: [
    {
      name: 'Ruby on Rails',
      experience: '3-plus-years',
    },
    {
      name: 'Software engineering',
      experience: '3-plus-years',
    },
    {
      name: 'SQL Database',
      experience: '3-plus-years',
    },
  ],
  members: [
    {
      subjectId: '144637',
      name: 'Yuliana Velasquez Ramírez',
      username: 'yulianavelasquezr',
      professionalHeadline: 'Independent Recruiter Advisor.',
      picture: 'https://starrgate.s3.amazonaws.com:443/users/da4a2c2dc317fc852cc4a59a943b2fc44d87e2a1/profile_rbJ9Jmm.jpg',
      member: true,
      manager: true,
      poster: true,
      weight: 613.849,
    },
    {
      subjectId: null,
      name: 'Robby Russell',
      username: '9f4d9750-946b-4e98-909e-f53bb0cc5578',
      professionalHeadline: 'CEO',
      picture: 'https://torre-media.s3-us-west-2.amazonaws.com/RobbyRussell.jpg',
      member: true,
      manager: false,
      poster: false,
      weight: 0.0,
    },
  ],
  questions: [],
  context: {
    signaled: [],
  },
  _meta: {
    rank: 1.0,
    scorer: {
      '@type': 'and',
      score: 0.9253048780487805,
      and: [
        {
          '@type': 'and',
          score: 0.925,
          and: [
            {
              '@type': 'and',
              score: 1.0,
              and: [
                {
                  '@type': 'concrete',
                  id: 'skill',
                  input: {
                    criteria: {
                      skills: [
                        'ruby on rails',
                      ],
                    },
                    opportunity: {
                      skills: [
                        'Ruby on Rails',
                        'Software engineering',
                        'SQL Database',
                      ],
                    },
                  },
                  score: 1.0,
                },
                {
                  '@type': 'concrete',
                  id: 'experience',
                  input: {
                    criteria: {
                      experiences: {
                        'ruby on rails': 0.0,
                      },
                    },
                    opportunity: {
                      experiences: {
                        'Ruby on Rails': 36.0,
                        'Software engineering': 36.0,
                        'SQL Database': 36.0,
                      },
                    },
                  },
                  score: 1.0,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Mid-Level Ruby on Rails + React Developer',
                },
              },
              score: 0.85,
            },
          ],
        },
        {
          '@type': 'concrete',
          id: 'completion',
          input: {
            criteria: null,
            opportunity: {
              completion: 0.9375,
            },
          },
          score: 0.9375,
        },
      ],
    },
    filter: {
      '@type': 'or',
      pass: true,
      or: [
        {
          '@type': 'and',
          pass: true,
          and: [
            {
              '@type': 'concrete',
              pass: true,
              id: 'skill',
              input: {
                criteria: {
                  skills: [
                    'ruby on rails',
                  ],
                },
                opportunity: {
                  skills: [
                    'Ruby on Rails',
                    'Software engineering',
                    'SQL Database',
                  ],
                },
              },
            },
            {
              '@type': 'concrete',
              pass: true,
              id: 'experience',
              input: {
                criteria: {
                  experiences: {
                    'ruby on rails': 0.0,
                  },
                },
                opportunity: {
                  experiences: {
                    'Ruby on Rails': 36.0,
                    'Software engineering': 36.0,
                    'SQL Database': 36.0,
                  },
                },
              },
            },
          ],
        },
        {
          '@type': 'concrete',
          pass: true,
          id: 'role',
          input: {
            criteria: {
              role: 'ruby on rails',
            },
            opportunity: {
              role: 'Mid-Level Ruby on Rails + React Developer',
            },
          },
        },
      ],
    },
    boosters: [
      'status',
      'internal',
    ],
  },
};

export default job;
