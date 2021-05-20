import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const Loading = ({className}) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress && <div className={className}>
            <Loader type="ThreeDots" color="#d5d5d5" height="100" width="100" />
        </div>
    );
}
 
export default Loading;