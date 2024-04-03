import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';



function MyNavBar() {
  return (
    <nav className='allnavitem'>
      <WebLogo />
      <div className="navlist">
        <ListItem itemname="Recipes" />
        <ListItem itemname="Ingredient" />
        <ListItem itemname="Gallery" />
        <ListItem itemname="Contact" />
      </div>
    </nav>
  );
}
function ListItem({ itemname }) {
  return (
    <div className='itemdiv'>{itemname}</div>
  );
}
function WebLogo() {
  return (<div id='logotext'>
    <span id='logotext1'>Happy </span>
    <span id='logotext2'>KITCHEN</span>
  </div>
  );
}


function SearchBar({ searchText, setSearchText, setIsSearched }) {

  function onSearchHandler() {
    setIsSearched(true);
  }

  return (
    <div id='searchbar'>
      <i className="fa fa-search" style={{ margin: "10px" }} onClick={onSearchHandler} > Search</i>
      <form style={{ display: "inline" }}>
        <input type='text' id='search' value={searchText} placeholder='Search your cousine here...' onChange={(e) => {
          setSearchText(e.target.value);
        }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSearchHandler();
            }
          }} />
      </form>
    </div>
  );
}
function SubDiv2({responseData, id }) {
  const obj = responseData.filter((element) => {
    return element.id === id
  })
  console.log(obj[0])

  return !(id === '0') ? (
    <div id='subdiv2'>
      <div id='cardDetail'>
        <center><span style={{ fontFamily: "cursive", fontStyle: "italic", fontSize: "20px", fontWeight: "bold" }}>{obj[0].Title}</span></center>
        <p></p>
        <p>
          <motion.div
            variants={{
              hidden: { opacity:0,y:75},
              visible: { opacity:1,y:0}
            }}
            initial='hidden'
            animate='visible'
          >
            {obj[0].Instructions}
          </motion.div>
        </p>
      </div>
    </div>
  ) : (<div id='subdiv2'>
    <div id='cardDetail'>
      <center><span style={{ fontFamily: "cursive", fontStyle: "italic", fontSize: "40px", fontWeight: "bold" }}>Welcome To </span></center>
      <p></p>
      <center><span style={{ fontFamily: "cursive", fontStyle: "italic", fontSize: "40px", fontWeight: "bold" }}>Happy </span></center>
      <p></p>
      <center><span style={{ fontFamily: "cursive", fontStyle: "italic", fontSize: "40px", fontWeight: "bold" }}>Kitchen</span></center>
    </div>
  </div>);


}
function FetchedDataDiv({responseData, setId }) {
  const [loading, setLoading] = useState(false);
  
  useEffect(({searchText,setResponseData}) => {
    const options = {
      method: 'GET',
      url: 'https://food-recipes-with-images.p.rapidapi.com/',
      params: { q: searchText },
      headers: {
        'X-RapidAPI-Key': 'b67eb6a393msh22b6afd8e094928p194c99jsn24df14d6b73c',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
      }
    };
    setLoading(true);
    axios
      .request(options)
      .then((response) => {
        setResponseData(response.data.d);
        setLoading(false);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(searchText)
        console.log(error)
      });
  }, []);
  return <>
    {loading ? (<div className='loader' ></div>) : (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate='visible'
      >
        <div className='cards'>
          {responseData && responseData.map((data) => {
            return (
              <div className='card' key={data.Id} onClick={() => { setId(data.id) }}>
                <div className='imagediv'>
                  <img src={data.Image} alt='' />
                </div>
                <div className='cardpara'>
                  {data.Title}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    )
    }
  </>;
}
function SubDiv1({ searchText, setSearchText, setResponseData, responseData, setId }) {
  const [isSearched, setIsSearched] = useState(false)
  return (
    <div id='subdiv1'>
      {isSearched ? (<FetchedDataDiv setId={setId} searchText={searchText} setResponseData={setResponseData} responseData={responseData} />) :
        (
          <div id='details'>
            <p style={{ fontFamily: "cursive" }}>RECIPES ONLINE</p>
            <p style={{ fontFamily: "cursive", fontSize: "75px", fontWeight: "bold", letterSpacing: "0.5px", marginTop: "-20px" }}>New recipes</p>
            <p style={{ fontFamily: "cursive", fontSize: "75px", fontWeight: "bold", letterSpacing: "0.5px", marginTop: "-100px" }}>every week</p>
            <div style={{ fontFamily: 'Pacifico', letterSpacing: "2px", width: '600px', marginTop: "-60px" }}>Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed in Italy
              since Roman times and later spread around the world together with waves of Italian diaspora.
            </div>
            <SearchBar searchText={searchText} setSearchText={setSearchText} setIsSearched={setIsSearched} />
          </div>)}
    </div>
  );
}

function MainDiv() {
  const [searchText, setSearchText] = useState("")
  const [responseData, setResponseData] = useState([]);
  const [id, setId] = useState("0");

  return (
    <div id='maindiv'>
      <SubDiv1 searchText={searchText} responseData={responseData} setId={setId} setSearchText={setSearchText} setResponseData={setResponseData} />
      <SubDiv2 responseData={responseData} id={id} />
    </div>
  );
}


function MyAppLayOut() {
  return (
    <>
      <body>
        <MyNavBar />
        <MainDiv />
      </body>
    </>
  )
    ;
}

export default function App() {
  return <>
    <MyAppLayOut />
  </>;
}

