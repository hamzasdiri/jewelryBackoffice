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
            codeCommande: { type: "string", description: "Unique order code" },
            dateCommande: { type: "string", format: "date", description: "Order date" },
            clientId: { type: "string", description: "ID of the client placing the order" },
            expedition: {
              type: "object",
              nullable: true,
              properties: {
                _id: { type: "string", description: "Expedition ID (or created if missing)" },
                nom: { type: "string", description: "Shipping name" },
                frais: { type: "number", format: "float", minimum: 0, description: "Shipping cost" },
              },
            },
            noteLivraison: { type: "string", description: "Delivery note" },
            modePaiment: { type: "string", description: "Payment method" },
            codeSuivi: { type: "string", description: "Tracking code" },
            articles: {
              type: "array",
              description: "List of ordered articles",
              items: {
                type: "object",
                properties: {
                  article: { type: "string", description: "ID of the article" },
                  quantity: { type: "number", description: "Quantity of the article" },
                },
              },
            },
            etatCommande: {
              type: "string",
              description: "Order status",
            },
            freeShippings: { type: "boolean", description: "Indicates whether shipping is free" },
          },
          required: ["clientId", "articles", "etatCommande", "freeShippings"],
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
            codeCommande: { type: "string", description: "Unique order code" },
            dateCommande: { type: "string", format: "date", description: "Order date" },
            fournisseur: { type: "string", description: "ID of the supplier" },
            expedition: {
              type: "object",
              properties: {
                _id: { type: "string", description: "Expedition ID" },
                nom: { type: "string", description: "Shipping name" },
                frais: { type: "number", format: "float", minimum: 0, description: "Shipping cost" },
              },
            },
            noteLivraison: { type: "string", description: "Delivery note" },
            modePaiment: { type: "string", description: "Payment method" },
            codeSuivi: { type: "string", description: "Tracking code" },
            codeArticle: { type: "string", description: "Article code" },
            quantite: { type: "number", format: "integer", minimum: 1, description: "Quantity of the article" },
            prix: { type: "number", format: "float", description: "Unit price of the article" },
            total: { type: "number", format: "float", description: "Total price of the order" },
            note: { type: "string", description: "Additional notes" },
          },
          required: ["codeCommande", "dateCommande", "fournisseur", "expedition", "modePaiment", "codeSuivi", "codeArticle", "quantite", "prix", "total"],
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
