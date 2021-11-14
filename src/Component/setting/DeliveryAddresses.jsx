import React from 'react'

const DeliveryAddresses = () => {
    return (
        <div className='delivery-addresses'>
            <p> Saved Delivery Addresses </p>
            <span className='span-add'>You currently don't have any saved delivery addresses.
                Add an address here to be pre-filled for quicker checkout.</span><br />
            <button>Add Address</button>
        </div>
    )
}

export default DeliveryAddresses
