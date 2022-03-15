import useHandleResponse from '../Utilities/handle-response';
import authHeader from '../Utilities/auth-header';
import { useSnackbar } from 'notistack';

export function useGetUsers() {
    const { enqueueSnackbar } = useSnackbar();
    const handleResponse = useHandleResponse();
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    const getUsers = () => {
        return fetch(
            `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api/users`,
            requestOptions
        )
            .then(handleResponse)
            .catch(() =>
                enqueueSnackbar('Could not load Users', {
                    variant: 'error',
                })
            );
    };

    return getUsers;
}
