import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dotenv from 'dotenv';

Enzyme.configure({
    adapter: new Adapter()
})
//non viene letto...non so perche... quindi devo fare import ogni volta di queste linee di comando in ogni test file...

Dotenv.config( { path:'.env.test' } );



//non viene letto...non so perche... quindi devo fare import ogni volta di queste linee di comando in ogni test file...