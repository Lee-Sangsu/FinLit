import { Client, APIErrorCode, ClientErrorCode, isNotionClientError } from "@notionhq/client";

const userDBID:string = "c7b0d7dd50354c63bd1b2269c27b6d03";
// const viewID:string = "128819358e5141d99a5064956b484a18";
const secretKey:string = "secret_FDQ7j64A3jMpPebnD0MmHpzYeY8jG0bZfPals2S4p20";

const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

export async function createUser(userName:string, email:string) {
    try{
        const response = await notion.pages.create({
            parent: {
                database_id: userDBID,
            },
            properties: {
                'First Name' : {
                    type: 'title',
                    title: [{
                        type: 'text',
                        text: {
                            content: userName,
                        },
                    }]
                },
                'uid' : {
                    type: 'rich_text',
                    rich_text: [{
                        type: 'text',
                        text: {
                            content: 'uuid'
                        }
                    }]
                },
                'Email': {
                    type: 'email',
                    email: email
                }
            }
        })
        console.log(response);
    } catch (err:unknown) {
        if (isNotionClientError(err)) {
            // error is now strongly typed to NotionClientError
            console.error(err);
            switch (err.code) {
              case ClientErrorCode.RequestTimeout:
                // ... 
                break
              case APIErrorCode.ObjectNotFound:
                // ...
                break
              case APIErrorCode.Unauthorized:
                // ...
                break
              // ...
              default:
                // you could even take advantage of exhaustiveness checking
                console.error(err.code)
            }
          }
        
    }
}

export async function getUsers() {
    try {
        // const databaseId = 'c7b0d7dd50354c63bd1b2269c27b6d03';
        // const response = await notion.databases.query({
        //     database_id: databaseId,
        // });
        const response = await notion.users.list({});
        console.log(response);
    } catch (e) {console.error(e)};
}