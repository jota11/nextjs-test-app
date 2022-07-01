export class API {
    static APIMessages = {
        405: "Method Not Allowed",
        422: "Unprocessable Entity"
    }
}

export const navLinks = [
    {
        title: "/users",
        description: "Users Display",
        path: "/users"
    },
    {
        title: "/users/[ID]",
        description: "User Profile",
        path: "/users/10"
    },
    {
        title: "/api/users",
        description: "Methods: GET — POST",
        path: "/api/users"
    },
    {
        title: "/api/users/[ID]",
        description: "Methods: GET — DELETE — PATCH",
        path: "/api/users/10"
    },
    {
        title: "/api/users/[ID]/posts",
        description: "Methods: GET",
        path: "/api/users/10/posts"
    },
    {
        title: "/api/posts",
        description: "Methods: GET — POST",
        path: "/api/posts"
    },
    {
        title: "/api/posts/[ID]",
        description: "Methods: GET — DELETE — PATCH",
        path: "/api/posts/1"
    }
];