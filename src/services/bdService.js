import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('151612') // Your project ID
    //.setKey(process.env.NEXT_PUBLIC_APPWHIT_API_KEY); // Your secret API key

const databases = new Databases(client);



const getDataBase = async () => {
  const result = await databases.listDocuments(
  '160509', // databaseId
  '6716d810001ed71980ed', // collectionId
  [] // queries (optional)
);

return result
}
console.log(getDataBase)
export default getDataBase
/*
map((tenis, index) =>(
        
          <li
            key={index}
          >
            <img
              src={tenis.image}
              alt={tenis.nome}
            />
            <h2>{tenis.nome}</h2>
            <p>Marca: {tenis.marca}</p>
            <p>Preço: ${tenis.preco.toFixed(2)} {console.log(tenis)}</p>
          </li>
        ))}**/