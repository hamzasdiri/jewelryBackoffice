const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API for managing clients, suppliers, orders, expeditions, and articles.",
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
        ClientOrder: {
          type: "object",
          properties: {
            clientId: { type: "string", description: "ID of the client placing the order" },
            products: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  articleId: { type: "string", description: "ID of the article ordered" },
                  quantity: { type: "integer", description: "Quantity ordered" },
                  price: { type: "number", format: "float", description: "Price per unit" },
                  total: { type: "number", format: "float", description: "Total price" },
                },
                required: ["articleId", "quantity", "price"],
              },
            },
            expedition: {
              type: "object",
              properties: {
                _id: { type: "string", description: "Expedition ID (or created if missing)" },
                nom: { type: "string", description: "Shipping name" },
                frais: { type: "number", description: "Shipping cost", minimum: 0 },
              },
            },
            totalAmount: { type: "number", format: "float", description: "Total order amount" },
            status: { type: "string", enum: ["Pending", "Shipped", "Delivered"], description: "Order status" },
          },
          required: ["clientId", "products", "totalAmount", "status"],
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
        SupplierOrder: {
          type: "object",
          properties: {
            codeCommande: { type: "string", description: "Unique supplier order code" },
            dateCommande: { type: "string", format: "date", description: "Order date" },
            fournisseur: {
              type: "object",
              properties: {
                _id: { type: "string", description: "Supplier ID (or created if missing)" },
                nom: { type: "string", description: "Supplier name" },
                adresse: { type: "string", description: "Supplier address" },
                contact: { type: "string", description: "Supplier contact" },
              },
            },
            articles: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  article: { type: "string", description: "Article ID" },
                  quantity: { type: "integer", description: "Quantity ordered" },
                },
                required: ["article", "quantity"],
              },
            },
            etatCommande: { type: "string", enum: ["Pending", "Received", "Cancelled"], description: "Order status" },
            total: { type: "number", format: "float", description: "Total order cost" },
          },
          required: ["codeCommande", "dateCommande", "fournisseur", "articles", "etatCommande", "total"],
        },
        Expedition: {
          type: "object",
          properties: {
            _id: { type: "string", description: "Expedition ID (Generated if missing)" },
            nom: { type: "string", description: "Shipping name" },
            frais: { type: "number", format: "float", description: "Shipping cost", minimum: 0 },
          },
          required: ["nom", "frais"],
        },
      },
    },
  },
  apis: ["./src/routes/*.js"], // Ensure routes have proper Swagger comments
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerDocs;
