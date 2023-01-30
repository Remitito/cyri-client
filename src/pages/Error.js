import {NavLink} from 'react-router-dom'
import { NavMenuItem, BigButton } from '../components/HomeStyle';
import { FormInfo } from '../components/CheckStyle';
const Error = () => {
  return (
    <div style={{textAlign: "center"}}>
      <FormInfo marginTop="30px" className="kanit">This page does not exist!</FormInfo>
        <NavMenuItem>
            <BigButton as={NavLink} to="/" className='bebasNeue'>
                  Back to Home Page
            </BigButton>
        </NavMenuItem>
    </div>
  );
};
export default Error;