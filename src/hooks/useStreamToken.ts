import { useGenerateStreamTokenMutation } from "@/graphql/generated/graphql";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { useCurrent } from "./useCurrent";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

export const useStreamToken = (channelId: string) => {
    const [token, setToken] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [identity, setIdentity] = useState<string>("");

    const { isAuthenticated } = useAuth();
    const { user } = useCurrent();

    const [generateStreamToken, { loading }] = useGenerateStreamTokenMutation({
        onCompleted: (data) => {
            const viewerToken = data.generateStreamToken.token;
            setToken(viewerToken);
            const decodedToken = jwtDecode(viewerToken) as JwtPayload & { name?: string };
            const name = decodedToken.name;
            const identity = decodedToken.jti;
            if (name) {
                setName(name);
            }
            if (identity) {
                setIdentity(identity);
            }
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    useEffect(() => {
        async function generateToken() {
            const userId = isAuthenticated && user ? user.id : uuidv4();//* if user is authenticated, use their id, otherwise(guest) generate a new uuid
            await generateStreamToken({ variables: { input: { channelId, userId } } });
        }

        //* generate token for success getting data from localstorage
        const timeoutId = setTimeout(generateToken, 1000);

        return () => clearTimeout(timeoutId);
    }, [generateStreamToken, isAuthenticated, user, channelId]);



    return { token, name, identity };
}