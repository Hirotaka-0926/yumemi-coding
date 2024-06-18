import React from 'react';
import {usePrefecture} from '../hook/prefecture';

const CheckBoxlist: React.FC = () => {
    const {prefecture} = usePrefecture();

    if (prefecture.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className="CheckBoxlist">
            {prefecture.map((pref) => (
                <div key = {pref.prefCode}>
                    <input type="checkbox" id={pref.prefCode.toString()}/>
                    <label htmlFor={pref.prefCode.toString()}>{pref.prefName}</label>
                </div>
                
            ))}
        </div>
    );
}

export default CheckBoxlist;
