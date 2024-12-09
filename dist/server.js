"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const userResolver_1 = require("./resolver/userResolver");
const userSchema_1 = require("./schema/userSchema");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
new db_1.Db().db("mongodb://localhost:27017/dev");
app.use(express_1.default.json());
const resolvers = (0, merge_graphql_schemas_1.mergeResolvers)([userResolver_1.userResolver]);
const refDef = (0, merge_graphql_schemas_1.mergeTypes)([userSchema_1.userSchema]);
const server = new apollo_server_express_1.ApolloServer({
    resolvers: resolvers,
    typeDefs: refDef
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    server.applyMiddleware({ app });
    app.listen(5000, () => {
        console.log(`🚀 Server ready at http://localhost:${5000}${server.graphqlPath}`);
    });
});


startServer().catch((error) => {
    console.error('Failed to start server', error);
});
