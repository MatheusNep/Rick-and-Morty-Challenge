import React from 'react';
import Cards from '../Components/Cards';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";
import MultSelect from '../Components/MultSelect';
import ShowList from '../Components/List'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const GETCHARACTERS =
  gql`
    query {
      characters{
        results {
          name
          id
          image
        }
      }
    }
  `
  ;

  const GETLOCATIONS = 
   gql`
    query {
      locations{
        results {
          name
          id
          residents{name id}
          dimension
        }
      }
    }
   `
  ;

export function ExchangeQueryCharacters() {
  const { loading, error, data } = useQuery(GETCHARACTERS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Cards bigData={data.characters.results}/>
    </div>    
    )
}

export function ExchangeQueryLocations() {
  const { loading, error, data } = useQuery(GETLOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Cards bigData={data.locations.results}/>
      </div>    
    )
}

export function SelectCharacters({onChange}) {

  const { loading, error, data } = useQuery(GETCHARACTERS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <MultSelect onChange={onChange}  options={data.characters.results}  placeholder="Select a Character"/>
}

export function SelectLocations({onChange}) {

  const { loading, error, data } = useQuery(GETLOCATIONS);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <MultSelect onChange={onChange} options={data.locations.results} placeholder="Select a Location"/>
     
}

export function ExchangeQueryLocationsIDS({ids}) {

  const { loading, error, data } = useQuery(gql`
                                            query {
                                              locationsByIds(ids: [${ids}] ){
                                                name
                                                id
                                              }
                                            }
                                          `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ShowList data={data.locationsByIds}/>
      </div>    
    )
}
export function ExchangeQueryCharactersIDS({ids}) {

  const { loading, error, data } = useQuery(gql`
                                            query {
                                              charactersByIds(ids: [${ids}] ){
                                                name
                                                id
                                                image
                                              }
                                            }
                                          `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ShowList data={data.charactersByIds}/>
      </div>    
    )
}