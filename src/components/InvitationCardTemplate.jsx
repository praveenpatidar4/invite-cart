import React from 'react';
import coverImage from '../images/cover-ic1.png' 
import ButtonComponent from './ButtonComponent';
function InvitationCardTemplate({item}) {
  return (
    <div className='ic_invitation_card_items'>
      <div className='ic_invitation_card_img'>
        <div className='ratio ic_img_ratio ratio-9x16'>
          <img src={coverImage} className='img-fluid' alt="invitaion card" width={269}/>
        </div>
        <div className='ic_invitation_card_view'>
          <ButtonComponent>View Details</ButtonComponent>
        </div>
      </div>
      <div className='ic_invitation_card_info'>
        <h6>{item?.name}</h6>
        <p>Just ₹{item?.offer_price} <del>₹{item?.price}</del></p>
      </div>
    </div>
  )
}

export default InvitationCardTemplate
