import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    searchUser(name)
  }, [name])

  const searchUser = async name => {
    const res = await fetch(`https://api.github.com/users/${name}`)
    const data = await res.json()
    console.log(data)
    setUser(data)
  }

  return (
    <>
      <div className='header'>
        <input
          type='text'
          placeholder='Search Github username'
          className='inp--search'
          onChange={() => setName(name)}
        />
        <button className='btn--search'>Search</button>
      </div>
      <div className='App'>
        <div className='container'>
          <div className='user--img'>
            <img src='#' alt='User Images' />
          </div>

          <div className='user--details'>
            <h1 className='user--login'>{user.login || 'No Name'}</h1>
            <p className='user--email'>{user.email || 'No Email'}</p>

            <p className='user--bio'>
              {user.bio || 'These profile has no bio'}
            </p>

            <p className='user--joined'>
              <strong>{user.created_at || 'Joined 25 Jan 2011'}</strong>
            </p>

            {/* FOLLOWERS */}
            <div className='inner-container'>
              <div className='box'>
                <p>Repos</p>
                <h2>{user.public_repos || 0}</h2>
              </div>
              <div className='box'>
                <p>Followers</p>
                <h2>{user.followers || 0}</h2>
              </div>
              <div className='box'>
                <p>Following</p>
                <h2>{user.following || 0}</h2>
              </div>
            </div>

            {/* MORE INFO */}
            <div className='grid-container'>
              <p className='location'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='location--svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                  />
                </svg>
                {user.location || 'San Francisco'}
              </p>

              <p className='twitter'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='twitter--svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                  />
                </svg>
                {user.twitter_username || 'Not Available'}
              </p>

              <p className='url'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='url--svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
                  />
                </svg>
                {user.url || 'https://api.example.com'}
              </p>

              <p className='company'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='company--svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
                  />
                </svg>
                {user.blog || 'Xoxo pvt ltd'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
