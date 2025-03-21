import {Button} from "@mantine/core";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {authUrls} from "@/features/auth/urls";

export function HeaderAuthSection() {
    const session = useSession();

    if (!session.data) {
        return (<>
            <Link href={authUrls.login}><Button variant="default">Log in</Button></Link>
            <Link href={authUrls.register}><Button>Sign up</Button></Link>
        </>)
    }

    return (<>Hello, {session.data.account.userName}</>);
}