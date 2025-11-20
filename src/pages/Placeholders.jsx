import React from 'react'
import { Container, Card, Skeleton, Table, Button, Input, Select, Modal } from '../components/UI'

export function PlaceholderList({ title }){
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({length:6}).map((_,i)=> (
          <Card key={i} className="p-4 space-y-4">
            <Skeleton className="h-40" />
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex gap-2"><Skeleton className="h-10 w-24"/><Skeleton className="h-10 w-24"/></div>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export function PlaceholderDetail({ title }){
  return (
    <Container className="py-10">
      <div className="grid md:grid-cols-2 gap-6">
        <Skeleton className="h-72" />
        <div className="space-y-3">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
          <div className="flex gap-2"><Skeleton className="h-10 w-24"/><Skeleton className="h-10 w-24"/></div>
        </div>
      </div>
    </Container>
  )
}

export function PlaceholderForm({ title }){
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <Card className="p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input placeholder="Full name" />
          <Input placeholder="Email" />
          <Select><option>Country</option></Select>
          <Input placeholder="Phone" />
        </div>
        <div className="flex gap-2"><Button>Submit</Button><Button variant="secondary">Cancel</Button></div>
      </Card>
    </Container>
  )
}

export function PlaceholderTable({ title }){
  const columns=[{key:'name',label:'Name'},{key:'status',label:'Status'},{key:'date',label:'Updated'}]
  const rows=Array.from({length:6}).map((_,i)=> ({name:`Item ${i+1}`, status: 'Active', date: '2025-01-01'}))
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <Card className="p-4">
        <Table columns={columns} rows={rows} />
      </Card>
    </Container>
  )
}
