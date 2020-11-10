const jobs = {
  aggregators: {},
  offset: 0,
  results: [
    {
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
    },
    {
      id: 'JWO31nWQ',
      objective: 'Ruby on Rails Sr Engineer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 518703,
          name: 'Zipdev',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1600922820/origin/bio/organizations/Zipdev_v8fneu.jpg',
        },
      ],
      locations: [
        'Mexico',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-15T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 2900.0,
          maxAmount: 9700.0,
          periodicity: 'monthly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby on Rails',
          experience: '3-plus-years',
        },
        {
          name: 'SQL',
          experience: '3-plus-years',
        },
        {
          name: 'Node.js',
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
          weight: 625.8484,
        },
        {
          subjectId: null,
          name: 'Daniel Altenburg',
          username: 'f14680da-944f-4ac9-a119-b1049021ee2c',
          professionalHeadline: 'Co-Founder',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/See_Daniel_Altenburg_at_Startup_Grind_Ensenada',
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
        rank: 2.0,
        scorer: {
          '@type': 'and',
          score: 0.9222560975609756,
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
                            'SQL',
                            'Node.js',
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
                            SQL: 36.0,
                            'Node.js': 36.0,
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
                      role: 'Ruby on Rails Sr Engineer',
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
                  completion: 0.8125,
                },
              },
              score: 0.8125,
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
                        'SQL',
                        'Node.js',
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
                        SQL: 36.0,
                        'Node.js': 36.0,
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
                  role: 'Ruby on Rails Sr Engineer',
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
    },
    {
      id: 'NrJv1YrD',
      objective: 'Ruby on Rails Developer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 463999,
          name: 'Student beans',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Studentbeans.png',
        },
      ],
      locations: [
        'United Kingdom',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-13T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'EUR€',
          minAmount: 35000.0,
          maxAmount: 45000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby on Rails',
          experience: '1-plus-year',
        },
        {
          name: 'MySQL',
          experience: '1-plus-year',
        },
        {
          name: 'Programming Languages',
          experience: '1-plus-year',
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
          name: 'Mark Walker',
          username: 'd35af29e-6f7e-4c13-95eb-995fd6abaa63',
          professionalHeadline: 'CRO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/MarkWalker.jfif',
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
        rank: 3.0,
        scorer: {
          '@type': 'and',
          score: 0.9207317073170732,
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
                            'MySQL',
                            'Programming Languages',
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
                            'Ruby on Rails': 12.0,
                            MySQL: 12.0,
                            'Programming Languages': 12.0,
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
                      role: 'Ruby on Rails Developer',
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
                  completion: 0.75,
                },
              },
              score: 0.75,
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
                        'MySQL',
                        'Programming Languages',
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
                        'Ruby on Rails': 12.0,
                        MySQL: 12.0,
                        'Programming Languages': 12.0,
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
                  role: 'Ruby on Rails Developer',
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
    },
    {
      id: 'Vro3Lpry',
      objective: 'Senior Ruby on Rails Engineer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 483840,
          name: 'Slice Macedonia',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1603408157/origin/bio/organizations/rdlfce7jgqenmsh3jaz8.jpg',
        },
      ],
      locations: [
        'Macedonia',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-12T04:30:00.000Z',
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
          experience: '5-plus-years',
        },
        {
          name: 'Software development',
          experience: '5-plus-years',
        },
        {
          name: 'MySQL',
          experience: '5-plus-years',
        },
      ],
      members: [
        {
          subjectId: '220890',
          name: 'Manuela Vargas Jaramillo',
          username: 'mavaja0229',
          professionalHeadline: 'Independent Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/412e0b4173afac862c445c7e81dbb553469a081a/profile_1ob72Mv.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Ilir Sela',
          username: '98f92249-377b-4543-ac40-e3aa3807c806',
          professionalHeadline: null,
          picture: null,
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
        rank: 4.0,
        scorer: {
          '@type': 'and',
          score: 0.9192073170731707,
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
                            'Software development',
                            'MySQL',
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
                            'Ruby on Rails': 60.0,
                            'Software development': 60.0,
                            MySQL: 60.0,
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
                      role: 'Senior Ruby on Rails Engineer',
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
                  completion: 0.6875,
                },
              },
              score: 0.6875,
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
                        'Software development',
                        'MySQL',
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
                        'Ruby on Rails': 60.0,
                        'Software development': 60.0,
                        MySQL: 60.0,
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
                  role: 'Senior Ruby on Rails Engineer',
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
    },
    {
      id: 'lr4PBNr2',
      objective: 'Senior Back-end / Ruby on Rails Developer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 475176,
          name: 'Iubenda',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1601512260/origin/bio/organizations/iubenda_rrbakj.png',
        },
      ],
      locations: [
        'Italy',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-18T05:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 87000.0,
          maxAmount: 182000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Backend',
          experience: '5-plus-years',
        },
        {
          name: 'Software development',
          experience: '5-plus-years',
        },
        {
          name: 'Ruby on Rails',
          experience: '5-plus-years',
        },
      ],
      members: [
        {
          subjectId: '220920',
          name: 'Sara Urrea',
          username: 'saraurrea',
          professionalHeadline: 'Independient Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/71a79fb89138007815ea4a7de6bae667aa5dbc2c/profile_u2hT6s9.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Andrea Giannangelo',
          username: '157e1c1f-1fd1-4634-9260-e562be8a6a8a',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Andrea+Giannangelo.jpg',
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
        rank: 4.0,
        scorer: {
          '@type': 'and',
          score: 0.9192073170731707,
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
                            'Backend',
                            'Software development',
                            'Ruby on Rails',
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
                            Backend: 60.0,
                            'Software development': 60.0,
                            'Ruby on Rails': 60.0,
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
                      role: 'Senior Back-end / Ruby on Rails Developer',
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
                  completion: 0.6875,
                },
              },
              score: 0.6875,
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
                        'Backend',
                        'Software development',
                        'Ruby on Rails',
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
                        Backend: 60.0,
                        'Software development': 60.0,
                        'Ruby on Rails': 60.0,
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
                  role: 'Senior Back-end / Ruby on Rails Developer',
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
    },
    {
      id: 'VroJPvdy',
      objective: 'Experienced Developer: Ruby on Rails, React Native And/Or React.js',
      type: 'full-time-employment',
      organizations: [
        {
          id: 482590,
          name: 'ShowMojo',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1600918020/origin/bio/organizations/ShowMojo_nvqxlg.png',
        },
      ],
      locations: [],
      remote: true,
      external: false,
      deadline: '2020-11-22T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 50000.0,
          maxAmount: 90000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby on Rails',
          experience: '1-plus-year',
        },
        {
          name: 'Software development',
          experience: '1-plus-year',
        },
        {
          name: 'Javascript',
          experience: '1-plus-year',
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
          name: 'Peter Schuh',
          username: 'd254e5d3-7c84-4a78-bf86-3d1b32b00f3e',
          professionalHeadline: null,
          picture: null,
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
        rank: 4.0,
        scorer: {
          '@type': 'and',
          score: 0.9192073170731707,
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
                            'Software development',
                            'Javascript',
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
                            'Ruby on Rails': 12.0,
                            'Software development': 12.0,
                            Javascript: 12.0,
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
                      role: 'Experienced Developer: Ruby on Rails, React Native And/Or React.js',
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
                  completion: 0.6875,
                },
              },
              score: 0.6875,
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
                        'Software development',
                        'Javascript',
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
                        'Ruby on Rails': 12.0,
                        'Software development': 12.0,
                        Javascript: 12.0,
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
                  role: 'Experienced Developer: Ruby on Rails, React Native And/Or React.js',
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
    },
    {
      id: '8W39jadN',
      objective: 'Full Stack Ruby on Rails',
      type: 'full-time-employment',
      organizations: [
        {
          id: 518315,
          name: 'Autonomic Mind',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1601512260/origin/bio/organizations/logo_autonomic_mind_wqz6vy.jpg',
        },
      ],
      locations: [
        'Medellín, Antioquia, Colombia',
      ],
      remote: false,
      external: false,
      deadline: '2020-11-26T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'COP$',
          minAmount: 3000000.0,
          maxAmount: 1.2E7,
          periodicity: 'monthly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby on Rails',
          experience: '2-plus-years',
        },
        {
          name: 'Javascript',
          experience: '2-plus-years',
        },
        {
          name: 'React',
          experience: '2-plus-years',
        },
        {
          name: 'Angular',
          experience: '2-plus-years',
        },
      ],
      members: [
        {
          subjectId: '39744',
          name: 'Luis Felipe Gomez Noy',
          username: 'luisfgomeznoy',
          professionalHeadline: 'Comercio internacional y finanzas',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/be602965d347a49ae963135065349c7386ba0022/profile_KjXuVjl.jpg',
          member: false,
          manager: true,
          poster: false,
          weight: 72.2136,
        },
        {
          subjectId: '50406',
          name: 'Diana Montoya',
          username: 'diana_cujer',
          professionalHeadline: 'Customer Success at Torre',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/329b49768e033b6550863462bfb9f3e5c2d12639/profile_mYTcFmi.jpg',
          member: false,
          manager: true,
          poster: false,
          weight: 1266.5876,
        },
        {
          subjectId: '578963',
          name: 'Maria Velez',
          username: 'talent43',
          professionalHeadline: 'IT Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/6e94ce753e4188ad7e49142c63d75e334d204418/profile_aLFKjoG.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: '621774',
          name: 'Maria Jose Gomez Noy',
          username: 'majonoy',
          professionalHeadline: 'Fashion Designer',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/d4546538de9d196bea4d901e7691c90b92432fa1/profile_XSJmeu3.JPG',
          member: false,
          manager: true,
          poster: false,
          weight: 0.0,
        },
      ],
      questions: [],
      context: {
        signaled: [],
      },
      _meta: {
        rank: 7.0,
        scorer: {
          '@type': 'and',
          score: 0.9161585365853658,
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
                            'Javascript',
                            'React',
                            'Angular',
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
                            'Ruby on Rails': 24.0,
                            Javascript: 24.0,
                            React: 24.0,
                            Angular: 24.0,
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
                      role: 'Full Stack Ruby on Rails',
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
                  completion: 0.5625,
                },
              },
              score: 0.5625,
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
                        'Javascript',
                        'React',
                        'Angular',
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
                        'Ruby on Rails': 24.0,
                        Javascript: 24.0,
                        React: 24.0,
                        Angular: 24.0,
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
                  role: 'Full Stack Ruby on Rails',
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
    },
    {
      id: '6WZE9Ar1',
      objective: 'Software Engineer, Ruby + Rails (Remote)',
      type: 'full-time-employment',
      organizations: [
        {
          id: 505404,
          name: 'Red Canary',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Red+Canary.jpg',
        },
      ],
      locations: [
        'United States',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-19T04:30:00.000Z',
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
          name: 'Software development',
          experience: '1-plus-year',
        },
        {
          name: 'Ruby on Rails',
          experience: '1-plus-year',
        },
        {
          name: 'Javascript',
          experience: '1-plus-year',
        },
      ],
      members: [
        {
          subjectId: '220890',
          name: 'Manuela Vargas Jaramillo',
          username: 'mavaja0229',
          professionalHeadline: 'Independent Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/412e0b4173afac862c445c7e81dbb553469a081a/profile_1ob72Mv.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Brian Beyer',
          username: '9a976da7-8e36-41fb-b887-e1ba55045011',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Brian+Beyer.jpg',
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
        rank: 8.0,
        scorer: {
          '@type': 'and',
          score: 0.8426829268292683,
          and: [
            {
              '@type': 'and',
              score: 0.845,
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
                            'Software development',
                            'Ruby on Rails',
                            'Javascript',
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
                            'Software development': 12.0,
                            'Ruby on Rails': 12.0,
                            Javascript: 12.0,
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
                      role: 'Software Engineer, Ruby + Rails (Remote)',
                    },
                  },
                  score: 0.69,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.75,
                },
              },
              score: 0.75,
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
                        'Software development',
                        'Ruby on Rails',
                        'Javascript',
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
                        'Software development': 12.0,
                        'Ruby on Rails': 12.0,
                        Javascript: 12.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Software Engineer, Ruby + Rails (Remote)',
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
    },
    {
      id: 'GdjoGyrj',
      objective: 'Senior Ruby Developer (Remote Option)',
      type: 'full-time-employment',
      organizations: [
        {
          id: 497053,
          name: 'Clio',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1600929900/origin/bio/organizations/Clio_nnd9pu.jpg',
        },
      ],
      locations: [
        'Canada',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-24T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 78000.0,
          maxAmount: 150000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby on Rails',
          experience: '5-plus-years',
        },
        {
          name: 'TypeScript',
          experience: '5-plus-years',
        },
        {
          name: 'React',
          experience: '5-plus-years',
        },
        {
          name: 'Software development',
          experience: '5-plus-years',
        },
      ],
      members: [
        {
          subjectId: '219073',
          name: 'Mariajosé Gómez',
          username: 'mariajgomezg1',
          professionalHeadline: 'Independent recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/1cdf6057e2ce1359eecd943e3f78b670e3e9a49f/profile_RO5e3cU.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Jack Newton',
          username: '99cd64e3-f0af-4aae-8922-9787119713ea',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Jack+Newton.jpg',
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
        rank: 9.0,
        scorer: {
          '@type': 'and',
          score: 0.7335365853658536,
          and: [
            {
              '@type': 'and',
              score: 0.73,
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
                            'TypeScript',
                            'React',
                            'Software development',
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
                            'Ruby on Rails': 60.0,
                            TypeScript: 60.0,
                            React: 60.0,
                            'Software development': 60.0,
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
                      role: 'Senior Ruby Developer (Remote Option)',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.875,
                },
              },
              score: 0.875,
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
                        'TypeScript',
                        'React',
                        'Software development',
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
                        'Ruby on Rails': 60.0,
                        TypeScript: 60.0,
                        React: 60.0,
                        'Software development': 60.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Senior Ruby Developer (Remote Option)',
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
    },
    {
      id: 'JWO3n6WQ',
      objective: 'Senior Full Stack Ruby Developer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 482875,
          name: 'Vynyl',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Vynyl+logo.jpg',
        },
      ],
      locations: [
        'United States',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-16T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 60000.0,
          maxAmount: 100000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby on Rails',
          experience: '5-plus-years',
        },
        {
          name: 'Full Stack developer',
          experience: '5-plus-years',
        },
        {
          name: 'Software development',
          experience: '5-plus-years',
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
          name: 'Ian Harris',
          username: '83ebc8fb-9a7d-41a8-a174-cf946b4a156d',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/IanHarris.jpg',
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
        rank: 10.0,
        scorer: {
          '@type': 'and',
          score: 0.7304878048780488,
          and: [
            {
              '@type': 'and',
              score: 0.73,
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
                            'Full Stack developer',
                            'Software development',
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
                            'Ruby on Rails': 60.0,
                            'Full Stack developer': 60.0,
                            'Software development': 60.0,
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
                      role: 'Senior Full Stack Ruby Developer',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.75,
                },
              },
              score: 0.75,
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
                        'Full Stack developer',
                        'Software development',
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
                        'Ruby on Rails': 60.0,
                        'Full Stack developer': 60.0,
                        'Software development': 60.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Senior Full Stack Ruby Developer',
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
    },
    {
      id: 'Gdjol1rj',
      objective: 'Senior Ruby Developer | Remote (EUROPE)',
      type: 'full-time-employment',
      organizations: [
        {
          id: 478206,
          name: 'Gatekeeper',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Gatekeeper.png',
        },
      ],
      locations: [],
      remote: true,
      external: false,
      deadline: '2020-11-20T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 48000.0,
          maxAmount: 78000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'overall',
          experience: '10-plus-years',
        },
        {
          name: 'Ruby on Rails',
          experience: '10-plus-years',
        },
        {
          name: 'SQL',
          experience: '10-plus-years',
        },
        {
          name: 'Front-end',
          experience: '10-plus-years',
        },
      ],
      members: [
        {
          subjectId: '46223',
          name: 'Brallan Mendoza',
          username: 'brallanmendozadelgado',
          professionalHeadline: 'Independent Recruiter Advisor',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/0f55d09bfee0a04fca2c004d206b226b7b089b7a/profile_zxhMVOh.jpg',
          member: false,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Patrick OConnor',
          username: '985d4faa-5a87-4e83-91c0-3706f6dba1fc',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Gatekeeper_Blog__Patrick_OConnor',
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
        rank: 11.0,
        scorer: {
          '@type': 'and',
          score: 0.7274390243902439,
          and: [
            {
              '@type': 'and',
              score: 0.73,
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
                            'overall',
                            'Ruby on Rails',
                            'SQL',
                            'Front-end',
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
                            overall: 120.0,
                            'Ruby on Rails': 120.0,
                            SQL: 120.0,
                            'Front-end': 120.0,
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
                      role: 'Senior Ruby Developer | Remote (EUROPE)',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.625,
                },
              },
              score: 0.625,
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
                        'overall',
                        'Ruby on Rails',
                        'SQL',
                        'Front-end',
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
                        overall: 120.0,
                        'Ruby on Rails': 120.0,
                        SQL: 120.0,
                        'Front-end': 120.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Senior Ruby Developer | Remote (EUROPE)',
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
    },
    {
      id: 'JWOkg6WQ',
      objective: 'Senior Full Stack Ruby Developer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 482875,
          name: 'Vynyl',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Vynyl+logo.jpg',
        },
      ],
      locations: [
        'United States',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-22T05:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 58000.0,
          maxAmount: 107000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Full Stack Development',
          experience: '5-plus-years',
        },
        {
          name: 'Ruby on Rails',
          experience: '5-plus-years',
        },
        {
          name: 'Computer science',
          experience: '5-plus-years',
        },
      ],
      members: [
        {
          subjectId: '220920',
          name: 'Sara Urrea',
          username: 'saraurrea',
          professionalHeadline: 'Independient Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/71a79fb89138007815ea4a7de6bae667aa5dbc2c/profile_u2hT6s9.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Ian Harris',
          username: '83ebc8fb-9a7d-41a8-a174-cf946b4a156d',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/IanHarris.jpg',
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
        rank: 11.0,
        scorer: {
          '@type': 'and',
          score: 0.7274390243902439,
          and: [
            {
              '@type': 'and',
              score: 0.73,
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
                            'Full Stack Development',
                            'Ruby on Rails',
                            'Computer science',
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
                            'Full Stack Development': 60.0,
                            'Ruby on Rails': 60.0,
                            'Computer science': 60.0,
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
                      role: 'Senior Full Stack Ruby Developer',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.625,
                },
              },
              score: 0.625,
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
                        'Full Stack Development',
                        'Ruby on Rails',
                        'Computer science',
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
                        'Full Stack Development': 60.0,
                        'Ruby on Rails': 60.0,
                        'Computer science': 60.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Senior Full Stack Ruby Developer',
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
    },
    {
      id: '8wD0a6wl',
      objective: 'Software Engineer, Internal',
      type: 'full-time-employment',
      organizations: [
        {
          id: 518937,
          name: 'ReCharge Payments',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/ReCharge+Payments.png',
        },
      ],
      locations: [
        'United States',
      ],
      remote: true,
      external: false,
      deadline: '2020-12-05T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 80000.0,
          maxAmount: 150000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'API',
          experience: '5-plus-years',
        },
        {
          name: 'Python',
          experience: '5-plus-years',
        },
        {
          name: 'AWS',
          experience: '5-plus-years',
        },
        {
          name: 'Ruby',
          experience: '5-plus-years',
        },
      ],
      members: [
        {
          subjectId: '219073',
          name: 'Mariajosé Gómez',
          username: 'mariajgomezg1',
          professionalHeadline: 'Independent recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/1cdf6057e2ce1359eecd943e3f78b670e3e9a49f/profile_RO5e3cU.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Mike Flynn',
          username: '7c853b24-8ae2-4c50-8f97-a49e45bdccda',
          professionalHeadline: 'Co-Founder & CTO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Mike+Flynn.png',
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
        rank: 13.0,
        scorer: {
          '@type': 'and',
          score: 0.7165509390243903,
          and: [
            {
              '@type': 'and',
              score: 0.7157147125,
              and: [
                {
                  '@type': 'and',
                  score: 0.9514294249999999,
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
                            'API',
                            'Python',
                            'AWS',
                            'Ruby',
                          ],
                        },
                      },
                      score: 0.90285885,
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
                            API: 60.0,
                            Python: 60.0,
                            AWS: 60.0,
                            Ruby: 60.0,
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
                      role: 'Software Engineer, Internal',
                    },
                  },
                  score: 0.48,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.75,
                },
              },
              score: 0.75,
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
                        'API',
                        'Python',
                        'AWS',
                        'Ruby',
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
                        API: 60.0,
                        Python: 60.0,
                        AWS: 60.0,
                        Ruby: 60.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Software Engineer, Internal',
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
    },
    {
      id: '2W14oVrq',
      objective: 'MTS- Cloud Integration Engineer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 460537,
          name: 'NUTANIX',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Nutanix.jpg',
        },
      ],
      locations: [],
      remote: true,
      external: false,
      deadline: '2020-11-12T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 15.0,
          maxAmount: 35.0,
          periodicity: 'hourly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Software development',
          experience: '5-plus-years',
        },
        {
          name: 'Python',
          experience: '5-plus-years',
        },
        {
          name: 'Ruby',
          experience: '5-plus-years',
        },
      ],
      members: [
        {
          subjectId: '220890',
          name: 'Manuela Vargas Jaramillo',
          username: 'mavaja0229',
          professionalHeadline: 'Independent Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/412e0b4173afac862c445c7e81dbb553469a081a/profile_1ob72Mv.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Dheeraj Pandey',
          username: 'd507c427-6cea-4a1c-a6f2-a67944a4a06a',
          professionalHeadline: 'Chairman & CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Dheeraj+Pandey.jpg',
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
        rank: 14.0,
        scorer: {
          '@type': 'and',
          score: 0.708319231707317,
          and: [
            {
              '@type': 'and',
              score: 0.7057147125,
              and: [
                {
                  '@type': 'and',
                  score: 0.9514294249999999,
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
                            'Software development',
                            'Python',
                            'Ruby',
                          ],
                        },
                      },
                      score: 0.90285885,
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
                            'Software development': 60.0,
                            Python: 60.0,
                            Ruby: 60.0,
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
                      role: 'MTS- Cloud Integration Engineer',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.8125,
                },
              },
              score: 0.8125,
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
                        'Software development',
                        'Python',
                        'Ruby',
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
                        'Software development': 60.0,
                        Python: 60.0,
                        Ruby: 60.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'MTS- Cloud Integration Engineer',
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
    },
    {
      id: 'JWOkoXWQ',
      objective: 'Ruby Engineer',
      type: 'full-time-employment',
      organizations: [
        {
          id: 480810,
          name: 'Shogun',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Shogun.png',
        },
      ],
      locations: [
        'United States',
        'Canada',
        'United Kingdom',
        'Russia',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-21T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 40000.0,
          maxAmount: 70000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby',
          experience: '3-plus-years',
        },
        {
          name: 'Software engineering',
          experience: '3-plus-years',
        },
        {
          name: 'NoSQL',
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
          name: 'Finbarr Taylor',
          username: '4c1a2580-4314-4d92-ba69-992aef991d82',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Finbarr+Taylor.jpeg',
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
        rank: 14.0,
        scorer: {
          '@type': 'and',
          score: 0.708319231707317,
          and: [
            {
              '@type': 'and',
              score: 0.7057147125,
              and: [
                {
                  '@type': 'and',
                  score: 0.9514294249999999,
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
                            'Ruby',
                            'Software engineering',
                            'NoSQL',
                          ],
                        },
                      },
                      score: 0.90285885,
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
                            Ruby: 36.0,
                            'Software engineering': 36.0,
                            NoSQL: 36.0,
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
                      role: 'Ruby Engineer',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.8125,
                },
              },
              score: 0.8125,
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
                        'Ruby',
                        'Software engineering',
                        'NoSQL',
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
                        Ruby: 36.0,
                        'Software engineering': 36.0,
                        NoSQL: 36.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Ruby Engineer',
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
    },
    {
      id: 'VWYkZEdN',
      objective: 'Senior Rails Engineer (Contract)',
      type: 'full-time-employment',
      organizations: [
        {
          id: 482570,
          name: 'LegalNature',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/LegalNature.png',
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
          minAmount: 95000.0,
          maxAmount: 105000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Rails',
          experience: '3-plus-years',
        },
        {
          name: 'Software development',
          experience: '3-plus-years',
        },
        {
          name: 'automating',
          experience: '3-plus-years',
        },
      ],
      members: [
        {
          subjectId: '220890',
          name: 'Manuela Vargas Jaramillo',
          username: 'mavaja0229',
          professionalHeadline: 'Independent Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/412e0b4173afac862c445c7e81dbb553469a081a/profile_1ob72Mv.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Corey Bray',
          username: '3e07613d-de10-4e89-9776-4d1652b69aa3',
          professionalHeadline: 'CEO & Founder',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Corey+Bray.jpg',
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
        rank: 16.0,
        scorer: {
          '@type': 'and',
          score: 0.7052704951219513,
          and: [
            {
              '@type': 'and',
              score: 0.7057147575,
              and: [
                {
                  '@type': 'and',
                  score: 0.9514295150000001,
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
                            'Rails',
                            'Software development',
                            'automating',
                          ],
                        },
                      },
                      score: 0.90285903,
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
                            Rails: 36.0,
                            'Software development': 36.0,
                            automating: 36.0,
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
                      role: 'Senior Rails Engineer (Contract)',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.6875,
                },
              },
              score: 0.6875,
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
                        'Rails',
                        'Software development',
                        'automating',
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
                        Rails: 36.0,
                        'Software development': 36.0,
                        automating: 36.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Senior Rails Engineer (Contract)',
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
    },
    {
      id: 'Prl3Jldk',
      objective: 'Senior Software Engineer, Operations',
      type: 'full-time-employment',
      organizations: [
        {
          id: 503334,
          name: 'The RealReal',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/The+RealReal.png',
        },
      ],
      locations: [
        'United States',
      ],
      remote: true,
      external: false,
      deadline: '2020-12-03T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 120000.0,
          maxAmount: 165000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Software development',
          experience: '3-plus-years',
        },
        {
          name: 'Ruby',
          experience: '3-plus-years',
        },
        {
          name: 'HTML5',
          experience: '3-plus-years',
        },
      ],
      members: [
        {
          subjectId: '220890',
          name: 'Manuela Vargas Jaramillo',
          username: 'mavaja0229',
          professionalHeadline: 'Independent Recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/412e0b4173afac862c445c7e81dbb553469a081a/profile_1ob72Mv.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Rati Sahi Levesque',
          username: '28d626a2-5986-441c-8aa0-69e3c7d89b15',
          professionalHeadline: 'Chief Operating Officer',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Rati+Sahi+Levesque.jfif',
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
        rank: 17.0,
        scorer: {
          '@type': 'and',
          score: 0.7052704512195122,
          and: [
            {
              '@type': 'and',
              score: 0.7057147125,
              and: [
                {
                  '@type': 'and',
                  score: 0.9514294249999999,
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
                            'Software development',
                            'Ruby',
                            'HTML5',
                          ],
                        },
                      },
                      score: 0.90285885,
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
                            'Software development': 36.0,
                            Ruby: 36.0,
                            HTML5: 36.0,
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
                      role: 'Senior Software Engineer, Operations',
                    },
                  },
                  score: 0.46,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.6875,
                },
              },
              score: 0.6875,
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
                        'Software development',
                        'Ruby',
                        'HTML5',
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
                        'Software development': 36.0,
                        Ruby: 36.0,
                        HTML5: 36.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Senior Software Engineer, Operations',
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
    },
    {
      id: '6WZjkOW1',
      objective: 'Experienced Software Developers',
      type: 'full-time-employment',
      organizations: [
        {
          id: 482875,
          name: 'Vynyl',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Vynyl+logo.jpg',
        },
      ],
      locations: [
        'United States',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-16T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 110000.0,
          maxAmount: 160000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Software development',
          experience: '2-plus-years',
        },
        {
          name: 'Python',
          experience: '2-plus-years',
        },
        {
          name: 'Ruby on Rails',
          experience: '2-plus-years',
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
          name: 'Ian Harris',
          username: '83ebc8fb-9a7d-41a8-a174-cf946b4a156d',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/IanHarris.jpg',
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
        rank: 18.0,
        scorer: {
          '@type': 'and',
          score: 0.6945121951219512,
          and: [
            {
              '@type': 'and',
              score: 0.69,
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
                            'Software development',
                            'Python',
                            'Ruby on Rails',
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
                            'Software development': 24.0,
                            Python: 24.0,
                            'Ruby on Rails': 24.0,
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
                      role: 'Experienced Software Developers',
                    },
                  },
                  score: 0.38,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.875,
                },
              },
              score: 0.875,
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
                        'Software development',
                        'Python',
                        'Ruby on Rails',
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
                        'Software development': 24.0,
                        Python: 24.0,
                        'Ruby on Rails': 24.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Experienced Software Developers',
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
    },
    {
      id: 'PW97oldg',
      objective: 'Ruby Developer (Remote Option)',
      type: 'full-time-employment',
      organizations: [
        {
          id: 497053,
          name: 'Clio',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1600929900/origin/bio/organizations/Clio_nnd9pu.jpg',
        },
      ],
      locations: [
        'Canada',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-24T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 130000.0,
          maxAmount: 150000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Ruby',
          experience: '1-plus-year',
        },
        {
          name: 'Ruby on Rails',
          experience: '1-plus-year',
        },
        {
          name: 'TypeScript',
          experience: '1-plus-year',
        },
        {
          name: 'Software development',
          experience: '1-plus-year',
        },
      ],
      members: [
        {
          subjectId: '219073',
          name: 'Mariajosé Gómez',
          username: 'mariajgomezg1',
          professionalHeadline: 'Independent recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/1cdf6057e2ce1359eecd943e3f78b670e3e9a49f/profile_RO5e3cU.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Jack Newton',
          username: '99cd64e3-f0af-4aae-8922-9787119713ea',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Jack+Newton.jpg',
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
        rank: 18.0,
        scorer: {
          '@type': 'and',
          score: 0.6945121951219512,
          and: [
            {
              '@type': 'and',
              score: 0.69,
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
                            'Ruby',
                            'Ruby on Rails',
                            'TypeScript',
                            'Software development',
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
                            Ruby: 12.0,
                            'Ruby on Rails': 12.0,
                            TypeScript: 12.0,
                            'Software development': 12.0,
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
                      role: 'Ruby Developer (Remote Option)',
                    },
                  },
                  score: 0.38,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.875,
                },
              },
              score: 0.875,
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
                        'Ruby',
                        'Ruby on Rails',
                        'TypeScript',
                        'Software development',
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
                        Ruby: 12.0,
                        'Ruby on Rails': 12.0,
                        TypeScript: 12.0,
                        'Software development': 12.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Ruby Developer (Remote Option)',
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
    },
    {
      id: 'ZW28eNd7',
      objective: 'Software Developer, Application Security (Remote Option)',
      type: 'full-time-employment',
      organizations: [
        {
          id: 497053,
          name: 'Clio',
          picture: 'https://res.cloudinary.com/torre-technologies-co/image/upload/v1600929900/origin/bio/organizations/Clio_nnd9pu.jpg',
        },
      ],
      locations: [
        'Canada',
      ],
      remote: true,
      external: false,
      deadline: '2020-11-24T04:30:00.000Z',
      status: 'open',
      compensation: {
        data: {
          code: 'range',
          currency: 'USD$',
          minAmount: 90000.0,
          maxAmount: 120000.0,
          periodicity: 'yearly',
        },
        visible: true,
      },
      skills: [
        {
          name: 'Software developer',
          experience: '1-plus-year',
        },
        {
          name: 'Software development',
          experience: '1-plus-year',
        },
        {
          name: 'Ruby on Rails',
          experience: '1-plus-year',
        },
        {
          name: 'React Native',
          experience: '1-plus-year',
        },
      ],
      members: [
        {
          subjectId: '219073',
          name: 'Mariajosé Gómez',
          username: 'mariajgomezg1',
          professionalHeadline: 'Independent recruiter',
          picture: 'https://starrgate.s3.amazonaws.com:443/users/1cdf6057e2ce1359eecd943e3f78b670e3e9a49f/profile_RO5e3cU.jpg',
          member: true,
          manager: true,
          poster: true,
          weight: 0.0,
        },
        {
          subjectId: null,
          name: 'Jack Newton',
          username: '99cd64e3-f0af-4aae-8922-9787119713ea',
          professionalHeadline: 'CEO',
          picture: 'https://torre-media.s3-us-west-2.amazonaws.com/Jack+Newton.jpg',
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
        rank: 20.0,
        scorer: {
          '@type': 'and',
          score: 0.6914634146341463,
          and: [
            {
              '@type': 'and',
              score: 0.69,
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
                            'Software developer',
                            'Software development',
                            'Ruby on Rails',
                            'React Native',
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
                            'Software developer': 12.0,
                            'Software development': 12.0,
                            'Ruby on Rails': 12.0,
                            'React Native': 12.0,
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
                      role: 'Software Developer, Application Security (Remote Option)',
                    },
                  },
                  score: 0.38,
                },
              ],
            },
            {
              '@type': 'concrete',
              id: 'completion',
              input: {
                criteria: null,
                opportunity: {
                  completion: 0.75,
                },
              },
              score: 0.75,
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
                        'Software developer',
                        'Software development',
                        'Ruby on Rails',
                        'React Native',
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
                        'Software developer': 12.0,
                        'Software development': 12.0,
                        'Ruby on Rails': 12.0,
                        'React Native': 12.0,
                      },
                    },
                  },
                },
              ],
            },
            {
              '@type': 'concrete',
              pass: false,
              id: 'role',
              input: {
                criteria: {
                  role: 'ruby on rails',
                },
                opportunity: {
                  role: 'Software Developer, Application Security (Remote Option)',
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
    },
  ],
  size: 20,
  total: 878,
};

export default jobs;
