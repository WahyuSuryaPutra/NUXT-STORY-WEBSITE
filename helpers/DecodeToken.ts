import {jwtDecode} from "jwt-decode";
import Cookies from "js-cookie";
export const decodeToken = () => {
    const token = Cookies.get('token');
    if (token) {
        return jwtDecode(token);
    } else {
        // Handle the case where the token is not found (e.g., return null)
        return null;  // Or throw an error, redirect to login, etc.
    }
}