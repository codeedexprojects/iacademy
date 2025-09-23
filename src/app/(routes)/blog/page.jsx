import React from 'react'
import ArticlesHero from './components/ArticlesHero'
import LatestArticles from './components/LatestArticles'

function page() {
  return (
    <div>
      <ArticlesHero></ArticlesHero>
      <LatestArticles></LatestArticles>
    </div>
  )
}

export default page