import { Routes, Route } from 'react-router-dom'

import { APlayer } from "aplayer-react";
import "aplayer-react/dist/index.css";

import AllMeetupPage from '@/pages/AllMeetup'
import NewMeetupPage from '@/pages/NewMeetup'
import FavoritesPage from '@/pages/Favorites'
import Layout from '@/components/layout/Layout';

function App() {


  return (
    <>

      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupPage />} />
          <Route path='/new' element={<NewMeetupPage />} />
          <Route path='/favor' element={<FavoritesPage />} />
        </Routes>
      </Layout>

      {/* <APlayer
        audio={{
          name: "Dancing with my phone",
          artist: "HYBS",
          url: "https://music.163.com/song/media/outer/url?id=4884207",
        }}
        autoPlay={false}
      /> */}
    </>
  )
}

export default App
