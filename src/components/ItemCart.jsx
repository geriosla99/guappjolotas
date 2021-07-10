import React from 'react'
import { ContainerItem, ImageItem, DescriptionItem, TitleItem, QuantityItem, SubtotalItem, GroupItem, DeleteIcon, ItemDeleteContainer} from './list-items-cart/ListItemsCartStyles'

const ItemCart = ({item, setShowModal, setDatamodal, setCartState, setActive}) => {

    const handleClick = () => {
        setDatamodal(item)
        setShowModal(true);
    }

    const handleDeleteItem = (flavor) =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.total = 0;
        cart.quantity = 0;
        cart.items.forEach((element, index, array) => {
            if (element.flavor === flavor) {
                array.splice(index,1);
            }           
            cart.total += element.subtotal;
            cart.quantity += element.quantity;
        });
        if(!cart.items.length){
            setActive(false);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartState(cart);
    }

    return (
        <ItemDeleteContainer>
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
            <SubtotalItem>{item.subtotal} MXN 
            </SubtotalItem>
        </ContainerItem>
        <DeleteIcon onClick={()=>handleDeleteItem(item.flavor)} className="bi bi-x-circle"></DeleteIcon>
        </ItemDeleteContainer>
    )
}

export default ItemCart
