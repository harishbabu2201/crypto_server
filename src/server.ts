import{ ApolloServer} from 'apollo-server-express'
import express from 'express'
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas'
import { userResolver } from './resolver/userResolver'
import { userSchema } from './schema/userSchema'
import { Db } from './config/db'

const app:any=express()

new Db().db("mongodb://localhost:27017/dev")
app.use(express.json())

const resolvers=mergeResolvers([userResolver])
const refDef=mergeTypes([userSchema])


const server=new ApolloServer({
resolvers:resolvers,
typeDefs:refDef
})


const startServer=async()=>{
    await server.start()
    server.applyMiddleware({app})
    app.listen(5000,()=>{
        console.log(`🚀 Server ready at http://localhost:${5000}${server.graphqlPath}`);
        
    })
}



startServer().catch((error) => {
    console.error('Failed to start server', error);
  });
