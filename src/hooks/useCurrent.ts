import { useClearSessionCookieMutation, useFindProfileQuery } from "@/graphql/generated/graphql";
import { useAuth } from "./useAuth";
import { useEffect } from "react";

export function useCurrent() {
    const { isAuthenticated, exit } = useAuth();

    const { data, loading, refetch, error } = useFindProfileQuery({
        skip: !isAuthenticated,
    });

    const [clear] = useClearSessionCookieMutation();

    useEffect(() => {
        if (error) {
            if (isAuthenticated) {
                clear();
            }
            exit();
        }
    }, [error, isAuthenticated, clear, exit]);

    return {
        user: data?.getMe,
        isLoadingProfile: loading,
        refetchProfile: refetch,
    };
}