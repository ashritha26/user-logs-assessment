export interface IUser {
    name: string;
    avatar: string; 
    id: number;
    occupation: string;
}

export interface IUserData {
    userInfo: IUser;
    revenue: number;
    conversions: number;
    impressions: number;
    filteredLog: []
}