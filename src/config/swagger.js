const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API for managing clients, suppliers, orders, and articles.",
    },
    components: {
      schemas: {
        Article: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "Unique identifier for the article",
            },
            designation: {
              type: "string",
              description: "Title of the article",
            },
            description: {
              type: "string",
              description: "Description of the article",
            },
            quantity: { type: "integer", description: "Available quantity" },
            price: {
              type: "number",
              format: "float",
              description: "Price of the article",
            },
            remise: {
              type: "number",
              format: "float",
              description: "Discount on the article",
            },
            category: { type: "string", description: "Category ID" },
            image: { type: "string", description: "Image URL" },
          },
        },
        Category: {
          type: "object",
          properties: {
            code: { type: "string", description: "Unique category identifier" },
            description: {
              type: "string",
              description: "Category description",
            },
          },
        },
        Client: {
          type: "object",
          properties: {
            firstName: { type: "string", description: "First name" },
            lastName: { type: "string", description: "Last name" },
            email: { type: "string", description: "Email address" },
            phone: { type: "string", description: "Phone number" },
            address1: { type: "string", description: "Primary address" },
            address2: { type: "string", description: "Secondary address" },
            city: { type: "string", description: "City" },
            country: { type: "string", description: "Country" },
          },
        },
        ClientInvoice: {
          type: "object",
          properties: {
            orderId: { type: "string", description: "Linked order ID" },
            products: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  productId: { type: "string", description: "Product ID" },
                  quantity: {
                    type: "integer",
                    description: "Product quantity",
                  },
                  unitPrice: {
                    type: "number",
                    format: "float",
                    description: "Unit price",
                  },
                  amount: {
                    type: "number",
                    format: "float",
                    description: "Total price",
                  },
                },
              },
            },
            totalAmount: {
              type: "number",
              format: "float",
              description: "Total invoice amount",
            },
          },
        },
        ClientOrder: {
          type: "object",
          properties: {
            codeCommande: { type: "string", description: "Order code" },
            dateCommande: {
              type: "string",
              format: "date",
              description: "Order date",
            },
            client: { type: "string", description: "Client ID" },
            expedition: {
              type: "string",
              description: "Expedition ID (Reference to Expedition)",
            },
            noteLivraison: { type: "string", description: "Delivery note" },
            modePaiment: { type: "string", description: "Payment mode" },
            codeSuivi: { type: "string", description: "Tracking code" },
            articles: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  article: { type: "string", description: "Article ID" },
                  quantity: {
                    type: "integer",
                    description: "Quantity ordered",
                  },
                },
              },
            },
            etatCommande: { type: "string", description: "Order status" },
            freeShipping: {
              type: "boolean",
              description: "Indicates if shipping is free",
            },
            total: {
              type: "number",
              description: "Total price of the order",
              minimum: 0,
            },
          },
        },
        Supplier: {
          type: "object",
          properties: {
            firstName: { type: "string", description: "First name" },
            lastName: { type: "string", description: "Last name" },
            email: { type: "string", description: "Email address" },
            phone: { type: "string", description: "Phone number" },
            address1: { type: "string", description: "Primary address" },
            address2: { type: "string", description: "Secondary address" },
            city: { type: "string", description: "City" },
            country: { type: "string", description: "Country" },
          },
        },
        SupplierOrder: {
          type: "object",
          properties: {
            codeCommande: {
              type: "string",
              description: "Supplier order code",
            },
            dateCommande: {
              type: "string",
              format: "date",
              description: "Order date",
            },
            fournisseur: { type: "string", description: "Supplier ID" },
            expedition: {
              type: "string",
              description: "Expedition ID (Reference to Expedition)",
            },
            noteLivraison: { type: "string", description: "Delivery note" },
            modePaiment: { type: "string", description: "Payment mode" },
            codeSuivi: { type: "string", description: "Tracking code" },
            codeArticle: { type: "string", description: "Article code" },
            quantite: { type: "integer", description: "Quantity ordered" },
            prix: {
              type: "number",
              format: "float",
              description: "Unit price",
            },
            total: {
              type: "number",
              format: "float",
              description: "Total amount",
            },
            note: { type: "string", description: "Additional notes" },
          },
        },
        Expedition: {
          type: "object",
          properties: {
            _id: {
              type: "integer",
              description: "Expedition ID (Custom numeric ID)",
            },
            nom: { type: "string", description: "Shipping name" },
            frais: { type: "number", description: "Shipping cost", minimum: 0 },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerDocs;
