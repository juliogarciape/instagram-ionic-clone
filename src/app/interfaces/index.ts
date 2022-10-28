export interface Photosresponse {
    id:                       string;
    created_at:               Date;
    updated_at:               Date;
    promoted_at:              Date;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              null | string;
    alt_description:          null;
    urls:                     Urls;
    links:                    PhotosresponseLinks;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              null;
    topic_submissions:        TopicSubmissions;
    user:                     User;
    exif:                     Exif;
    location:                 Location;
    views:                    number;
    downloads:                number;
}

export interface Exif {
    make:          null | string;
    model:         null | string;
    name:          null | string;
    exposure_time: null | string;
    aperture:      null | string;
    focal_length:  null | string;
    iso:           number | null;
}

export interface PhotosresponseLinks {
    self:              string;
    html:              string;
    download:          string;
    download_location: string;
}

export interface Location {
    name:     null | string;
    city:     null | string;
    country:  null | string;
    position: Position;
}

export interface Position {
    latitude:  number | null;
    longitude: number | null;
}

export interface TopicSubmissions {
    interiors?:            The3_DRenders;
    "food-drink"?:         The3_DRenders;
    nature?:               The3_DRenders;
    wallpapers?:           The3_DRenders;
    fashion?:              Fashion;
    "street-photography"?: Fashion;
    people?:               Fashion;
    "3d-renders"?:         The3_DRenders;
    experimental?:         The3_DRenders;
}

export interface The3_DRenders {
    status:      string;
    approved_on: Date;
}

export interface Fashion {
    status: string;
}

export interface Urls {
    raw:      string;
    full:     string;
    regular:  string;
    small:    string;
    thumb:    string;
    small_s3: string;
}

export interface User {
    id:                 string;
    updated_at:         Date;
    username:           string;
    name:               string;
    first_name:         string;
    last_name:          string;
    twitter_username:   null | string;
    portfolio_url:      null | string;
    bio:                null | string;
    location:           null | string;
    links:              UserLinks;
    profile_image:      ProfileImage;
    instagram_username: null | string;
    total_collections:  number;
    total_likes:        number;
    total_photos:       number;
    accepted_tos:       boolean;
    for_hire:           boolean;
    social:             Social;
}

export interface UserLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}

export interface Social {
    instagram_username: null | string;
    portfolio_url:      null | string;
    twitter_username:   null | string;
    paypal_email:       null;
}
