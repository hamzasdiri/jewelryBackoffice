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
            code: { type: "string", description: "Unique identifier for the article" },
            designation: { type: "string", description: "Title of the article" },
            description: { type: "string", description: "Description of the article" },
            quantity: { type: "integer", description: "Available quantity" },
            price: { type: "number", format: "float", description: "Price of the article" },
            remise: { type: "number", format: "float", description: "Discount on the article" },
            category: { type: "string", description: "Category ID" },
            image: { type: "string", description: "Image URL" },
          },
          required: ["code", "designation", "price", "quantity", "category"],
        },
        Category: {
          type: "object",
          properties: {
            code: { type: "string", description: "Unique category identifier" },
            description: { type: "string", description: "Category description" },
          },
          required: ["code"],
        },
        Client: {
          type: "object",
          properties: {
            firstName: { type: "string", description: "First name" },
            lastName: { type: "string", description: "Last name" },
            email: { type: "string", format: "email", description: "Email address" },
            phone: { type: "string", description: "Phone number" },
            address1: { type: "string", description: "Primary address" },
            address2: { type: "string", description: "Secondary address" },
            city: { type: "string", description: "City" },
            country: { type: "string", description: "Country" },
          },
          required: ["firstName", "lastName", "email", "phone"],
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
                  quantity: { type: "integer", description: "Product quantity" },
                  unitPrice: { type: "number", format: "float", description: "Unit price" },
                  amount: { type: "number", format: "float", description: "Total price" },
                },
                required: ["productId", "quantity", "unitPrice"],
              },
            },
            totalAmount: { type: "number", format: "float", description: "Total invoice amount" },
          },
          required: ["orderId", "products", "totalAmount"],
        },
        Supplier: {
          type: "object",
          properties: {
            firstName: { type: "string", description: "First name" },
            lastName: { type: "string", description: "Last name" },
            email: { type: "string", format: "email", description: "Email address" },
            phone: { type: "string", description: "Phone number" },
            address1: { type: "string", description: "Primary address" },
            address2: { type: "string", description: "Secondary address" },
            city: { type: "string", description: "City" },
            country: { type: "string", description: "Country" },
          },
          required: ["firstName", "lastName", "email", "phone"],
        },
        Expedition: {
          type: "object",
          properties: {
            _id: { type: "integer", description: "Expedition ID (Custom numeric ID)" },
            nom: { type: "string", description: "Shipping name" },
            frais: { type: "number", description: "Shipping cost", minimum: 0 },
          },
          required: ["_id", "nom", "frais"],
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerDocs;
