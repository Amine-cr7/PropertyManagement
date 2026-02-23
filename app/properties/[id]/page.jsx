import React from 'react'

export default async function  PropertyDetailsPage({params}) {
    const {id} = await params;
  return (
    <div>PropertyDetailsPage {id}</div>
  )
}
