import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'modules/auth/selector';

export const getToken = async (): Promise<void> => {
    const user = useSelector(selectUser);
    console.log("token",await user?.getIdToken())
};
const Succeed: React.FC = () =>{
    getToken().then();
    return(<div>Sign in Succeed.</div>);
}

export default Succeed;
