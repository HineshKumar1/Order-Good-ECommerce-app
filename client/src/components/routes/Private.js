import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from 'react-router-dom';
import axios from "axios";
import { Flex, Spin } from 'antd';

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}/user/user-auth`, {
                    headers: {
                        Authorization: auth.token,
                    },
                });
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Error while checking authentication:", error);
                setOk(false);
            }
        };

        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);

    return ok ? <Outlet /> :  <Spin size="large" />;
}
