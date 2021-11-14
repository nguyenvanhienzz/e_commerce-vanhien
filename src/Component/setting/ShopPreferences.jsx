import React from 'react'

const ShopPreferences = () => {
    return (
        <div className='shop-preferences'>
            <p>Shop Preferences</p>
            <fieldset>
                <legend>Shoes Size*</legend>
                <select>
                    <option value='38'>38</option>
                    <option value='39'>39</option>
                    <option value='40'>40</option>
                    <option value='41'>41</option>
                    <option value='42'>42</option>
                </select>
            </fieldset>
            <div className='shop-radio'>
                <div className='shop-settings'>
                    <p>Preferred Shop Settings</p>
                    <label>
                        <input type='radio' name='radio' />
                        <div className='radio-radio'></div>
                        Women's
                    </label><br />
                    <label>
                        <input type='radio' name='radio' />
                        <div className='radio-radio'></div>
                        Men's
                    </label>
                </div>
                <div className='shop-unit'>
                    <p>Unit of Measure</p>
                    <label>
                        <input type='radio' name='unit' />
                        <div className='radio-radio'></div>
                        Metric</label><br />

                    <label >
                        <input type='radio' name='unit' />
                        <div className='radio-radio'></div>
                        Imperial
                    </label>
                </div>
            </div>
            <button>Save</button>
        </div>
    )
}

export default ShopPreferences
