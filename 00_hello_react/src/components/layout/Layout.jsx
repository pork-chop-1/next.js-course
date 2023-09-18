import MainNavigator from "./MainNavigator"

function Layout({children}) {
 return <div style={{display: "flex"}}>
  
  <MainNavigator />
  <main style={{flex: 1}}>
      {children}
    </main>
 </div>
}

export default Layout