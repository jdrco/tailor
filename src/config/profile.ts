import { ProfileConfig } from '@/types';

export const profileConfig: ProfileConfig = {
  inputContent: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            marks: [
              {
                type: 'italic',
              },
            ],
            text: 'Example: past internship experience',
            type: 'text',
          },
        ],
      },
      {
        type: 'bulletList',
        content: [
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Developed a web app',
                    type: 'text',
                  },
                ],
              },
              {
                type: 'bulletList',
                content: [
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            text: 'Utilized HTML and CSS for styling',
                            type: 'text',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            text: 'Developed a backend API with Spring Boot (Java)',
                            type: 'text',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'listItem',
                    content: [
                      {
                        type: 'paragraph',
                        content: [
                          {
                            text: 'Used object-oriented programming principles',
                            type: 'text',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'listItem',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Translated business requirements to actionable Jira tickets',
                    type: 'text',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
      },
    ],
  },
  targetContent: {
    content: [
      {
        type: 'paragraph',
        content: [
          {
            marks: [
              {
                type: 'italic',
              },
            ],
            text: 'Example: a job description',
            type: 'text',
          },
        ],
      },
      {
        type: 'blockquote',
        content: [
          {
            type: 'paragraph',
            content: [
              {
                text: 'Strong object-oriented design skills, coupled with a deep knowledge of data structures and algorithms',
                type: 'text',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Proficiency in one or more of the following developer skills: Java, C/C++, PHP, Python, Ruby, Unix, MySQL, Clojure, Scala, Java Script, CSS, HTML5',
                type: 'text',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Experience with web frameworks such as AngularJS, NodeJS, SproutCore',
                type: 'text',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Client-Server protocol & API design Skills',
                type: 'text',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Able to craft multi-functional requirements and translate them into practical engineering tasks',
                type: 'text',
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
      },
    ],
    type: 'doc',
  },
};
