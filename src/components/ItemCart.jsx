import React, { useState } from 'react'
import { ContainerItem, ImageItem, DescriptionItem, TitleItem, QuantityItem, SubtotalItem, GroupItem} from './list-items-cart/ListItemsCartStyles'

const ItemCart = ({item, setShowModal, setDatamodal}) => {

    const handleClick = () => {
        setDatamodal(item)
        setShowModal(true);
    }

    return (
        <ContainerItem
            onClick={handleClick}
        >
            <GroupItem>
                <ImageItem 
                    src= {item.image_main}
                />
                <DescriptionItem>
                    <TitleItem>{item.flavor}</TitleItem>
                    <QuantityItem>x{item.quantity}</QuantityItem>
                </DescriptionItem>
            </GroupItem>
            <SubtotalItem>{item.subtotal} MXN</SubtotalItem>
        </ContainerItem>
    )
}

export default ItemCart
