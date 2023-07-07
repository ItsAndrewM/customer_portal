import { RedirectToSignIn, SignedIn, SignedOut, UserButton, currentUser } from "@clerk/nextjs";
import { encode } from "base-64";

const getUsers = async (email) => {
    const response = await fetch(`https://pslcustomerportal.net/wp-json/wp/v2/users/?search=${email}`, {
        method: "GET",
        headers: new Headers({
            "Authorization": "Basic " + encode("admin" + ":" + "SQm(v*s5jKB@b2UNK8LLaPM$"),
            "Content-Type": "application/json"
        }),
    });
    return response.json();
}

const Page = async () => {
    const user = await currentUser();

    if (!user) { return <div>Not logged in</div> }
    else {

        const userInfo = await getUsers(user.emailAddresses[0].emailAddress)
        console.log(userInfo)
    }
    // if (user) console.log(users)

    return (
        <>
            <SignedIn>
                <div>
                    <UserButton afterSignOutUrl="/" />
                    Hello, {user?.firstName ? user?.firstName : user?.emailAddresses[0].emailAddress}

                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}

export default Page;