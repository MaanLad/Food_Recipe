import React from 'react'


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
  return (<div>
    <span id='logotext1'>Happy </span>
    <span id='logotext2'>KITCHEN</span>
  </div>
  );
}

function SearchBar(){
  return(
    <div id='searchbar'>
      <i class="fa fa-search" style={{marginRight:"20px"}}></i>
      <form style={{display:"inline"}}>
        <input type='text' id='search' placeholder='Search your cousine here...'/>
      </form>
    </div>
  );
}

function SubDiv1() {
  return (
    <div id='subdiv1'>
      <div id='details'>
        <p style={{ fontFamily: "cursive" }}>RECIPES ONLINE</p>
        <p style={{ fontFamily: "cursive", fontSize: "75px", fontWeight: "bold", letterSpacing: "0.5px", marginTop: "-20px" }}>New recipes</p>
        <p style={{ fontFamily: "cursive", fontSize: "75px", fontWeight: "bold", letterSpacing: "0.5px", marginTop: "-100px" }}>every week</p>
        <div style={{ fontFamily: 'Pacifico', letterSpacing: "2px", width: '600px', marginTop: "-60px" }}>Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed in Italy
          since Roman times and later spread around the world together with waves of Italian diaspora.
          </div>
          <SearchBar/>
      </div>
      
    </div>
  );
}
function SubDiv2() {
  return (
    <div id='subdiv2'>

    </div>
  );
}
function MainDiv() {

  
  return (
  
    <div id='maindiv'>
      <SubDiv1 />
      <SubDiv2 />
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

