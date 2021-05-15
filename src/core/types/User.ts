export type User = {
    public_repos: number;
    avatar_url: string;
    html_url: string;
    company: string;
    blog: string;
    location: string;
    followers: number;
    following: number;
    created_at: string;
}

export type UserResponse = {
    content: User;
}