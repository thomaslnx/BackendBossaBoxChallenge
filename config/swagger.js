'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  specUrl: '/swagger.json',

  options: {
    swaggerDefinition: {
      info: {
        // title: 'Adonis 💘 Swagger',
        title: 'Backend Documentation for backend Bossabox Challenge',
        version: '1.0.0',
        description: 'Backend documentation using Swagger',
        contact: {
          email: 'marcos.msilva10@gmail.com'
        }
      },

      basePath: '/',

      // Example security definitions.
      securityDefinitions: {
        ApiKey: {
          description: 'ApiKey description',
          name: 'Authorization'
        },

        // OAuth2 configuration
        OAuth2: {
          authorizationUrl: 'https://example.com/oauth/authorize',
          tokenUrl: 'https://example.com/oauth/token',

          // define your scopes here
          // remove read, write and admin if not necessary
          scopes: {
            read: 'Grants read access (this is just sample)',
            write: 'Grants write access (this is just sample)',
            admin: 'Grants read and write access to administrative information (this is just sample)'
          }
        }
      },
      paths: {
        '/users': {
          post: {
            summary: 'Create a User',
            tags: [
              'user'
            ],
            operationId: 'createUser',
            description: 'Name of the user',
            parameters: [
              {
                name: 'body',
                in: 'body',
                description: 'Create a user with body data',
                required: true,
                schema: {
                  properties: {
                    username: {
                      type: 'string',
                      example: 'user'
                    },
                    email: {
                      type: 'string',
                      example: 'user@example.com'
                    },
                    password: {
                      type: 'string',
                      example: '123123123'
                    }
                  }
                }
              }
            ],
            produces: [
              'application/json'
            ],
            responses: {
              201: {
                description: 'User created successfuly',
                schema: {
                  properties: {
                    id: {
                      type: 'integer',
                      example: 6
                    },
                    username: {
                      type: 'string',
                      example: 'marcos'
                    },
                    email: {
                      type: 'string',
                      example: 'marcos@example.com'
                    }
                  }
                }
              },
              400: {
                description: 'User already exist',
                schema: {
                  properties: {
                    error: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          },
          get: {
            summary: 'List all Users',
            tags: [
              'user'
            ],
            operationId: 'ListAllUsers',
            consumes: [
              'application/json'
            ],
            produces: [
              'application/json'
            ],
            responses: {
              200: {
                description: 'Ok',
                schema: {
                  properties: {
                    id: {
                      type: 'integer',
                      example: 5
                    },
                    name: {
                      type: 'string',
                      example: 'marcos'
                    },
                    email: {
                      type: 'string',
                      example: 'marcos@example.com'
                    }
                  }
                }
              }
            }
          }
        },
        '/users/{id}': {
          delete: {
            tags: [
              'user'
            ],
            summary: 'Delete a user from database based on his id',
            operationId: 'DeleteUser',
            parameters: [
              {
                name: 'id',
                in: 'path',
                description: 'Delete a user from a database',
                schema: {
                  properties: {
                    id: {
                      type: 'integer',
                      example: 6
                    }
                  }
                }
              }
            ],
            responses: {
              204: {
                description: 'User was delete successfuly'
              }
            }
          },
          put: {
            tags: [
              'user'
            ],
            summary: 'Update a user from database based on his id',
            operationId: 'UpdateUser',
            consumes: [
              'application/json'
            ],
            produces: [
              'application/json'
            ],
            parameters: [
              {
                in: 'path',
                name: 'id',
                description: 'Id to update a user',
                required: true
              },
              {
                in: 'body',
                name: 'request body',
                description: 'Users data to update',
                required: false,
                schema: {
                  properties: {
                    username: {
                      type: 'string',
                      example: 'marcos'
                    },
                    email: {
                      type: 'string',
                      example: 'marcos@example.com'
                    },
                    password: {
                      type: 'string',
                      example: '123123123'
                    }
                  }
                }
              }
            ],
            responses: {
              200: {
                description: 'User updated successfuly',
                schema: {
                  properties: {
                    id: {
                      type: 'integer',
                      example: 1
                    },
                    name: {
                      type: 'string',
                      example: 'luisa'
                    },
                    email: {
                      type: 'string',
                      example: 'marcos@example.com'
                    }
                  }
                }
              }
            }
          }
        }

      }
    },

    // Path to the API docs
    // Sample usage
    // apis: [
    //    'docs/**/*.yml',    // load recursive all .yml file in docs directory
    //    'docs/**/*.js',     // load recursive all .js file in docs directory
    // ]
    apis: [
      'app/**/*.js',
      'start/routes.js'
    ]
  }
}
