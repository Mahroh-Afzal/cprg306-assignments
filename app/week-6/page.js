"use client";
import React from 'react';
import ItemList from './item-list';
export default function Page() {
return (
<main>
<h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'orange' }}>Shopping List</h1>

<ItemList />
</main>
);
}