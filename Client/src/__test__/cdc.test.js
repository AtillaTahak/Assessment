import { todoPost,todoAction } from '../redux/todo/index';
const path = require('path')
import { pactWith } from 'jest-pact';

const Post = { title:'test pact'};


pactWith({consumer: 'Server', provider:'Client', log: path.resolve(process.cwd(), "logs", "pact.log"),   dir: path.resolve(process.cwd(), "pacts"),port: 5001}, provider =>{
    
    describe('post endpoint',()=>{

        beforeEach(()=>
            provider.setup().then(resolve =>resolve.addInteraction({
                uponReceiving:'Request for add todo',
                withRequest:{
                    method:'POST',
                    path:'/posts',
                    body:Post,
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json;'
                    }
                }
            })))
        test('send request add for todo ', async() => {
            await todoPost(TODO.title)
            .then(reponse=>expect(reponse.data).toHaveProperty('title','test pact'))
            
        })
    });
    describe('get endpoint',()=>{
        beforeEach(()=>
        provider.addInteraction({
            uponReceiving:'Request for get todo items',
            withRequest:{
                status:'GET',
                path: '/posts'
            }
        }))
        test('send a request for get todo items', async()=>{
            await todoAction(provider.mockService.baseUrl)
            .then((response)=>
            expect(response.data[0]).toHaveProperty('title','first todo')
            )
        })
    })


});

