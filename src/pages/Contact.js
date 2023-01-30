import {NavLink} from 'react-router-dom'
import { NavMenuItem, BigButton } from '../components/Home';
import { FormInfo } from '../components/Check';
const Error = () => {
  return (
    <div style={{textAlign: "center"}}>
      <FormInfo marginTop="30px" className='josefinSans'>This page does not exist!</FormInfo>
        <NavMenuItem>
            <BigButton as={NavLink} to="/" className='bebasNeue'>
                  Contact the system administrator at: canyoureadit@yandex.com 
            </BigButton>
        </NavMenuItem>
    </div>
  );
};
export default Error;