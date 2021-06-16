import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component.jsx'
import './preview-collection.styles.scss'

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'> {
items.filter((item, index) => index < 4).map(({id, ...items}) => (
            <CollectionItem key={id} { ...items }></CollectionItem>
))}

        </div>
    </div>
)

export default PreviewCollection;