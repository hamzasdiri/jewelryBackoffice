// src/config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'API for managing clients, suppliers, orders, and articles.',
      },
      components: {
        schemas: {
          Article: {
            type: 'object',
            properties: {
              code: {
                type: 'string',
                description: 'Unique identifier for the article',
              },
              designation: {
                type: 'string',
                description: 'Designation or title of the article',
              },
              description: {
                type: 'string',
                description: 'Description of the article',
              },
              quantity: {
                type: 'integer',
                description: 'Available quantity of the article',
              },
              price: {
                type: 'number',
                format: 'float',
                description: 'Price of the article',
              },
              remise: {
                type: 'number',
                format: 'float',
                description: 'Discount on the article',
              },
              category: {
                type: 'string',
                description: 'Category ID that the article belongs to',
              },
              image: {
                type: 'string',
                description: 'URL or file path to the image of the article',
              },
            },
          },
          Category: {
            type: 'object',
            properties: {
              code: {
                type: 'string',
                description: 'Unique identifier for the category',
              },
              description: {
                type: 'string',
                description: 'Description of the category',
              },
            },
          },
          Client: {
            type: 'object',
            properties: {
              firstName: {
                type: 'string',
                description: 'First name of the client',
              },
              lastName: {
                type: 'string',
                description: 'Last name of the client',
              },
              email: {
                type: 'string',
                description: 'Email of the client',
              },
              phone: {
                type: 'string',
                description: 'Phone number of the client',
              },
              address1: {
                type: 'string',
                description: 'First address line of the client',
              },
              address2: {
                type: 'string',
                description: 'Second address line of the client',
              },
              city: {
                type: 'string',
                description: 'City of the client',
              },
              country: {
                type: 'string',
                description: 'Country of the client',
              },
            },
          },
          ClientInvoice: {
            type: 'object',
            properties: {
              orderId: {
                type: 'string',
                description: 'Order ID the invoice is linked to',
              },
              products: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    productId: {
                      type: 'string',
                      description: 'ID of the product',
                    },
                    quantity: {
                      type: 'integer',
                      description: 'Quantity of the product',
                    },
                    unitPrice: {
                      type: 'number',
                      format: 'float',
                      description: 'Price per unit of the product',
                    },
                    amount: {
                      type: 'number',
                      format: 'float',
                      description: 'Total amount for the product',
                    },
                  },
                },
              },
              totalAmount: {
                type: 'number',
                format: 'float',
                description: 'Total amount for the invoice',
              },
            },
          },
          ClientOrder: {
            type: 'object',
            properties: {
              codeCommande: {
                type: 'string',
                description: 'Unique code for the client order',
              },
              dateCommande: {
                type: 'string',
                format: 'date',
                description: 'Date of the client order',
              },
              client: {
                type: 'string',
                description: 'Client ID or name for the order',
              },
              expedition: {
                type: 'string',
                description: 'Shipping method for the order',
              },
              noteLivraison: {
                type: 'string',
                description: 'Delivery note for the order',
              },
              modePaiment: {
                type: 'string',
                description: 'Payment method used for the order',
              },
              codeSuivi: {
                type: 'string',
                description: 'Tracking code for the order',
              },
              articles: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    article: {
                      type: 'string',
                      description: 'Article ID from the order',
                    },
                    quantity: {
                      type: 'integer',
                      description: 'Quantity of the article in the order',
                    },
                  },
                },
              },
            },
          },
          Supplier: {
            type: 'object',
            properties: {
              firstName: {
                type: 'string',
                description: 'First name of the supplier',
              },
              lastName: {
                type: 'string',
                description: 'Last name of the supplier',
              },
              email: {
                type: 'string',
                description: 'Email of the supplier',
              },
              phone: {
                type: 'string',
                description: 'Phone number of the supplier',
              },
              address1: {
                type: 'string',
                description: 'First address line of the supplier',
              },
              address2: {
                type: 'string',
                description: 'Second address line of the supplier',
              },
              city: {
                type: 'string',
                description: 'City of the supplier',
              },
              country: {
                type: 'string',
                description: 'Country of the supplier',
              },
            },
          },
          SupplierOrder: {
            type: 'object',
            properties: {
              codeCommande: {
                type: 'string',
                description: 'Unique code for the supplier order',
              },
              dateCommande: {
                type: 'string',
                format: 'date',
                description: 'Date of the supplier order',
              },
              fournisseur: {
                type: 'string',
                description: 'Supplier ID or name for the order',
              },
              expedition: {
                type: 'string',
                description: 'Shipping method for the order',
              },
              noteLivraison: {
                type: 'string',
                description: 'Delivery note for the supplier order',
              },
              modePaiment: {
                type: 'string',
                description: 'Payment method used for the supplier order',
              },
              categories: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    category: {
                      type: 'string',
                      description: 'Category ID the articles belong to',
                    },
                    articles: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          article: {
                            type: 'string',
                            description: 'Article ID in the category',
                          },
                          quantity: {
                            type: 'integer',
                            description: 'Quantity of the article in the order',
                          },
                        },
                      },
                    },
                  },
                },
              },
              note: {
                type: 'string',
                description: 'Additional notes for the supplier order',
              },
            },
          },
        },
      },
    },
    apis: ['./src/routes/*.js'],  // Adjust this path to your actual route files
  };

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;
