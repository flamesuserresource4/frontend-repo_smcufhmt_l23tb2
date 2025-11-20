import React from 'react'
import { Footer, GridSection, Hero, Navbar, PackageCard, DestinationCard, SearchBar } from '../components/UI'

export default function Home(){
  return (
    <div className="bg-sand-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <Hero />
      <SearchBar />
      <GridSection title="Popular Destinations">
        <DestinationCard title="Cairo" rating="4.8" img="https://images.unsplash.com/photo-1582653291997-079a1c05bafc?q=80&w=1470&auto=format&fit=crop"/>
        <DestinationCard title="Giza" rating="4.9" img="https://images.unsplash.com/photo-1589670724998-b217ed3a3fba?q=80&w=1470&auto=format&fit=crop"/>
        <DestinationCard title="Luxor" rating="4.7" img="https://images.unsplash.com/photo-1580634157390-8b335e4135ec?q=80&w=1470&auto=format&fit=crop"/>
        <DestinationCard title="Aswan" rating="4.6" img="https://images.unsplash.com/photo-1590341328207-030be4ea0d36?q=80&w=1470&auto=format&fit=crop"/>
      </GridSection>
      <GridSection title="Featured Packages">
        {Array.from({length:4}).map((_,i)=> <PackageCard key={i} />)}
      </GridSection>
      <Footer />
    </div>
  )
}
