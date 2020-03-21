export interface PhoneContact {
    id?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    displayName: string;
    thumbnail?: string;
    phoneNumbers?: PhoneContactNumber[];
    isSelected?: boolean;
}

export interface PhoneContactNumber {
    number: string;
    normalizedNumber: string;
    type: string;
}
